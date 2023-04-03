<script setup>
import idnLogo from "@/assets/images/idn-logo-250.png";

const props = defineProps({
    shortTitle: String,
    url: String,
    icon: String,
    iconAlt: String,
    small: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div :class="`bubble-wrapper ${props.small ? 'sm' : ''}`">
        <RouterLink :to="props.url" :class="`bubble ${props.small ? 'sm' : ''}`">
            <div class="icon-wrapper">
                <img class="icon" :src="props.icon || idnLogo" :alt="iconAlt" />
            </div>
            <div class="title">{{ props.shortTitle }}</div>
        </RouterLink>
    </div>
    
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
@import "@/assets/sass/_mixins.scss";

$minHeight: 160px;
$maxHeight: 280px;
$margin: 20px;
$padding: 20px;
$iconWidth: 75%;
$iconMarginTop: 0%;
$titleSize: 1em;
$titleMarginBottom: 5%;
$titleWidth: 80%;

$hoverPadding: 20px;
$hoverIconWidth: 55%;
$hoverIconMarginTop: 0%;
$hoverTitleSize: 1.2em;
$hoverTitleMarginBottom: 18%;
$hoverTitleWidth: 100%;

$smMinHeight: 120px;
$smMaxHeight: 220px;
$smMargin: 16px;
$smPadding: 16px;
$smIconWidth: 70%;
$smIconMarginTop: 0%;
$smTitleSize: 0.85em;
$smTitleMarginBottom: 5%;
$smTitleWidth: 80%;

$smHoverPadding: 20px;
$smHoverIconWidth: 55%;
$smHoverIconMarginTop: 0%;
$smHoverTitleSize: 1.1em;
$smHoverTitleMarginBottom: 18%;
$smHoverTitleWidth: 100%;

.bubble-wrapper {
    flex: 1;
    display: flex;
    min-height: $minHeight;
    max-height: $maxHeight;
    min-width: $minHeight;
    max-width: $maxHeight;

    &.sm {
        min-height: $smMinHeight;
        max-height: $smMaxHeight;
        min-width: $smMinHeight;
        max-width: $smMaxHeight;
    }

    a.bubble {
        flex-grow: 1;
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid $primary;
        border-radius: 50%;
        overflow: hidden;
        margin: $margin;
        padding: $padding;
        justify-content: space-between;
        text-decoration: none;
        @include transition(margin, box-shadow);

        .icon-wrapper {
            width: $iconWidth;
            margin-top: $iconMarginTop;
            @include transition(width, margin-top);

            img.icon {
                height: auto;
                max-width: 100%;
            }
        }

        .title {
            font-size: $titleSize;
            text-align: center;
            margin-bottom: $titleMarginBottom;
            width: $titleWidth;
            @include transition(margin-bottom, font-size, width);
        }

        &.sm {
            margin: $smMargin;
            padding: $smPadding;

            .icon-wrapper {
                width: $smIconWidth;
                margin-top: $smIconMarginTop;
            }

            .title {
                font-size: $smTitleSize;
                margin-bottom: $smTitleMarginBottom;
                width: $smTitleWidth;
            }
        }

        &:hover {
            // box-shadow: 0px 0px 5px 4px rgba($color: $primary, $alpha: 0.4);
            box-shadow: 0px 4px 14px 8px rgba(0, 0, 0, 0.15);
            margin: 0;

            .icon-wrapper {
                width: $hoverIconWidth;
                margin-top: $hoverIconMarginTop;
            }

            .title {
                margin-bottom: $hoverTitleMarginBottom;
                font-size: $hoverTitleSize;
                width: $hoverTitleWidth;
            }

            &.sm {
                .icon-wrapper {
                    width: $smHoverIconWidth;
                    margin-top: $smHoverIconMarginTop
                }

                .title {
                    margin-bottom: $smHoverTitleMarginBottom;
                    font-size: $smHoverTitleSize;
                    width: $smHoverTitleWidth;
                }
            }
        }
    }
}
</style>