"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error("Failed");

            setIsSuccess(true);
        } catch (error) {
            alert("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="flex items-center space-x-2 text-primary font-medium p-2 bg-primary/10 rounded-md">
                <CheckCircle2 className="h-5 w-5" />
                <span>You're on the list!</span>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" name="email" placeholder="Email address" required disabled={isLoading} className="bg-background" />
            <Button type="submit" disabled={isLoading} className="bg-candy-pink hover:bg-candy-pink/90 text-white">
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
        </form>
    );
}
