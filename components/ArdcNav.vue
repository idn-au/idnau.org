<script lang="ts" setup>
import { ChevronDown, ChevronUp } from "lucide-vue-next";

const route = useRoute();

const { data } = await useAsyncData("ardc", () => fetchContentNavigation(queryContent("/research/ardc")));

const results = computed(() => data.value?.[0].children?.[0].children);
</script>

<template>
    <nav class="flex flex-row flex-wrap gap-2">
        <template v-for="(link, index) of results">
            <ShadDropdownMenu v-if="link.children && link.children.length > 1" v-slot="{open}">
                <ShadDropdownMenuTrigger as-child>
                    <ShadButton variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link._path) ? 'border-b-isu-red' : ''}`">
                        {{ link.children.find(c => c._path === link._path)?.title || link.title }}
                        <ChevronUp v-if="open" class="size-4" />
                        <ChevronDown v-else class="size-4" />
                    </ShadButton>
                </ShadDropdownMenuTrigger>
                <ShadDropdownMenuContent class="w-56 nav-dropdown">
                    <ShadDropdownMenuItem v-if="link.children.find(c => c._path === link._path)" :class="`rounded-none border-l-2 border-l-transparent ${route.path === link._path ? 'border-l-isu-red' : ''}`" as-child>
                        <NuxtLink :to="link._path" class="font-bold cursor-pointer">
                            {{ link.children.find(c => c._path === link._path)?.title }} Home
                        </NuxtLink>
                    </ShadDropdownMenuItem>
                    <ShadDropdownMenuLabel v-else as-child>{{ link.title }}</ShadDropdownMenuLabel>
                    <ShadDropdownMenuSeparator />
                    <ShadDropdownMenuGroup>
                        <ShadDropdownMenuItem v-for="child in link.children" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child._path) ? 'border-l-isu-red' : ''}`" as-child>
                            <NuxtLink v-if="child._path !== link._path" :to="child._path" class="cursor-pointer">{{ child.title }}</NuxtLink>
                        </ShadDropdownMenuItem>
                    </ShadDropdownMenuGroup>
                </ShadDropdownMenuContent>
            </ShadDropdownMenu>
            <ShadButton v-else variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path === link._path ? 'border-b-isu-red' : ''}`" as-child>
                <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
            </ShadButton>
        </template>
    </nav>
</template>

<style scoped>
.ardc-nav {
    overflow-x: auto;
    flex-wrap: nowrap;
}

.ardc-nav .nav-item {
    flex-shrink: 0;
}
</style>