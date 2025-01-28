<script setup>
import LinkWrapper from "@/components/LinkWrapper.vue";
</script>

<template>
    <h2 class="resource-title">
        IDN Agents Database
        <small><LinkWrapper class="resource-btn" href="https://agentsdb.idnau.org" target="_blank" rel="noopener noreferrer">Database</LinkWrapper></small>
    </h2>
    <p>
        The Indigenous Data Network's Agents Database is a collection of people and organisations (or "agents") related to metadata in the IDN catalogue. This collection includes IDN partners, universities, government organisations and researchers. 
    </p>
    <p>
        This database of people and organisations is used to link metadata and datasets to relevant "agents" who might be responsible for the data; such as who published it, who is the maintainer, who is the contact point, etc. The IDN <a href="https://data.idnau.org/c/catalogs/pd:democat" target="_blank" rel="noopener noreferrer">demonstration catalogue</a> uses this collection of agents to link people and organisations to the metadata in the catalogue. The IDN <a href="https://metadata.idnau.org" target="_blank" rel="noopener noreferrer">Metadata Entry Tool</a> also uses this database of agents to refer to people and organisations for creating metadata. 
    </p>
    <p>
        Adding agents to the database is currently restricted to the IDN. Additional agents can be added manually in the Metadata Entry Tool form if required but this user added information will only be held within the record at this stage of the project.
    </p>
</template>

<style lang="scss" scoped>
</style>