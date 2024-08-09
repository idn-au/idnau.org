<script lang="ts" setup>
const props = defineProps<{
    buttonLabel?: string;
    buttonLink?: string;
}>();

const slots = defineSlots();
</script>

<template>
    <div class="hero">
        <div class="hero-text">
            <slot />
        </div>
        <template v-if="slots.subtext">
            <hr />
            <div class="hero-subtext">
                <slot name="subtext" />
            </div>
        </template>
        <LinkButton v-if="props.buttonLabel" :link="props.buttonLink">{{ props.buttonLabel }}</LinkButton>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;

    .hero-text {
        font-size: 1.3rem;
    }

    hr {
        width: 75%;
        border-bottom: 1px solid grey;
        margin: 0;
    }

    .hero-subtext {
        font-size: 0.9rem;
        font-style: italic;
        color: #494949;
    }
}
</style>