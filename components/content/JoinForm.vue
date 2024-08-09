<script lang="ts" setup>
const form = ref({
    name: "",
    email: "",
    abn: "",
    url: "",
    notes: "",
});
</script>

<template>
    <BCard>
        <BForm>
            <BRow>
                <BCol md="6">
                    <BFormGroup id="input-group-3" label="Name" label-for="input-5">
                        <BFormInput id="input-5" v-model="form.name" type="text" placeholder="Name" />
                    </BFormGroup>
                    <BFormGroup id="input-group-3" label="Email" label-for="input-5">
                        <BFormInput id="input-5" v-model="form.email" type="email" placeholder="Email" />
                    </BFormGroup>
                </BCol>
                <BCol md="6">
                    <BFormGroup id="input-group-3" label="Website" label-for="input-5">
                        <BFormInput id="input-5" v-model="form.url" type="url" placeholder="https://..." />
                    </BFormGroup>
                    <BFormGroup id="input-group-3" label="ABN" label-for="input-5">
                        <BFormInput id="input-5" v-model="form.abn" type="text" placeholder="ABN" />
                    </BFormGroup>
                </BCol>
                <BFormGroup id="input-group-2" label="Notes" label-for="input-3">
                    <BFormTextarea id="input-4" v-model="form.notes" placeholder="Any extra notes here" />
                </BFormGroup>
            </BRow>
            <BButton type="submit" variant="success">Submit</BButton>
        </BForm>
    </BCard>
</template>

<style lang="scss" scoped></style>