<script setup lang="ts">
import {Search, X} from "@lucide/vue";
import Card from "~/components/content/Card.vue";

const props = defineProps<{
	news: NewsItem[];
}>();

const q = ref("");

const filteredNews = computed(() => {
	return props.news
		// .filter(n => n.title.toLowerCase().includes(q.value.toLowerCase()))
		.sort((a, b) => b.date.localeCompare(a.date));
});
</script>

<template>
	<div class="grid grid-cols-3 gap-4">
		<Card v-for="(item, index) in filteredNews" imgPosition="top" :class="index === 0 ? 'col-span-full' : ''">
			<template v-if="item.img" #img>
				<img :src="item.img" />
			</template>
			<template #title>{{item.title}}</template>
			<template #description>{{item.date}}</template>
			<p class="line-clamp-3 text-ellipsis">{{item.description}}</p>
		</Card>
	</div>
</template>
