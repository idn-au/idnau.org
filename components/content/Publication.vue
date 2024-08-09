<script lang="ts" setup>
import { faClock } from "@fortawesome/free-regular-svg-icons";
import type { Publication } from "~/types";

const props = defineProps<Publication>();
</script>

<template>
    <a class="publication" :href="props.url" target="_blank" rel="noopener noreferrer">
        <BCard no-body class="overflow-hidden" style="max-width: 540px;">
            <BRow class="g-0">
                <BCol md="2" class="d-flex">
                    <BCardImg class="rounded-0 my-auto" :src="props.img" />
                </BCol>
                <BCol md="10">
                    <BCardBody>
                        <BCardTitle class="title">{{ props.title }}</BCardTitle>
                        <BCardSubtitle class="subtitle d-flex flex-row align-items-center justify-content-between">
                            <div>{{ props.author }}</div>
                            <div> <FontAwesome :icon="faClock" /> <NuxtTime :datetime="new Date(props.date)" /></div>
                        </BCardSubtitle>
                        <BCardText class="desc">{{ props.description?.slice(0, 100) }}</BCardText>
                    </BCardBody>
                </BCol>
            </BRow>
        </BCard>
    </a>
</template>

<style lang="scss" scoped>
@import "~/assets/sass/_variables.scss";

.publication {
    &:hover {
        .card {
            border-color: $primary;
        }
    }

    .card-body {
        padding: 12px;

        .title {
            font-size: 1.2rem;
        }

        .subtitle {
            font-size: 0.9rem;
        }

        .desc {
            font-style: italic;
            color: grey;
            font-size: 0.9rem;
        }
    }
}
</style>