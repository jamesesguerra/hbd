import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  jsx: {
    factory: "React.createElement",
    fragment: "React.Fragment"
  }
});