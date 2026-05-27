"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            firstName: formData.get("first-name"),
            lastName: formData.get("last-name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    if (isSuccess) {
        return (
            <Card className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-[#a7f3d0] border-2 border-black rounded-2xl">
                <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 text-black">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-sans font-extrabold mb-2 text-black uppercase tracking-tight">Message Sent!</h3>
                <p className="text-neutral-800 mb-8 text-base font-medium">
                    Thanks for reaching out. We&apos;ll get back to you within 48 hours.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-lg px-6 border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-all">
                    Send another message
                </Button>
            </Card>
        );
    }

    return (
        <Card className="p-6 md:p-8 bg-white border-2 border-black rounded-2xl">
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                            First Name
                        </label>
                        <Input id="first-name" name="first-name" placeholder="Jane" required disabled={isLoading} className="border-2 border-black bg-white rounded-lg focus:ring-0 focus-visible:ring-0" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                            Last Name
                        </label>
                        <Input id="last-name" name="last-name" placeholder="Doe" required disabled={isLoading} className="border-2 border-black bg-white rounded-lg focus:ring-0 focus-visible:ring-0" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="jane@example.com" required disabled={isLoading} className="border-2 border-black bg-white rounded-lg focus:ring-0 focus-visible:ring-0" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        Topic
                    </label>
                    <Input id="subject" name="subject" placeholder="New Website Project" disabled={isLoading} className="border-2 border-black bg-white rounded-lg focus:ring-0 focus-visible:ring-0" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                        How can we help?
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your business and goals..."
                        className="min-h-[120px] border-2 border-black bg-white rounded-lg focus:ring-0 focus-visible:ring-0"
                        required
                        disabled={isLoading}
                    />
                </div>

                <Button type="submit" className="w-full text-base py-6 bg-black hover:bg-neutral-800 text-white rounded-lg font-bold uppercase tracking-wider transition-all hover:scale-[1.01]" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </form>
        </Card>
    );
}
