// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tukemono-hu.github.io',
  base: '/Eigo-House',
  trailingSlash: 'always',
  integrations: [sitemap()],
});