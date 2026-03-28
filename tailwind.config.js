export default {
 darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Material Design 3-inspired palette
        background: "#f9f9f9",
        surface: "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "surface-dim": "#dadada",
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-variant": "#e2e2e2",

        primary: "#000000",
        "on-primary": "#e2e2e2",
        "primary-container": "#3b3b3b",
        "on-primary-container": "#ffffff",
        "primary-fixed": "#5e5e5e",
        "primary-fixed-dim": "#474747",

        secondary: "#615e57",
        "on-secondary": "#ffffff",
        "secondary-container": "#d9d4cb",
        "on-secondary-container": "#1d1c16",
        "secondary-fixed": "#cbc6bd",
        "secondary-fixed-dim": "#afaba3",

        tertiary: "#3b3b3c",
        "on-tertiary": "#e4e2e2",
        "tertiary-container": "#747474",
        "on-tertiary-container": "#ffffff",
        "tertiary-fixed": "#5e5e5e",
        "tertiary-fixed-dim": "#464747",

        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#410002",

        outline: "#777777",
        "outline-variant": "#c6c6c6",

        "on-surface": "#1a1c1c",
        "on-surface-variant": "#474747",
        "inverse-surface": "#2f3131",
        "inverse-on-surface": "#f0f1f1",
        "inverse-primary": "#c6c6c6",

        "on-primary-fixed": "#ffffff",
        "on-primary-fixed-variant": "#e2e2e2",
        "on-secondary-fixed": "#1d1c16",
        "on-secondary-fixed-variant": "#3d3b35",
        "on-tertiary-fixed": "#ffffff",
        "on-tertiary-fixed-variant": "#e4e2e2",

        "surface-tint": "#5e5e5e",
      },

      fontFamily: {
        headline: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        label: ["Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"], // fallback
      },

      borderRadius: {
        DEFAULT: "0.125rem", // 2px
        sm: "0.125rem",
        lg: "0.25rem",       // 4px
        xl: "0.5rem",        // 8px
        "2xl": "0.75rem",    // 12px (your "full" was 0.75rem)
        full: "9999px",
      },

      fontSize: {
        '2xs': ['10px', { lineHeight: '1rem' }],
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
