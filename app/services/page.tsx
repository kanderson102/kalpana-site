import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <Section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-secondary/20 dark:bg-background">
                <Container className="flex flex-col items-center text-center space-y-8">
                    <MotionSection delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
                            Our Services
                        </h1>
                    </MotionSection>

                    <MotionSection delay={0.3}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We provide the technical and creative support necessary to help heart-led businesses flourish. Our approach is designed to remove the friction of digital management so you can remain focused on your craft and your community.
                        </p>
                    </MotionSection>
                </Container>
            </Section>

            {/* The Roots: Technical Foundations */}
            <Section className="bg-background">
                <Container>
                    <MotionSection className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-steel-blue">The Roots: Technical Foundations</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
                            A strong digital presence begins with a resilient foundation. We build and maintain systems that are intentional, ethical, and efficient.
                        </p>
                    </MotionSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Website Development",
                                description: "We create fast, responsive websites that reflect your brand’s unique energy.",
                            },
                            {
                                title: "Systems Integration",
                                description: "We set up the behind the scenes tools you need. This includes contact forms, booking systems, and automated workflows to reclaim your time.",
                            },
                            {
                                title: "Digital Health Monitoring",
                                description: "We handle regular updates, security checks, and SEO tuning to keep your digital home thriving.",
                            },
                        ].map((service, i) => (
                            <MotionSection key={i} delay={0.1 * i} className="h-full">
                                <Card className="h-full bg-white border border-sea-foam-green shadow-sm transition-colors hover:border-primary">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-serif text-purple-navy">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/80">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </MotionSection>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* The Bloom: Content and Community */}
            <Section className="bg-secondary/10">
                <Container>
                    <MotionSection className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-steel-blue">The Bloom: Content and Community</h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
                            We help you tell your story through visual narrative and consistent engagement. Our goal is to build a genuine community around your work.
                        </p>
                    </MotionSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Social Media Management",
                                description: "We design strategic Reels and high-converting carousels. These are crafted to build real connection rather than just chasing algorithms.",
                            },
                            {
                                title: "Newsletter Curation",
                                description: "We manage thoughtful email marketing that speaks directly to your audience.",
                            },
                            {
                                title: "Brand Voice Alignment",
                                description: "We ensure your digital presence feels as human and welcoming as your physical space.",
                            },
                        ].map((service, i) => (
                            <MotionSection key={i} delay={0.1 * i} className="h-full">
                                <Card className="h-full bg-white border border-sea-foam-green shadow-sm transition-colors hover:border-primary">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-serif text-purple-navy">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground/80">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </MotionSection>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* The Oasis: Integrated Growth */}
            <Section className="bg-background">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <MotionSection>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-steel-blue">The Oasis: Integrated Growth</h2>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                For founders seeking a comprehensive partnership, we offer a fully managed experience. This combines technical stability with creative momentum.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Full Ecosystem Management: A bespoke combination of technical support and creative content tailored to your specific goals.",
                                    "Launch Support: Priority assistance for event launches, new product releases, and technical troubleshooting.",
                                    "Strategic Partnership: Regular sessions to align your digital growth with your lifestyle and regenerative business values."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="mr-2 h-5 w-5 text-candy-pink flex-shrink-0 mt-1" />
                                        <span className="text-foreground/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </MotionSection>
                        <MotionSection delay={0.2}>
                            <div className="bg-secondary/20 rounded-2xl p-8 border border-sea-foam-green/50">
                                <h3 className="text-2xl font-serif font-bold mb-4 text-purple-navy text-center">Our Approach to Pricing</h3>
                                <p className="text-foreground/80 mb-6 text-center">
                                    We believe in value-driven partnerships. Every business has unique needs, so we begin with a discovery call to understand your vision and your budget.
                                </p>
                                <p className="text-foreground/80 mb-8 text-center">
                                    Our monthly retainers typically start at a baseline floor to ensure we can provide the high level of care and attention your project deserves. During our initial conversation, we will determine a scope of work that fits your current stage of growth.
                                </p>
                                <div className="text-center">
                                    <Button size="lg" asChild className="rounded-full px-8 bg-candy-pink hover:bg-candy-pink/90 transition-all hover:scale-105">
                                        <Link href="/#contact">
                                            Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </MotionSection>
                    </div>
                </Container>
            </Section>

            {/* Contact Section Reuse */}
            <Section id="contact" className="bg-sea-foam-green/10">
                <Container className="max-w-2xl text-center">
                    <MotionSection>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to grow?</h2>
                        <p className="text-muted-foreground mb-8">
                            Tell us about your work and what you're looking for. We'll get back to you within 48 hours.
                        </p>
                        <Button size="lg" asChild className="rounded-full px-8 bg-candy-pink hover:bg-candy-pink/90 transition-all hover:scale-105">
                            <Link href="/#contact">
                                Contact Us
                            </Link>
                        </Button>
                    </MotionSection>
                </Container>
            </Section>
        </div>
    );
}
