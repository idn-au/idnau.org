import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxt/image", "shadcn-nuxt"],
    colorMode: {
        classPrefix: "",
        classSuffix: "",
    },
    css: ["~/assets/css/tailwind.css", "~/assets/css/style.css"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    app: {
        head: {
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap", type: "text/css" }
            ]
        }
    },
    shadcn: {
        prefix: "",
        componentDir: "./components/ui"
    },
    image: {
        provider: "none",
    },
});