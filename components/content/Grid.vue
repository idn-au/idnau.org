<script lang="ts" setup>
const props = defineProps<{
    columns?: number;
    rows?: number;
}>();
</script>

<template>
    <div class="grid" :style="{ gridTemplateColumns: `repeat(${props.columns}, 1fr)`, gridTemplateRows: `repeat(${props.rows}, 1fr)` }">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    gap: 12px;
}
</style>