<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "~/lib/utils"

interface SkeletonProps {
  class?: HTMLAttributes["class"]
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div
    data-slot="skeleton"
    :class="cn('animate-pulse rounded-md', !!$slots.default ? 'bg-muted/30 dark:bg-muted/20' : 'bg-muted/90 dark:bg-muted/50', props.class)"
  ><slot /></div>
</template>
