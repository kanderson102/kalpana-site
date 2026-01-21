import { NextResponse } from "next/server";

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

        // Connect to Kit (ConvertKit) here
        // const KIT_API_KEY = process.env.KIT_API_KEY;
        // ...

        console.log("Newsletter Signup:", email);

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
