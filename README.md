# QS Impact Kigali Council Website

Official website for **QS Impact Kigali Council**, a youth-led organization based in Kigali, Rwanda. The site presents the council's mission, SDG-aligned focus areas, flagship programs, Global Days of Action participation, impact evidence, partnership opportunities, and contact information.

The website is designed to support the public brand presence of QS Impact Kigali Council under the domain:

**https://www.qskigali.org/**

## Project Purpose

QS Impact Kigali Council mobilizes young leaders to design and implement practical, community-centered solutions across Rwanda. The website communicates this work through a professional, accessible, and partner-ready digital experience.

Core communication goals:

- Increase visibility for QS Impact Kigali Council and its programs.
- Present a credible youth-led sustainable development brand.
- Highlight climate action, education, safety, and community transformation initiatives.
- Document the council's Global Days of Action participation since 2024, including 2026 school-based climate education activities.
- Make it easy for partners, institutions, companies, and development organizations to understand the council's work.
- Provide a clear path for partnership inquiries.

## Key Features

- **Bilingual interface:** English as the default language, with Kinyarwanda/Rwanda language support as a secondary option.
- **Professional organizational layout:** Corporate-style design with restrained regional and project-related visual accents.
- **Real project visuals:** Uses authentic photos from QS Impact Kigali Council activities in Rwanda.
- **Program filtering:** Visitors can filter programs by climate, education, and safety themes.
- **Global Days of Action tab:** Dedicated section for the council's participation since 2024 and documented 2026 school outreach.
- **Impact section:** Highlights measurable outcomes from documented council activities.
- **Partnership inquiry form:** Sends partner inquiries through Web3Forms, so visitors do not need to use their own email app.
- **Responsive design:** Optimized for desktop and mobile browsing.
- **SEO and sharing metadata:** Includes canonical URL, Open Graph, Twitter card metadata, and structured organization data.

## Highlighted Programs

The site currently presents four core program areas:

- **1000 Trees Initiative**  
  A 2025-2030 green restoration commitment supporting Rwanda's climate resilience and school-based environmental education.

- **Kimisange Safe Learning & Green Community Transformation**  
  A proposed school transformation initiative focused on student safety, green learning spaces, and community-supportive facilities.

- **SDG Champions Program**  
  A school-based leadership and sustainability education program for secondary students.

- **Global Days of Action**  
  A recurring climate education and youth action platform the council has participated in since 2024. The 2026 documentation highlights five school communities and 3,750+ learners reached through sessions on climate change, carbon offsetting, biodiversity, waste management, tree planting, and youth leadership.

- **Nduba Playground Restoration**  
  A community-led sports and wellbeing micro-restoration project focused on safety, drainage, sanitation, and youth engagement.

## Technology

This is a static website built with:

- `index.html` for structure and content
- `styles.css` for responsive visual design
- `script.js` for language switching, navigation behavior, program filtering, metric animation, and Web3Forms partnership inquiry submission
- Local image assets in the `assets/` folder

No build system, package manager, backend, or database is required.

## File Structure

```text
rwanda-project-site/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── qsi-rwanda-kigali-logo.png
    ├── hero-youth-climate-action.jpg
    ├── tree-planting-students.jpg
    ├── green-school-assembly.jpg
    ├── sdg-champions-session.jpg
    ├── community-project-team.jpg
    ├── wetlands-youth-engagement.jpg
    ├── council-school-collaboration.jpg
    ├── school-fees-support.jpg
    ├── gda-2026-action-session.jpg
    ├── gda-2026-rwankuba.jpg
    ├── gda-2026-gisozi.jpg
    ├── gda-2026-kimihurura.jpg
    └── gda-2026-rugote.jpg
```

## Local Preview

The site can be opened directly in a browser by opening:

```text
index.html
```

For a more reliable local preview, run a simple local web server from inside the project folder:

```bash
python3 -m http.server 8123 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8123/
```

## Deployment

Because the website is fully static, it can be hosted on any standard static hosting platform, including:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- cPanel or standard shared hosting
- Any web server that can serve HTML, CSS, JavaScript, and image files

Recommended production domain setup:

- Primary: `https://www.qskigali.org/`
- Redirect: `https://qskigali.org/` to `https://www.qskigali.org/`

## Partnership Form Setup

The partnership form is configured for Web3Forms and posts submissions to:

```text
https://api.web3forms.com/submit
```

The current Web3Forms access key is already included in `index.html`:

```html
<input type="hidden" name="access_key" value="0c1c963b-fa57-43c3-970d-b88466e59a18" />
```

Before public launch, submit one test inquiry and confirm that it arrives in the inbox connected to this Web3Forms key.

## Content Notes

The website content is based on provided QS Impact Kigali Council project materials, including organization descriptions, 2025 impact highlights, ongoing project concepts, Global Days of Action 2026 documentation, and authentic project photography.

Before public launch, the organization should review:

- Final wording of Kinyarwanda/Rwanda language translations
- Public contact details
- Program names and impact numbers
- Any donor, partner, or legal attribution requirements
- Final DNS and hosting configuration for `qskigali.org`

## Contact

QS Impact Kigali Council  
Kigali, Rwanda  
Email: `kigalicouncil@qsimpact.org`  
Phone: `+250 795 751 946` / `+250 788 957 212`
