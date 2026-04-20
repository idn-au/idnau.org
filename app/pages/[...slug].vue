<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
	if (route.path.split("/").some(s => s.startsWith("_"))) {
		return undefined;
	} else {
		return queryCollection("content")
			.path(route.path)
			.first();
	}
});

useHead({
	titleTemplate: (titleChunk) => {
		let title = "The Indigenous Data Commons";
		if (page.value) {
			if (page.value.path !== "/") {
				title = `${page.value.title} | ${title}`;
			}
		} else {
			title = `Not found | ${title}`;
		}
		return title;
	}
});
</script>

<template>
	<ContentRenderer v-if="page" :value="page" />
	<div v-else>
		<h1>Page not found</h1>
		<p>Sorry, this page does not exist. <NuxtLink to="/">Go home</NuxtLink>.</p>
	</div>
</template>
