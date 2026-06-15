<script setup lang="ts">
import {Search, X, FileText, Clock, User} from "@lucide/vue";
import {publications} from "~/utils/publications";
import type {PublicationItem} from "~/utils/types";

const q = ref("");
const sortBy = ref<"title" | "date">("title");
const sortByDirection = ref<"asc" | "desc">("asc");
const filterIdn = ref(false);
const page = ref(1);
const perPage = ref(10);

const filteredPublications = computed(() => {
	return (publications as PublicationItem[]).filter(p =>
		p.title.toLowerCase().includes(q.value.toLowerCase())
		|| p.author?.some(a => a.toLowerCase().includes(q.value.toLowerCase()))
	).sort((a, b) => a.title.localeCompare(b.title));
});
</script>

<template>
	<div class="">
		<InputGroup class="max-w-sm mx-auto mb-10">
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
		<div class="flex flex-col items-center gap-4">
			<div class="max-w-xl w-full flex flex-col gap-2">
				<Item v-for="publication in filteredPublications" variant="outline" class="hover:bg-accent" asChild>
					<a :href="publication.url" class="hover:!no-underline !text-foreground">
						<ItemMedia :variant="publication.img ? 'image' : 'icon'">
							<NuxtImg v-if="publication.img" :src="publication.img" />
							<FileText v-else class="size-4" />
						</ItemMedia>
						<ItemContent>
							<ItemTitle class="text-base">
								{{publication.title}}
								<Badge v-if="publication.idn">IDN</Badge>
							</ItemTitle>
							<ItemDescription v-if="publication.author" class="!m-0">
								<User class="size-3.5 inline" />
								{{publication.author.join(", ")}}
							</ItemDescription>
							<ItemDescription v-if="publication.publisher" class="!m-0">{{publication.publisher}}</ItemDescription>
							<ItemDescription v-if="publication.date" class="!m-0 text-xs">
								<Clock class="size-3 inline" /> {{publication.date}}
							</ItemDescription>
							<ItemDescription v-if="publication.description" class="line-clamp-1 text-ellipsis italic !m-0 text-xs">{{publication.description}}</ItemDescription>
						</ItemContent>
					</a>
				</Item>
			</div>
		</div>
	</div>
</template>
