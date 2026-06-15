<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const props = defineProps<{
	to?: string;
	newTab?: boolean;
	variant?: ButtonVariants["variant"] | "red" | "yellow" | "green" | "blue" | "black";
	size?: ButtonVariants["size"];
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
    <IDCButton :variant="props.variant" :size="props.size" :class="cn('btn', props.class)" :as-child="!!props.to">
        <template v-if="props.to">
            <NuxtLink v-if="props.to.startsWith('/')" :to="props.to" :target="props.newTab ? '_blank' : undefined">
                <slot mdc-unwrap="p" />
            </NuxtLink>
            <a v-else :href="props.to" :target="props.newTab ? '_blank' : undefined" rel="noopener noreferrer">
                <slot mdc-unwrap="p" />
            </a>
        </template>
        <slot v-else mdc-unwrap="p" />
    </IDCButton>
</template>
