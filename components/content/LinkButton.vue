<script lang="ts" setup>
// import type { BaseButtonVariant } from "bootstrap-vue-next";

const props = withDefaults(defineProps<{
    // variant?: keyof BaseButtonVariant;
    link?: string;
}>(), {
    // variant: "primary"
});
</script>

<template>
    <div class="link-btn">
        <BButton :to="props.link">
            <ContentSlot :use="$slots.default" unwrap="p" />
        </BButton>
    </div>
</template>

<style lang="scss" scoped>

</style>