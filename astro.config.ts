import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({ injectReset: true }), svelte()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});