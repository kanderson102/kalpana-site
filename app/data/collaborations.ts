export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    tag: string;
    link: string; // External Link
    images: string[];
}

export const projects: Project[] = [
    {
        title: "GiveCheck",
        slug: "givecheck",
        description: "A modern platform for startups to showcase their community impact, enabling frictionless and secure charitable giving.",
        longDescription: "GiveCheck is a dedicated platform designed to simplify nonprofit donation processing. We built a high-performance frontend and integrated it with secure routing mechanisms, enabling nonprofits to handle digital check donations with minimum overhead and maximum security.",
        tag: "Community Leaderboard",
        link: "http://givecheck.org",
        images: ["/assets/givecheck.png"]
    },
    {
        title: "Polymarket Picks",
        slug: "polymarket-picks",
        description: "A predictive analytics dashboard to analyze Polymarket trends, forecasting picks with dynamic charts, trading bots, and Telegram updates.",
        longDescription: "Polymarket Picks leverages data visualization and prediction market APIs to forecast trends. We designed the interface to present complex probability metrics through high-legibility layout cards, allowing users to track real-time analytics dynamically.",
        tag: "Fintech Dashboard + Bot Trading",
        link: "https://polymarket-picks.streamlit.app/",
        images: ["/assets/polymarket-picks.png"]
    },
    {
        title: "Himalayan Yoga Yatra",
        slug: "himalayan-yoga-yatra",
        description: "Curating organic storytelling and digital presence for yoga yatra pilgrimages in India, sharing spiritual journeys and mindful community expansion.",
        longDescription: "Himalayan Yoga Yatra is a spiritual pilgrimage organization in India. We curated their branding, digital storytelling structure, and social media layout strategy to communicate their values of self-discovery, yoga practice, and slow travel directly to their global community.",
        tag: "Instagram Page Management",
        link: "https://www.instagram.com/himalayanyogayatra/",
        images: ["/assets/HYY.jpg"]
    },
    {
        title: "Gracious Collections",
        slug: "gracious-collections",
        description: "A curated vintage boutique and bridal heirloom showcase, featuring responsive e-commerce, story-driven journal features, and timeless aesthetic design.",
        longDescription: "Gracious Collections offers curated antique bridal wear, heirloom textiles, and vintage gowns. We built an elegant, bespoke digital storefront with fluid browsing, seamless inquiry management, and story-driven editorial layouts reflecting timeless devotion and grace.",
        tag: "E-Commerce & Brand Curation",
        link: "https://graciouscollections.vercel.app/",
        images: ["/assets/gracious-collections.png"]
    },
    {
        title: "Gemspotter",
        slug: "gemspotter",
        description: "An AI-powered mobile sourcing companion that scans items, calculates profit margins, and fetches live eBay comps for smart inventory sourcing.",
        longDescription: "Gemspotter is an AI-assisted sourcing and inventory valuation mobile app for resellers. Featuring live camera object detection, automated scan-to-profit estimation, and dynamic eBay market comps to empower fast sourcing decisions on the go.",
        tag: "Mobile App & AI Valuation",
        link: "https://github.com/kanderson102/gemspotter",
        images: ["/assets/gemspotter.png"]
    },
    {
        title: "Local Spotlight Mail",
        slug: "local-spotlight-mail",
        description: "A shared direct mail advertising platform helping local service businesses reach targeted neighborhood homes with premium co-op postcards.",
        longDescription: "Local Spotlight Mail delivers community-focused, oversized shared mailers to 5,000 targeted households per territory. We developed their digital platform featuring interactive postcard slot previews, category exclusivity locks, and automated reservation inquiries.",
        tag: "Direct Mail & Hyperlocal Marketing",
        link: "https://localspotlightmail.com/",
        images: ["/assets/localspotlightmail.png"]
    }
];
