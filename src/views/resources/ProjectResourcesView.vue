<script setup>
import CardLink from "@/components/CardLink.vue";
import links from "@/utils/resourceLinks";
</script>

<template>
    <h2>IDN Catalogue Project Resources</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maiores nemo quae harum, laboriosam dolorum aperiam, minima doloribus, possimus sapiente quibusdam non suscipit fugit corporis est aut. Dolorum, fuga mollitia!</p>
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