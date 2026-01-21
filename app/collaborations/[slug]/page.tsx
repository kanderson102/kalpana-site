import { projects } from "@/app/data/collaborations";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";
import { Card, CardContent } from "@/components/ui/card";

interface PageProps {
    params: {
        slug: string;
    }
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: PageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col pt-24 pb-12">
            <Container>
                <MotionSection>
                    <Link
                        href="/collaborations"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                </MotionSection>

                <MotionSection delay={0.1}>
                    <div className="max-w-4xl">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                            {project.tag}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                            {project.description}
                        </p>
                    </div>
                </MotionSection>

                {/* Main Content / Case Study */}
                <MotionSection delay={0.2} className="grid md:grid-cols-3 gap-12 mt-12">
                    <div className="md:col-span-2 space-y-8">
                        {/* Placeholder for Main Image */}
                        <div className="aspect-video bg-muted/20 rounded-xl flex items-center justify-center text-muted-foreground border border-border/50">
                            Project Hero Image
                            {/* In real implementaion: <Image src={project.images[0]} ... /> */}
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h3 className="font-serif text-2xl mb-4">The Challenge & Solution</h3>
                            <p>{project.longDescription}</p>

                            {/* Mock additional content */}
                            <p>
                                We approach every collaboration with a clean slate. For {project.title},
                                success meant more than just metrics; it meant aligning their digital presence
                                with their core values.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <Card className="bg-muted/10 border-none sticky top-32">
                            <CardContent className="pt-6 space-y-6">
                                <div>
                                    <h4 className="font-bold text-foreground mb-2">Services Provided</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        <li>• Strategy & Audit</li>
                                        <li>• UX/UI Design</li>
                                        <li>• Full Stack Development</li>
                                        <li>• SEO Optimization</li>
                                    </ul>
                                </div>
                                <hr className="border-border/50" />
                                <Button className="w-full" asChild>
                                    <Link href="#">
                                        Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </MotionSection>
            </Container>
        </div>
    );
}
