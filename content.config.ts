import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: "page",
            source: {
                include: "**/*.md",
                exclude: ["**/_*.md", "**/_*/*.md"],
            },
            schema: z.object({
                tags: z.string().array(),
            }),
        }),
    },
});
