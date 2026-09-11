<script setup lang="ts">
import { Search, X, Calendar, CalendarOff } from "@lucide/vue";
import { events } from "~/utils/events";

const q = ref("");

const filteredEvents = computed(() => {
	return (events as EventItem[]).filter(e =>
		e.title.toLowerCase().includes(q.value.toLowerCase())
	).sort((a, b) => a.title.localeCompare(b.title));
});

const upcomingEvents = computed(() => {
	return filteredEvents.value.filter(e => e.start > new Date().toISOString()).sort((a, b) => a.start.localeCompare(b.start));
});

const pastEvents = computed(() => {
	return filteredEvents.value.filter(e => e.start < new Date().toISOString()).sort((a, b) => b.start.localeCompare(a.start));
});
</script>

<template>
	<div>
		<InputGroup class="max-w-sm mx-auto mb-10">
			<InputGroupInput type="search" autofocus name="q" v-model="q" placeholder="Search events..." />
			<InputGroupAddon>
				<Search />
			</InputGroupAddon>
			<InputGroupAddon align="inline-end">
				<InputGroupButton size="icon-sm" variant="link" class="text-muted-foreground hover:text-foreground" @click="q = ''">
					<X class="size-4" />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
		<Tabs defaultValue="upcoming">
			<TabsList class="mx-auto grid grid-cols-2 max-w-lg w-full bg-muted-foreground/5">
				<TabsTrigger value="upcoming">Upcoming</TabsTrigger>
				<TabsTrigger value="past">Past</TabsTrigger>
			</TabsList>
			<TabsContent value="upcoming">
				<Empty v-if="q === '' && upcomingEvents.length === 0">
					<EmptyHeader>
						<EmptyMedia variant="icon"><Calendar /></EmptyMedia>
						<EmptyTitle>No Upcoming Events</EmptyTitle>
						<EmptyDescription>Check back soon!</EmptyDescription>
					</EmptyHeader>
				</Empty>
				<Empty v-else-if="upcomingEvents.length === 0">
					<EmptyHeader>
						<EmptyMedia variant="icon"><CalendarOff /></EmptyMedia>
						<EmptyTitle>No Upcoming Events Found</EmptyTitle>
						<EmptyDescription>Try another search term</EmptyDescription>
					</EmptyHeader>
				</Empty>
				<Timeline v-else :events="upcomingEvents" highlightFirst />
			</TabsContent>
			<TabsContent value="past">
				<Empty v-if="q === '' && pastEvents.length === 0">
					<EmptyHeader>
						<EmptyMedia variant="icon"><Calendar /></EmptyMedia>
						<EmptyTitle>No Past Events</EmptyTitle>
						<EmptyDescription>Check back soon!</EmptyDescription>
					</EmptyHeader>
				</Empty>
				<Empty v-else-if="pastEvents.length === 0">
					<EmptyHeader>
						<EmptyMedia variant="icon"><CalendarOff /></EmptyMedia>
						<EmptyTitle>No Past Events Found</EmptyTitle>
						<EmptyDescription>Try another search term</EmptyDescription>
					</EmptyHeader>
				</Empty>
				<Timeline v-else :events="pastEvents" />
			</TabsContent>
		</Tabs>
	</div>
</template>
