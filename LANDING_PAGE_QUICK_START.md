# Quick Start Guide - Sitemap Builder Landing Page

## 🚀 View the Landing Page

The landing page is now the default home page when you run the dev server:

```bash
npm run dev
```

Visit: **http://localhost:5174**

## 📦 What's Included

### Main Page
- `src/LandingPage.jsx` - Complete landing page component with all sections

### Reusable Components
- **Navigation.jsx** - Header with responsive menu
- **Button.jsx** - Customizable button with 3 variants
- **Card.jsx** - Flexible card component
- **Section.jsx** - Section wrapper with theme variants
- **FeatureGrid.jsx** - Grid layout for features
- **FAQ.jsx** - Expandable accordion
- **Footer.jsx** - Multi-column footer

### Styles
- `src/index.css` - Global styles + custom animations

## ✏️ Quick Customization

### 1. Change the Brand Name
In `src/components/Navigation.jsx` and `src/components/Footer.jsx`:
```jsx
<span className="font-semibold text-lg text-gray-900">Sitemap Builder</span>
// Change to your product name
```

### 2. Update Feature Content
In `src/LandingPage.jsx`, modify the `features` array:
```jsx
const features = [
  {
    icon: <IconComponent className="w-6 h-6" />,
    title: "Your Feature Title",
    description: "Your feature description"
  },
  // ... more features
];
```

### 3. Change Colors
Primary: Blue-600 → Replace all `blue-600` and `blue-700` classes
or update `tailwind.config.js`

### 4. Update Links
Search for `href="#"` or `onClick` handlers to add real navigation

## 🎯 Section-by-Section Guide

### Hero Section (Top)
- Update headline: "Build sitemaps visually in minutes"
- Update subheading in the `<p>` tag
- Modify CTA button text
- Replace placeholder illustration (blue box with Layout icon)

### Features Section
Edit `features` array with your actual features (up to 6 cards)

### How It Works
3-step flow with icons - edit the array in the "How It Works" section

### Use Cases
4 user personas - customize `useCases` array with your target users

### Templates
Pre-built templates - edit `templates` array with your offerings

### Collaboration
Highlight team features - edit `collaborationFeatures` array

### Export & Integrations
List your export formats and integrations in respective arrays

### FAQ
Update `faqs` array with your actual questions and answers

### Final CTA
Update the headline and button text in the final section

### Footer
Edit footer links in the `Footer.jsx` component

## 🔗 Navigation Links

Currently using anchor links. To add actual routing:

1. Import Link from react-router-dom:
```jsx
import { Link } from 'react-router-dom';
```

2. Replace anchor tags with Link components:
```jsx
// Before:
<a href="#features">Features</a>

// After:
<Link to="/features">Features</Link>
```

## 📱 Mobile Testing

Test responsiveness by:
1. Opening dev tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test at different screen sizes

Key breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Design Customization

### Update Primary Color
Edit in `tailwind.config.js`:
```js
theme: {
  colors: {
    primary: {
      600: '#YOUR_COLOR',
      700: '#YOUR_COLOR_DARKER'
    }
  }
}
```

### Change Section Backgrounds
The `<Section>` component accepts `backgroundVariant`:
- `white` - Pure white
- `gray` - Light gray
- `gradient` - Gradient fade

## 🔊 Adding Analytics

Add to `src/main.jsx` or `src/LandingPage.jsx`:
```jsx
// Google Analytics, Mixpanel, etc.
import { Analytics } from '@vercel/analytics/react';

<Analytics />
```

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

Output in `dist/` folder

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 🐛 Troubleshooting

### Icons not showing?
- Check lucide-react is installed: `npm list lucide-react`
- Verify import path: `from 'lucide-react'`

### Styles not applying?
- Ensure `index.css` is imported in `main.jsx`
- Check Tailwind config has `src/**` in content

### Dev server not responding?
- Kill process: `lsof -i :5174` then `kill -9 <PID>`
- Or just run `npm run dev` again

## 📈 Next Steps

1. ✅ Review landing page in browser
2. ✅ Customize content for your product
3. ✅ Add real product screenshots/videos
4. ✅ Set up form submissions (Netlify Forms, Formspree, etc.)
5. ✅ Add Google Analytics
6. ✅ Create actual demo/app integration
7. ✅ Deploy to production
8. ✅ Set up email notifications
9. ✅ Monitor conversion metrics

## 💡 Pro Tips

- Add a live chat widget (Intercom, Drift)
- Embed a product demo video in the hero
- Create case studies for the use cases
- Add testimonials below features
- Use real user avatars in collaboration section
- Add pricing table after templates
- Create a blog section link in footer

## 📚 Resources

- Tailwind CSS Docs: https://tailwindcss.com/docs
- Lucide React Icons: https://lucide.dev
- React Documentation: https://react.dev

---

**Status**: ✅ Production-ready  
**Dev Server**: http://localhost:5174  
**Last Updated**: 2026-05-19
