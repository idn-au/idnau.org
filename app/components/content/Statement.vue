<script setup lang="ts">

</script>

<template>
	<div class="mx-auto max-w-4xl text-center">
		<h2><slot name="title" mdc-unwrap="p" /></h2>
		<div class="text-lg"><slot /></div>
	</div>
</template>

<style scoped>

</style>