<script setup lang="ts">
import {ChevronRight, CircleAlert, Info, Search, X} from "lucide-vue-next";
import {RDFStore, type PrezSearchResult, type PrezFocusNode, type PrezLinkParent} from "prez-lib";

const route = useRoute();

const q = ref((route.query.q || '').toString());

async function search(): Promise<{
	count: number;
	data: PrezSearchResult[];
}> {
	if (q.value !== "") {
		const r = await $fetch<string>("https://api.idnau.org/search", {
			query: {
				q: q.value,
			},
		});
		const store = new RDFStore();
		store.load(r);
		return {
			count: store.getCount(),
			data: JSON.parse(JSON.stringify(store.search())), // get around nuxt serialising objects with functions - need a flag to not return objects with .equals(), etc.
		}
	} else {
		return {
			count: 0,
			data: [] as PrezSearchResult[],
		}
	}
}

const {data, status, error} = useLazyAsyncData(`textSearch-${q.value}`, () => search(), {
	// default: () => ({
	// 	count: 0,
	// 	data: [] as PrezSearchResult[],
	// }),
	immediate: !!route.query.q
});

function getParent(resource: PrezFocusNode): PrezLinkParent | undefined {
	return resource.links?.map(l => l.parents?.filter(p => p.label && p.url !== l.value).slice(-1)[0])[0];
}

function searchNavigate() {
	navigateTo({query: {q: q.value}, hash: "#text"}, {external: true});
}
</script>

<template>
	<div class="mx-auto max-w-[1200px]">
		<div class="flex flex-row max-w-md mx-auto">
			<ButtonGroup class="w-full">
				<InputGroup>
					<InputGroupInput type="search" autofocus name="q" v-model="q" placeholder="Search..." @keyup.enter="searchNavigate" />
					<InputGroupAddon>
						<Search />
					</InputGroupAddon>
					<InputGroupAddon align="inline-end">
						<InputGroupButton size="icon-sm" variant="link" class="text-muted-foreground hover:text-foreground" @click="q = ''">
							<X class="size-4" />
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
				<Button @click="searchNavigate">
					<Search class="size-4" />
				</Button>
			</ButtonGroup>
		</div>
		<Alert v-if="error" variant="destructive" class="border-destructive">
			<CircleAlert />
			<AlertTitle>
				{{error.statusMessage || "Error"}}
			</AlertTitle>
			<AlertDescription>
				{{error.message}}
			</AlertDescription>
		</Alert>
		<div v-else-if="status === 'pending'" class="flex flex-col my-4">
			<div v-for="_ in 5" class="flex flex-col p-2 even:bg-muted/50">
				<div class="flex flex-row items-center gap-2">
					<Skeleton class="w-48 h-8" />
					<Skeleton class="mr-auto w-20 h-8" />
					<Skeleton class="w-8 h-8" />
				</div>
			</div>
		</div>
		<div v-else-if="status === 'success' && data.data.length > 0" class="flex flex-col my-4">
			<div v-for="result in data.data.sort((a, b) => b.weight - a.weight)" class="flex flex-col p-2 gap-1 even:bg-muted/50">
				<div class="flex flex-row items-center gap-2">
					<template v-for="parent in [getParent(result.resource)]">
                        <span v-if="parent" class="inline-flex flex-row items-center gap-1">
	                        <a :href="`https://data.idnau.org${parent.url}`">{{ parent.label?.value }}</a>
                            <ChevronRight class="size-4" />
                        </span>
					</template>
					<span class="font-bold mr-auto">
						<a v-if="result.resource.links" :href="`https://data.idnau.org${result.resource.links[0].value}`">{{ result.resource.label?.value || result.resource.value }}</a>
                        <span v-else>{{ result.resource.label?.value || result.resource.value }}</span>
					</span>
					<span class="flex flex-row gap-1">
                        <Badge v-for="type in result.resource.rdfTypes" variant="outline" class="text-xs">
                            {{type.label?.value || type.value}}
                        </Badge>
                    </span>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger class="cursor-default">
								<span class="text-muted-foreground"><Info class="size-4" /></span>
							</TooltipTrigger>
							<TooltipContent>
								Matched on {{result.predicate.label?.value || result.predicate.value}}
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<p v-if="result.resource.description" class="overflow-hidden text-ellipsis line-clamp-3 text-muted-foreground italic text-sm">
					{{result.resource.description.value}}
				</p>
			</div>
		</div>
		<div v-else-if="status === 'success' && data.data.length === 0">
			No results found
		</div>
<!--		<div v-if="status === 'success' && data.count >= 10">-->
<!--			pagination-->
<!--		</div>-->
	</div>
</template>
