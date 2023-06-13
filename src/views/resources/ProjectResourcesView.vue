<script setup>
import CardLink from "@/components/CardLink.vue";
import links from "@/utils/resourceLinks";
</script>

<template>
    <h2>IDN Catalogue Project Resources</h2>
    <p>This page contains resources gathered and created during the IDN Catalogue project. The first two rows mirror the Home Page links but there are direct links included if you wish to open the resource page directly and bypass this web site.</p>
    <p>Further presentations and resources will be added to this page as they are released.</p>
    <div class="resource-cards">
        <CardLink v-for="card in links" v-bind="card"/>
    </div>
</template>

<style lang="scss" scoped>
.resource-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
}
</style>