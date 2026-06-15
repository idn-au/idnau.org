<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import MiniSearch from "minisearch";
import { Search, FileSearch } from "@lucide/vue";
import { useActiveElement, useMagicKeys } from "@vueuse/core";
import { cn } from "~/lib/utils";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "~/components/ui/dialog";
import Command from "./ui/command/Command.vue";

const props = defineProps<{
	icon?: boolean;
    class?: HTMLAttributes["class"];
}>();

const activeElement = useActiveElement();
const {
	Meta_K,
	Ctrl_K,
	// Slash,
} = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (
            (e.key === "k" && (e.metaKey || e.ctrlKey))
	        // || (e.key === "/" && notUsingInput.value)
        )
            e.preventDefault()
    },
});

const { data } = await useAsyncData("search", () => queryCollectionSearchSections("content"));

const open = ref(false);
const query = ref("");
const modifierKeySymbol = ref("ctrl");

const result = computed(() => miniSearch.search(toValue(query)));
const notUsingInput = computed(() => activeElement.value?.tagName !== "INPUT" && activeElement.value?.tagName !== "TEXTAREA");

const miniSearch = new MiniSearch({
    fields: ["title", "content"],
    storeFields: ["title", "content"],
    searchOptions: {
        prefix: true,
        fuzzy: 0.2,
    },
});

// Add data to the MiniSearch instance
miniSearch.addAll(toValue(data.value));

function handleOpenChange() {
    open.value = !open.value;
}

watch([
	Meta_K,
	Ctrl_K,
	// Slash,
], (v) => {
    if (
		v[0]
	    || v[1]
	    // || (v[2] && notUsingInput.value)
    ) {
        handleOpenChange();
    }
});

watch(open, (newValue) => {
    if (!newValue) {
        query.value = "";
    }
});

onMounted(() => {
    if (import.meta.client && navigator.platform.startsWith("Mac")) {
        modifierKeySymbol.value = "⌘";
    }
});
</script>

<template>
	<Button v-if="props.icon" variant="ghost" size="icon" :class="cn('', props.class)" title="Search" @click="open = true">
		<Search />
	</Button>
    <Button v-else variant="ghost" size="icon" :class="cn('md:w-[160px] font-normal bg-background/40 md:text-muted-foreground md:border md:px-2', props.class)" title="Search" @click="open = true">
        <Search />
        <span class="hidden md:flex">Search...</span>
        <kbd class="items-center pointer-events-none h-5 select-none gap-1 rounded border bg-muted font-sans font-medium min-h-4 text-[10px] px-1.5 ml-auto hidden md:inline-flex">
            {{ modifierKeySymbol }} K
        </kbd>
    </Button>
	<Dialog v-model:open="open">
		<DialogContent class="overflow-hidden p-0 sm:max-w-xl top-1/5 translate-y-[unset]" :showCloseButton="false">
			<DialogHeader class="sr-only">
				<DialogTitle>Search</DialogTitle>
				<DialogDescription>Search content throughout this website</DialogDescription>
			</DialogHeader>
			<Command>
				<CommandInput v-model="query" placeholder="Search..." class="" />
				<CommandList>
					<CommandEmpty v-if="result.length == 0">
						<Empty class="md:p-4">
							<EmptyHeader>
								<EmptyMedia variant="icon">
									<FileSearch />
								</EmptyMedia>
								<EmptyTitle>No results found</EmptyTitle>
								<EmptyDescription>desc</EmptyDescription>
							</EmptyHeader>
						</Empty>
					</CommandEmpty>
					<CommandGroup v-else heading="Results">
						<CommandItem v-for="link of result" :key="link.id" :value="link.id" class="cursor-pointer gap-1 py-2" as-child @select="open = false">
							<NuxtLink :to="link.id" class="flex flex-col items-start">
								<div>{{ link.title }}</div>
								<p class="text-muted-foreground/80 text-xs line-clamp-1">{{ link.content }}</p>
							</NuxtLink>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</DialogContent>
	</Dialog>
</template>

<style scoped>
:deep(div[data-slot="command-input-wrapper"]) > svg {
	width: calc(var(--spacing) * 5);
	height: calc(var(--spacing) * 5);
}
</style>