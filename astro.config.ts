// @ts-check
import { defineConfig } from 'astro/config';

import pkg from './package.json';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://uniboxx.github.io',
  base: `/${pkg.name}`,
  integrations: [svelte()],
});
