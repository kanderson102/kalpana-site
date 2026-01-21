import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
    ({ className, as: Component = "section", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn("py-12 md:py-24", className)}
                {...props}
            />
        )
    }
)
Section.displayName = "Section"

const Container = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("container mx-auto px-4 md:px-6", className)}
            {...props}
        />
    )
})
Container.displayName = "Container"

export { Section, Container }
