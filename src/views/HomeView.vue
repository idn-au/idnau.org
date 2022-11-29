<script setup>
import BubbleLink from "@/components/BubbleLink.vue";
import CardLink from "@/components/CardLink.vue";

const largeLinks = [
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
    }
];

const smallLinks = [
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
    },
    {
        "label": "FAIR, CARE, TK and Indigenous Data",
        "description": "desc",
        "link": "/resources/faircare",
        "external": false,
        "icon": "",
        "iconAlt": ""
    }
];

const useBubbles = true;
</script>

<template>
    <div class="jumbo">
        <p class="jumbo-text">Welcome to the Indigenous Data Network (IDN) supporting work being trialled within the
            Australian Research Data Commons (ARDC) HASS Research Data Commons and Indigenous Research Capability
            Program projects, specifically the Improving Indigenous Research Capabilities (IIRC) Project.</p>
        <p class="jumbo-text">-</p>
        <p class="jumbo-text">The Indigenous Data Network acknowledges the Aboriginal and Torres Strait Islander
            Traditional Custodians of the lands on which we work and live.
            We pay respect to their Elders, past and present, and the place of Indigenous Knowledge in the academy and
            beyond. We acknowledge and respect that Aboriginal and Torres Strait Islander people have always used
            resources from the land and waters for nourishment, medicine and healing.</p>
    </div>
    <template v-if="useBubbles">
        <div class="bubbles">
            <BubbleLink
                v-for="link in largeLinks"
                :title="link.label"
                :link="link.link"
                :external="link.external"
            />
        </div>
        <div class="bubbles small">
            <BubbleLink
                v-for="link in smallLinks"
                :title="link.label"
                :link="link.link"
                :external="link.external"
            />
        </div>
    </template>
    <template v-else>
        <div class="card-container">
            <CardLink
                v-for="card in largeLinks"
                :title="card.label"
                :link="card.link"
                :icon="card.icon"
                :iconAlt="card.iconAlt"
                :external="card.external"
            >
                {{ card.description }}
            </CardLink>
        </div>
        <div class="card-container">
            <CardLink
                v-for="card in smallLinks"
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
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.jumbo {
    background-image: url("@/assets/images/placeholder-landscape.png");
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;

    p.jumbo-text {
        font-size: 1.4rem;
        margin: 16px 0px;
    }
}

.bubbles {
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    height: 13vw;
    min-height: 198px;
    max-height: 270px;
    font-size: 1.2rem;

    &.small {
        height: 9vw;
        margin: 0px 40px;
        min-height: 145px;
        max-height: 186px;
        font-size: 0.9rem;
    }
}

.card-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
}
</style>