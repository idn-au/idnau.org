<script setup>
import ProjectResourcesNavBar from "@/components/ProjectResourcesNavBar.vue";
</script>

<template>
    <div id="resources-content-wrapper">
        <ProjectResourcesNavBar />
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