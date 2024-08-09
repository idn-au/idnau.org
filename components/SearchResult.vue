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

    &:hover {
        color: $link-color;
    }

    .title {
        font-size: 1.1rem;
        font-weight: bold;
    }
    .content {

    }
}
</style>