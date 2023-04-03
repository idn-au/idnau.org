<script setup>
import { ref, computed } from "vue";
import { FormInput } from "@idn-au/idn-lib";

const topicOptions = [
    {
        label: "Website or Project feedback",
        value: "feedback"
    },
    {
        label: "Assistance with Indigenous Data management",
        value: "indigenousAssistance"
    },
    {
        label: "Technical assistance with the Indigenous catalogue project",
        value: "technicalAssistance"
    },
    {
        label: "Indigenous Data access or rematriation",
        value: "dataAccess"
    },
    {
        label: "Indigenous Data Advocacy",
        value: "dataAdvocacy"
    },
    {
        label: "General Enquiry about the IDN Catalogue Project",
        value: "enquiry"
    },
];

const interestsOptions = [
    {
        label: "Indigenous Languages",
        value: "languages"
    },
    {
        label: "Cultural Heritage",
        value: "heritage"
    },
    {
        label: "Health and Wellness",
        value: "health"
    },
    {
        label: "Data Management",
        value: "dataManagement"
    },
    {
        label: "Environmental Monitoring",
        value: "monitoring"
    },
    {
        label: "Economic Development",
        value: "develompment"
    },
    {
        label: "Governance and Policy",
        value: "governance"
    },
];

const data = ref({
    name: "",
    email: "",
    organisation: "",
    message: "",
    topic: "",
    interests: []
});

const isEmpty = computed(() => {
    return Object.values(data.value).find(item => item !== "") === undefined;
});

const isFull = computed(() => {
    return Object.values(data.value).find(item => item === "") === undefined;
});

const validationMessages = ref({
    name: [],
    email: [],
    organisation: [],
    message: [],
    topic: [],
    interests: []
});

const isValid = computed(() => {
    return Object.values(validationMessages.value).find(item => item.length > 0) === undefined;
});

function clearValidate(key) {
    validationMessages.value[key] = [];
};

function validateIsEmpty(key, message) {
    if (data.value[key] === "" || data.value[key] === [] || data.value[key] === false) {
        validationMessages.value[key].push(message);
    }
};

function validateEmail(key) {
    if (!data.value[key].match(/.+@.+\..+/)) {
        validationMessages.value[key].push("Invalid email address");
    }
}

</script>

<template>
    <div id="contact-form-wrapper">
        <form action="">
            <div id="contact-form">
                <FormInput
                    type="text"
                    name="name"
                    id="name"
                    label="Name"
                    placeholder="Please enter your name"
                    :required="true"
                    @onBlur="clearValidate('name'); validateIsEmpty('name', 'Name must not be empty')"
                    v-model="data.name"
                    :invalidMessage="validationMessages.name"
                />
                <FormInput
                    type="email"
                    name="email"
                    id="email"
                    label="Email"
                    placeholder="Please enter your email"
                    :required="true"
                    @onBlur="clearValidate('email'); validateIsEmpty('email', 'Email must not be empty'); validateEmail('email')"
                    v-model="data.email"
                    :invalidMessage="validationMessages.email"
                />
                <FormInput
                    type="text"
                    name="organisation"
                    id="organisation"
                    label="Organisation"
                    placeholder="Please enter your organisation"
                    :required="true"
                    @onBlur="clearValidate('organisation'); validateIsEmpty('organisation', 'Organisation must not be empty')"
                    v-model="data.organisation"
                    :invalidMessage="validationMessages.organisation"
                />
                <FormInput
                    type="select"
                    name="topic"
                    id="topic"
                    label="Topic"
                    :options="topicOptions"
                    :required="true"
                    @onBlur="clearValidate('topic'); validateIsEmpty('topic', 'Topic must not be empty')"
                    v-model="data.topic"
                    :invalidMessage="validationMessages.topic"
                />
                <FormInput
                    type="select"
                    name="interests"
                    id="interests"
                    label="Interests"
                    :options="interestsOptions"
                    :required="true"
                    @onBlur="clearValidate('interests'); validateIsEmpty('interests', 'Interests must not be empty')"
                    v-model="data.interests"
                    :invalidMessage="validationMessages.interests"
                    multiple
                    allowAdd
                    searchable
                />
                <FormInput
                    type="textarea"
                    name="message"
                    id="message"
                    label="Message"
                    placeholder="Type your message here..."
                    :required="true"
                    @onBlur="clearValidate('message'); validateIsEmpty('message', 'Message must not be empty')"
                    v-model="data.message"
                    :invalidMessage="validationMessages.message"
                    :style="{ gridColumn: 'span 3' }"
                />
            </div>
            <button type="submit" title="Not available yet" :disabled="true || (!isFull || !isValid)">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

#contact-form-wrapper {
    border-radius: 6px;
    // background-color: #f7f7f7;
    border: 2px solid  #ececec;
    padding: 20px;

    #contact-form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        
        margin-bottom: 16px;

        :deep(textarea) {
            font-size: 0.833em;
        }
    }

    button {
        border-radius: 6px;
        border: none;
        padding: 6px 8px;
        background-color: $primary;
        color: white;
        cursor: pointer;

        &:disabled {
            cursor: default;
            opacity: 0.8;
        }
    }
}
</style>