import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-cream/30 dark:bg-forest-green/10 pt-32 pb-12">
                <Container className="max-w-3xl">
                    <MotionSection>
                        <Button variant="ghost" size="sm" asChild className="mb-6 pl-0 hover:pl-2 transition-all">
                            <Link href="/library">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Library
                            </Link>
                        </Button>

                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                            <span>&bull;</span>
                            <span>{post.readTime}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-foreground mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>
                    </MotionSection>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-3xl">
                    <MotionSection delay={0.1}>
                        <article className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-900 prose-strong:text-gray-900 prose-li:text-gray-900 prose-ul:text-gray-900 prose-ol:text-gray-900 dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-img:rounded-lg max-w-none">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </article>

                        <div className="mt-16 pt-8 border-t">
                            <h3 className="font-serif font-bold text-xl mb-4">Have thoughts on this?</h3>
                            <p className="text-muted-foreground mb-6">
                                We'd love to hear your perspective. Send us a note or let's start a conversation.
                            </p>
                            <Button asChild>
                                <Link href="/#contact">Contact Us</Link>
                            </Button>
                        </div>
                    </MotionSection>
                </Container>
            </Section>
        </div>
    );
}
