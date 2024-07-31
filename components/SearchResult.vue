<script lang="ts" setup>
const props = defineProps<{
    id: string;
    score: number;
    terms: string[];
    queryTerms: string[];
    match: { [term: string]: string[] };
    title: string;
    content: string;
    titles?: string[];
}>();
</script>

<template>
    <div class="search-result">
        <div class="title">{{ props.title }}</div>
        <div class="content">{{ props.content }}</div>
    </div>
</template>

<style lang="scss" scoped></style>