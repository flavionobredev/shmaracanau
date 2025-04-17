// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-12",
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0097f4" },
        {
          name: "keywords",
          content:
            "comunidade católica shalom, católico, maracanau, shalom, eventos católicos, missas, serviços religiosos",
        },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Comunidade Católica Shalom Maracanaú" },
        { name: "description", content: "Portal da Obra Shalom Maracanaú" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/base.css"],
  colorMode: {
    preference: "dark",
  },
  routeRules: {
    "/": { prerender: true },
  },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    dbURI: process.env.DATABASE_MONGODB_URI,
  },
});