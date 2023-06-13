<script setup>
import { RouterLink } from "vue-router";
import LinkWrapper from "@/components/LinkWrapper.vue";
import links from "@/utils/resourceLinks";
</script>

<template>
    <nav id="resources-nav">
        <RouterLink v-for="link in links" class="sidenav-link" :to="link.url">
            <span>{{ link.shortTitle }}</span>
            <div v-if="link.sublinks.length > 0" class="sublinks">
                <LinkWrapper
                    v-for="sublink in link.sublinks"
                    class="sublink"
                    @click.stop
                    :href="sublink.url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ sublink.title }}
                </LinkWrapper>
            </div>
        </RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

nav#resources-nav {
    display: flex;
    flex-direction: column;
    height: calc(100% + 40px);
    background-color: $navBg;
    margin: -20px;
    min-width: 280px;
    max-width: 280px;

    a.sidenav-link {
        padding: 12px;
        color: $primary;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: space-between;
        align-items: center;

        &:hover, &.router-link-active {
            color: white;
            background-color: $primary;
            text-decoration: none;
        }

        div.sublinks {
            display: flex;
            flex-direction: row;
            gap: 6px;

            a.sublink {
                font-size: 0.8em;
                text-decoration: none;
                border: 1px solid $primary;
                background-color: $navBg;
                padding: 4px;
                border-radius: 4px;
                transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

                &:hover {
                    background-color: white;
                }
            }
        }
    }
}
</style>