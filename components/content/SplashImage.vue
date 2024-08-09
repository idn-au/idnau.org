<script lang="ts" setup>
const props = defineProps<{
    src: string;
    // alt?: string;
}>()
</script>

<template>
    <div class="splash-image" :style="{ backgroundImage: `url(${props.src})` }">
        <div class="splash-overlay">
            <div class="splash-text">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.splash-image {
    background-size: cover;
    background-position: center;
    text-align: center;
    display: flex;
    padding: 36px;
    min-height: 400px;

    .splash-overlay {
        background-color: rgba(255, 255, 255, 0.6);
        // background-color: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(.5rem);
        width: 66%;
        margin: auto;
        padding: 12px 28px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 6px;
        
        .splash-text {

        }
    }
}
</style>