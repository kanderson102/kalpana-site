import { NextResponse } from "next/server";
import { Resend } from "resend";
import Airtable from "airtable";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAILS_VAR = process.env.OWNER_EMAILS || "hello@kalpanadigitalmedia.com";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "Kalpana Contact Form <onboarding@resend.dev>";
const OWNER_EMAILS = OWNER_EMAILS_VAR.split(",").map(email => email.trim());

// Airtable Configuration
const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

export async function POST(request: Request) {
    // Debug: Log environment variable presence
    console.log("Config Check:");
    console.log("- RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Set" : "Missing");
    console.log("- OWNER_EMAILS_VAR:", process.env.OWNER_EMAILS ? "Set" : "Using Default/Missing");
    console.log("- OWNER_EMAILS (parsed):", OWNER_EMAILS);
    console.log("- SENDER_EMAIL:", SENDER_EMAIL);
    console.log("- AIRTABLE_PAT:", process.env.AIRTABLE_PAT ? "Set" : "Missing");
    console.log("- AIRTABLE_BASE_ID:", process.env.AIRTABLE_BASE_ID ? "Set" : "Missing");
    console.log("- AIRTABLE_TABLE_NAME:", process.env.AIRTABLE_TABLE_NAME ? "Set" : "Missing");

    try {
        const body = await request.json();
        const { firstName, lastName, email, subject, message } = body;

        // Basic Validation
        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const fullName = lastName ? `${firstName} ${lastName}` : firstName;

        // 1. Send Notification Email to Owner (You) via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: SENDER_EMAIL,
                    to: OWNER_EMAILS,
                    subject: `New Inquiry: ${subject || "General Contact"}`,
                    html: `
                        <h2>New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <br/>
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    `
                });
            } catch (emailError) {
                console.error("Resend Failed:", emailError);
            }
        } else {
            console.warn("RESEND_API_KEY is missing. Email not sent.");
        }


        // 3. Add to Airtable
        if (AIRTABLE_PAT && AIRTABLE_BASE_ID && AIRTABLE_TABLE_NAME) {
            try {
                // Format date as mm/dd/yyyy
                const now = new Date();
                const createdDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;

                const base = new Airtable({ apiKey: AIRTABLE_PAT as string }).base(AIRTABLE_BASE_ID as string);
                await base(AIRTABLE_TABLE_NAME as string).create([
                    {
                        fields: {
                            "Lead Name": fullName, // Airtable has "Lead Name" as primary
                            "Contact Email": email, // Airtable has "Contact Email"
                            "Notes": `Subject: ${subject}\n\nMessage:\n${message}`, // Combine Topic/Message into Notes
                            "Status": "Lead Captured", // Matches the "Lead Captured" option in the screenshot
                            "Lead Source": "Website", // Good practice to track source
                            "Created Date": createdDate
                        }
                    }
                ], { typecast: true });
            } catch (airtableError) {
                console.error("Failed to save to Airtable:", airtableError);
            }
        }

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
