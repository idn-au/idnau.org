<script setup>
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2 class="resource-title">
        IDN Catalogue Profile
        <small><LinkWrapper class="resource-btn" href="https://idn-au.github.io/idn-catalogue-profile/profile.html" target="_blank" rel="noopener noreferrer">IDN Catalogue Profile</LinkWrapper></small>
    </h2>
    <p>The IDN Catalogue is based on the W3C Dataset Catalog Vocabulary (<a href="https://www.w3.org/TR/vocab-dcat-2/" target="_blank" rel="noopener noreferrer">DCATv2</a>) which is "an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogues, publishers increase discoverability and enable (other) applications easily to consume metadata."</p>
    <p>A 'profile' means the standard, in this case DCAT, has been extended without changing the underlying model or structure of DCAT. Profiles aim to increase interoperability within a community of users by introducing constraints, extensions or combinations on the use of more general specifications. If data conforms to the IDN Catalogue Profile, it will also conform to DCAT.</p>
    <p>Where DCAT is designed for the representation of data catalogues and their content in general, the IDN Catalogue Profile of it aims to cater for the enhanced representation of Indigenous data governance. </p>
</template>

<style lang="scss" scoped>
</style>