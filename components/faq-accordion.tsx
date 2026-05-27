"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How much does a typical project cost?",
        answer: "Most projects fall between $500 and $5,000 depending on scope. A straightforward automation or social media package sits toward the lower end; a custom application with integrations or a full analytics dashboard sits higher. We give fixed-price quotes after a short discovery call — no ambiguous estimates."
    },
    {
        question: "How long does a project take?",
        answer: "A focused website or migration typically takes 2 weeks from kick-off to launch, depending on the amount and extent of edits. More complex builds with custom functionality can run 6–14 weeks."
    },
    {
        question: "Do you work with clients outside the US?",
        answer: "Yes — the majority of our clients are remote. We work async-first with clear milestones and written updates, so you're never waiting on a timezone or a meeting to know where things stand."
    },
    {
        question: "What happens after launch?",
        answer: "You own everything. We offer optional ongoing retainers for maintenance or iterative development, but there's no lock-in. Most clients can run their site independently after handoff."
    },
    {
        question: "What if I don’t like the design?",
        answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
    },
    {
        question: "How do I get started?",
        answer: "Fill out the contact form below with a brief description of your project. We'll reply within one business day to schedule a free 30-minute discovery call."
    }
];

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="border-t-2 border-black divide-y-2 divide-black w-full max-w-3xl mx-auto">
            {faqData.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div key={i} className="py-2">
                        <button
                            onClick={() => toggleIndex(i)}
                            className="w-full text-left py-6 flex items-center justify-between gap-6 group cursor-pointer focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <h3 className="font-sans font-extrabold text-lg md:text-xl text-black leading-snug tracking-tight">
                                {item.question}
                            </h3>
                            <span className="shrink-0 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black bg-white group-hover:bg-black group-hover:text-white transition-colors duration-200">
                                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="font-sans font-medium text-neutral-600 leading-relaxed pb-6 text-sm md:text-base max-w-2xl">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
