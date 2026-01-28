"use client";

import { cn } from "@/lib/utils";
import { MotionSection } from "@/components/ui/motion-section";

const testimonials = [
    {
        text: "Kalpana Media helped us find our voice in a crowded market. The website feels like a true extension of our studio.",
        author: "Sarah J.",
        role: "Yoga Studio Owner",
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        text: "Finally, a tech partner who understands that I don't want to be on Instagram 24/7. The systems they built are a lifesaver.",
        author: "Michael R.",
        role: "Sustainable Architect",
        image: "https://i.pravatar.cc/150?u=michael"
    },
    {
        text: "Working with Sunshine and Kyle was a breath of fresh air. Professional, kind, and incredibly talented.",
        author: "Elena M.",
        role: "Wellness Coach",
        image: "https://i.pravatar.cc/150?u=elena"
    },
    {
        text: "Our new site is faster, cleaner, and converts better than ever. Best investment we made this year.",
        author: "David K.",
        role: "Organic Farm Founder",
        image: "https://i.pravatar.cc/150?u=david"
    },
    {
        text: "They took the stress out of our launch. I felt supported every step of the way.",
        author: "Jessica T.",
        role: "Ceramicist",
        image: "https://i.pravatar.cc/150?u=jessica"
    }
];

export function TestimonialsMarquee() {
    return (
        <section className="bg-sea-foam-green/30 border-y border-primary/10 py-24 overflow-hidden">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-steel-blue">What Our Clients Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                    Kind words from the conscious businesses we've had the pleasure of supporting.
                </p>
            </div>

            <div className="relative w-full">
                <div className="animate-marquee whitespace-nowrap flex gap-8 w-max hover:[animation-play-state:paused] py-4">
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <div
                            key={i}
                            className="inline-block w-[350px] md:w-[450px] whitespace-normal flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-sea-foam-green/20"
                        >
                            <p className="text-purple-navy text-xl font-serif italic mb-6 leading-relaxed">"{item.text}"</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.author}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-sea-foam-green"
                                />
                                <div>
                                    <p className="font-bold text-purple-navy text-lg">{item.author}</p>
                                    <p className="text-sm text-candy-pink uppercase tracking-wider font-semibold">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
