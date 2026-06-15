<script setup lang="ts">
const props = defineProps<{
	timeline: TimelineItem[];
}>();
</script>

<template>
	<div>
		<div v-for="item in props.timeline" class="border-l flex flex-col relative p-2 pl-4">
			<span class="rounded-full aspect-square size-4 bg-primary absolute -left-2 top-4"></span>
			<span>{{formatDate(item.date)}}</span>
			<span>{{item.title}}</span>
			<p v-if="item.description" class="italic text-sm text-muted-foreground">
				{{item.description}}
			</p>
		</div>
	</div>
</template>
