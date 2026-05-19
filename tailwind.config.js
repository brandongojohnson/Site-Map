/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Clarity Design System - Monochromatic Foundation
        'surface': '#f9f9f9',
        'surface-dim': '#dadada',
        'surface-bright': '#f9f9f9',
        'surface-lowest': '#ffffff',
        'surface-low': '#f3f3f4',
        'surface-container': '#eeeeee',
        'surface-container-high': '#e8e8e8',
        'surface-container-highest': '#e2e2e2',
        'surface-variant': '#e2e2e2',
        'surface-gray': '#F2F2F2',

        // On-surface colors
        'on-surface': '#1a1c1c',
        'on-surface-variant': '#444748',

        // Inverse colors
        'inverse-surface': '#2f3131',
        'inverse-on-surface': '#f0f1f1',

        // Outline colors
        'outline': '#747878',
        'outline-variant': '#c4c7c7',
        'border-light': '#E6E6E6',

        // Primary colors - Black/White
        'primary': '#000000',
        'on-primary': '#ffffff',
        'primary-container': '#1c1b1b',
        'on-primary-container': '#858383',
        'inverse-primary': '#c8c6c5',

        // Secondary colors - Deep Gray
        'secondary': '#5f5e5e',
        'on-secondary': '#ffffff',
        'secondary-container': '#e4e2e1',
        'on-secondary-container': '#656464',

        // Tertiary colors - Forest Green Accent
        'tertiary': '#15693B',
        'accent-green': '#15693B',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#a4f4b9',
        'on-tertiary-container': '#00210e',

        // Error colors
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Text colors
        'text-muted': '#6B6B6B',

        // Semantic backgrounds
        'background': '#f9f9f9',
        'on-background': '#1a1c1c',
      },

      fontFamily: {
        'serif': ['"Source Serif 4"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'Courier New', 'monospace'],
      },

      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '34px', fontWeight: '700' }],
        'body-lg': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'body-md': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.02em', fontWeight: '500' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },

      spacing: {
        'page-margin': '24px',
        'gutter': '16px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        'stack-xl': '64px',
      },

      maxWidth: {
        'content': '720px',
      },

      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
      },

      lineHeight: {
        'reading': '1.6',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
};
