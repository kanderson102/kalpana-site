export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    tag: string;
    link: string; // Internal Link: /collaborations/slug
    images: string[];
}

export const projects: Project[] = [
    {
        title: "Soulful Yoga Studio",
        slug: "soulful-yoga",
        description: "Full website redesign and booking system integration.",
        longDescription: "We partnered with Soulful Yoga to transition their studio from a chaotic MindBody integration to a seamless, custom-built experience. The goal was to reduce friction for new students while maintaining the studio's calming aesthetic digital. We implemented a custom booking overlay, automated email flows for new students, and improved their SEO ranking for local terms.",
        tag: "Website",
        link: "/collaborations/soulful-yoga",
        images: ["/placeholder-yoga-1.jpg", "/placeholder-yoga-2.jpg"]
    },
    {
        title: "Green Earth Organics",
        slug: "green-earth-organics",
        description: "E-commerce migration and email marketing setup.",
        longDescription: "Green Earth Organics needed to move away from a restrictive platform to Shopify Plus. We handled the entire data migration, designed a custom theme that highlights their farm-to-table story, and set up a Klaviyo email retention strategy that increased repeat purchases by 40% in the first 3 months.",
        tag: "E-commerce",
        link: "/collaborations/green-earth-organics",
        images: ["/placeholder-geo-1.jpg"]
    },
    {
        title: "Conscious Coaches Collective",
        slug: "conscious-coaches",
        description: "Membership portal and community platform.",
        longDescription: "A custom membership site built on Next.js, allowing coaches to share resources, host events, and network. We focused heavily on community engagement features and a lightning-fast content library.",
        tag: "Platform",
        link: "/collaborations/conscious-coaches",
        images: ["/placeholder-ccc-1.jpg"]
    },
    {
        title: "Mindful Metrics",
        slug: "mindful-metrics",
        description: "Dashboard design for wellness app.",
        longDescription: "UI/UX design for a SaaS product helping therapists track patient progress. We focused on accessibility, calm color palettes, and clear data visualization.",
        tag: "Product Design",
        link: "/collaborations/mindful-metrics",
        images: []
    }
];
