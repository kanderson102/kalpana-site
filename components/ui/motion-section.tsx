"use client";

import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MotionSectionProps extends HTMLMotionProps<"div"> {
    delay?: number;
}

export function MotionSection({
    className,
    children,
    delay = 0,
    ...props
}: MotionSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn("w-full", className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
