<script lang="ts" setup>
const props = defineProps<{
    img: string;
}>();

const image = useImage();

const backgroundImage = computed(() => {
    const imgUrl = image(props.img, { width: 1160 });
    return `url('${imgUrl}')`;
});
</script>

<template>
    <div class="hero flex bg-cover bg-center p-6 min-h-[400px] -mx-5" :style="{ backgroundImage }">
        <div class="m-auto w-full sm:w-2/3 px-6 py-4 bg-secondary/40 backdrop-blur-sm rounded-lg text-foreground text-center text-sm sm:text-base">
            <slot />
        </div>
    </div>
</template>

<style scoped>
:deep(h1, h2, h3, h4, h5, h6) {
    color: var(--color-foreground);
}
</style>