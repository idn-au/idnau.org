<script lang="ts" setup>
import type { Event as EventType } from "~/types";

const events: EventType[] = [
    {
        title: "IDN Roundtable 2 2024",
        timestamp: "2024-08-06",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <h1>this is a h1</h1> Repellendus fugiat eum, eligendi excepturi sapiente iusto rerum cupiditate odit incidunt quo neque non odio quas nam quibusdam quis dolorum quia numquam.",
        endtime: "2024-08-07",
        location: "Melbourne Uni, Carlton",
    },
    {
        title: "IDN Roundtable 2 2024",
        timestamp: "2024-08-06",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <h1>this is a h1</h1> Repellendus fugiat eum, eligendi excepturi sapiente iusto rerum cupiditate odit incidunt quo neque non odio quas nam quibusdam quis dolorum quia numquam.",
        endtime: "2024-08-07",
        location: "Melbourne Uni, Carlton",
    },
    {
        title: "IDN Roundtable 2 2024",
        timestamp: "2024-08-06",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. <h1>this is a h1</h1> Repellendus fugiat eum, eligendi excepturi sapiente iusto rerum cupiditate odit incidunt quo neque non odio quas nam quibusdam quis dolorum quia numquam.",
        endtime: "2024-08-07",
        location: "Melbourne Uni, Carlton",
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