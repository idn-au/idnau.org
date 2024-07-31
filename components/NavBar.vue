<script lang="ts" setup>
import type { NavItem } from "~/types";

const props = withDefaults(defineProps<{
    items: NavItem[];
    sidenav?: boolean;
    center?: boolean;
    small?: boolean;
}>(), {
    sidenav: false,
    center: false,
    small: false,
});

const route = useRoute();
</script>

<template>
    <nav :class="`${props.center ? 'center' : ''} ${props.small ? 'small' : ''}`">
        <slot name="left"></slot>
        <NavItem v-for="item in props.items" v-bind="item" />
        <slot name="right"></slot>
    </nav>
</template>

<style lang="scss" scoped>
.center {
    justify-content: center;
}

.small {
    height: 36px;
}
</style>