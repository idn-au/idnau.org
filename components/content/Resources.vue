<script lang="ts" setup>
const { data } = await useAsyncData("resources", () => queryContent("/resources/").find());

const search = ref("");

const results = computed(() => {
    return data ? data.value?.filter(r => r.title.toLowerCase().includes(search.value.toLowerCase())) : [];
});

const tags = ref(data.value?.map(r => r.tags).flat().sort().map(t => {
    return {
        label: t,
        active: false
    };
}));

function getTags() {
    // get tags from resources
    // count occurence and sort by occurence
}
</script>

<template>
    <div class="header">
        <BFormInput id="input-1" class="mb-2" v-model="search" type="search" placeholder="Search" size="lg" />
        <div class="tags">
            <div class="tag-list">
                <BButton v-for="tag in tags" class="tag" size="sm" pill v-model:pressed="tag.active" variant="outline-primary">{{ tag.label }}</BButton>
            </div>
            <BButton class="tag align-self-baseline" size="sm" pill variant="outline-secondary">Clear</BButton>
        </div>
    </div>
    <Grid cols="1" smCols="2" mdCols="3" lgCols="4">
        <NuxtLink v-for="result in results" :to="result._path">
            <Card class="resource">
                <template #title>{{ result.title }}</template>
                {{ result.description }}
            </Card>
        </NuxtLink>
    </Grid>
    <!-- <div class="resources">
        <ContentList path="/resources" v-slot="{ list }">
            <Card v-for="resource in list" class="resource" :src="resource.thumbnail" @click="handleOpen(resource)">
                <template #title>{{ resource.title }}</template>
                {{ resource.description }}
            </Card>
        </ContentList>
    </div> -->
</template>

<style lang="scss" scoped>
@import "~/assets/sass/_variables.scss";

.tags {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;

    .tag-list {
        display: flex;
        flex-direction: row;
        gap: 6px;
        // overflow-x: auto;
        flex-wrap: wrap;
    }
}

.resource {
    cursor: pointer;

    &:hover {
        border-color: $primary;
    }
}
</style>