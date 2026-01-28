import { MotionSection } from "@/components/ui/motion-section";
import { Section, Container } from "@/components/ui/layout-components";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/app/data/collaborations";

export default function CollaborationsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-cream/30 dark:bg-forest-green/10 pt-32 pb-16">
                <Container>
                    <MotionSection>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
                            Collaborations
                        </h1>
                        <p className="text-lg md:text-xl text-center text-black max-w-2xl mx-auto">
                            A collection of projects where we helped good people do good work.
                        </p>
                    </MotionSection>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <MotionSection key={i} delay={i * 0.1}>
                                <Link href={project.link} className="block h-full">
                                    <Card className="h-full group hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="aspect-video bg-muted/20 relative overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                                                Project Screenshot
                                            </div>
                                        </div>
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.tag}</span>
                                                    <CardTitle className="mt-2 text-xl">{project.title}</CardTitle>
                                                </div>
                                                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0" />
                                            </div>
                                            <CardDescription>
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </MotionSection>
                        ))}
                    </div>

                    <MotionSection delay={0.4} className="mt-16 text-center">
                        <div className="bg-primary/5 p-8 rounded-2xl max-w-2xl mx-auto">
                            <h3 className="text-2xl font-serif font-bold mb-4">Ready to start your project?</h3>
                            <Button size="lg" asChild>
                                <Link href="/#contact">Let's talk</Link>
                            </Button>
                        </div>
                    </MotionSection>
                </Container>
            </Section>
        </div>
    );
}
