<script setup>
import { computed } from "vue";
import BubbleLink from "@/components/BubbleLink.vue";
import links from "@/utils/resourceLinks";

const topLinks = computed(() => links.filter(link => link.row === "top"));
const bottomLinks = computed(() => links.filter(link => link.row === "bottom"));
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
    <div class="bubbles">
        <BubbleLink v-for="link in topLinks" v-bind="link"/>
    </div>
    <div class="bubbles">
        <BubbleLink v-for="link in bottomLinks" v-bind="link" :small="true" />
    </div>
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
}
</style>