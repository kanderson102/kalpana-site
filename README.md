# Next.js SPA Agency Template

A premium, minimalist, high-contrast single-page agency template built using Next.js 16 (App Router), Tailwind CSS, Framer Motion, and Lucide Icons. Designed with clean typography (Figtree & Cormorant Garamond), solid black borders, and vibrant bento grids.

See the template live in action at [kalpanadigitalmedia.com](https://kalpanadigitalmedia.com).

## Features

- **Modern Visual Identity:** Bold high-contrast aesthetic featuring a pure white background, pure black borders/text, and curated bright bento cards (Mint Green, Banana Yellow, Baby Pink, Sky Blue).
- **Single-Page Architecture (SPA):** Seamless anchor links connecting Hero, Services, Selected Work, About, FAQ, and Contact sections on a single fast-loading page.
- **Micro-Animations:** Fluid scroll animations and hover effects powered by Framer Motion.
- **Responsive & Accessible:** Fully mobile-friendly layout with semantic HTML elements and clean ARIA attributes.
- **Form Integration:** Dynamic contact form pre-configured for email notifications and CRM collection.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Figtree (Sans-serif) & Cormorant Garamond (Italic Serif)

---

## Getting Started

### 1. Install Dependencies

Clone the repository and install the packages:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Contact Form Integrations (Optional)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_inbox@domain.com
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
AIRTABLE_TABLE_NAME=your_airtable_table_name
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 4. Build for Production

```bash
npm run build
```

---

## Customizing Content

### Portfolio Projects
Update the project list in [app/data/collaborations.ts](file:///Users/kyle/Documents/projects/kalpana-site/app/data/collaborations.ts):
```typescript
export interface Project {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    tag: string;
    link: string; // Live external URL
    images: string[]; // Relative paths starting with /assets/
}
```
Place your portfolio screenshots in the `public/assets/` folder.

### FAQ Accordion
Edit the questions and answers in [components/faq-accordion.tsx](file:///Users/kyle/Documents/projects/kalpana-site/components/faq-accordion.tsx) within the `faqData` array.

### Visual Styling & Colors
Global custom colors and theme settings are managed in [app/globals.css](file:///Users/kyle/Documents/projects/kalpana-site/app/globals.css) and [tailwind.config.ts](file:///Users/kyle/Documents/projects/kalpana-site/tailwind.config.ts).

## License

This template is open-source and free to use for personal or commercial projects. Customize it to showcase your digital workshop!
