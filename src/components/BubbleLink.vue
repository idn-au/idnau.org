<script lang="ts" setup>
const props = withDefaults(defineProps<{
    shortTitle: string;
    url: string;
    small?: boolean;
    color: string;
}>(), {
    small: false,
});
</script>

<template>
    <div :class="`bubble-wrapper ${props.small ? 'sm' : ''}`">
        <RouterLink :to="props.url" :class="`bubble ${props.small ? 'sm' : ''}`" :style="`border-color: ${props.color};`">
            <div class="title">{{ props.shortTitle }}</div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
@import "@/assets/sass/_mixins.scss";

$height: 240px;
$margin: 20px;
$padding: 20px;
$titleSize: 1.2em;
$hoverTitleSize: 1.4em;

$titleWidth: 80%;

$smHeight: 180px;
$smMargin: 16px;
$smPadding: 16px;
$smTitleSize: 0.9em;
$smHoverTitleSize: 1.1em;

.bubble-wrapper {
    flex: 1;
    display: flex;
    min-height: $height;
    max-height: $height;
    min-width: $height;
    max-width: $height;

    &.sm {
        min-height: $smHeight;
        max-height: $smHeight;
        min-width: $smHeight;
        max-width: $smHeight;
    }

    a.bubble {
        flex-grow: 1;
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-width: 4px;
        border-style: solid;
        border-radius: 50%;
        overflow: hidden;
        margin: $margin;
        padding: $padding;
        justify-content: center;
        text-decoration: none;
        @include transition(margin, box-shadow);

        .title {
            font-size: $titleSize;
            text-align: center;
            width: $titleWidth;
            color: black;
            font-weight: bold;
            @include transition(margin-bottom, font-size, width);
        }

        &.sm {
            margin: $smMargin;
            padding: $smPadding;


            .title {
                font-size: $smTitleSize;
                width: $titleWidth;
            }
        }

        &:hover {
            box-shadow: 0px 4px 14px 8px rgba(0, 0, 0, 0.15);
            margin: 0;


            .title {
                font-size: $hoverTitleSize;
            }

            &.sm {

                .title {
                    font-size: $smHoverTitleSize;
                }
            }
        }
    }
}
</style>