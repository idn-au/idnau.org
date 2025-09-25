<script lang="ts" setup>
import { type HTMLAttributes } from "vue";
import { OlZoomToExtentControl } from "vue3-openlayers/controls";
import { RDFStore, type PrezFocusNode } from "prez-lib";
import { Locate, ExternalLink, ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from "lucide-vue-next";
import { cn } from "~/lib/utils";

const props = defineProps<{
    class?: HTMLAttributes["class"];
}>();

const PER_PAGE = 10;
const LIMIT = 100;

const searchResults = ref<PrezFocusNode[]>([]);
const loading = ref(false);
const pageNumber = ref(1);

const baseMapRef = useTemplateRef("baseMapRef");

const geomPredicates = [
    "http://www.opengis.net/ont/geosparql#hasGeometry",
    "http://www.opengis.net/ont/geosparql#hasBoundingBox",
];
const features = computed(() => {
    return {
        "type": "FeatureCollection",
        "title": "Search",
        "features": searchResults.value.filter(f => f.properties && Object.keys(f.properties).some(p => geomPredicates.includes(p))).map(f => {
            return {
                type: "Feature",
                wkt: (f.properties!["http://www.opengis.net/ont/geosparql#hasGeometry"] || f.properties!["http://www.opengis.net/ont/geosparql#hasBoundingBox"]).objects[0].properties["http://www.opengis.net/ont/geosparql#asWKT"].objects[0].value,
                name: f.label?.value || f.value,
                data: {
                    iri: f.value
                },
                id: f.value,
            }
        })
    }
});

const paginatedResults = computed(() => {
    const start = (pageNumber.value - 1) * PER_PAGE;
    const end = (pageNumber.value * PER_PAGE) - 1;
    if (searchResults.value.length > PER_PAGE) {
        return searchResults.value.slice(start, end);
    } else if (searchResults.value.length > 0) {
        return searchResults.value;
    } else return [];
});

let abortController = new AbortController();

async function searchWithin(geometry: { geoJSON: string; wkt: string; }) {
    if (loading.value) {
        abortController.abort();
    }
    abortController = new AbortController();
    loading.value = true;
    searchResults.value = [];
    const query = {
        "op": "s_within",
        "args": [
            { "property": "geometry" },
            JSON.parse(geometry.geoJSON),
        ],
    };
    const queryEncoded = encodeURIComponent(JSON.stringify(query));
    const r = await $fetch<string>(`https://api.idnau.org/cql?filter=${queryEncoded}&limit=${LIMIT}`, {
        signal: abortController.signal,
    });
    const store = new RDFStore();
    // store.setBaseUrl("https://data.idnau.org")
    store.load(r);
    searchResults.value = store.getList().sort((a, b) => (a.label?.value || a.value).localeCompare(b.label?.value || b.value));
    loading.value = false;
}
</script>

<template>
    <ClientOnly>
        <div :class="cn('mx-auto max-w-4xl', props.class)">
            <Map
                ref="baseMapRef"
                class="h-[500px]"
                :layers="[features]"
                fitAddedLayersToExtent
                :animationDuration="1000"
                enableToolbar
                enableDrawing
                enableClearFeatures
                clearDrawingsOnLayerChange
                :loading="loading"
                @drawend="searchWithin"
            >
                <template #controls>
                    <OlZoomToExtentControl :extent="[94.40010000000001, -47.24705625, 173.1501, -3.30174375]" label="^" tipLabel="Reset zoom" />
                </template>
            </Map>
            <div class="flex flex-col my-4">
                <div v-for="result in paginatedResults" class="flex flex-col p-2 even:bg-muted/50" :key="result.value">
                    <div class="flex flex-row items-center justify-between">
                        <span class="flex flex-row gap-1 items-center">
                            <a v-if="result.links" :href="`https://data.idnau.org${result.links[0].value}`" target="_blank" rel="noopener noreferrer">
                                {{ result.label?.value || result.value }}
                            </a>
                            <span v-else>{{ result.label?.value || result.value }}</span>
                            <a :href="result.value" target="_blank" rel="noopener noreferrer"><ExternalLink class="size-4" /></a>
                        </span>
                        <div class="flex flex-row gap-2 items-center">
                            <div>
                                <Badge v-for="type in result.rdfTypes" variant="outline" size="sm">
                                    <span>{{ type.label?.value || type.value }}</span>
                                    <a :href="type.value" target="_blank" rel="noopener noreferrer"><ExternalLink class="size-4" /></a>
                                </Badge>
                            </div>
                            <Button variant="outline" size="icon" title="Select feature on map" @click="baseMapRef?.selectFeatureByIRI(result.value, false)"><Locate /></Button>
                        </div>
                    </div>
                    <p v-if="result.description" class="text-sm italic text-muted-foreground !my-0">{{ result.description.value }}</p>
                </div>
            </div>
            <template v-if="searchResults.length > 0">
                <Pagination v-model:page="pageNumber" :total="searchResults.length" :itemsPerPage="PER_PAGE" showEdges :siblingCount="1" v-slot="{ page }">
                    <PaginationContent v-slot="{ items }" class="flex items-center gap-1 justify-center">
                        <PaginationFirst><ChevronsLeft class="size-4" /></PaginationFirst>
                        <PaginationPrevious><ChevronLeft class="size-4" /></PaginationPrevious>
                        <template v-for="(item, index) in items">
                            <PaginationItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                                <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="pageNumber = item.value">{{ item.value }}</Button>
                            </PaginationItem>
                            <PaginationEllipsis v-else :key="item.type" :index="index" />
                        </template>
                        <PaginationNext><ChevronRight class="size-4" /></PaginationNext>
                        <PaginationLast><ChevronsRight class="size-4" /></PaginationLast>
                    </PaginationContent>
                </Pagination>
                <div class="text-sm text-muted-foreground text-center mt-2">
                    Showing {{ (pageNumber - 1) * PER_PAGE + 1 }} to 
                    {{ Math.min(pageNumber * PER_PAGE, searchResults.length) }} of {{ searchResults.length }} items
                </div>
            </template>
        </div>
    </ClientOnly>
</template>
