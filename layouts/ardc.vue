<script lang="ts" setup>
const NAV_ITEMS = [
    {
        label: "Home",
        to: "/projects/ardc"
    },
    {
        label: "About",
        to: "/projects/ardc/about"
    },
    {
        label: "Outputs",
        to: "/projects/ardc/outputs"
    },
    {
        label: "Catalogue Project",
        to: "/projects/ardc/subprojects/idc",
    },
    {
        label: "Sandpit in the Stone",
        to: "/projects/ardc/subprojects/uq",
    },
];
</script>

<template>
    <NavBar :items="NAV_ITEMS" center small />
    <slot />
</template>