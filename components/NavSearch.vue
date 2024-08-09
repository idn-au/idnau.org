<script lang="ts" setup>
import type { SearchResult as SearchResultType } from "~/types";

const router = useRouter();

const searchKey = ref("");
const open = ref(false);

const { data, status, error, refresh } = await useLazyAsyncData(() => searchContent(searchKey));

const results = computed(() => {
    return (data.value?.value as SearchResultType[]).slice(0, 5).map(r => {
        const { content, ...result } = r;
        r.content = content.length > 100 ? content.slice(0, 100) + "..." : content;
        return r;
    });
});

router.beforeEach(() => {
    searchKey.value = "";
    open.value = false;
});
</script>

<template>
    <div class="nav-search">
        <BPopover v-model="open" manual id="search-popover" teleportTo="body" :teleportDisabled="true" :offset="0" placement="bottom">
            <template #target>
                <BFormInput id="search" v-model="searchKey" type="search" @focus="open = true" @blur="open = false" placeholder="Search" @input="refresh" debounce="500" />
            </template>
            <div v-if="searchKey.length > 0" class="results">
                <div v-if="error">Error: {{ error.message }}</div>
                <div v-else-if="data && data.value?.length === 0">No results</div>
                <template v-else-if="data && data.value?.length > 0">
                    <SearchResult v-for="result in results" v-bind="result" @click="open = false" />
                </template>
            </div>
        </BPopover>
    </div>
</template>

<style lang="scss" scoped>
.nav-search {
    :deep(.popover-arrow) {
        display: none;
    }

    .results {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
}
</style>