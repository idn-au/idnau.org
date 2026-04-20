<script setup lang="ts">
import { ShadCard, CardContent } from "~/components/ui/card";

const props = defineProps<{
	scores: ScoreDef[];
}>();
</script>

<template>
	<Accordion type="single" collapsible>
		<AccordionItem v-for="(score) in props.scores" :value="score.key" class="[&_h3]:!m-0">
			<template v-if="score.scores">
				<AccordionTrigger class="cursor-pointer hover:bg-accent/50 hover:no-underline p-4 items-center">
					<div class="flex flex-col gap-2">
						<div class="text-base font-semibold">
							{{score.key}}<template v-if="score.title">: {{ score.title }}</template>
						</div>
						<p class="text-sm text-muted-foreground !m-0">{{ score.description }}</p>
					</div>
				</AccordionTrigger>
				<AccordionContent class="p-0">
					<ShadCard v-if="score.scores" class="p-0 m-4">
						<CardContent class="p-0">
							<ScoreAccordion :scores="score.scores" />
						</CardContent>
					</ShadCard>
				</AccordionContent>
			</template>
			<div v-else class="flex flex-col gap-2 p-4">
				<div class="text-base font-semibold">
					{{score.key}}<template v-if="score.title">: {{ score.title }}</template>
				</div>
				<p class="text-sm text-muted-foreground !m-0">{{ score.description }}</p>
			</div>
		</AccordionItem>
	</Accordion>
</template>
