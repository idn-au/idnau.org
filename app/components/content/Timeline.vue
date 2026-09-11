<script setup lang="ts">
import {Clock, MapPin} from "@lucide/vue";

const props = defineProps<{
	events: EventItem[];
	highlightFirst?: boolean;
}>();
</script>

<template>
	<div class="grid grid-cols-[min-content_1fr] sm:grid-cols-[10.5rem_min-content_1fr]">
		<template v-for="(event, index) in props.events">
			<div class="max-sm:hidden text-right p-2 flex flex-col shrink-0">
				<div>{{formatDate(event.start)}}<template v-if="event.end"> - </template></div>
				<div v-if="event.end">{{formatDate(event.end)}}</div>
			</div>
			<div class="relative">
				<div class="h-full absolute left-1/2 -translate-x-1/2 bg-primary w-0.5 -z-1"></div>
				<div :class="`mt-3.5 rounded-full aspect-square size-4 border-2 border-primary ${props.highlightFirst && index === 0 ? 'bg-primary' : 'bg-background'}`"></div>
			</div>
			<div class="p-2 mb-4">
				<component :is="event.url ? 'a' : 'div'" :href="event.url" class="text-xl font-bold">{{event.title}}</component>
				<div class="sm:hidden flex flex-row items-center gap-1">
					<Clock class="size-4" /> {{formatDate(event.start)}} <template v-if="event.end"> - {{formatDate(event.end)}}</template>
				</div>
				<div v-if="event.location" class="flex flex-row items-center gap-1">
					<MapPin class="size-4" /> {{event.location}}
				</div>
				<p v-if="event.description" class="line-clamp-3 text-ellipsis m-0!">{{event.description}}</p>
			</div>
		</template>
	</div>
</template>
