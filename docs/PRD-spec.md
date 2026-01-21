# Product Requirements Document (PRD): Website MVP

## 1\. Objective

Launch a high-utility, fully functioning, SEO-optimized MVP site that acts as a professional lead generation engine for B2B outreach and newsletter growth.

## 2\. Site Structure & Funnel

* **User Flow:**  
  * **Entry:** User arrives and feels immediate "Oasis" calm through the cream/green palette.  
  * **Recognition:** They identify with the "Overwhelmed Creative" avatar through the copy.  
  * **Discovery:** They browse `The Library` (Blog) to see "Field Notes" on conscious growth.  
  * **Conversion:** They reach the newsletter signup form and contact form  
* **Home Page:** \* Hero section with the "Mandala Lotus" logo (needs a transparent background).  
  * "Why Us" & Values section (referencing yoga/presence/engineer background).  
    * CTA to work with us \-\> auto-scroll to Contact form  
  * **Service overview:**  
    * **Box 1 (Website/Blog):** "Digital Foundations: High-performance websites built for clarity".  
    * **Box 2 (Social/Marketing):** "Conscious Growth: Intentional social storytelling without the algorithm fatigue".  
    * **Box 3 (Operational Support):** The Baseline: Ongoing operational support and technical maintenance. Our goal is to manage the technical baseline at an affordable price so founders can stay in their "Zone of Genius."  
    * **Box 4 (Philosophy):** "Radical Honesty: No gimmicks, no viral promises—just real value".  
  * Customer success from other collaborations  
  * **The Lead Anchor:** free business guide (tbd) when you sign up for newsletter (connects to Kit)  
  * A Sales/Contact form at the bottom of the page.  
* **About Page:** Detailed mission and bios for Kyle and Sunshine, focusing on the "Mom-and-Pop" feel.  
* **The Library Page (blog):** A dedicated space for "conscious business" content to feed the Kit newsletter.  
  * Share buttons to social media / copy link  
  * SEO optimized  
  * Internal backlinks  
* **Collaborations Page:** A visual list of past projects and collaborations  
* **SEO Infrastructure:** Semantic HTML, meta-tags for "conscious small business support," and automated sitemaps.

## 3\. The Sales/Contact Form (Core Feature)

* **Location:** Bottom of front page \+ linked in menu bar “Work with us” button.  
* **Fields:**  
  * First Name (Required)  
  * Last Name (Required)  
  * Email (Required)  
  * Subject \[“How can we help?”\] (Dropdown: Service Inquiry, Partnership, Question, Suggestion, Feedback, Other) (Required)  
  * Business Needs (Checkbox: Website, Social Media, Newsletter, Blog, Operations, Strategy, Other) (optional)  
  * Message (Required)  
* **Post-Submission:** Redirect to a "Thank You" prompt. Linked to Google Form that emails our team with info.

## 4\. Non-Functional Requirements (NFRs)

* **Performance:** Fast loading to respect the user's attention.  
* **WCAG Compliance:** (Web Content Accessibility Guidelines) Ensuring the site is accessible to those with visual or motor impairments (e.g., high contrast, screen reader compatibility).  
* **Responsiveness:** Must be dark-theme friendly and flawless on mobile.

## 5\. Business KPIs

* **Lead Volume:** Number of contact form submissions.  
* **Newsletter Growth:** Number of new signups via Kit.  
* **Retention/Referral:** Tracking "Super Fan" clients that spread to future clients/fans via growth mechanisms.

## 6\. UI Branding, Vibe, & Assets

* **Logo:** Mandala Lotus. Move to `/assets` folder.  
* **Inspiration Sources:**   
  * *Layout Strategy:* Modular, framework-focused, bento box, cards  
  * *Clarity/Social Proof:* Numbers, clean grid, trust  
  * *Calm Aesthetic:* Mindfulness, minimalist  
  * *Typography:* Minimalist serif headings with clean, modern sans-serif body text.  
* **Vibe:** A digital oasis: whites and creams, forest greens, ocean blues, with vibrant orangish-red accents for conversion buttons. Dark theme friendly.  
* **Brand Colors:** ("Coastal & Candy" Palette)
  * Primary Background: Pure White (`#FFFFFF`)
  * Primary Text (Purple Navy): `#46538B`
  * Primary Header (Steel Blue): `#4796AE`
  * Secondary/UI (Sea Foam Green): `#AFE0C8`
  * Call to Action (Candy Pink): `#ED7672`
  * High Contrast: Black (`#000000`)  
* **Font Family:**  
  * serif: \['Playfair Display', 'serif'\]  
  * sans: \['Inter', 'sans-serif'\]

## 7\. The Composable Stack

| Layer | Tool | Purpose |
| :---- | :---- | :---- |
| **Frontend** | Next.js \+ Vercel | The primary website code and hosting. |
| **Design** | Tailwind CSS | Utility-first CSS for the Blue / Green / Cream / Blood-Orange palette. |
| **Email/CRM** | Kit (ConvertKit) | Managing newsletters and marketing. |
| **B2B outreach/Contact Leads** | Airtable | Central CRM for ops and manage customers |
| **Blog** | Strapi (open to changing) | Source of truth for copy |

## 8\. Open Questions

**Blog & Content Strategy:**

* **Options:**   
  * Strapi API hosting  
    * **Option A:** [Vercel](https://vercel.com/pricing) (would it be on the same instance as the website?)  
    * **Option B:** [Strapi Cloud](https://strapi.io/pricing-cloud)   
  * Obsidian/Github  
    * Is the blog repo separate from the website repo  
  * Ghost  
    * Would need to be hosted on Digital Ocean droplet ($5/mo)  
  * [Sanity.io](http://Sanity.io)  
    * Higher learning curve  
  * Substack	  
    * Downsides:  
      * Lose ownership  
      * Need a second email signup (Kit) for marketing specific emails  
    * Upsides:  
      * Built in social network  
* **Initial Path:** Use Markdown files in the GitHub repo for MVP launch to maintain 100% data ownership.  
* **Automation:** Set up an RSS feed or API from the blog to trigger automated broadcasts in Kit.  
* **Considerations:** Cross-post to Substack (manual since no API) or go all in there

## 