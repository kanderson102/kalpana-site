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
            <Card className="p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-accent/20 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                    Thanks for reaching out. We'll get back to you within 48 hours.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                    Send another message
                </Button>
            </Card>
        );
    }

    return (
        <Card className="p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                            First Name
                        </label>
                        <Input id="first-name" name="first-name" placeholder="Jane" required disabled={isLoading} />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                            Last Name
                        </label>
                        <Input id="last-name" name="last-name" placeholder="Doe" required disabled={isLoading} />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="jane@example.com" required disabled={isLoading} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Topic
                    </label>
                    <Input id="subject" name="subject" placeholder="New Website Project" disabled={isLoading} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        How can we help?
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your business and goals..."
                        className="min-h-[120px]"
                        required
                        disabled={isLoading}
                    />
                </div>

                <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
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
