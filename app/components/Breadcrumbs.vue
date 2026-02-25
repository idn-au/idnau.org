<script setup lang="ts">
import { findPageBreadcrumb } from '@nuxt/content/utils'
import type {ContentNavigationItem} from "@nuxt/content";

const route = useRoute();

const props = defineProps<{
	navigation: ContentNavigationItem[];
}>();

const breadcrumbs = computed(() => findPageBreadcrumb(props.navigation, route.path, {indexAsChild: true}));

const currentPage = computed(() => breadcrumbs.value[breadcrumbs.value.length - 1]?.children?.find(c => c.path === route.path));
</script>

<template>
    <Breadcrumb v-if="route.path !== '/' && breadcrumbs.length > 0">
        <BreadcrumbList class="p-0 list-none">
            <template v-if="route.path !== props.navigation?.[0].path">
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <NuxtLink :to="props.navigation?.[0].path">{{ props.navigation?.[0].title }}</NuxtLink>
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