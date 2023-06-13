<script setup>
import { useRoute } from "vue-router";
import ProjectResourcesNavBar from "@/components/ProjectResourcesNavBar.vue";

const route = useRoute();
</script>

<template>
    <div id="resources-content-wrapper">
        <ProjectResourcesNavBar v-if="route.path !== '/resources'" />
        <div id="resources-content">
            <RouterView/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

#resources-content-wrapper {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-grow: 1;
}

#resources-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
}
</style>