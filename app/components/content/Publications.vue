<script setup lang="ts">
import {Search, X} from "@lucide/vue";

const props = defineProps<{
	publications: PublicationItem[];
}>();

const q = ref("");

const filteredPublications = computed(() => {
	return props.publications.filter(p =>
		p.title.toLowerCase().includes(q.value.toLowerCase())
		|| p.author?.some(a => a.toLowerCase().includes(q.value.toLowerCase()))
	).sort((a, b) => a.title.localeCompare(b.title));
});
</script>

<template>
	<div class="flex flex-col items-center gap-4">
		<div class="max-w-sm w-full">
			<InputGroup>
				<InputGroupInput type="search" autofocus name="q" v-model="q" placeholder="Search publications..." />
				<InputGroupAddon>
					<Search />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<InputGroupButton size="icon-sm" variant="link" class="text-muted-foreground hover:text-foreground" @click="q = ''">
						<X class="size-4" />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
		<div class="max-w-xl w-full flex flex-col gap-2">
			<Item v-for="publication in filteredPublications" variant="outline" class="hover:bg-accent" asChild>
				<a :href="publication.url" class="hover:!no-underline !text-foreground">
					<ItemMedia v-if="publication.img" variant="image">
						<img :src="publication.img" />
					</ItemMedia>
					<ItemContent>
						<ItemTitle class="text-base">{{publication.title}}</ItemTitle>
						<ItemDescription v-if="publication.author" class="!m-0">{{publication.author.join(", ")}}</ItemDescription>
						<ItemDescription v-if="publication.description" class="line-clamp-1 text-ellipsis italic !m-0 text-xs">{{publication.description}}</ItemDescription>
					</ItemContent>
				</a>
			</Item>
		</div>
	</div>
</template>
