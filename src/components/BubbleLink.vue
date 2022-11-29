<script setup>
const props = defineProps({
    title: String,
    link: String,
    external: Boolean
});
</script>

<template>
    <div class="bubble-wrapper">
        <component :is="props.external ? 'a' : 'RouterLink'" :to="props.link" :href="props.link" :target="props.external ? '_blank' : ''" class="bubble">
            <div>{{ props.title }}</div>
        </component>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

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

        &::after {
            content: unset;
        }
    }
}
</style>