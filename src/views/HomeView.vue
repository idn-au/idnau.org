<script setup>
</script>

<template>
    <div class="jumbo">
        <p class="jumbo-text">Welcome to the Indigenous Data Network (IDN) supporting work being trialled within the Australian Research Data Commons (ARDC) HASS Research Data Commons and Indigenous Research Capability Program projects, specifically the Improving Indigenous Research Capabilities (IIRC) Project.</p>
        <p class="jumbo-text">With</p>
        <p class="jumbo-text">Acknowledgement of country</p>
    </div>
    <div class="bubbles">
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>Finding Indigenous data</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>Characterising Indigenous Data</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>Send your Indigenous Data to us</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>Indigenous Data Governance and Sovereignty</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>Improving Indigenous Research Capabilities (IIRC) Project Plan</div>
            </a>
        </div>
    </div>
    <div class="bubbles small">
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>IDN Metadata Profile</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>Metadata Entry Tool</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>IDN Catalogue</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>IDN Vocabs</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>IDN Catalogue Profile</div>
            </a>
        </div>
        <div class="bubble-wrapper">
            <a class="bubble" href="" target="_blank">
                <div>FAIR, CARE, TK and Indigenous Data</div>
            </a>
        </div>
    </div>
    <div>
        <p>Technical outcomes are in progess and finalisation is subject to the consensus and agreement of the communities of Indigenous research data custodians that will support the project partners.</p>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.jumbo {
    background-image: url("@/assets/images/placeholder.png");
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

    &.small {
        height: 9vw;
        margin: 0px 40px;
    }

    .bubble-wrapper {
        height: 100%;
        padding: 12px 0px;
        transition: padding 0.2s ease-in-out;

        &:hover {
            padding: 0px;
        }

        .bubble {
            border-radius: 50%;
            background-color: $primary;
            color: white;
            border: 3px solid $primary;
            text-align: center;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
            display: flex;
            padding: 10px;
            height: 100%;
            aspect-ratio: 1/1;

            & > div {
                margin: auto;
            }

            &:hover {
                background-color: white;
                color: $primary;
            }
        }
    }
}
</style>