<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<div :class="cn('flex flex-row justify-around gap-8 max-w-[1000px] mx-auto max-h-[260px]', props.class)">
		<slot />
	</div>
</template>

<style scoped>

</style>