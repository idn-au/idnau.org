<script lang="ts" setup>
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import type { Event } from "~/types";

const props = defineProps<Event>();
</script>

<template>
    <div class="event">
        <div class="event-left">
            <div class="marker"></div>
            <div class="separator"></div>
        </div>
        <div class="event-content">
            <div class="timestamp">
                <NuxtTime :datetime="new Date(props.timestamp)" />
            </div>
            <div class="title">{{ props.title }}</div>
            <div v-if="props.author" class="author">By {{ props.author }}</div>
            <div class="body" v-html="props.body"></div>
            <div v-if="props.endtime" class="times"><FontAwesome :icon="faCalendarDays" /> <NuxtTime :datetime="new Date(props.timestamp)" locale="en-AU" /> - <NuxtTime :datetime="new Date(props.endtime)" locale="en-AU" /></div>
            <div v-if="props.location" class="location"><FontAwesome :icon="faLocationDot" /> {{ props.location }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.event {
    display: flex;
    flex-direction: row;
    gap: 8px;

    .event-left {
        display: flex;
        flex-direction: column;
        align-items: center;

        .marker {
            $size: 12px;
            width: $size;
            height: $size;
            background-color: #b3b3b3;
            border-radius: 50%;
        }

        .separator {
            width: 2px;
            background-color: #b3b3b3;
            flex-grow: 1;
        }
    }

    .event-content {
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        gap: 6px;

        .timestamp {
            font-size: 0.9em;
            line-height: 0.9;
        }

        .title {
            font-weight: bold;
            font-size: 1.2rem;
        }

        .body {

        }
    }
}
</style>