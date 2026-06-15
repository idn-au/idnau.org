<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { findPageChildren } from "@nuxt/content/utils";

const route = useRoute();

const { data: navigation } = await useAsyncData(
	"navigation",
	() => queryCollectionNavigation("content", ["description"]),
	{
		default: () => [] as ContentNavigationItem[],
		transform: filterPartialPaths
	}
);

const children = computed(() => findPageChildren(navigation.value, route.path));
</script>

<template>
	<div v-for="child in children">
		<h2 class="font-medium">{{child.title}}</h2>
		<p>{{child.description}}</p>
		<Button class="btn" asChild>
			<NuxtLink :to="child.path">Read more</NuxtLink>
		</Button>
	</div>
</template>
