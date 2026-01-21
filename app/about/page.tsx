import Link from "next/link";
import Image from "next/image";
import { MotionSection } from "@/components/ui/motion-section";
import { Section, Container } from "@/components/ui/layout-components";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/50 pt-32 pb-16">
                <Container>
                    <MotionSection>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
                            The Story
                        </h1>
                        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto">
                            We are a "mom-and-pop" digital workshop. No corporate factory vibes—just two humans helping you build your digital home.
                        </p>
                    </MotionSection>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <MotionSection delay={0.1}>
                            <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                            <div className="prose dark:prose-invert text-muted-foreground">
                                <p>
                                    We exist to serve founders who are doing meaningful work—often alone—and need a trusted partner to help with websites, social media, and digital presence without pressure, overwhelm, or aggressive sales tactics.
                                </p>
                                <p>
                                    We believe marketing can be honest, human, and aligned with your values. Your work deserves to be seen without sacrificing your well-being.
                                </p>
                            </div>
                        </MotionSection>

                        <MotionSection delay={0.2} className="relative">
                            <div className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground">
                                <span className="italic">Photo of Kyle & Sunshine</span>
                            </div>
                        </MotionSection>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/10">
                <Container>
                    <MotionSection className="mb-12 text-center">
                        <h2 className="text-3xl font-serif font-bold">Meet the Team</h2>
                    </MotionSection>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <MotionSection delay={0.1}>
                            <Card>
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                                        <Image
                                            src="/sunshine-camera.jpeg"
                                            alt="Sunshine"
                                            width={96}
                                            height={96}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold font-serif text-purple-navy">Sunshine</h3>
                                        <p className="text-sm text-candy-pink uppercase tracking-widest">The Visionary</p>
                                    </div>
                                    <p className="text-muted-foreground text-center text-sm">
                                        Grounded in yoga and mindfulness, Sunshine brings the creative vision and calm strategy. She ensures your story is told with authenticity and heart, keeping the "human" in your marketing.
                                    </p>
                                </CardContent>
                            </Card>
                        </MotionSection>

                        <MotionSection delay={0.2}>
                            <Card>
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                                        <Image
                                            src="/kyle-waterfall.jpeg"
                                            alt="Kyle"
                                            width={96}
                                            height={96}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold font-serif text-purple-navy">Kyle</h3>
                                        <p className="text-sm text-candy-pink uppercase tracking-widest">The Engineer</p>
                                    </div>
                                    <p className="text-muted-foreground text-center text-sm">
                                        With a background in engineering and structure, Kyle plans and builds the technical foundations of your digital presence. He ensures your site is fast, reliable, and technically sound.
                                    </p>
                                </CardContent>
                            </Card>

                        </MotionSection>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
