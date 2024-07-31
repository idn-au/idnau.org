<script lang="ts" setup>
import type { NavItem } from "~/types";

const props = defineProps<NavItem>();
</script>

<template>
    <div v-if="props.items" class="dropdown">
        <div>{{ props.label }}</div>
        <NuxtLink :to="props.to">{{ props.label }}</NuxtLink>
        <NavItem v-for="subitem in props.items" v-bind="subitem" />
    </div>
    <NuxtLink v-else :to="props.to">{{ props.label }}</NuxtLink>
</template>

<style lang="scss" scoped>

</style>