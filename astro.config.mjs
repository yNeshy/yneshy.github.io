import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://yneshy.github.io',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
});
