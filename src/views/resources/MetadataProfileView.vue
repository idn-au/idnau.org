<script setup>
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2 class="resource-title">
        IDN Metadata Profile
        <small><LinkWrapper class="resource-btn" href="https://data.idnau.org/pid/cp/guide" target="_blank" rel="noopener noreferrer">IDN Guidance page</LinkWrapper></small>
    </h2>
    <p>In this project the <a href="https://www.w3.org/TR/vocab-dcat-2/" target="_blank" rel="noopener noreferrer">W3C recommended Data Catalog Vocabulary (DCAT) - Version 2</a>, which is a metadata model, has been extended to include the Indigenous Data Characteristics being trialled (see the Metadata Entry Tool).</p>
    <p>These standard characteristics are then used to:</p>
    <ul>
        <li>mandate a minimum set of metadata elements related to Indigenous Data Governance and Sovereignty</li>
        <li>allow for the modelling of certain Agent (person and organisation) roles in relation to data important for Indigenous Governance</li>
        <li>provide mappings from DCAT metadata to data rating systems such as those for FAIR and CARE Principles.</li>
    </ul>
</template>

<style lang="scss" scoped>
</style>