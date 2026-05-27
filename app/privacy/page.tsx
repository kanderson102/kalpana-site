import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-black selection:bg-neutral-200">
            <Section className="pt-28 pb-16 md:pt-36 border-b-2 border-black bg-white">
                <Container className="max-w-3xl">
                    <MotionSection>
                        <Button variant="outline" size="sm" asChild className="mb-8 border-2 border-black text-black hover:bg-black hover:text-white rounded-lg px-5 font-bold uppercase tracking-wider text-xs h-9 transition-all">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                            </Link>
                        </Button>
                        <h1 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tight text-black mb-6">
                            Privacy <span className="font-serif italic font-normal lowercase">Policy</span>
                        </h1>
                        <p className="text-neutral-500 text-sm font-medium">Last updated: May 27, 2026</p>
                    </MotionSection>
                </Container>
            </Section>

            <Section className="bg-white py-16">
                <Container className="max-w-3xl">
                    <MotionSection className="prose prose-neutral max-w-none space-y-8 text-neutral-800 leading-relaxed font-medium">
                        <div className="space-y-4">
                            <p>
                                At Kalpana Media (operating at <a href="https://kalpanadigitalmedia.com" className="underline font-bold text-black">kalpanadigitalmedia.com</a>), we respect your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us for services.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">1. Information We Collect</h2>
                            <p>
                                We only collect personal information that you voluntarily provide to us when submitting our contact form. This information includes:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Contact Details:</strong> First name, last name, and email address.</li>
                                <li><strong>Project Information:</strong> Any details, goals, or requirements you share regarding your project.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect solely to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Respond to your project inquiries and discovery call requests.</li>
                                <li>Communicate with you regarding our website development, automations, and support services.</li>
                                <li>Process form submissions through secure API integrations (e.g., Resend and Airtable).</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">3. Data Sharing & Disclosure</h2>
                            <p>
                                We do not sell, trade, or rent your personal information to third parties. We only share information with trusted third-party service providers who assist us in operating our website and delivering services (such as email dispatch and CRM recording), provided they agree to keep this information confidential.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">4. Your Rights</h2>
                            <p>
                                You have the right to request access to the personal data we hold about you, or to request that we update, correct, or delete your information at any time. To make a request, please contact us using the details below.
                            </p>
                        </div>

                        <div className="space-y-4 border-t-2 border-black pt-8">
                            <h2 className="text-2xl font-sans font-bold text-black">Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us via email at:
                            </p>
                            <p className="font-extrabold text-black">
                                hello@kalpanadigitalmedia.com
                            </p>
                        </div>
                    </MotionSection>
                </Container>
            </Section>
        </div>
    );
}
