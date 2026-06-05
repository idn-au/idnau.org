<script setup lang="ts">
import {Search, X} from "@lucide/vue";
import {videos} from "~/utils/videos";
import type {VideoItem} from "~/utils/types";

const q = ref("");

const filteredVideos = computed(() => {
	return (videos as VideoItem[]).filter(p =>
		p.title.toLowerCase().includes(q.value.toLowerCase())
		|| p.description?.toLowerCase().includes(q.value.toLowerCase())
	).sort((a, b) => a.title.localeCompare(b.title)).sort((a, b) => b.date - a.date);
});
</script>

<template>
	<div>
		<div class="mx-auto max-w-sm">
			<InputGroup>
				<InputGroupInput type="search" autofocus name="q" v-model="q" placeholder="Search videos..." />
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<InputGroupButton size="icon-sm" variant="link" class="text-muted-foreground hover:text-foreground" @click="q = ''">
						<X class="size-4" />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
		<HoverGrid class="grid-cols-4">
			<VideoCard v-for="video in filteredVideos" v-bind="video" />
		</HoverGrid>
	</div>
</template>

<style scoped>

</style>