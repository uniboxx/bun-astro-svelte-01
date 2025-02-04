// @ts-check
import { defineConfig } from 'astro/config';

import pkg from './package.json';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://uniboxx.github.io',
  base: `/${pkg.name}`,
  integrations: [svelte(), db()],

  vite: {
    plugins: [tailwindcss()],
  },
});