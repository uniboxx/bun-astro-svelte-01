export default {
  purge: [
    './src/components/**/*.{astro,svelte}',
    './src/pages/**/*.{astro,svelte}',
    './src/layouts/**/*.{astro,svelte}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
