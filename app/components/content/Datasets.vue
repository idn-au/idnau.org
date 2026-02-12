<script setup lang="ts">
import {CircleAlert, Search, X} from "lucide-vue-next";

const omitURLs: string[] = [
	"https://mediaflux",
	"https://github",
];

type DatasetItem = {
	iri: string;
	label: string;
	url: string;
	description?: string;
};

const q = ref("");

const query = `PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX sdo: <https://schema.org/>

SELECT ?iri ?label ?url ?description
WHERE {
  VALUES ?class { sdo:Dataset dcat:Dataset geo:FeatureCollection }
  ?iri a ?class ;
  	sdo:name ?label .
  {
    ?iri sdo:url ?url .
  }
  UNION
  {
    ?iri sdo:distribution/sdo:url ?url .
  }
  UNION
  {
    ?iri dcterms:source ?url .
  }
  UNION
  {
    ?iri sdo:isBasedOn ?url .
  }
  OPTIONAL {
  	?iri sdo:description ?description .
  }
}`;

const { data, status, error } = await useLazyAsyncData("datasets", () => $fetch<SPARQLResultsJSON>("https://api.idnau.org/sparql", {
	query: {
		query: query,
	},
	headers: {
		"Content-Type": "application/sparql-query",
	},
}), {
	default: () => [] as DatasetItem[],
	transform: (input) => {
		if (input?.results?.bindings) {
			return input.results.bindings.map(r => Object.keys(r).reduce((obj, key) => {
				obj[key] = r[key].value;
				return obj;
			}, {} as DatasetItem))
				.filter(r => !omitURLs.some(u => r.url.startsWith(u)))
				.sort((a, b) => a.label.localeCompare(b.label));
		} else return [] as DatasetItem[];
	},
});

const filteredDatasets = computed(() => q.value ? data.value.filter(d => d.label.toLowerCase().includes(q.value.toLowerCase())) : data.value)
</script>

<template>
	<div>
		<div class="max-w-sm w-full">
			<InputGroup>
				<InputGroupInput type="search" autofocus name="q" v-model="q" placeholder="Search datasets..." />
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
		<Alert v-if="error" variant="destructive" class="border-destructive">
			<CircleAlert />
			<AlertTitle>Error: {{error.name}}</AlertTitle>
			<AlertDescription>{{error.message}}</AlertDescription>
		</Alert>
		<div v-else-if="status === 'success' && data?.length > 0" class="max-w-xl w-full flex flex-col gap-2">
			<Item v-for="dataset in filteredDatasets" variant="outline" class="hover:bg-accent" asChild>
				<a :href="dataset.url" class="hover:!no-underline !text-foreground">
					<ItemContent>
						<ItemTitle class="text-base">{{dataset.label}}</ItemTitle>
						<ItemDescription v-if="dataset.description" class="line-clamp-1 text-ellipsis italic !m-0 text-xs">{{dataset.description}}</ItemDescription>
					</ItemContent>
				</a>
			</Item>
		</div>
	</div>
</template>
