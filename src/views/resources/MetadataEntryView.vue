<script setup>
import { RouterLink } from "vue-router";
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2 class="resource-title">
        Metadata Entry Tool
        <small><LinkWrapper class="resource-btn" href="https://metadata.idnau.org" target="_blank" rel="noopener noreferrer">Metadata Entry Tool</LinkWrapper></small>
    </h2>
    <p>In order to catalogue Indigenous data, the metadata describing the data needs to be collected and stored in a standardised way - as outlined on the <RouterLink to="/resources/characterisingindigenousdata">Characterising Indigenous Data</RouterLink> page and explained in the <a href="https://data.idnau.org/pid/cp/guide" target="_blank" rel="noopener noreferrer">Metadata Profile</a>.</p>
    <p>The Metadata Entry Tool allows you to complete the information required for describing the Indigenous Data to be <a href="https://data.idnau.org/c/catalogs/pd:democat" target="_blank" rel="noopener noreferrer">catalogued</a> and to see how your entered information meets FAIR data principles. This information can then be saved and shared in a machine-readable standard for describing web resources and data interchange known as Resource Description Framework or RDF. There are a number of attributes that must be completed but it is hoped that all attributes will be completed to give a fuller description of the data.</p>
</template>

<style lang="scss" scoped>
</style>