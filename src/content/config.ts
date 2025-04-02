import { defineCollection,z } from "astro:content";


const books=defineCollection({
    schema:z.object({
        title:z.string(),
        author:z.string(),
        readtime: z.number(),
img:z.string(),
description:z.string()

    })
})

const sliders=defineCollection({
    schema:z.object({
        title:z.string(),
        img:z.string(),
        description:z.string()

    })
})
export const collections={books,sliders}
