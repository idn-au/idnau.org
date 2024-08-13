<script lang="ts" setup>
const props = defineProps<{
    cols: number | string;
    smCols?: number | string;
    mdCols?: number | string;
    lgCols?: number | string;
}>();

const sm = computed(() => props.smCols || props.cols);
const md = computed(() => props.mdCols || props.smCols || props.cols);
const lg = computed(() => props.lgCols || props.mdCols || props.smCols || props.cols);
</script>

<template>
    <div class="grid">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(v-bind("props.cols"), 1fr); // xs

    @media (min-width: 576px) { // sm
        grid-template-columns: repeat(v-bind("sm"), 1fr);
    }

    @media (min-width: 768px) { // md
        grid-template-columns: repeat(v-bind("md"), 1fr);
    }

    @media (min-width: 992px) { // lg
        grid-template-columns: repeat(v-bind("lg"), 1fr);
    }
}
</style>