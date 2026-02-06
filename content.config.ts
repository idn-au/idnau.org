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
                timeline: z.object({
                    title: z.string(),
                    description: z.string().optional(),
                    date: z.string(),
                }).array(),
                publications: z.object({
                    title: z.string(),
                    description: z.string().optional(),
                    date: z.string(),
                    author: z.string().array(),
                    img: z.string().optional(),
                    url: z.string(),
                }).array().optional(),
                news: z.object({
                    title: z.string(),
                    description: z.string(),
                    date: z.string(),
                    img: z.string().optional(),
                }).array().optional(),
                events: z.object({
                    title: z.string(),
                    description: z.string(),
                    start: z.string(),
                    end: z.string().optional(),
                    location: z.string().optional(),
                    url: z.string().optional(),
                    img: z.string().optional(),
                }).array().optional(),
                tags: z.string().array().optional(),
                websiteURL: z.string().optional(),
            }),
        }),
    },
});
