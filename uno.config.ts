import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { fontFamily } from "@unocss/preset-mini/theme";
// import { myPreset } from "./my-preset";

// https://unocss.dev
export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['"Inter"', fontFamily.sans],
      	satoshi: '"Satoshi", sans-serif',
      	"mena-grotesk": '"MenaGrotesk", sans-serif'
    }
  },
  rules: [],
  shortcuts: [],
  variants: [],

  preflights: [
    {
      getCSS: () => `
      :root {
        -webkit-tap-highlight-color: transparent;        
      }

      html,
      body {
        overflow-x: hidden;
        height: 100%;
      }
      `,
    },
  ],

  presets: [
    // myPreset,
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        inter: "Inter:400;500;600"
      }
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
