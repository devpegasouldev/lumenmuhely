import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Éles használat előtt cseréld a saját domainedre!
  site: 'https://www.lumenmuhely.hu',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/demo/') })],
  vite: { plugins: [tailwindcss()] },
});
