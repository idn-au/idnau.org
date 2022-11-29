<script setup>
import CardLink from "@/components/CardLink.vue";

const links = [
    {
        "label": "Finding Indigenous data",
        "description": "desc",
        "link": "/resources/findingindigenousdata",
        "external": false,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "Characterising Indigenous Data",
        "description": "desc",
        "link": "/resources/characterisingindigenousdata",
        "external": false,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "Send your Indigenous Data to us",
        "description": "desc",
        "link": "/resources/senddatatous",
        "external": false,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "Indigenous Data Governance and Sovereignty",
        "description": "desc",
        "link": "/resources/indigenousdatagovernance",
        "external": false,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "Improving Indigenous Research Capabilities (IIRC) Project Plan",
        "description": "desc",
        "link": "/resources/iircproject",
        "external": false,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "FAIR, CARE, TK and Indigenous Data",
        "description": "desc",
        "link": "/resources/faircare",
        "external": false,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "IDN Metadata Profile",
        "description": "desc",
        "link": "",
        "external": true,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "Metadata Entry Tool",
        "description": "desc",
        "link": "https://idn-au.github.io/idn-metadata-creator/",
        "external": true,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "IDN Catalogue",
        "description": "desc",
        "link": "http://idn.kurrawong.net/catprez",
        "external": true,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "IDN Vocabs",
        "description": "desc",
        "link": "http://idn.kurrawong.net/vocab",
        "external": true,
        "icon": "",
        "iconAlt": ""
    },
    {
        "label": "IDN Catalogue Profile",
        "description": "desc",
        "link": "https://idn-au.github.io/idn-catalogue-profile/profile.html",
        "external": true,
        "icon": "",
        "iconAlt": ""
    }
];
</script>

<template>
    <h2>IDN Catalogue Project Resources</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maiores nemo quae harum, laboriosam dolorum aperiam, minima doloribus, possimus sapiente quibusdam non suscipit fugit corporis est aut. Dolorum, fuga mollitia!</p>
    <div class="resource-cards">
        <CardLink
            v-for="card in links"
            :title="card.label"
            :link="card.link"
            :icon="card.icon"
            :iconAlt="card.iconAlt"
            :external="card.external"
        >
            {{ card.description }}
        </CardLink>
    </div>
</template>

<style lang="scss" scoped>
.resource-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>