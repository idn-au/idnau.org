<script setup lang="ts">
import { Home } from "@lucide/vue";
import { findPageBreadcrumb } from "@nuxt/content/utils";
import type {ContentNavigationItem} from "@nuxt/content";
import {getNavigation} from "~/utils/helpers";

const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () => getNavigation(), {
	default: () => [] as ContentNavigationItem[],
});

const breadcrumbs = computed(() => findPageBreadcrumb(navigation.value, route.path, {indexAsChild: true}));

const currentPage = computed(() => breadcrumbs.value[breadcrumbs.value.length - 1]?.children?.find(c => c.path === route.path));
</script>

<template>
    <Breadcrumb v-if="route.path !== '/' && breadcrumbs.length > 0">
        <BreadcrumbList class="p-0 list-none">
            <template v-if="route.path !== navigation?.[0].path">
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <NuxtLink :to="navigation?.[0].path">
	                        <Home v-if="navigation?.[0].path === '/'" class="size-4" />
	                        <template v-else>{{ navigation?.[0].title }}</template>
                        </NuxtLink>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
            </template>
            <template v-for="crumb in breadcrumbs">
                <template v-if="crumb.path !== currentPage?.path">
                    <BreadcrumbItem>
                        <BreadcrumbPage v-if="crumb.page === false">{{ crumb.title }}</BreadcrumbPage>
                        <BreadcrumbLink v-else as-child>
                            <NuxtLink :to="crumb.path">{{ crumb.title }}</NuxtLink>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </template>
            </template>
            <BreadcrumbItem>
                <BreadcrumbPage>
                    <!-- find the current page in breadcrumbs to display -->
                    {{ currentPage?.title }}
                </BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
</template>