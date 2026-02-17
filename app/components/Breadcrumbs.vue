<script setup lang="ts">
import { findPageBreadcrumb } from '@nuxt/content/utils'

const route = useRoute();

const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("content", ["description"]));

const breadcrumbs = findPageBreadcrumb(navigation.value, route.path);
</script>

<template v-if="route.path !== '/' && breadcrumbs.length > 0">
    <Breadcrumb>
        <BreadcrumbList class="p-0 list-none">
            <template v-if="route.path !== navigation?.[0].path">
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <NuxtLink :to="navigation?.[0].path">{{ navigation?.[0].title }}</NuxtLink>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
            </template>
            <template v-for="crumb in breadcrumbs">
                <template v-if="crumb.path !== navigation?.[0].path">
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
                    {{ breadcrumbs[breadcrumbs.length - 1]?.children?.find(c => c.path === route.path)?.title }}
                </BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
</template>