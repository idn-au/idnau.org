<script lang="ts" setup>
import { findPageChildren } from "@nuxt/content/utils";
import { ChevronDown, ChevronUp } from "lucide-vue-next";

const route = useRoute();

const { data } = await useAsyncData("navigation-iirc", () => queryCollectionNavigation("content"));

const children = findPageChildren(data.value, "/research/iirc");
</script>

<template>
    <nav class="flex flex-row flex-wrap gap-2">
        <Button variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path === '/research/iirc' ? 'border-b-isu-red' : ''}`" as-child>
            <NuxtLink to="/research/iirc">IIRC Home</NuxtLink>
        </Button>
        <template v-for="(link, index) of children">
            <DropdownMenu v-if="link.children && link.children.length > 1" v-slot="{open}">
                <DropdownMenuTrigger as-child>
                    <Button variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path.startsWith(link.path) ? 'border-b-isu-red' : ''}`">
                        {{ link.children.find(c => c.path === link.path)?.title || link.title }}
                        <ChevronUp v-if="open" class="size-4" />
                        <ChevronDown v-else class="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56 nav-dropdown">
                    <DropdownMenuItem v-if="link.children.find(c => c.path === link.path)" :class="`rounded-none border-l-2 border-l-transparent ${route.path === link.path ? 'border-l-isu-red' : ''}`" as-child>
                        <NuxtLink :to="link.path" class="font-bold cursor-pointer">
                            {{ link.children.find(c => c.path === link.path)?.title }} Home
                        </NuxtLink>
                    </DropdownMenuItem>
                    <DropdownMenuLabel v-else as-child>{{ link.title }}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem v-for="child in link.children" :class="`rounded-none border-l-2 border-l-transparent ${route.path.startsWith(child.path) ? 'border-l-isu-red' : ''}`" as-child>
                            <NuxtLink v-if="child.path !== link.path" :to="child.path" class="cursor-pointer">{{ child.title }}</NuxtLink>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button v-else variant="ghost" :class="`rounded-none p-2 border-b-2 border-b-transparent ${route.path === link.path ? 'border-b-isu-red' : ''}`" as-child>
                <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
            </Button>
        </template>
    </nav>
</template>
