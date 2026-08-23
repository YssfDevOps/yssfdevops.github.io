import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://yssfdevops.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ar', 'fr', 'pt', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
})
