<script lang="ts" setup>
import Card from "./Card.vue";
</script>

<template>
    <Card imgPosition="right" class="mb-6">
        <template v-if="$slots.name" #title><slot name="name" mdc-unwrap="p" /></template>
        <template v-if="$slots.position" #description><slot name="position" mdc-unwrap="p" /></template>
        <slot />
        <template v-if="$slots.img" #img><slot name="img" mdc-unwrap="p" /></template>
    </Card>
</template>
