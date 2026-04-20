<script setup lang="ts">
const props = defineProps<{
	content: string;
	slug: string;
}>();

const { data: term } = await useAsyncData(`term-${props.slug}`, () => {
	return queryCollection("content")
		.path(`/empowerment/_glossary_terms/${props.slug}`)
		.first()
});
</script>

<template>
	<HoverCard :openDelay="500">
		<HoverCardTrigger class="hover:cursor-help !text-[var(--tw-prose-body)] font-normal decoration-dashed! underline!">
			{{props.content}}
		</HoverCardTrigger>
		<HoverCardContent v-if="term" class="w-auto max-w-100">
			<div class="flex flex-col gap-2">
				<NuxtLink :to="`/empowerment/glossary#${props.slug}`" class="text-link hover:underline">{{term.title}}</NuxtLink>
				<div class="text-sm text-muted-foreground prose dark:prose-invert [&_p]:m-0 line-clamp-6">
					<ContentRenderer :value="term" />
				</div>
			</div>
		</HoverCardContent>
	</HoverCard>
</template>
