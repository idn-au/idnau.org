<script setup>
import placeholderSquare from "@/assets/images/placeholder-square.png";

const largeLinks = [
    {
        "label": "Finding Indigenous data",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],

    },
    {
        "label": "Characterising Indigenous Data",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
    },
    {
        "label": "Send your Indigenous Data to us",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
    },
    {
        "label": "Indigenous Data Governance and Sovereignty",
        "description": "desc",
        "links": [
            {
                "label": "Link 1",
                "url": ""
            },
            {
                "label": "Link 2",
                "url": ""
            }
        ],
    },
    {
        "label": "Improving Indigenous Research Capabilities (IIRC) Project Plan",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
    }
];

const smallLinks = [
    {
        "label": "IDN Metadata Profile",
        "description": "desc",
        "links": [
            {
                "label": "",
                "url": "Link"
            }
        ],
    },
    {
        "label": "Metadata Entry Tool",
        "description": "desc",
        "links": [
            {
                "label": "Link 1",
                "url": ""
            },
            {
                "label": "Link 2",
                "url": ""
            },
            {
                "label": "Link 3",
                "url": ""
            }
        ],
    },
    {
        "label": "IDN Catalogue",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
    },
    {
        "label": "IDN Vocabs",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
    },
    {
        "label": "IDN Catalogue Profile",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
    },
    {
        "label": "FAIR, CARE, TK and Indigenous Data",
        "description": "desc",
        "links": [
            {
                "label": "Link",
                "url": ""
            }
        ],
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
            <div class="bubble-wrapper" v-for="link in largeLinks">
                <a class="bubble" :href="link.url" target="_blank">
                    <div>{{ link.label }}</div>
                </a>
            </div>
        </div>
        <div class="bubbles small">
            <div class="bubble-wrapper" v-for="link in smallLinks">
                <a class="bubble" :href="link.url" target="_blank">
                    <div>{{ link.label }}</div>
                </a>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="card-container">
            <div class="card" v-for="card in largeLinks">
                <div class="card-icon"><img :src="placeholderSquare" alt="placeholder icon"></div>
                <h4 class="card-title">{{ card.label }}</h4>
                <div class="card-description">{{ card.description }}</div>
                <div class="card-buttons">
                    <a :href="link.url" class="button" v-for="link in card.links">{{ link.label }} <i
                            class="fa-regular fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
        <div class="card-container">
            <div class="card" v-for="card in smallLinks">
                <div class="card-icon"><img :src="placeholderSquare" alt="placeholder icon"></div>
                <h4 class="card-title">{{ card.label }}</h4>
                <div class="card-description">{{ card.description }}</div>
                <div class="card-buttons">
                    <a :href="link.url" class="button" v-for="link in card.links">{{ link.label }} <i
                            class="fa-regular fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    </template>
    <div>
        <p>This webpage is to communicate the work of the IDN Catalogue Project. Technical outcomes are in progress and
            finalisation is subject to the consensus and agreement of the communities of Indigenous research data
            custodians that support the project partners.</p>
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

            &>div {
                margin: auto;
            }

            &:hover {
                background-color: white;
                color: $primary;
            }
        }
    }
}

.card-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;

    .card {
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        background-color: #e2e2e2;
        flex-basis: 0;
        flex-grow: 1;
        gap: 12px;
        padding: 12px;
        margin: 12px 8px;
        border: 1px solid transparent;
        transition: margin 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
        // height: 100%;

        &:hover {
            margin: 0;
            box-shadow: 0px 0px 5px 4px #EDEDED;
            border-color: $primary;
        }

        .card-icon {
            // height: 100%;
            // width: auto;
            // max-height: 100px;
            // height: 100px;
            margin: 0 auto;

            img {
                height: 100%;
                width: auto;
                max-height: 100px;
            }
        }

        .card-title {
            text-align: center;
            margin: 0;
        }

        .card-description {
            flex-grow: 1;
            font-size: 0.9rem;
        }

        .card-buttons {
            display: flex;
            flex-direction: row;
            gap: 8px;
            flex-wrap: wrap;

            .button {
                border: 1px solid $primary;
                background-color: white;
                color: $primary;
                padding: 8px;
                border-radius: 6px;
                font-size: 0.9rem;
                transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

                &:hover {
                    background-color: $primary;
                    color: white;
                }
            }
        }
    }
}
</style>