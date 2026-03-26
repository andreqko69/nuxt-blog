import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: { port: 3001 },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Sloppy Blog",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "description", content: "Sloppy Blog by Kogaro" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["zod/mini", "better-auth/client/plugins", "better-auth/vue", "tailwind-merge"],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
