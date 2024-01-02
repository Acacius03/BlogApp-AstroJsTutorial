import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://Acacius03.github.io',
  base: '/blog-app-tutorial',
  integrations: [preact()]
});