<script setup>
import { RouterLink } from "vue-router";
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2>IDN Catalogue</h2>
    <LinkWrapper href="http://idn.kurrawong.net/catprez" target="_blank" rel="noopener noreferrer">IDN Catalogue</LinkWrapper>
    <p>Data, or information collected and organised for analysis and interpretation, can shape debate and guide policy decisions. In order to find, use and reuse data that has been collected, it needs to be findable and accessible (the first two principles of <RouterLink to="/resources/faircare">FAIR data</RouterLink>). When beginning this type of data inventory organisations may use a spreadsheet or shared web page for internal access. However in order to scale and share a large inventory easily it is best to catalogue your data.</p>
    <p>In broad terms, a data catalogue is an application that creates an inventory of a specified set of data using metadata. The metadata allows for search and discovery as a minimum but can also be used to describe the actual data in the dataset for interoperability and reuse at some level, depending on the metadata and vocabulary standards being used.</p>
    <p>The Indigenous Data Network's catalogue of datasets can be found here: <a href="https://w3id.org/idn/resource/" target="_blank" rel="noopener noreferrer">https://w3id.org/idn/resource/</a>.</p>
    <p>This catalogue currently contains records of publicly discoverable datasets in Australia, most of which have some relation to Indigenous Australians.</p>
    <p>The purpose of the IDN catalogue is NOT to act as a master catalogue of Indigenous data in Australia, but to demonstrate improved metadata models and rating systems for data and metadata in order to improve Indigenous Data Governance.</p>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";


</style>