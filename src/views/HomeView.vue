<script setup>
import BubbleList from "@/components/BubbleList.vue";
</script>

<template>
    <div class="jumbo">
        <div class="jumbo-box">
            <p class="jumbo-text">
                Welcome to the Indigenous Data Network (IDN) portal. This portal communicates the technical outcomes towards a research infrastructure. 
            </p>
        </div>
    </div>
    <BubbleList />
    <BubbleList small />
    <div class="acknowledgement">
        <p>
            The Indigenous Data Network acknowledges the Aboriginal and Torres Strait Islander
            Traditional Custodians of the lands on which we work and live.
            We pay respect to their Elders, past and present, and the place of Indigenous Knowledge in the academy and
            beyond. We acknowledge and respect that Aboriginal and Torres Strait Islander people have always used
            resources from the land and waters for nourishment, medicine and healing.
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.jumbo {
    background-image: url("@/assets/images/Milky_Way_IDN_Logo_75percent-fpng.webp");
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    // flex-direction: column;
    // gap: 26px;
    padding: 48px 36px;
    margin-top: -20px;

    .jumbo-box {
        background-color: rgba(255, 255, 255, 0.6);
        // background-color: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(.5rem);
        width: 66%;
        margin: 0 auto;
        padding: 12px 28px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 6px;

        p.jumbo-text {
            font-size: 1.45em;
            color: black;
            // color: white;
            font-weight: 500;

            &.small {
                font-size: 1em;
                font-weight: unset;
            }
        }

        hr {
            width: 66%;
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.35);
        }
    }
}

.acknowledgement {
    // background-color: #eeeeee;
    font-style: italic;
    font-size: 0.9em;
    padding: 12px;
    margin-top: 12px;
}
</style>