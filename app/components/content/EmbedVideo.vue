<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const props = defineProps<{
	url: string;
	class?: HTMLAttributes["class"];
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
	<iframe :class="cn('rounded-xl overflow-hidden w-min border aspect-video h-auto', props.class)" :src="source" width="560" height="315" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe>
</template>

<style scoped>

</style>