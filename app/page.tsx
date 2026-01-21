import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";
import { ContactForm } from "@/components/contact-form";
import { NewsletterForm } from "@/components/newsletter-form";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/app/data/collaborations";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  // Animation variants for Bento Hover
  const bentoHover = {
    rest: { scale: 1, borderColor: "transparent" },
    hover: {
      scale: 1.02,
      borderColor: "var(--primary)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-secondary/20 dark:bg-background">
        <Container className="flex flex-col items-center text-center space-y-8">
          <MotionSection delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
              Digital marketing and website support for <span className="text-candy-pink italic">conscious</span> small businesses.
            </h1>
          </MotionSection>

          <MotionSection delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We help overwhelmed founders build their digital oasis.
              Websites, marketing, and operations without the aggressive tactics.
            </p>
          </MotionSection>

          <MotionSection delay={0.4} className="flex gap-4 justify-center pt-4">
            <Button size="lg" asChild className="rounded-full px-8 bg-candy-pink hover:bg-candy-pink/90 transition-all hover:scale-105">
              <Link href="#contact">
                Work with us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 border-candy-pink text-candy-pink hover:bg-candy-pink hover:text-white transition-all hover:scale-105">
              <Link href="/library">View Our Field Notes</Link>
            </Button>
          </MotionSection>
        </Container>
      </Section>

      {/* Merged Section: Values ("Digital Workshop") & Services ("How we help") */}
      <Section className="bg-background">
        <Container>
          <MotionSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-steel-blue">A digital workshop, not a factory.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe marketing can be honest, human, and aligned with your values. Here is how we help you build that reality.
            </p>
          </MotionSection>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Radical Honesty - Large Box (Updated to White bg + Border, Steel Blue / Purple Navy text) */}
            <MotionSection className="md:col-span-2" whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="h-full bg-white border border-sea-foam-green transition-colors flex flex-col justify-center p-6 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-purple-navy">Radical Honesty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-navy/90 text-lg leading-relaxed font-medium">
                    We don't promise viral fame or 6-figure launches overnight. We promise reliable, high-quality work that supports your real business goals. Transparency is our love language.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Digital Oasis - Box */}
            <MotionSection className="md:col-span-1" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="h-full bg-white border border-sea-foam-green transition-colors shadow-sm">
                <CardHeader>
                  <CardTitle className="text-steel-blue">Digital Oasis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Technology shouldn't drain your energy. We build systems that are calm, organized, and sustainable.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Websites Service */}
            <MotionSection className="md:col-span-1" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="h-full bg-white border border-sea-foam-green relative overflow-hidden group shadow-sm transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-steel-blue">Websites & Blogs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90 mb-4 font-medium">
                    Custom, high-performance sites built for clarity. Digital home bases you actually own.
                  </p>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-candy-pink" /> SEO Optimized</li>
                    <li className="flex items-center"><CheckCircle2 className="mr-2 h-3 w-3 text-candy-pink" /> Mobile Responsive</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Marketing Service */}
            <MotionSection className="md:col-span-1" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="h-full bg-white border border-sea-foam-green shadow-sm transition-colors">
                <CardHeader>
                  <CardTitle className="text-steel-blue">Conscious Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Newsletters and social media without the burnout. We help you tell your story authentically.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Baseline Service */}
            <MotionSection className="md:col-span-1" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Card className="h-full bg-white border border-sea-foam-green shadow-sm transition-colors">
                <CardHeader>
                  <CardTitle className="text-steel-blue">The Baseline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Ongoing technical maintenance. We keep the lights on so you can focus on your zone of genius.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>
          </div>
        </Container>
      </Section>

      {/* Stats / By The Numbers */}
      <Section className="bg-purple-navy border-y border-white/10 py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "12+" },
              { label: "Projects Launched", value: "50+" },
              { label: "Coffee Consumed", value: "∞" },
              { label: "Happy Founders", value: "100%" }
            ].map((stat, i) => (
              <MotionSection key={i} delay={0.1 * i} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 500 }}>
                <div className="text-3xl md:text-5xl font-serif font-bold text-candy-pink mb-2">{stat.value}</div>
                <div className="text-sm text-white/90 uppercase tracking-wider font-medium">{stat.label}</div>
              </MotionSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Collaborations (New Section) */}
      <Section className="bg-muted">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <MotionSection>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-steel-blue">Featured Projects.</h2>
              <p className="text-muted-foreground max-w-xl mt-4">
                See what we've been building with our partners.
              </p>
            </MotionSection>
            <MotionSection delay={0.2}>
              <Button variant="outline" asChild>
                <Link href="/collaborations">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </MotionSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <MotionSection key={i} delay={i * 0.1}>
                <Link href={project.link} className="block h-full cursor-pointer group">
                  <div className="aspect-video bg-white/50 relative overflow-hidden rounded-lg mb-4 border border-sea-foam-green group-hover:border-primary transition-all duration-300">
                    {/* Placeholder for Project Image - Use real image if available */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm bg-muted/30">
                      Preview Image
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold group-hover:text-primary transition-colors text-steel-blue">{project.title}</h3>
                  <p className="text-sm text-candy-pink uppercase tracking-wider mb-2">{project.tag}</p>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </Link>
              </MotionSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Founders Brief (New Section - Updated to prioritize Sunshine) */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <MotionSection className="md:w-1/3">
              <div className="relative aspect-square bg-white rounded-full overflow-hidden border-4 border-sea-foam-green shadow-xl max-w-sm mx-auto">
                {/* Local Image from lib folder */}
                {/* Note: In a real Next.js app, images should be in /public. assuming local file copy or placeholder */}
                <Image
                  src="/kyle-sunshine.jpeg" // Assuming this will be moved to public
                  alt="Sunshine and Kyle"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </MotionSection>
            <MotionSection className="md:w-2/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-steel-blue">Humble, Aligned, Human.</h2>
              <p className="text-lg text-purple-navy/80 leading-relaxed">
                We exist to serve founders who are doing meaningful work — often alone — and need a trusted partner. No pressure, no aggressive tactics. Just two humans (Sunshine & Kyle) and a cat or two, who care about your mission as much as you do.
              </p>
              <Button variant="default" asChild>
                <Link href="/about">Read Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </MotionSection>
          </div>
        </Container>
      </Section>

      {/* Recent Field Notes (Blog Preview) */}
      <Section className="bg-background">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <MotionSection>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Recent Field Notes</h2>
              <p className="text-muted-foreground max-w-xl mt-4">
                Musings on technology, mindfulness, and the intersection of both.
              </p>
            </MotionSection>
            <MotionSection delay={0.2}>
              <Button variant="outline" asChild>
                <Link href="/library">View the Library <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </MotionSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.length > 0 ? (
              recentPosts.map((post, i) => (
                <MotionSection key={post.slug} delay={i * 0.1} className="h-full">
                  <Link href={`/library/${post.slug}`} className="block h-full group">
                    <Card className="h-full border-none shadow-none bg-muted/20 hover:bg-muted/30 transition-colors">
                      <CardHeader>
                        <div className="text-sm text-primary mb-2 font-medium">{new Date(post.date).toLocaleDateString()}</div>
                        <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center text-primary text-sm font-medium">
                          Read more <ArrowUpRight className="ml-1 h-3 w-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </MotionSection>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 text-muted-foreground">
                No field notes found. Coming soon.
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-sea-foam-green/30 border-y border-primary/10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <MotionSection className="md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-purple-navy">
                Join our slow growth community.
              </h2>
              <p className="text-purple-navy/80 text-lg">
                Get monthly field notes on conscious business, technical zen, and building without burnout. No spam, ever.
              </p>
            </MotionSection>
            <MotionSection className="md:w-1/2 flex justify-center md:justify-end" delay={0.2}>
              <NewsletterForm />
            </MotionSection>
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section id="contact" className="bg-background">
        <Container className="max-w-2xl">
          <MotionSection>
            <div className="text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Start your project.</h2>
              <p className="text-muted-foreground">
                Tell us about your work and what you're looking for. We'll get back to you within 48 hours.
              </p>
            </div>

            <ContactForm />
          </MotionSection>
        </Container>
      </Section>
    </div>
  );
}
