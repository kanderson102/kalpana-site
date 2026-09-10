import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";
import { ContactForm } from "@/components/contact-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { projects } from "@/app/data/collaborations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-neutral-200">
      {/* Hero Section */}
      <Section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b-2 border-black bg-[#f0f7f9] relative overflow-hidden">
        {/* Ambient Gradient & Color Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f2] via-[#eef6f9] to-[#cbf0f8] pointer-events-none" />
        <div className="absolute -top-32 -right-24 w-[36rem] h-[36rem] bg-[#bfeef8]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-[#f8efe0]/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-1/3 w-[32rem] h-[24rem] bg-[#dbeafe]/40 rounded-full blur-3xl pointer-events-none" />

        <Container className="flex flex-col items-center text-center space-y-8 relative z-10">
          <MotionSection delay={0.2}>
            <h1 className="text-4xl md:text-7xl font-sans font-extrabold tracking-tight text-black max-w-5xl mx-auto leading-[1.05]">
              Digital marketing and technical solutions for{" "}
              <span className="font-serif italic font-normal tracking-normal lowercase">
                conscious
              </span>{" "}
              small businesses.
            </h1>
          </MotionSection>

          <MotionSection delay={0.3}>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
              We help overwhelmed founders build their digital{" "}
              <span className="font-serif italic font-normal">oasis</span>.
              Websites, marketing, and operations without the aggressive tactics.
            </p>
          </MotionSection>

          <MotionSection delay={0.4} className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" asChild className="rounded-lg px-8 bg-black hover:bg-neutral-800 text-white font-extrabold text-sm uppercase tracking-wider h-12 border-2 border-black">
              <Link href="#contact">
                Work with us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-lg px-8 border-2 border-black text-black hover:bg-black hover:text-white font-extrabold text-sm uppercase tracking-wider h-12 transition-all">
              <Link href="#projects">View Our Work</Link>
            </Button>
          </MotionSection>
        </Container>

        {/* Subtle grid lines in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)] opacity-30 pointer-events-none" />
      </Section>

      {/* Services Section */}
      <Section id="services" className="border-b-2 border-black bg-white">
        <Container>
          <MotionSection className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold mb-4 text-black tracking-tight">
              A digital workshop, not a <span className="font-serif italic font-normal lowercase">factory</span>.
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-base md:text-lg font-medium">
              Every engagement is scoped clearly, delivered on time, and built to last — with transparent pricing and zero bloat.
            </p>
          </MotionSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Website Development */}
            <MotionSection whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Card className="h-full bg-[#a7f3d0] border-2 border-black rounded-2xl shadow-lg flex flex-col justify-between p-8 min-h-[220px]">
                <CardHeader className="p-0 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-black opacity-60">01 / Technical Development</span>
                  <CardTitle className="text-2xl md:text-3xl font-sans font-extrabold text-black mt-2">App & Website Build</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-black text-sm md:text-base leading-relaxed font-medium">
                    Custom-built Next.js applications, high-performance websites, Android apps, and modern digital solutions. Secure, fast, mobile-ready digital spaces built on code and hosting environments that you own 100%.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Systems Integration */}
            <MotionSection whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Card className="h-full bg-[#fef08a] border-2 border-black rounded-2xl shadow-lg flex flex-col justify-between p-8 min-h-[220px]">
                <CardHeader className="p-0 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-black opacity-60">02 / Workflow Systems</span>
                  <CardTitle className="text-2xl md:text-3xl font-sans font-extrabold text-black mt-2">Systems Integration</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-black text-sm md:text-base leading-relaxed font-medium">
                    Integrating booking platforms, contact form pipelines, client portals, and automated email operations to streamline your business and reclaim hours of admin work.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Social Media & Marketing */}
            <MotionSection whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Card className="h-full bg-[#fbcfe8] border-2 border-black rounded-2xl shadow-lg flex flex-col justify-between p-8 min-h-[220px]">
                <CardHeader className="p-0 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-black opacity-60">03 / Organic Marketing</span>
                  <CardTitle className="text-2xl md:text-3xl font-sans font-extrabold text-black mt-2">Content & Storytelling</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-black text-sm md:text-base leading-relaxed font-medium">
                    Social content management and newsletter curation designed to build real audience connection and tell your brand&apos;s unique story without chasing algorithms.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>

            {/* Maintenance & Support */}
            <MotionSection whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Card className="h-full bg-[#bae6fd] border-2 border-black rounded-2xl shadow-lg flex flex-col justify-between p-8 min-h-[220px]">
                <CardHeader className="p-0 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-black opacity-60">04 / Maintenance</span>
                  <CardTitle className="text-2xl md:text-3xl font-sans font-extrabold text-black mt-2">Technical Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-black text-sm md:text-base leading-relaxed font-medium">
                    Regular digital health checks, security scans, domain management, and search engine optimization updates to keep your site running flawlessly as your business grows.
                  </p>
                </CardContent>
              </Card>
            </MotionSection>
          </div>
        </Container>
      </Section>

      {/* Selected Work */}
      <Section id="projects" className="border-b-2 border-black bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <MotionSection>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">Selected Work</p>
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-black tracking-tight">
                Recent <span className="font-serif italic font-normal lowercase">projects</span>
              </h2>
              <p className="text-neutral-600 max-w-xl mt-4 text-base font-medium">
                A selection of recent collaborations. Each project started with a real business need and ended with a clean, high-performance outcome.
              </p>
            </MotionSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <MotionSection key={i} delay={i * 0.1}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer group">
                  <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden rounded-2xl mb-4 border-2 border-black group-hover:shadow-lg transition-all duration-300 shadow-sm">
                    {project.images && project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm font-semibold uppercase tracking-wider">
                        View Project
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-sans font-extrabold text-black group-hover:underline mt-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-black transition-colors" />
                  </h3>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest mb-2 mt-1">{project.tag}</p>
                  <p className="text-neutral-600 text-sm leading-relaxed">{project.description}</p>
                </a>
              </MotionSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" className="border-b-2 border-black bg-white">
        <Container>
          <MotionSection className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-black tracking-tight">
              Humble, aligned, and <span className="font-serif italic font-normal lowercase">human</span>.
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-base md:text-lg mt-4 font-medium">
              We operate as a digital workshop, blending creative visual design with technical software engineering to build sustainable foundations.
            </p>
          </MotionSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Card 1: Kalpanā */}
            <MotionSection delay={0.1}>
              <Card className="bg-white border-2 border-black rounded-2xl shadow-xl p-8 space-y-4">
                <h3 className="text-2xl font-sans font-extrabold text-black tracking-tight">कल्पना (Kalpanā)</h3>
                <div className="text-neutral-600 space-y-4 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    <b>Translation:</b> <i>Imagination</i> or the act of <i>creative formation</i>.
                  </p>
                  <p>
                    It represents the space where a vision begins to take shape into something real. We chose this name because we believe every digital presence should be an intentional and creative expression of the person behind it.
                  </p>
                </div>
              </Card>
            </MotionSection>

            {/* Card 2: Our Mission */}
            <MotionSection delay={0.2}>
              <Card className="bg-white border-2 border-black rounded-2xl shadow-xl p-8 space-y-4">
                <h3 className="text-2xl font-sans font-extrabold text-black tracking-tight">Our Mission</h3>
                <div className="text-neutral-600 space-y-4 text-sm md:text-base leading-relaxed font-medium">
                  <p>
                    We exist to serve founders who are doing meaningful work—often alone—and need a trusted partner to help with their business operations without the overwhelm.
                  </p>
                  <p>
                    We believe business can be honest, human, and aligned with your values. Your work deserves to be seen without sacrificing your well-being.
                  </p>
                </div>
              </Card>
            </MotionSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunshine Bio */}
            <MotionSection delay={0.1}>
              <Card className="bg-white border-2 border-black rounded-2xl shadow-xl overflow-hidden p-8 space-y-6">
                <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-2 border-black shadow-md">
                  <Image
                    src="/sunshine-camera.jpeg"
                    alt="Sunshine"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-sans text-black">Sunshine</h3>
                  <p className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mt-1">The Visionary</p>
                </div>
                <p className="text-neutral-600 text-center text-sm leading-relaxed font-medium">
                  Digital creator, admin extraordinaire, and small-business supporter.
                  I’ve learned my craft through volunteer work around the world—supporting projects I deeply believe in, from schools in underserved communities to spiritual yoga pilgrimages in India.
                  Creativity and service guide everything I do, and I find genuine joy in helping founders bring their visions to life.
                </p>
              </Card>
            </MotionSection>

            {/* Kyle Bio */}
            <MotionSection delay={0.2}>
              <Card className="bg-white border-2 border-black rounded-2xl shadow-xl overflow-hidden p-8 space-y-6">
                <div className="w-28 h-28 rounded-full mx-auto overflow-hidden border-2 border-black shadow-md">
                  <Image
                    src="/kyle-waterfall.jpeg"
                    alt="Kyle"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-sans text-black">Kyle</h3>
                  <p className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest mt-1">The Engineer</p>
                </div>
                <p className="text-neutral-600 text-center text-sm leading-relaxed font-medium">
                  Movement Builder, Software Engineer, and Community Weaver. I bridge the gap between technical architecture and human flourishing. By integrating 10+ years of software engineering, testing, and consulting with deep immersions in yoga, travel, and regenerative practices, I build the &apos;digital nervous systems&apos; that allow conscious organizations to scale their impact without burnout.
                </p>
              </Card>
            </MotionSection>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="border-b-2 border-black bg-white">
        <Container>
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-black tracking-tight">
              Common <span className="font-serif italic font-normal lowercase">questions</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-base md:text-lg max-w-xl mx-auto font-medium">
              Anything not covered here? Send us a message using the form below.
            </p>
          </div>

          <FAQAccordion />
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <Container className="max-w-2xl">
          <MotionSection>
            <div className="text-center mb-12 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Contact</p>
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-black tracking-tight">Start your project.</h2>
              <p className="text-neutral-600 text-base md:text-lg font-medium">
                Tell us about your work and what you&apos;re looking for. We&apos;ll get back to you within 48 hours.
              </p>
            </div>

            <ContactForm />
          </MotionSection>
        </Container>
      </Section>
    </div>
  );
}
