import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";
import { Calendar } from "lucide-react";

export default function LibraryPage() {
    const posts = getAllPosts();

    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-cream/30 dark:bg-forest-green/10 pt-32 pb-16">
                <Container>
                    <MotionSection>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6">
                            The Library
                        </h1>
                        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto">
                            Field notes on building a conscious business in a noisy digital world.
                            Timeless strategies, technical zen, and slow marketing.
                        </p>
                    </MotionSection>
                </Container>
            </Section>

            <Section>
                <Container>
                    {posts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, i) => (
                                <MotionSection key={post.slug} delay={i * 0.1} className="h-full">
                                    <Link href={`/library/${post.slug}`} className="block h-full group">
                                        <Card className="h-full hover:shadow-md transition-shadow dark:bg-card">
                                            <div className="h-48 bg-muted/20 relative overflow-hidden rounded-t-lg">
                                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-serif italic text-2xl">
                                                    Kalpana Media
                                                </div>
                                                {/* In real app, render image here from post.coverImage */}
                                            </div>
                                            <CardHeader>
                                                <div className="flex items-center text-xs text-muted-foreground mb-2">
                                                    <Calendar className="mr-1 h-3 w-3" />
                                                    {post.date} &bull; {post.readTime}
                                                </div>
                                                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                                                    {post.title}
                                                </CardTitle>
                                                <CardDescription className="line-clamp-3 mt-2">
                                                    {post.excerpt}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardFooter className="text-sm font-medium text-primary">
                                                Read more &rarr;
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </MotionSection>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 text-muted-foreground">
                            <p>No posts found. The shelves are being stocked.</p>
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    );
}
