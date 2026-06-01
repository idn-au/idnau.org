<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { NuxtLink } from "#components";
import { cn } from "~/lib/utils";

const props = defineProps<{
    to: string;
	img?: string;
    class?: HTMLAttributes["class"];
}>();

const internal = computed(() => props.to.startsWith("/"));
</script>

<template>
    <component :is="internal ? NuxtLink : 'a'" :to="internal ? props.to : undefined" :href="internal ? undefined : props.to">
        <ShadCard :class="cn('rounded-lg border hover:bg-accent transition-all h-full flex items-center justify-center text-center text-lg', props.class)">
	        <NuxtImg v-if="props.img" :src="props.img" class="m-0!" />
            <slot mdc-unwrap="p" />
        </ShadCard>
    </component>
</template>
