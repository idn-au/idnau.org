<script lang="ts" setup>
import type { SearchResult } from "~/types";

const props = defineProps<SearchResult>();
</script>

<template>
    <NuxtLink class="search-result" :to="props.id">
        <div class="title">{{ props.title }}</div>
        <div class="content">{{ props.content }}</div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
@import "~/assets/sass/_variables.scss";

.search-result {
    color: unset;
    text-wrap: wrap;
    padding: 6px;
    border-radius: 0.25rem;

    &:hover {
        color: $link-color;
        background-color: #f8f9fa;
    }

    .title {
        font-size: 1.1rem;
        font-weight: bold;
    }
    .content {
        font-size: 0.9rem;
        color: #444444;
    }
}
</style>