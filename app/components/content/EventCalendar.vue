<script setup lang="ts">
import {Calendar, ChevronLeft, ChevronRight, MapPin} from "@lucide/vue";

const props = defineProps<{
	events: EventItem[];
}>();

const FIVE_WEEKS = 7 * 5;
const SIX_WEEKS = 7 * 6;

const today = new Date();
const targetDate = ref(new Date());

const filteredEvents = computed(() => {
	return props.events.filter(e => {
		const eventStartDate = new Date(e.start);
		const eventEndDate = e.end ? new Date(e.end) : undefined;
		if (eventStartDate.getMonth() === targetDate.value.getMonth() && eventStartDate.getFullYear() === targetDate.value.getFullYear()) {
			return true;
		} else if (eventEndDate && eventEndDate.getMonth() === targetDate.value.getMonth() && eventEndDate.getFullYear() === targetDate.value.getFullYear()) {
			return true;
		} else {
			return false;
		}
	});
});

const getDaysInMonth = (): number => {
	const tempDate = new Date(targetDate.value)
	const curMonth = tempDate.getMonth()
	// fixes bug on 31st not existing on next onth
	tempDate.setDate(5)
	if (curMonth === 11) {
		tempDate.setFullYear(tempDate.getFullYear() + 1)
		tempDate.setMonth(0)
	} else (
		tempDate.setMonth(tempDate.getMonth() + 1)
	)
	tempDate.setDate(0)
	return tempDate.getDate()
}
const getFirstDayInMonth = (): number => {
	const tempDate = new Date(targetDate.value)
	tempDate.setDate(1)
	return tempDate.getDay()
}
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysInMonth = ref(getDaysInMonth())
const monthStartsOn = ref(getFirstDayInMonth())

watch(targetDate, () => {
	daysInMonth.value = getDaysInMonth()
	monthStartsOn.value = getFirstDayInMonth()
})
const changeMonth = (delta: -1 | 1) => {
	const tempDate = new Date(targetDate.value)
	let intDelta = targetDate.value.getMonth() + delta
	if (intDelta < 0) {
		intDelta = 11
		tempDate.setFullYear(tempDate.getFullYear() - 1)
	}
	if (intDelta > 11) {
		intDelta = 0
		tempDate.setFullYear(tempDate.getFullYear() + 1)
	}
	tempDate.setMonth(intDelta)

	// tempDate.setFullYear(targetDate.value.getFullYear())
	targetDate.value = tempDate
}
const changeYear = (delta: -1 | 1) => {
	const tempDate = new Date(targetDate.value)

	tempDate.setFullYear(targetDate.value.getFullYear() + delta)
	targetDate.value = tempDate
}

const setToday = () => {
	targetDate.value = new Date
}

const isToday = (day: number): boolean => {
	return targetDate.value.getFullYear() === today.getFullYear() &&
		targetDate.value.getMonth() === today.getMonth() &&
		today.getDate() === day;
}

function findEventsForToday(day: number): EventItem[] {
	return filteredEvents.value.filter(e => {
		const eventStartDate = new Date(e.start);
		const eventEndDate = e.end ? new Date(e.end) : undefined;
		if (eventStartDate.getDay() + 1 === day) {
			return true;
		} else if (eventEndDate && eventEndDate.getDay() + 1 === day) {
			return true;
		} else {
			return false;
		}
	})
}

function renderTime(time: string): string {
	let options: Intl.DateTimeFormatOptions = {
		hour: "numeric",
		minute: "numeric",
	};

	return new Date(time).toLocaleTimeString("en-AU", options);
}
</script>
<template>
	<div class="flex flex-col gap-4">
		<div class="flex flex-row flex-wrap items-center gap-2 justify-around">
			<div class="text-center flex items-center gap-2">
				<Button variant="ghost" size="icon" @click="changeMonth(-1)">
					<ChevronLeft class="size-4"/>
				</Button>
				<span>{{ months[targetDate.getMonth()] }}</span>
				<Button variant="ghost" size="icon" @click="changeMonth(1)">
					<ChevronRight class="size-4"/>
				</Button>
			</div>
			<div class="text-center flex items-center gap-2">
				<Button variant="ghost" size="icon" @click="changeYear(-1)">
					<ChevronLeft class="size-4"/>
				</Button>
				<span>{{ targetDate.getFullYear() }}</span>
				<Button variant="ghost" size="icon" @click="changeYear(1)">
					<ChevronRight class="size-4"/>
				</Button>
			</div>
			<Button variant="outline" class="relative" @click="setToday">
				Today <Calendar class="size-4.5" />
				<div class="absolute top-3 right-4.5 text-[10px]">{{today.getDay() + 1}}</div>
			</Button>
		</div>
		<div class="grid grid-cols-7 *:nth-[7n+14]:bg-muted/50 *:nth-[7n+14]:dark:bg-muted/20 *:nth-[7n+8]:bg-muted/50 *:nth-[7n+8]:dark:bg-muted/20">
			<div v-for="d in days" class="text-center text-sm text-muted-foreground max-lg:hidden">{{ d }}</div>
			<div v-for="d in days" class="text-center text-sm text-muted-foreground max-sm:hidden lg:hidden">{{ d.slice(0, 3) }}</div>
			<div v-for="d in days" class="text-center text-sm text-muted-foreground sm:hidden">{{ d.slice(0, 1) }}</div>
			<div v-for="_ in monthStartsOn" class="border border-solid aspect-square"></div>
			<div v-for="i in daysInMonth" :class="`border border-solid aspect-square flex flex-col p-2 ${isToday(i) ? 'border-primary bg-secondary text-secondary-foreground' : ''}`">
				<div class="">{{ i }}</div>
				<div class="grow flex flex-col gap-1">
					<div v-for="event in findEventsForToday(i)" class="text-sm flex flex-col">
						<span>{{renderTime(event.start)}}<template v-if="event.end">-{{renderTime(event.end)}}</template> {{event.title}}</span>
						<span v-if="event.location"><MapPin class="size-4 inline" /> {{event.location}}</span>
					</div>
				</div>
			</div>
			<div v-for="_ in (monthStartsOn + daysInMonth <= FIVE_WEEKS ? FIVE_WEEKS : SIX_WEEKS) - (monthStartsOn + daysInMonth)"
			     class="border border-solid aspect-square"></div>
		</div>
	</div>
</template>