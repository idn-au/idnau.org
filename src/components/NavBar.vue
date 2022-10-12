<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <nav id="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/resources">Project Resources</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

nav#main-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    & > a {
        color: black;
        padding: 12px 12px 9px 12px;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
        border-bottom: 3px solid transparent;
        transition: border-bottom-color 0.2s ease-in-out;

        &:hover {
            border-bottom-color: rgba($color: $primary, $alpha: 0.5);
        }

        &.router-link-exact-active {
            border-bottom-color: $primary;
        }
    }
}
</style>