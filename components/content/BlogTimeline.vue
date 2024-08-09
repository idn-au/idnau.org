<script lang="ts" setup>
import type { Event as EventType } from "~/types";

const events: EventType[] = [
    {
        title: "August Update from the ISU",
        author: "John Smith",
        timestamp: "2024-08-05",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat eum, eligendi excepturi sapiente iusto rerum cupiditate odit incidunt quo neque non odio quas nam quibusdam quis dolorum quia numquam.",
    },
    {
        title: "August Update from the ISU",
        author: "John Smith",
        timestamp: "2024-08-05",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat eum, eligendi excepturi sapiente iusto rerum cupiditate odit incidunt quo neque non odio quas nam quibusdam quis dolorum quia numquam.",
    },
    {
        title: "August Update from the ISU",
        author: "John Smith",
        timestamp: "2024-08-05",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugiat eum, eligendi excepturi sapiente iusto rerum cupiditate odit incidunt quo neque non odio quas nam quibusdam quis dolorum quia numquam.",
    },
];
</script>

<template>
    <div class="timeline">
        <Event v-for="event in events" v-bind="event" />
    </div>
</template>

<style lang="scss" scoped>
.timeline {
    display: flex;
    flex-direction: column;
}
</style>