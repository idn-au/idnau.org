<script setup lang="ts">
import { LoaderCircle, AlertCircle } from "lucide-vue-next";

const props = defineProps<{
	src: string;
	errorUrl?: string;
}>();

const { status } = useScript({
	src: props.src,
	async: true,
	crossorigin: false,
});

</script>

<template>
	<div>
		<slot v-if="status === 'awaitingLoad' || status === 'loading'" name="loading">
			<Skeleton class="flex flex-row items-center gap-2 p-4">
				<LoaderCircle role="status" aria-label="Loading" class="size-4 animate-spin" />
				Loading...
			</Skeleton>
		</slot>
		<slot v-else-if="status === 'loaded'" />
		<slot v-else-if="status === 'error'" name="error">
			<Alert variant="destructive" class="border-destructive">
				<AlertCircle class="size-4" />
				<AlertTitle>Loading Failed</AlertTitle>
				<AlertDescription class="inline">
					Your browser might be blocking tracking. <template v-if="props.errorUrl">Try the external URL <a :href="props.errorUrl">here</a>.</template>
				</AlertDescription>
			</Alert>
		</slot>
	</div>
</template>
