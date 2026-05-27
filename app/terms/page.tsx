import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/ui/layout-components";
import { MotionSection } from "@/components/ui/motion-section";

export default function TermsPage() {
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
                            Terms of <span className="font-serif italic font-normal lowercase">Service</span>
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
                                Welcome to Kalpana Media. By accessing our website (<a href="https://kalpanadigitalmedia.com" className="underline font-bold text-black">kalpanadigitalmedia.com</a>) or engaging our services, you agree to be bound by these Terms of Service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">1. Services</h2>
                            <p>
                                Kalpana Media provides digital marketing, website development, integrations, automations, and maintenance support for conscious small businesses. The specific scope, timeline, and deliverables for any engagement will be explicitly detailed in a separate written project agreement or proposal.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">2. Payments & Financial Terms</h2>
                            <p>
                                All services are billed on a fixed-price basis, as specified in your project quote. Payments must be made in accordance with the schedule defined in your project proposal. We reserve the right to pause work on active projects if invoices remain unpaid past their due date.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">3. Intellectual Property</h2>
                            <p>
                                Upon receipt of full and final payment, Kalpana Media transfers all ownership rights of the custom code, copy, and designs created during the project to the client. We retain the right to showcase the completed work in our digital portfolio and templates unless otherwise agreed in writing.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">4. Client Responsibilities</h2>
                            <p>
                                Timely delivery of our services depends on your active cooperation. You are responsible for providing necessary text, images, credentials, and feedback in a timely manner. We are not liable for project delays caused by a failure to supply required assets.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-sans font-bold text-black border-b border-neutral-200 pb-2">5. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Kalpana Media shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or any launch delay. Our total liability for any claim arising out of our services is strictly limited to the amount paid by the client for the specific project in question.
                            </p>
                        </div>

                        <div className="space-y-4 border-t-2 border-black pt-8">
                            <h2 className="text-2xl font-sans font-bold text-black">Contact Us</h2>
                            <p>
                                If you have any questions or require clarification regarding these Terms of Service, please reach out to us at:
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
