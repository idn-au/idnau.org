<script setup lang="ts">
import { Clock, MapPin } from "@lucide/vue";
import Card from "~/components/content/Card.vue";
import EventCalendar from "~/components/content/EventCalendar.vue";
import { events } from "~/utils/events";

const upcomingEvents = computed(() => {
	return events.filter(e => e.start > new Date().toISOString()).sort((a, b) => a.start.localeCompare(b.start));
});

const pastEvents = computed(() => {
	return events.filter(e => e.start < new Date().toISOString()).sort((a, b) => b.start.localeCompare(a.start));
});
</script>

<template>
	<div>
		<h2>Upcoming Events</h2>
		<div class="flex flex-col gap-4">
			<Card v-for="event in upcomingEvents" imgPosition="left">
				<template v-if="event.img" #img>
					<img :src="event.img" />
				</template>
				<template #title>{{event.title}}</template>
				<template #description>
					<div class="flex flex-row items-center gap-1">
						<Clock class="size-4" /> {{formatDate(event.start)}} <template v-if="event.end"> - {{formatDate(event.end)}}</template>
					</div>
					<div v-if="event.location" class="flex flex-row items-center gap-1">
						<MapPin class="size-4" /> {{event.location}}
					</div>
				</template>
				<p v-if="event.description" class="line-clamp-3 text-ellipsis">{{event.description}}</p>
			</Card>
		</div>
		<h2>Past Events</h2>
		<div class="flex flex-col gap-4">
			<Card v-for="event in pastEvents" imgPosition="left">
				<template v-if="event.img" #img>
					<img :src="event.img" />
				</template>
				<template #title>{{event.title}}</template>
				<template #description>
					<div class="flex flex-row items-center gap-1">
						<Clock class="size-4" /> {{formatDate(event.start)}} <template v-if="event.end"> - {{formatDate(event.end)}}</template>
					</div>
					<div v-if="event.location" class="flex flex-row items-center gap-1">
						<MapPin class="size-4" /> {{event.location}}
					</div>
				</template>
				<p v-if="event.description" class="line-clamp-3 text-ellipsis">{{event.description}}</p>
			</Card>
		</div>
	</div>
</template>
