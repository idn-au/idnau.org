<script lang="ts" setup>
const props = defineProps<{
    src?: string;
    alt?: string;
}>();
</script>

<template>
    <BCard :img-src="props.src" :img-alt="props.alt" :img-top="props.src ? true : undefined">
        <BCardTitle><slot name="title"></slot></BCardTitle>
        <slot />
    </BCard>
</template>

<style lang="scss" scoped></style>