<script setup lang="ts">
const props = defineProps<{
	reverse?: boolean;
	images?: string[];
}>();

// const parentClass = "overflow-hidden relative";
// const logoClass = "absolute scale-250 left-[40%] -top-[30%]";

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
		image: "/img/symbol/IDC_symbol_cropped_red.svg",
		positionX: "left",
		positionY: "top",
	},
	{
		background: "bg-isu-blue",
		image: "/img/symbol/IDC_symbol_cropped_green.svg",
		positionX: "right",
		positionY: "top",
	},
	{
		background: "bg-isu-red",
		image: "/img/symbol/IDC_symbol_cropped_blue.svg",
		positionX: "left",
		positionY: "bottom",
	},
	{
		background: "bg-black",
		image: "/img/symbol/IDC_symbol_cropped_yellow.svg",
		positionX: "right",
		positionY: "bottom",
	},
];
</script>

<template>
	<div :class="`flex flex-col ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} my-12`">
		<div class="flex-1 aspect-square grid grid-cols-2 grid-rows-2 gap-4 my-auto max-md:max-w-[600px] max-md:px-2 mx-auto" ref="containerRef">
<!--			<slot name="img" mdc-unwrap="p" />-->
			<div v-for="image in props.images" class="">
				<NuxtImg :src="image" class="object-cover h-full" />
			</div>
			<div v-for="i in remaining" :class="`${placeholders[i + (props.images?.length || 0) - 1].background}`" :style="{backgroundSize: '200%', backgroundImage: `url('${placeholders[i + (props.images?.length || 0) - 1].image}')`, backgroundPositionX: placeholders[i + (props.images?.length || 0) - 1].positionX, backgroundPositionY: placeholders[i + (props.images?.length || 0) - 1].positionY}">
<!--				<IDCLogo :class="`${placeholders[i + (props.images?.length || 0) - 1].fill} ${logoClass}`" />-->
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