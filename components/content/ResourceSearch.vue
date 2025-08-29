<script lang="ts" setup>
const { data: pages } = await useAsyncData("resources", () => {
    return queryCollection("content").where("path", "LIKE", "/resources/%").select("title", "description", "path", "tags").all();
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
            <NuxtLink v-for="result in results" :to="result.path">
                <Card class="h-full hover:bg-accent transition-all">
                    <template #title>{{ result.title }}</template>
                    <template #description v-if="result.description"><p class="line-clamp-3">{{ result.description }}</p></template>
                </Card>
            </NuxtLink>
        </div>
        <div v-else>No resources found.</div>
    </div>
</template>
