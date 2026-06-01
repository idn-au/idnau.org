<script setup lang="ts">
const props = defineProps<{
	reverse?: boolean;
}>();
</script>

<template>
	<div :class="`flex ${props.reverse ? 'flex-row-reverse' : 'flex-row'}`">
		<div class="flex-1 border aspect-square">
			image
		</div>
		<div class="flex-1 p-20">
			<slot name="title" mdc-unwrap="p" />
			<slot />
			<div class="flex flex-row gap-4 *:flex-1">
				<slot name="buttons" mdc-unwrap="p" />
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>