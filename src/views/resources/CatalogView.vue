<script setup>
import { RouterLink } from "vue-router";
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2 class="resource-title">
        IDN Catalogue
        <small><LinkWrapper class="resource-btn" href="https://data.idnau.org/c" target="_blank" rel="noopener noreferrer">IDN Catalogue</LinkWrapper></small>
    </h2>
    <p>Data, or information collected and organised for analysis and interpretation, can shape debate and guide policy decisions. In order to find, use and reuse data that has been collected, it needs to be findable and accessible (the first two principles of <RouterLink to="/resources/faircare#FAIR">FAIR data</RouterLink>). When beginning this type of data inventory organisations may use a spreadsheet or shared web page for internal access. However in order to scale and share a large inventory easily it is best to catalogue your data.</p>
    <p>In broad terms, a data catalogue is an application that creates an inventory of a specified set of data using metadata with the main purpose being the discovery of the data assets described in the catalogue via a search interface.</p>
    <p>A data catalogue uses metadata which allows for search and discovery as a minimum but can also be used to describe the actual data in the dataset for interoperability and reuse at some level, depending on the metadata and vocabulary standards being used.  Importantly, a data catalogue does not hold data. Where possible it points to where the data can be accessed.</p>
    <p>The Indigenous Data Network's catalogue of datasets can be found <LinkWrapper href="https://data.idnau.org/c" target="_blank" rel="noopener noreferrer">here</LinkWrapper>.</p>
    <p>This demonstration catalogue currently contains records of publicly discoverable datasets in Australia, most of which have some relation to Indigenous Australians.</p>
    <p>The purpose of the IDN Demonstration Catalogue is NOT to act as a master catalogue of Indigenous data in Australia, but to demonstrate improved metadata models and rating systems for data and metadata in order to improve Indigenous Data Governance.</p>
</template>

<style lang="scss" scoped>
</style>