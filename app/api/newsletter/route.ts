import { NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_TAG_ID = process.env.KIT_TAG_ID; // Using Tag ID now (e.g. 14866672)

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 400 }
            );
        }

        // Connect to Kit (ConvertKit) - Subscribe to TAG
        if (KIT_API_KEY && KIT_TAG_ID) {
            // Note: Endpoint for tags is /tags/{id}/subscribe
            const response = await fetch(`https://api.convertkit.com/v3/tags/${KIT_TAG_ID}/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    api_key: KIT_API_KEY,
                    email: email
                })
            });

            if (!response.ok) {
                console.error("Kit API Error:", await response.text());
                return NextResponse.json(
                    { error: "Failed to subscribe" },
                    { status: 500 }
                );
            }
        } else {
            console.log("Newsletter Signup (Mock - Tag):", email);
        }

        return NextResponse.json(
            { message: "Subscribed successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
