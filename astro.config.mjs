// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  image: {
  service: passthroughImageService(),
  domains: ["astro.build"],
},
  site: "https://example.com",
  integrations: [sitemap()],
});