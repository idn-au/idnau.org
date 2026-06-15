<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import { useCycleList, useIntervalFn } from "@vueuse/core";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();

const images = [
	"/img/unsplash/dylan-shaw-4LJh9TAcImw-unsplash.jpg",
	"/img/unsplash/caleb-V18GNaBeZqM-unsplash.jpg",
	"/img/unsplash/christian-bass-gB_RcoohBko-unsplash.jpg",
	"/img/unsplash/connor-home-dtmz4CDRXqw-unsplash.jpg",
	"/img/unsplash/rene-riegal-0VFr6ub7HlA-unsplash.jpg",
	"/img/unsplash/iain-gkGle4k_fwM-unsplash.jpg",
];

const seconds = 10;

const { state, next, prev, go } = useCycleList(images);
const { pause, resume, isActive } = useIntervalFn(() => {
	next();
}, 1000 * seconds);
</script>

<template>
	<div class="h-dvh -mt-[108px] md:-mt-[126px] flex items-end relative overflow-hidden">
		<Transition>
			<NuxtImg :src="state" :key="state" class="w-full h-full object-cover absolute -z-2" />
		</Transition>
		<IDCLogo class="absolute fill-white opacity-20 -z-1 -right-[30%] -bottom-[20%]" />
		<div class="text-white ml-20 mb-60 lg:w-1/2">
			<h1 class="text-5xl md:text-6xl lg:text-7xl leading-snug">
				The Indigenous Data Commons
			</h1>
		</div>
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>",