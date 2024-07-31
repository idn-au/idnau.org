<script lang="ts" setup>
const NAV_ITEMS = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "About Us",
        to: "/about",
        items: [
            {
                label: "Steering Committee",
                to: "/about/committee"
            }
        ]
    },
    {
        label: "Partners",
        to: "/partners",
    },
    {
        label: "Research Projects",
        to: "/projects",
        items: [
            {
                label: "ARDC",
                to: "/projects/ardc",
            },
            {
                label: "Community Data Project",
                to: "/projects/communitydata"
            },
            {
                label: "ARFV",
                to: "/projects/arfv"
            },
        ]
    },
    {
        label: "Publications",
        to: "/publications",
        items: [
            {
                label: "Videos",
                to: "/publications/videos"
            },
            {
                label: "Podcasts",
                to: "/publications/podcasts"
            },
            {
                label: "Literature",
                to: "/publications/literature"
            },
        ]
    },
    {
        label: "Events",
        to: "/events",
    },
    {
        label: "Resources",
        to: "/resources",
    },
    {
        label: "Joining the IDN",
        to: "/joining",
    },
    {
        label: "Blog",
        to: "/blog",
    },
    {
        label: "Contact Us",
        to: "/contact",
    },
];

const searchTerm = ref("");
</script>

<template>
    <NavBar :items="NAV_ITEMS">
        <template #left>
            <NuxtLink to="/" class="nav-header">
                <img src="/public/img/idn-logo-250.png" alt="IDN Logo" style="height: 100%">
                <div>The Indigenous Data Network</div>
            </NuxtLink>
        </template>
        <template #right>
            <div class="search-nav">
                <input type="search" v-model="searchTerm" placeholder="Search..." />
                <button>O</button>
            </div>
        </template>
    </NavBar>
</template>

<style lang="scss" scoped>
.nav-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>