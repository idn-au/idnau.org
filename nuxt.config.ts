// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/sass/main.scss"],
    devtools: { enabled: true },
    // typescript: {
    //     typeCheck: true
    // },
    modules: ["@nuxt/content"],
    content: {
        documentDriven: true,
        experimental: {
            search: true
        }
    },
    compatibilityDate: "2024-07-26",
});