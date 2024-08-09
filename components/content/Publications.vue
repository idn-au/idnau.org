<script lang="ts" setup>
import type { Publication as PublicationType } from "~/types";
import results from "./publications.json";
</script>

<template>
    <div class="publications">
        <Publication v-for="result in (results as PublicationType[])" v-bind="result" />
    </div>
</template>

<style lang="scss" scoped>
.publications {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
</style>