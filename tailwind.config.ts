import type { Config } from 'tailwindcss'

const config: Config = {
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
      flexBasis: {
        "1/3-gap-4": "calc(33.3% - (2/3 * 1rem))",
        "1/2-gap-4": "calc(50% - (2/3 * 1rem))",
        "1/3-gap-2": "calc(33.3% - (2/3 * 0.5rem))",
        "1/2-gap-2": "calc(50% - (2/3 * 0.5rem))",
        "1/3-gap-5": "calc(33.3% - (2/3 * 1.25rem))",
        "1/2-gap-5": "calc(50% - (1.25rem/2))",
      },
    },
  },
  plugins: [],
}
export default config
