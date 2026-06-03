<script setup lang="ts">
const props = defineProps<{
	url: string;
}>();

const source = computed(() => {
	const {host, pathname, searchParams} = URL.parse(props.url);
	if (host === "www.youtube.com") {
		if (pathname === "/playlist") {
			const id = searchParams.get("list");
			return `https://www.youtube.com/embed/videoseries?list=${id}`;
		} else {
			const id = searchParams.get("v");
			return `https://www.youtube.com/embed/${id}`;
		}
	} else if (host === "vimeo.com") {
		if (pathname.startsWith("/showcase/")) {
			const id = pathname.replace("/showcase/", "");
			return `https://vimeo.com/album/${id}/embed`;
		} else {
			const id = pathname;
			return `https://player.vimeo.com/video${id}`;
		}
	} else {
		return props.url;
	}
});
</script>

<template>
	<div>
		<h3><slot name="title" mdc-unwrap="p" /></h3>
		<slot />
		<div class="rounded-xl overflow-hidden w-min border">
			<iframe :src="source" width="560" height="315" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>
		</div>
	</div>
</template>

<style scoped>

</style>