<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type {ButtonVariants} from "~/components/ui/button";
import { cn } from "~/lib/utils";

const props = defineProps<{
	variant?: ButtonVariants["variant"] | "red" | "yellow" | "green" | "blue" | "black";
	size?: ButtonVariants["size"];
	asChild?: boolean;
	disabled?: boolean;
	class?: HTMLAttributes["class"];
}>();

const variantMap = {

}
</script>

<template>
	<Button :variant="props.variant" :size="props.size" :class="cn('', props.class)" :disabled="props.disabled" :asChild="props.asChild">
		<slot />
	</Button>
</template>
