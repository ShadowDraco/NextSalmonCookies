/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        sc: {
          beige: '#fff9f0',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.tight'),
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.tight'),
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.tight'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.tight'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h5: {
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.normal'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h6: {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.relaxed'),
          fontWeight: theme('fontWeight.semibold'),
        },
        // Base styles for paragraphs
        p: {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.relaxed'),
          // marginBottom: theme('spacing.4')
        },
        // Base styles for links
        a: {
          color: theme('colors.blue.900'),
          fontWeight: theme('fontWeight.semibold'),
          // textDecoration: 'underline',
          '&:hover': {
            color: theme('colors.purple.800'),
          },
        },
        // base styles for nav links
        'nav a': {
          textDecoration: 'none',
          color: theme('colors.black'),
        },
      })
    }),
  ],
}
