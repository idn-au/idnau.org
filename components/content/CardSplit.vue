<script lang="ts" setup>
const props = withDefaults(defineProps<{
    src: string;
    alt?: string;
    imgRight?: boolean;
}>(),
{
    imgRight: false,
});
</script>

<template>
    <BCard no-body class="overflow-hidden">
        <BRow class="g-0">
            <BCol md="6">
                <BCardImg :src="props.src" :alt="props.alt" class="rounded-0" />
            </BCol>
            <BCol md="6">
                <BCardBody>
                    <BCardTitle>
                        <slot name="title"></slot>
                    </BCardTitle>
                    <slot />
                </BCardBody>
            </BCol>
        </BRow>
    </BCard>
</template>

<style lang="scss" scoped></style>