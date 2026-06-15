<script setup lang="ts">
import {Search, X, AlertCircle} from "@lucide/vue";

const conceptQuery = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?iri ?label ?description (GROUP_CONCAT(?_altLabel; SEPARATOR=", ") AS ?altLabel)
WHERE {
  BIND (<https://data.idnau.org/pid/glossary> AS ?cs)
  ?iri skos:inScheme ?cs ;
       skos:prefLabel ?label ;
       skos:definition ?description .
  OPTIONAL {
  	?iri skos:altLabel ?_altLabel .
  }
}
GROUP BY ?iri ?label ?description
ORDER BY STR(?label)`;

const { data: concepts, status, error } = await useLazyAsyncData("glossary-concepts", () => $fetch("https://api.idnau.org/sparql", {
	headers: {
		"Accept": "application/sparql-results+json",
		"Content-Type": "application/sparql-query",
	},
	query: {
		query: conceptQuery,
	}
}), {
		default: () => [],
		transform: (input) => input.results.bindings.map(r => ({
			iri: r.iri.value,
			label: r.label.value,
			altLabel: r.altLabel?.value,
			description: r.description.value,
		})),
	}
);

const q = ref("");

const filteredTerms = computed(() => q.value !== "" ? concepts.value.filter(c => c.label.toLowerCase().includes(q.value.toLowerCase()) || c.altLabel?.toLowerCase().includes(q.value.toLowerCase())) : concepts.value);
</script>

<template>
	<InputGroup class="max-w-sm mx-auto mb-2">
		<InputGroupInput autofocus v-model="q" placeholder="Search glossary" />
		<InputGroupAddon>
			<Search />
		</InputGroupAddon>
		<InputGroupAddon align="inline-end">
			<InputGroupButton size="icon-sm" variant="link" class="text-muted-foreground hover:text-foreground" @click="q = ''">
				<X class="size-4" />
			</InputGroupButton>
		</InputGroupAddon>
	</InputGroup>
	<div class="grid md:grid-cols-[320px_1fr] text-sm bg-background">
		<template v-for="term in filteredTerms">
			<div class="border-t p-2 nth-[4n]:bg-muted-foreground/5 nth-[4n-1]:bg-muted-foreground/5">
				<a :id="encodeURIComponent(term.iri)" class="block relative -top-[128px]" />
				<NuxtLink :to="`#${encodeURIComponent(term.iri)}`" class="!text-[var(--tw-prose-body)] hover:no-underline!" external>
					<span class="font-semibold">{{term.label}}</span> <span v-if="term.altLabel" class="text-muted-foreground">({{term.altLabel}})</span>
				</NuxtLink>
			</div>
			<div class="md:border-t px-2 pb-2 md:pt-2 nth-[4n]:bg-muted-foreground/5 nth-[4n-1]:bg-muted-foreground/5">
				<p class="!m-0">{{term.description}}</p>
			</div>
		</template>
	</div>
</template>
