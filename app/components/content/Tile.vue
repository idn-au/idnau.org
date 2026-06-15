<script lang="ts" setup>
import type {HTMLAttributes} from "vue";
import {NuxtLink} from "#components";
import {cn} from "~/lib/utils";

const props = defineProps<{
	to: string;
	img?: string;
	class?: HTMLAttributes["class"];
}>();

const internal = computed(() => props.to.startsWith("/"));
</script>

<template>
	<div class="flex items-center justify-center">
		<component
			:is="internal ? NuxtLink : 'a'"
			:to="internal ? props.to : undefined"
			:href="internal ? undefined : props.to"
			:class="cn('aspect-square flex items-center justify-center border rounded-4xl p-4 relative dark bg-secondary hover:no-underline! hover:scale-110 transition-transform h-full', props.class)"
		>
			<NuxtImg v-if="props.img" :src="props.img" class="absolute" />
			<span class="text-white! z-1 text-center text-base md:text-2xl font-bold">
				<slot mdc-unwrap="p"/>
			</span>
		</component>
	</div>
</template>
