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
		<div v-if="route.path !== '/'" class="h-[400px] py-0 px-2 flex flex-col justify-end bg-cover bg-no-repeat relative -z-1 isolate" :style="{backgroundImage: `url(${page.image || defaultImage})`}">
			<div class="mx-auto max-w-[1200px] w-full">
				<h1 class="text-white text-5xl">{{page.title}}</h1>
				<p class="text-white font-bold">{{page.description}}</p>
			</div>
<!--			<NuxtImg src="/img/symbol/UoM_Indig.Data.Com_Brand_Art_RGB_Symbol_Tan_tint.svg" class="absolute h-[2500px] -top-[237%] -right-[33%] opacity-30 -z-1" />-->
			<IDCLogo class="fill-isu-yellow absolute h-[750px] w-auto -top-[50px] right-0 opacity-30 saturate-25 brightness-115 -z-1" />
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
