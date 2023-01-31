<script setup>
import { computed } from "vue";
import BubbleLink from "@/components/BubbleLink.vue";
import links from "@/utils/resourceLinks";

const topLinks = computed(() => links.filter(link => link.row === "top"));
const bottomLinks = computed(() => links.filter(link => link.row === "bottom"));
</script>

<template>
    <div class="jumbo">
        <div class="jumbo-box">
            <p class="jumbo-text">Welcome to the Indigenous Data Network (IDN) supporting work being trialled within the
                Australian Research Data Commons (ARDC) HASS Research Data Commons and Indigenous Research Capability
                Program projects, specifically the Improving Indigenous Research Capabilities (IIRC) Project.</p>
        </div>
        <div class="jumbo-box sm">
            <p class="jumbo-text">The Indigenous Data Network acknowledges the Aboriginal and Torres Strait Islander
                Traditional Custodians of the lands on which we work and live.
                We pay respect to their Elders, past and present, and the place of Indigenous Knowledge in the academy and
                beyond. We acknowledge and respect that Aboriginal and Torres Strait Islander people have always used
                resources from the land and waters for nourishment, medicine and healing.</p>
        </div>
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
    background-image: url("@/assets/images/Milky_Way_IDN_Logo_75percent.png");
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 32px;

    .jumbo-box {
        background-color: rgba(255, 255, 255, 0.7);
        width: 60%;
        margin: 0 auto;
        padding: 12px 20px;

        p.jumbo-text {
            font-size: 1.45em;
            color: black;
        }

        &.sm {
            margin-top: 12px;
            width: 80%;
            padding: 8px 16px;

            p.jumbo-text {
                font-size: 1em;
            }
        }

        
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