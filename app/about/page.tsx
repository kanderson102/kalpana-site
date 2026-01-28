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
                        <p className="text-lg md:text-xl text-center text-foreground max-w-2xl mx-auto">
                            We are a "mom-and-pop" digital workshop. No corporate factory vibes—just two humans helping you build your digital home.
                        </p>
                    </MotionSection>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                        <MotionSection delay={0.1}>
                            <h2 className="text-3xl font-serif font-bold mb-4 text-steel-blue"> कल्पना (Kalpanā)</h2>
                            <div className="space-y-4 text-lg text-muted-foreground mb-12">
                                <p>
                                    <b>Translation:</b> <i>Imagination</i> or the act of <i>creative formation</i>.
                                </p>
                                <p>
                                    It represents the space where a vision begins to take shape into something real. We chose this name because we believe every digital presence should be an intentional and creative expression of the person behind it.
                                </p>
                            </div>

                            <h2 className="text-3xl font-serif font-bold mb-4 text-steel-blue">Our Mission</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    We exist to serve founders who are doing meaningful work—often alone—and need a trusted partner to help with websites, social media, and digital presence without pressure, overwhelm, or aggressive sales tactics.
                                </p>
                                <p>
                                    We believe marketing can be honest, human, and aligned with your values. Your work deserves to be seen without sacrificing your well-being.
                                </p>
                            </div>
                        </MotionSection>

                        <MotionSection delay={0.2} className="relative">
                            <div className="aspect-square bg-muted/20 rounded-lg flex items-center justify-center text-muted-foreground overflow-hidden">
                                <Image
                                    src="/kyle-sunshine-train.jpeg"
                                    alt="Kyle & Sunshine"
                                    width={600}
                                    height={600}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </MotionSection>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <MotionSection delay={0.3}>
                            <h2 className="text-3xl font-serif font-bold mb-4 text-steel-blue">The Intersection of Our Paths</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    We founded Kalpana Media by blending two distinct approaches to the digital world. One path is rooted in the flow of creative storytelling. The other is grounded in the precision of software engineering.
                                </p>
                            </div>
                        </MotionSection>
                        <MotionSection delay={0.4}>
                            <h2 className="text-3xl font-serif font-bold mb-4 text-steel-blue">Our Shared Vision</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    Together, we have combined our backgrounds in yoga, slow travel, and entrepreneurship to create a boutique agency. We focus on building digital spaces that feel like an oasis. These environments are calm, functional, and deeply aligned with the values of the heart-led founders we serve. We prioritize sustainable growth and human connection over the pressures of traditional hustle culture.
                                </p>
                            </div>
                        </MotionSection>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/10 pt-0">
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
                                    <p className="text-foreground text-center text-sm">
                                        Digital creator, admin extraordinaire, and small-business supporter.
                                        I’ve learned my craft through volunteer work around the world—supporting projects I deeply believe in, from schools in underserved communities to spiritual yoga pilgrimages in India.
                                        Creativity and service guide everything I do, and I find genuine joy in helping founders bring their visions to life.
                                        My favorite phrase: “How can I help?”
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
                                    <p className="text-foreground text-center text-sm">
                                        Movement Builder, Software Engineer, and Community Weaver. I bridge the gap between technical architecture and human flourishing. By integrating 10+ years of software engineering, testing, and consulting with deep immersions in yoga, travel, and regenerative practices, I build the 'digital nervous systems'—automations, MVPs, and storytelling tools—that allow conscious organizations to scale their impact without burnout.
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
