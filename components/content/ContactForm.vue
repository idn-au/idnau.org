<script lang="ts" setup>
const topicOptions = [
    "Website Feedback",
    "Assistance with Indigenous Data management",
    "Technical assistance with the Indigenous catalogue project",
    "Indigenous Data access or rematriation",
    "Indigenous Data Advocacy",
    "Other",
];

const form = ref({
    name: "",
    email: "",
    organisation: "",
    topic: "",
    message: "",
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
                    <BFormGroup id="input-group-1" label="Topic" label-for="input-2">
                        <BFormSelect id="input-2" v-model="form.topic" :options="topicOptions" />
                    </BFormGroup>
                    <BFormGroup id="input-group-3" label="Organisation" label-for="input-5">
                        <BFormInput id="input-5" v-model="form.organisation" type="text" placeholder="Organisation" />
                    </BFormGroup>
                </BCol>
                <BFormGroup id="input-group-2" label="Message" label-for="input-3">
                    <BFormTextarea id="input-4" v-model="form.message" placeholder="" />
                </BFormGroup>
            </BRow>
            <BButton type="submit" variant="success">Submit</BButton>
        </BForm>
    </BCard>
</template>

<style lang="scss" scoped></style>