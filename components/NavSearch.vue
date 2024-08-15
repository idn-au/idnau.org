<script lang="ts" setup>
import type { BFormInput } from "bootstrap-vue-next";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import type { SearchResult as SearchResultType } from "~/types";

const router = useRouter();

const searchKey = ref("");
const modal = ref(false)
const inputRef = ref<InstanceType<typeof BFormInput> | null>(null);

const { data, status, error, refresh } = await useLazyAsyncData(() => searchContent(searchKey));

const results = computed(() => {
    return (data.value?.value as SearchResultType[]).map(r => {
        const { content, ...result } = r;
        r.content = content.length > 100 ? content.slice(0, 100) + "..." : content;
        return r;
    });
});

router.beforeEach(() => {
    searchKey.value = "";
    modal.value = false;
});

function handleFocus() {
    if (inputRef.value) {
        inputRef.value.focus();
    }
}

function handleSearchX() {
    if (searchKey.value.length > 0) {
        searchKey.value = "";
    } else {
        modal.value = false;
    }
}
</script>

<template>
    <BButton @click="modal = !modal" variant="outline-secondary" title="Search">
        <FontAwesome :icon="faMagnifyingGlass" />
        <span class="d-none d-lg-inline ms-1">Search</span>
    </BButton>
    <BModal v-model="modal" size="lg" hideHeader hideFooter teleportDisabled teleportTo="body" id="search-modal" @shown="handleFocus">
        <BInputGroup>
            <template #prepend>
                <BInputGroupText><FontAwesome :icon="faMagnifyingGlass" /></BInputGroupText>
            </template>
            <BFormInput type="search" id="search" placeholder="Search" v-model="searchKey" @input="refresh" debounce="200" ref="inputRef" />
            <template #append>
                <BButton variant="outline-secondary" :title="searchKey.length > 0 ? 'Clear' : 'Close'" @click="handleSearchX"><FontAwesome :icon="faTimes" /></BButton>
            </template>
        </BInputGroup>
        <template v-if="searchKey.length > 0">
            <hr/>
            <div class="results">
                <div v-if="error">Error: {{ error.message }}</div>
                <div v-else-if="data && data.value?.length === 0">No results</div>
                <template v-else-if="data && data.value?.length > 0">
                    <SearchResult v-for="result in results" v-bind="result" />
                </template>
            </div>
        </template>
    </BModal>
</template>

<style lang="scss" scoped>
.results {
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow-y: auto;
    height: 80dvh;
}
</style>