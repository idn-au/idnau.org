<script lang="ts" setup>
import { computed } from "vue";
import BubbleLink from "@/components/BubbleLink.vue";
import links from "@/utils/resourceLinks";

const props = withDefaults(defineProps<{
    small?: boolean;
}>(), {
    small: false,
});

const filteredLinks = computed(() => links.filter(link => props.small ? link.row === "bottom" : link.row === "top"));
</script>

<template>
    <div :class="`bubbles ${props.small ? 'small' : ''}`">
        <BubbleLink v-for="link in filteredLinks" v-bind="link" :small="props.small" />
    </div>
</template>

<style lang="scss" scoped>
.bubbles {
    padding: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 12px;

    &.small {
        
    }
}
</style>