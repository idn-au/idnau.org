<script setup lang="ts">
const props = defineProps<{
	reverse?: boolean;
	images?: string[];
}>();

const parentClass = "overflow-hidden relative";
const logoClass = "absolute scale-250 left-[40%] -top-[30%]";

const remaining = computed(() => {
	if (!props.images) {
		return 4;
	} else {
		if (props.images.length >= 4) {
			return 0;
		} else {
			return 4 - props.images.length;
		}
	}
});

const placeholders = [
	{
		background: "dark bg-secondary",
		fill: "fill-isu-red",
	},
	{
		background: "bg-isu-blue",
		fill: "fill-isu-green",
	},
	{
		background: "bg-isu-red",
		fill: "fill-isu-blue",
	},
	{
		background: "bg-black",
		fill: "fill-isu-yellow",
	},
];
</script>

<template>
	<div :class="`flex ${props.reverse ? 'flex-row-reverse' : 'flex-row'} my-12`">
		<div class="flex-1 aspect-square grid grid-cols-2 grid-rows-2 gap-4 my-auto">
<!--			<slot name="img" mdc-unwrap="p" />-->
			<div v-for="image in props.images" class="">
				<NuxtImg :src="image" class="object-cover h-full" />
			</div>
			<div v-for="i in remaining" :class="`${parentClass} ${placeholders[i + (props.images?.length || 0) - 1].background}`">
				<IDCLogo :class="`${placeholders[i + (props.images?.length || 0) - 1].fill} ${logoClass}`" />
			</div>
		</div>
		<div class="flex-1 flex flex-col gap-6 p-12 mx-auto justify-center [&_h2]:m-0 [&_h3]:m-0 [&_h4]:m-0">
			<slot name="title" mdc-unwrap="p" />
			<div class="text-sm">
				<slot />
			</div>
			<div class="flex flex-row gap-4">
				<slot name="buttons" mdc-unwrap="p" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.cq {
	container-type: size;
}
</style>