<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <h2>Finding Indigenous Data</h2>
    <p>The aims of the IDN Catalogue Project are to develop a technical architecture as the foundation for an Aboriginal and Torres Strait Islander Research Data Commons, build an Aboriginal and Torres Strait Islander Spatio-temporal Framework around core National Indigenous Data Assets and develop data 'rematriation' prototyping.</p>
    <p>This work goes toward enabling the discovery of Indigenous data; supporting institutions to share data more freely and cooperatively following the FAIR (Findable, Accessible, Interoperable and Reusable) and CARE data principles (Collective benefit, Authority to control, Responsibility and Ethics) <RouterLink to="/resources/faircare"><i class="fa-regular fa-arrow-up-right-from-square"></i></RouterLink>.</p>
    <p>Discovery of any data programmatically requires standard metadata and well described vocabularies. The IDN Demonstration Catalogue is implementing the following and encourages feedback on the words and meanings used.</p>
    <ul>
        <li>Describing Indigenous Data for discovery. This was initially tested in a simple spreadsheet before moving to the online <a href="https://idn-au.github.io/idn-metadata-creator/#/" target="_blank" rel="noopener noreferrer">Metadata Creation Tool</a>. Guidance on the use of the metadata profile can be found <a href="https://w3id.org/idn/def/cp/guide" target="_blank" rel="noopener noreferrer">here</a>.</li>
        <li>Enabling <a href="https://github.com/idn-au/scores-ont" target="_blank" rel="noopener noreferrer">programmatic FAIR scoring</a></li>
        <li><a href="http://idn.kurrawong.net/vocab" target="_blank" rel="noopener noreferrer">IDN Catalogue Vocabularies</a></li>
    </ul>
</template>

<style lang="scss" scoped>
</style>