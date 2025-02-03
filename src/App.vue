<script setup>
import { RouterView } from "vue-router";
import { HeaderComponent, MainComponent, FooterComponent } from "@idn-au/idn-lib";
// import idnLogo from "@/assets/images/idn-logo-250.png";

const banners = [
    {
        "type": "dev",
        "message": "To date, this website has facilitated technical outcomes towards the development of a research infrastructure for Indigenous Data Governance and Sovereignty"
    }
];
</script>

<template>
    <HeaderComponent internal :banners="banners" />
    <MainComponent>
        <RouterView />
    </MainComponent>
    <FooterComponent />
</template>

<style lang="scss">
@import "@/assets/sass/_variables.scss";

p, li {
    line-height: 1.2;
}

h2 {
    margin-top: 0;
}

a {
    color: #ee736a;
}

h2.resource-title {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;

    small {
        font-size: 1rem;

        a.resource-btn {
            border: 1px solid $primary;
            background-color: white;
            color: $primary;
            padding: 6px;
            border-radius: 6px;
            font-size: 0.9em;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
            cursor: pointer;
            align-self: baseline;

            &:hover {
                background-color: $primary;
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>
