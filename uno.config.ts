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
    presetIcons({
      scale: 1.2,
      collections: {
        custom: {
          circle: ` <svg width="175" height="89" viewBox="0 0 175 89" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M117.759 7.70447C121.729 8.65736 125.699 9.37201 129.498 10.6293C137.65 13.2762 145.816 16.029 153.77 19.2318C159.962 21.7271 165.37 25.841 169.427 31.1429C176.864 40.7777 176.851 51.5374 169.427 61.106C165.653 65.7149 161.041 69.5678 155.835 72.4613C144.757 78.9992 132.648 82.7049 120.101 84.968C98.2619 88.9431 75.9367 89.4923 53.9283 86.5958C42.6973 85.3244 31.7394 82.2778 21.4639 77.5698C16.5694 75.3517 12.0683 72.3524 8.13663 68.6894C-0.558489 60.259 -1.97457 49.3802 4.31186 39.044C7.73731 33.668 12.2006 29.0292 17.4405 25.3991C30.7342 15.7667 45.83 8.90748 61.8294 5.22961C87.1284 -1.04448 113.518 -1.51955 139.027 3.83995C141.091 4.30015 143.127 4.87456 145.128 5.56047C148.079 6.5663 149.098 7.77065 148.595 9.53085C148.092 11.291 146.637 11.5822 143.593 10.9734C136.755 9.63231 129.957 8.40148 123.198 7.28095C121.41 7.13528 119.613 7.13528 117.825 7.28095L117.759 7.70447ZM81.2842 82.599C91.541 81.7387 101.838 81.2093 112.041 79.9521C124.835 78.549 137.284 74.9117 148.82 69.2056C154.114 66.5587 159.289 63.4485 163.087 58.79C165.286 56.2365 166.991 53.2972 168.116 50.1213C170.221 43.332 167.19 37.7205 162.677 32.8502C159.044 29.0597 154.639 26.0943 149.76 24.155C124.177 13.4747 97.6554 8.84262 69.9289 11.9395C66.7791 12.2836 63.616 13.5144 60.3338 12.2836C59.6721 12.0322 58.6928 12.5086 57.8987 12.7468C45.5168 16.226 33.7802 21.6876 23.1446 28.9195C18.5283 31.9451 14.4416 35.7099 11.0483 40.063C4.17951 49.3272 5.23826 58.4591 14.1716 65.7381C16.44 67.6409 18.9176 69.2793 21.5565 70.6217C25.5856 72.6445 29.7514 74.3825 34.0235 75.8229C49.3624 80.7991 65.2307 82.0299 81.2842 82.599Z" fill="black"/>
            </svg>`
        }
      }
    }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        inter: "Inter:400;500;600"
      }
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
