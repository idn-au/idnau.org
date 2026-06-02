<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import { useCycleList, useIntervalFn } from "@vueuse/core";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();

const images = [
	"https://picsum.photos/1200",
	"https://picsum.photos/1200/800",
	"https://picsum.photos/2000",
	"https://picsum.photos/800",
];

const { state, next, prev, go } = useCycleList(images);
const { pause, resume, isActive } = useIntervalFn(() => {
	next();
}, 10000);
</script>

<template>
	<div class="h-dvh -mt-[128px] flex items-end relative overflow-hidden">
		<Transition>
			<NuxtImg :src="state" :key="state" class="w-full h-full object-cover absolute -z-2" />
		</Transition>
		<IDCLogo class="absolute fill-white opacity-20 -z-1 -right-[30%] -bottom-[20%]" />
		<div class="text-white ml-20 mb-60 w-1/2">
			<h1 class="text-7xl leading-snug">
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
</style>