import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://teacup404.github.io",
  base: "FlashServer-Docs",
  integrations: [
    starlight({
      title: "FlashServer",
      // favicon: "./src/assets/FlashServer.png",
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/TeaCup404/FlashServer",
        linkedin: "https://www.linkedin.com/in/gabriel-bogdanovsky/",
      },
      sidebar: [
        {
          label: "Welcome",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Getting Started!",
              slug: "welcome/getting-started",
            },
            {
              label: "Installation and Setup",
              slug: "welcome/install-and-setup",
            },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Layers",
              slug: "core-concepts/layers",
            },
            {
              label: "Models",
              slug: "core-concepts/models",
            },
            {
              label: "Manipulation Managers",
              slug: "core-concepts/manipulation-managers",
            },
            {
              label: "Controllers",
              slug: "core-concepts/controllers",
            },
          ],
        },
        {
          label: "Learn The Basics",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Project Structure",
              slug: "basics/project-structure",
            },
            {
              label: "Managers",
              slug: "basics/managers",
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
