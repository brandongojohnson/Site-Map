# Sitemap Builder - Modern SaaS Landing Page

A production-ready landing page for "Sitemap Builder", a drag-and-drop sitemap creation tool. Built with React, Tailwind CSS, and Lucide React icons.

## 🎯 Overview

The landing page showcases the Sitemap Builder product with a modern, clean design inspired by Linear, Vercel, and Notion. It includes all essential SaaS landing page sections with smooth animations and responsive behavior.

## 📁 File Structure

```
src/
├── LandingPage.jsx                 # Main landing page component
├── components/
│   ├── Navigation.jsx              # Fixed header with logo, menu, mobile toggle
│   ├── Button.jsx                  # Reusable button with variants (primary, secondary, ghost)
│   ├── Card.jsx                    # Card component with hover effects
│   ├── Section.jsx                 # Section wrapper with configurable styling
│   ├── FeatureGrid.jsx             # Grid layout for feature cards
│   ├── FAQ.jsx                     # Expandable FAQ accordion
│   └── Footer.jsx                  # Footer with multi-column navigation
└── index.css                       # Global styles and animations
```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue 600 (#2563EB) - CTAs and highlights
- **Background**: Gray 50 (#F9FAFB) - Alternating section backgrounds
- **Text**: Gray 900 (#111827) - Primary text, Gray 600 (#4B5563) - Secondary text

### Components

#### Navigation
- Fixed header with glass morphism (backdrop blur)
- Logo with gradient badge
- Desktop navigation menu
- Mobile hamburger menu with smooth animations
- Sign in and Get Started CTA

#### Button Variants
- **Primary**: Solid blue background, white text
- **Secondary**: Border with gray, hover bg-gray-50
- **Ghost**: Text only, blue color

#### Sections
- Clean whitespace and vertical rhythm
- Configurable background colors (white, gray-50, gradient)
- Centered content with max-width constraints
- Optional section titles and subtitles

### Animations
- Smooth scroll behavior
- Hover scale effects on feature cards
- Icon scale transitions (0.9x → 1.1x)
- Button arrow animation on hover (slide right)
- FAQ chevron rotate animation
- Custom animations: fadeInUp, slideInRight, float, glow

## 📄 Landing Page Sections

### 1. Hero Section
- Headline: "Build sitemaps visually in minutes"
- Subheading with value proposition
- Primary CTA: "Start building for free"
- Secondary CTA: "View example sitemap"
- Illustration placeholder with gradient background

### 2. Features Section
6 feature cards:
- Drag-and-drop builder
- Auto-layout generation
- Export anywhere (XML, PNG, PDF)
- Real-time collaboration
- Version history
- Import site structure

### 3. How It Works
3-step flow with numbered badges:
1. Add pages
2. Drag to structure
3. Export or share

### 4. Use Cases
4 use case cards with gradient backgrounds:
- UX Designers (blue)
- Product Managers (purple)
- Developers (orange)
- Agencies (emerald)

### 5. Templates
4 template cards with emoji previews:
- SaaS Website (🚀 - 12 pages)
- E-commerce Platform (🛍️ - 18 pages)
- Portfolio Site (🎨 - 8 pages)
- Blog Platform (📝 - 10 pages)

### 6. Collaboration Section
- Highlights real-time editing, comments, shared links, permissions
- Placeholder preview area
- 4 feature callouts with icons

### 7. Export & Integrations
**Export Formats:**
- XML (for SEO)
- PNG (for presentations)
- PDF (print-ready)

**Integrations:**
- Figma
- Notion
- Webflow

### 8. FAQ Section
5 questions with expandable answers:
- Importing existing websites
- No technical experience needed
- Real-time collaboration
- Export formats
- Data security

### 9. Final CTA
- Large headline with conversion focus
- Subheading with trust signal
- Primary CTA button
- Support contact link

### 10. Footer
- Brand info and description
- 4-column link navigation
- Social media links
- Copyright notice

## 🚀 Getting Started

### Installation
```bash
npm install
npm run dev
```

The landing page will be available at `http://localhost:5174`

### Build
```bash
npm run build
```

Generates optimized production build in `dist/` directory.

## 🛠️ Customization

### Colors
Edit Tailwind colors in `tailwind.config.js` or use inline classes:
- Change blue-600 to your brand color
- Adjust gray tones for backgrounds

### Content
All text content is defined in the LandingPage component data objects:
- `features` array
- `useCases` array
- `templates` array
- `integrations` array
- `faqs` array

### Icons
Icons from Lucide React. Replace any icon by importing from `lucide-react`:
```jsx
import { YourIcon } from 'lucide-react';
```

### Sections
Modify section backgrounds using the `backgroundVariant` prop:
- `white` - Pure white background
- `gray` - Light gray (gray-50)
- `gradient` - Blue gradient fade

## 📱 Responsive Behavior

- **Mobile-first design** using Tailwind's `sm:`, `md:`, `lg:` breakpoints
- Navigation collapses to hamburger menu on mobile
- Grid layouts stack to single column on mobile
- Full responsive testing recommended across devices

## ✨ Key Features

✅ Production-ready components with TypeScript support  
✅ Fully responsive mobile-first design  
✅ Smooth animations and transitions  
✅ Accessibility-focused semantic HTML  
✅ Clean component architecture  
✅ Easy content updates  
✅ SEO-friendly structure  
✅ Performance optimized  
✅ Zero external dependencies (except React, Tailwind, Lucide)

## 📊 Conversion Optimizations

- Multiple CTAs throughout the page
- Trust signals (no credit card required, free tier)
- Clear value proposition in hero
- Social proof through use cases
- FAQ addresses common objections
- Strong final CTA section
- Contact option for sales

## 🔒 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- The hero illustration is a placeholder that can be replaced with a real interactive demo
- The collaboration preview section can be replaced with an actual screenshot or iframe
- All text is editable and can be customized for your product
- Consider adding actual product screenshots in high-value sections

## 🎓 Component Usage Examples

### Using the Button Component
```jsx
import { Button } from './components/Button';

<Button variant="primary" icon>
  Start building
</Button>
```

### Using the Section Component
```jsx
import { Section } from './components/Section';

<Section
  title="Features"
  subtitle="Everything you need"
  backgroundVariant="gray"
  id="features"
>
  {/* Content */}
</Section>
```

### Using the FAQ Component
```jsx
import { FAQ } from './components/FAQ';

const faqItems = [
  { question: 'How does it work?', answer: '...' }
];

<FAQ items={faqItems} />
```

---

**Ready to launch!** This landing page is production-ready and can be deployed immediately. All components are modular and easily customizable for your specific product needs.
