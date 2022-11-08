<script setup>
import { RouterLink } from "vue-router";
import placeholderSquare from "@/assets/images/placeholder-square.png";

const props = defineProps({
    link: String,
    external: Boolean,
    title: String,
    icon: String,
    iconAlt: String,
    beforeWarning: String
});
</script>

<template>
    <component :is="props.external ? 'a' : 'RouterLink'" :to="props.link" :href="props.link" :target="props.external ? '_blank' : ''" class="card">
        <i v-if="props.external" class="external-icon fa-regular fa-arrow-up-right-from-square"></i>
        <div class="card-icon"><img :src="!!props.icon ? props.icon : placeholderSquare" :alt="!!props.iconAlt ? '' : 'Icon'"></div>
        <h4 class="card-title">{{ props.title }}</h4>
        <div class="card-description">
            <slot></slot>
        </div>
        <!-- <div class="card-buttons">
            <template v-for="link in props.links">
                <a v-if="link.external" :href="link.url" class="button" target="_blank">{{ link.label }} <i class="fa-regular fa-arrow-up-right-from-square"></i></a>
                <RouterLink v-else :to="link.url" class="button">{{ link.label }}</RouterLink>
            </template>
        </div> -->
    </component>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

a.card {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background-color: #e2e2e2;
    flex-basis: 0;
    flex-grow: 1;
    gap: 12px;
    color: black;
    padding: 12px;
    margin: 12px 8px;
    border: 1px solid transparent;
    transition: margin 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
    position: relative;
    // height: 100%;

    &:hover {
        margin: 0;
        box-shadow: 0px 0px 5px 4px #EDEDED;
        border-color: $primary;
    }

    i.external-icon {
        position: absolute;
        right: 12px;
        color: #595959;
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
            cursor: pointer;

            &:hover {
                background-color: $primary;
                color: white;
            }
        }
    }
}
</style>