<script setup>
import { RouterView, RouterLink } from "vue-router";
import { HeaderComponent, MainComponent, FooterComponent, navLinks } from "@idn-au/idn-lib";
import idnLogo from "@/assets/images/idn-logo-250.png";

const banners = [
    {
        "type": "dev",
        "message": "This webpage is to communicate the work of the IDN Catalogue Project. Technical outcomes are in progress and finalisation is subject to the consensus and agreement of the communities of Indigenous research data custodians that support the project partners."
    }
]
</script>

<template>
    <HeaderComponent :internal="true" :banners="banners">
        <template #logo-link>
            <RouterLink id="idn-logo" to="/">
                <img :src="idnLogo" alt="IDN Logo" />
            </RouterLink>
        </template>
        <template #heading-link>
            <RouterLink to="/">
                <h2>IDN Catalogue Project</h2>
            </RouterLink>
        </template>
        <template #links>
            <RouterLink v-for="link in navLinks" :to="link.url">{{ link.label }}</RouterLink>
        </template>
    </HeaderComponent>
    <MainComponent>
        <RouterView />
    </MainComponent>
    <FooterComponent />
</template>

<style lang="scss">
#main-content {
    max-width: unset !important;
}
</style>
