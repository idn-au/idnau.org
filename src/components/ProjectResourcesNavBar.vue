<script setup>
import { RouterLink } from "vue-router";
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <nav id="resources-nav">
        <RouterLink to="/resources/findingindigenousdata">Finding Indigenous Data</RouterLink>
        <RouterLink to="/resources/characterisingindigenousdata">Characterising Indigenous Data</RouterLink>
        <RouterLink to="/resources/senddatatous">Send Your Data to Us</RouterLink>
        <RouterLink to="/resources/indigenousdatagovernance">Indigenous Data Governance</RouterLink>
        <RouterLink to="/resources/iircproject">IIRC Project Plan</RouterLink>
        <RouterLink to="/resources/faircare">FAIR, CARE, TK & Indigenous Data</RouterLink>
        <a href="http://" target="_blank">IDN Metadata Profile <i class="fa-regular fa-arrow-up-right-from-square"></i></a>
        <a href="https://idn-au.github.io/idn-metadata-creator/" target="_blank">Metadata Entry Tool <i class="fa-regular fa-arrow-up-right-from-square"></i></a>
        <LinkWrapper href="http://idn.kurrawong.net/catprez" target="_blank">IDN Catalogue <i class="fa-regular fa-arrow-up-right-from-square"></i></LinkWrapper>
        <a href="http://idn.kurrawong.net/vocab" target="_blank">IDN Vocabs <i class="fa-regular fa-arrow-up-right-from-square"></i></a>
        <a href="https://idn-au.github.io/idn-catalogue-profile/profile.html" target="_blank">IDN Catalogue Profile <i class="fa-regular fa-arrow-up-right-from-square"></i></a>
    </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

nav#resources-nav {
    display: flex;
    flex-direction: column;
    height: calc(100% + 40px);
    background-color: #dfdfdf;
    margin: -20px;
    min-width: 280px;

    a {
        padding: 12px;
        color: $primary;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

        &:hover, &.router-link-active {
            color: white;
            background-color: $primary;
        }
    }
}
</style>