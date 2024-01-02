import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [UnoCSS({ injectReset: true }), svelte(), mdx(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
