<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const tab = ref<"map" | "text" | null>(null);

watch(tab, (newValue) => {
	if (newValue === "text") {
		const { hash, ...r } = route;
		router.replace({
			...r,
			hash: "#text"
		});
	} else {
		const { query, hash, ...r } = route;
		router.replace({
			...r
		});
	}
});

onMounted(() => {
	tab.value = route.hash && route.hash === "#text" ? "text" : "map";
});
</script>

<template>
	<Tabs v-model="tab">
		<TabsList class="grid grid-cols-2 max-w-2xl mx-auto mb-2 text-foreground">
			<TabsTrigger value="map" class="data-[state=active]:!bg-background">Map Search</TabsTrigger>
			<TabsTrigger value="text" class="data-[state=active]:!bg-background">Text Search</TabsTrigger>
		</TabsList>
		<TabsContent value="map">
			<MapSearchTemp />
		</TabsContent>
		<TabsContent value="text">
			<TextSearch />
		</TabsContent>
	</Tabs>
</template>
