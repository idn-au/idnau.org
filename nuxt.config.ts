// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/sass/main.scss"],
    // devtools: { enabled: true },
    // typescript: {
    //     typeCheck: true
    // },
    modules: ["@nuxt/content", "@bootstrap-vue-next/nuxt", "@vesp/nuxt-fontawesome", "nuxt-time"],
    content: {
        documentDriven: true,
        experimental: {
            search: {
                indexed: true
            }
        },
        markdown: {
            anchorLinks: false
        }
    },
    compatibilityDate: "2024-07-26",
});