<script setup lang="ts">
const props = defineProps<{
	value: string;
}>();
</script>

<template>
	<AccordionItem :value="props.value">
		<AccordionTrigger class="text-base"><slot name="title" mdc-unwrap="p" /></AccordionTrigger>
		<AccordionContent class="text-base"><slot /></AccordionContent>
	</AccordionItem>
</template>

<style lang="css" scoped>
h3 {
	margin: 0;
}
</style>