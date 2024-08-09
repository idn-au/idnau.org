<script lang="ts" setup>
const PUBLICATION_TYPES = ["Literature", "Podcasts", "Videos"];

const form = ref({
    search: "",
    type: "",
    start: "",
    end: "",
    author: "",
});
</script>

<template>
    <BCard>
        <BForm>
            <BFormInput id="input-1" class="mb-2" v-model="form.search" type="search" placeholder="Search" autofocus size="lg" />
            <BRow>
                <BCol md="6">
                    <BFormGroup id="input-group-1" label="Type" label-for="input-2">
                        <BFormSelect id="input-2" v-model="form.type" :options="PUBLICATION_TYPES" />
                    </BFormGroup>
                    <BFormGroup id="input-group-3" label="Author" label-for="input-5">
                        <BFormInput id="input-5" v-model="form.author" type="text" placeholder="Author" />
                    </BFormGroup>
                </BCol>
                <BCol md="6">
                    <BFormGroup id="input-group-2" label="From" label-for="input-3">
                        <BFormInput id="input-3" v-model="form.start" type="date" />
                    </BFormGroup>
                    <BFormGroup id="input-group-2" label="To" label-for="input-3">
                        <BFormInput id="input-4" v-model="form.end" type="date" />
                    </BFormGroup>
                </BCol>
            </BRow>
            <BButton type="submit" variant="success">Submit</BButton>
        </BForm>
    </BCard>
</template>

<style lang="scss" scoped></style>