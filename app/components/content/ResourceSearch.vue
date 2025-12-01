<script lang="ts" setup>
import { ArrowRight } from "lucide-vue-next";
import Card from "./Card.vue";

const { data: pages } = await useAsyncData("resources", () => {
    return queryCollection("content").where("path", "LIKE", "/resources/%").select("title", "description", "path", "tags", "websiteURL").all();
});

const searchTerm = ref("");
// const activeTag = ref("");

const results = computed(() => {
    return pages.value?.filter(p => p.title.toLowerCase().includes(searchTerm.value.toLowerCase())
            || p.description.toLowerCase().includes(searchTerm.value.toLowerCase())
            || p.tags.some(t => t.toLowerCase().includes(searchTerm.value.toLowerCase())))
        .sort((a, b) => a.title.localeCompare(b.title))
        || [];
});
const tags = computed(() => [...new Set(results.value.map(r => r.tags).flat())].sort()); // store tag count?
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
            <Input type="search" v-model="searchTerm" placeholder="Search for a resource" />
            <!-- {{ tags }} -->
        </div>
        <div v-if="results.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
	        <div v-for="result in results" class="h-full border rounded-xl p-6 flex flex-col">
		        <NuxtLink :to="result.path" class="grow">
			        <h3 class="!m-0 font-normal text-xl">{{ result.title }}</h3>
			        <p v-if="result.description" class="line-clamp-3 text-sm text-muted-foreground !my-2">{{ result.description }}</p>
		        </NuxtLink>
<!--		        <div v-if="result.tags" class="flex flex-row flex-wrap gap-1 mb-2">-->
<!--			        <Badge v-for="tag in result.tags">{{tag}}</Badge>-->
<!--		        </div>-->
		        <LinkButton v-if="result.websiteURL" size="sm" variant="outline" :to="result.websiteURL" class="ml-auto">Go <ArrowRight class="size-4" /></LinkButton>
	        </div>
        </div>
        <div v-else>No resources found.</div>
    </div>
</template>
