/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // or if not using the `src` directory:
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
