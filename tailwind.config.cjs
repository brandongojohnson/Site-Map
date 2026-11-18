// Tailwind is used ONLY by the landing page (src/landing-page/Strata*.jsx).
// - `important` scopes every utility under .strata-lp so nothing leaks into the app
// - preflight is off globally; a scoped reset lives in StrataLanding.css
module.exports = {
  content: ['./src/landing-page/Strata*.jsx'],
  important: '.strata-lp',
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        surface: '#000000',
        'spatial-blue': '#0071e3',
        'spatial-cyan': '#2997ff',
      },
      fontFamily: {
        sans: ['Onest', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
