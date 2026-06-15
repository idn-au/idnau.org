<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import {cn} from "~/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<div :class="cn('grid grid-cols-3 gap-8 max-w-[800px] mx-auto md:max-h-[260px]', props.class)">
		<slot />
	</div>
</template>

<style scoped>

</style>