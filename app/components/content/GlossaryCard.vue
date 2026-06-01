<script setup lang="ts">
const props = defineProps<{
	content: string;
	iri: string;
}>();

const query = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
SELECT ?iri ?label ?description (GROUP_CONCAT(?_altLabel; SEPARATOR=", ") AS ?altLabel)
WHERE {
  BIND (<https://data.idnau.org/pid/glossary> AS ?cs)
  BIND (<${props.iri}> AS ?iri)
  ?iri skos:inScheme ?cs ;
       skos:prefLabel ?label ;
       skos:definition ?description .
  OPTIONAL {
  	?iri skos:altLabel ?_altLabel .
  }
}
GROUP BY ?iri ?label ?description
LIMIT 1`;

const { data: term, status, error } = await useLazyAsyncData(`term-${props.iri}`, () => $fetch("https://api.idnau.org/sparql", {
	headers: {
		"Accept": "application/sparql-results+json",
		"Content-Type": "application/sparql-query",
	},
	query: {
		query: query,
	}
}), {
	default: () => ({
		iri: "",
		label: "",
		altLabel: "",
		description: "",
	}),
	transform: (input) => input.results?.bindings.map(r => ({
		iri: r.iri.value,
		label: r.label.value,
		altLabel: r.altLabel?.value,
		description: r.description.value,
	}))[0],
});
</script>

<template>
	<HoverCard :openDelay="500">
		<HoverCardTrigger class="hover:cursor-help !text-[var(--tw-prose-body)] font-normal decoration-dashed! underline! decoration-muted-foreground!">
			{{props.content}}
		</HoverCardTrigger>
		<HoverCardContent v-if="term" class="w-auto max-w-100">
			<div class="flex flex-col gap-2">
				<NuxtLink :to="`/empowerment/glossary#${encodeURIComponent(props.iri)}`" class="text-link hover:underline" external>
					<Skeleton v-if="status === 'pending'" class="w-70 h-6" />
					<template v-else>
						{{term.label}} <span v-if="term.altLabel" class="text-muted-foreground">({{term.altLabel}})</span>
					</template>
				</NuxtLink>
				<div class="text-sm text-muted-foreground prose dark:prose-invert [&_p]:m-0 line-clamp-6">
					<div v-if="status === 'pending'" class="flex flex-col gap-1">
						<Skeleton v-for="i in 3" :class="`h-4 ${i < 3 ? 'w-full' : 'w-60'}`" />
					</div>
					<template v-else>
						{{term.description}}
					</template>
				</div>
			</div>
		</HoverCardContent>
	</HoverCard>
</template>
