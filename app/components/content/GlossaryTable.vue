<script setup lang="ts">
import type {ContentNavigationItem} from "@nuxt/content";
import {findPageChildren} from "@nuxt/content/utils";

const { data: navigation } = await useAsyncData(
	"glossary-navigation",
	() => queryCollectionNavigation("content", ["body"]),
	{
		default: () => [] as ContentNavigationItem[],
	}
);

const terms = computed(() => findPageChildren(navigation.value, "/empowerment/_glossary_terms"));
</script>

<template>
	<table>
		<thead>
			<tr>
				<th class="w-min">Term</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="term in terms" class="odd:bg-muted/40 dark:odd:bg-muted/20">
				<td class="w-min">
					<a :id="term.path.split('/').slice(-1)[0]" class="block relative -top-16" />
					<NuxtLink :to="`#${term.path.split('/').slice(-1)[0]}`" class="!text-[var(--tw-prose-body)] hover:no-underline!">{{term.title}}</NuxtLink>
				</td>
				<td class="prose dark:prose-invert text-sm [&_p]:m-0"><ContentRenderer :value="term" /></td>
			</tr>
		</tbody>
	</table>
</template>
