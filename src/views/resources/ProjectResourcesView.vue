<script setup>
import CardLink from "@/components/CardLink.vue";
import links from "@/utils/resourceLinks";
</script>

<template>
    <h2>IDN Catalogue Project Resources</h2>
    <p>This page contains resources gathered and created during the IDN Catalogue project. The first two rows mirror the Home Page links but there are direct links included if you wish to open the resource page directly and bypass this web site.</p>
    <p>
        Recordings from the Indigenous Data Governance and Sovereignty Roundtable June 9-10, 2022:
        <ul>
            <li><a href="https://vimeo.com/showcase/9885109/video/759329289" target="_blank" rel="noopener noreferrer">Introduction and Key Issues</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/759329294" target="_blank" rel="noopener noreferrer">Indigenous Data Governance and Sovereignty in action in a Community Controlled Organisation</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/759329313" target="_blank" rel="noopener noreferrer">National Indigenous Data Catalogue & Practical applications of Indigenous Data Governance</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/759329319" target="_blank" rel="noopener noreferrer">Traditional Knowledge and Bicultural Labels</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/763232666" target="_blank" rel="noopener noreferrer">Co-Designing an Indigenous Data Roadmap and Building Capability</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/763232681" target="_blank" rel="noopener noreferrer">The EU and the GDPR experience - Strategic Opportunities</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/763232690" target="_blank" rel="noopener noreferrer">Considerations of Museums and Galleries</a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/763232703" target="_blank" rel="noopener noreferrer">Federated Data Models </a></li>
            <li><a href="https://vimeo.com/showcase/9885109/video/763232712" target="_blank" rel="noopener noreferrer">The Data that Communities Need</a></li>
        </ul>
    </p>
    <div class="resource-cards">
        <CardLink v-for="card in links" v-bind="card"/>
    </div>
</template>

<style lang="scss" scoped>
.resource-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
}
</style>