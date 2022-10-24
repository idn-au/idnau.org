<script setup>
import { RouterView, RouterLink } from "vue-router";
import { HeaderComponent, MainComponent, FooterComponent, navLinks } from "@idn-au/idn-lib";
</script>

<template>
    <HeaderComponent :internal="true" :dev="true">
        <RouterLink v-for="link in navLinks" :to="link.url">{{ link.label }}</RouterLink>
    </HeaderComponent>
    <MainComponent>
        <RouterView />
    </MainComponent>
    <FooterComponent />
</template>

<style lang="scss">
</style>
