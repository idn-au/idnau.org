<script lang="ts" setup>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faFacebookF, faLinkedinIn, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("content").path(route.path).first();
});

useHead({
	titleTemplate: (titleChunk) => {
		let title = "The Indigenous Data Network";
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
