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

const defaultImage = "/img/Milky_Way_IDN_Logo_75percent-fpng.webp";
</script>

<template>
	<div v-if="page" class="prose dark:prose-invert max-w-[unset]">
		<div v-if="route.path !== '/'" class="h-[400px] py-0 px-2 flex flex-col justify-end bg-cover bg-no-repeat" :style="{backgroundImage: `url(${page.image || defaultImage})`}">
			<div class="mx-auto max-w-[1200px] w-full">
				<h1 class="text-white">{{page.title}}</h1>
				<p class="text-white font-bold">{{page.description}}</p>
			</div>
		</div>
		<div class="mx-auto max-w-[1200px]">
			<Breadcrumbs v-if="route.path !== '/'" />
			<ContentRenderer :value="page" />
		</div>
	</div>
	<div v-else>
		<h1>Page not found</h1>
		<p>Sorry, this page does not exist. <NuxtLink to="/">Go home</NuxtLink>.</p>
	</div>
</template>
