import { vitePreprocess } from "@astrojs/svelte";
import { preprocessMeltUI } from "@melt-ui/pp";

const config = {
  // ... other svelte config options
  preprocess: [vitePreprocess(), preprocessMeltUI()],

  vitePlugin: {
    inspector: true
  }
};

export default config;
