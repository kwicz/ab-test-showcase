import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        cream: '#faf3e0',
        navy: '#2b2d42',
        rose: '#b56d6f',
        brown: '#a6763e',
        sage: '#5a7d5a',
        blue: '#376995',
        // Semantic Colors
        primary: '#2b2d42',
        secondary: '#b56d6f',
        accent: '#376995',
        background: '#faf3e0',
        success: '#5a7d5a',
        warning: '#a6763e',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Raleway', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
