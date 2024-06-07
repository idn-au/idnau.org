<script setup>
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2 class="resource-title">
        IDN Catalogue Profile
        <small><LinkWrapper class="resource-btn" href="https://data.idnau.org/pid/cp" target="_blank" rel="noopener noreferrer">IDN Catalogue Profile</LinkWrapper></small>
    </h2>
    <p>The IDN Catalogue Profile (IDN CP) is a specialised version - a 'profile' - of the general-purpose W3C Dataset Catalog Vocabulary (<a href="https://www.w3.org/TR/vocab-dcat/">DCAT</a>). DCAT is used to "facilitate interoperability between data catalogs published on the Web". The IDN CP is used to do that but is tuned to best represent information about indigenous people and their data.</p>
    <p>The IDN CP requires the use of standard metadata fields to describe catalogued data, such as titles, descriptions, licenses and so on, but also descriptions of the following:</p>
    <ul>
        <li><strong>attribution</strong>: people and organisations with relations to the data and the roles they play</li>
        <li><strong>policies</strong>: policies that affect the data and categorisation of them</li>
    </ul>
    <p>With <em>attribution</em> and <em>policies</em> details, IDN CP information can be used to assess the indigenous data governance status of indigenous data.</p>
</template>

<style lang="scss" scoped>
</style>
