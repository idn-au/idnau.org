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
	<InputGroup class="max-w-sm">
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
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Term</TableHead>
				<TableHead>Description</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<Alert v-if="error" variant="destructive" class="border-destructive">
				<AlertCircle class="size-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>{{error}}</AlertDescription>
			</Alert>
			<template v-else-if="status === 'pending'">
				<TableRow v-for="i in 10" class="odd:bg-muted/40 dark:odd:bg-muted/20">
					<TableCell class="w-80 whitespace-normal align-top">
						<Skeleton class="w-60 h-6" />
					</TableCell>
					<TableCell class="prose dark:prose-invert text-sm [&_p]:m-0 whitespace-normal">
						<div class="flex flex-col gap-1">
							<Skeleton v-for="i in 3" :class="`h-5 ${i < 3 ? 'w-full' : 'w-3/4'}`" />
						</div>
					</TableCell>
				</TableRow>
			</template>
			<template v-else>
				<TableRow v-for="term in filteredTerms" class="odd:bg-muted/40 dark:odd:bg-muted/20">
					<TableCell class="w-80 whitespace-normal align-top">
						<a :id="encodeURIComponent(term.iri)" class="block relative -top-16" />
						<NuxtLink :to="`#${encodeURIComponent(term.iri)}`" class="!text-[var(--tw-prose-body)] hover:no-underline!">
							<span class="font-semibold">{{term.label}}</span> <span v-if="term.altLabel" class="text-muted-foreground">({{term.altLabel}})</span>
						</NuxtLink>
					</TableCell>
					<TableCell class="prose dark:prose-invert text-sm [&_p]:m-0 whitespace-normal">
						{{term.description}}
					</TableCell>
				</TableRow>
			</template>
		</TableBody>
	</Table>
</template>
