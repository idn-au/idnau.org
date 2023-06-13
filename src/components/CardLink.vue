<script setup>
// import { computed } from "vue";
import { RouterLink } from "vue-router";
import LinkWrapper from "@/components/LinkWrapper.vue";
// import placeholderSquare from "@/assets/images/placeholder-square.png";
import idnLogo from "@/assets/images/idn-logo-250.png";
// import warnUrls from "@/utils/warnUrls.json";

const props = defineProps({
    url: String,
    // external: Boolean,
    title: String,
    description: String,
    icon: String,
    iconAlt: String,
    sublinks: Array
});

// const hasWarning = computed(() => {
//     return warnUrls.map(item => item.url).includes(props.url);
// });
</script>

<template>
    <RouterLink :to="props.url" class="card">
        <!-- <i v-if="hasWarning" class="warning-icon fa-regular fa-triangle-exclamation" title="May contain sensitive/offensive content"></i> -->
        <!-- <i v-if="props.external" class="external-icon fa-regular fa-arrow-up-right-from-square" title="External site"></i> -->
        <div class="card-icon">
            <img
                :src="props.icon || idnLogo"
                :alt="props.iconAlt"
            >
        </div>
        <h4 class="card-title">{{ props.title }}</h4>
        <div v-if="!!props.description" class="card-description">
            {{ props.description }}
        </div>
        <div v-if="props.sublinks" class="card-buttons">
            <template v-for="link in props.sublinks">
                <LinkWrapper
                    @click.stop
                    :href="link.url"
                    class="button"
                    target="_blank"
                >
                    {{ link.title }} <i class="fa-regular fa-arrow-up-right-from-square"></i>
                </LinkWrapper>
            </template>
        </div>
    </RouterLink>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

a.card {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    background-color: #ebebeb;
    flex-basis: 0;
    flex-grow: 1;
    gap: 12px;
    color: black;
    padding: 12px;
    margin: 12px;
    border: 1px solid transparent;
    transition: margin 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
    position: relative;
    // height: 100%;
    text-decoration: none;

    &:hover {
        margin: 0;
        box-shadow: 0px 0px 5px 4px #EDEDED;
        border-color: $primary;
    }

    &::after {
        content: unset;
    }

    i.warning-icon {
        position: absolute;
        left: 12px;
        color: #efa51c;
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
        font-size: 1.3em;
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
        margin-top: auto;

        a.button {
            border: 1px solid $primary;
            background-color: white;
            color: $primary;
            padding: 8px;
            border-radius: 6px;
            font-size: 0.9rem;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
            cursor: pointer;

            &::after {
                content: unset;
            }

            &:hover {
                background-color: $primary;
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>