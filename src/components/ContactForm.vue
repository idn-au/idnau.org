<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

</script>

<template>
    <h2>Contact Us</h2>
    <form action="">
        <div id="contact-form">
            <input type="text" name="name" id="name" placeholder="Name" v-model="name" />
            <input type="email" name="email" id="email" placeholder="Email" v-model="email" />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message here..." v-model="message"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

#contact-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    background-color: #f7f7f7;
    margin-bottom: 16px;
    border-radius: 6px;

    textarea {
        grid-column: span 2;
        font-family: unset;
        font-size: 13px;
    }

    input, textarea {
        border-radius: 6px;
        background-color: white;
        padding: 8px;
        border: 1px solid #9f9f9f;

        &:focus-visible {
            outline: none;
        }

        &:focus {
            box-shadow: 0px 0px 6px 2px rgba($color: #3780ee, $alpha: 0.4);
        }
    }
}

button {
    border-radius: 6px;
    border: none;
    padding: 6px 8px;
    background-color: $primary;
    color: white;
    cursor: pointer;
    
}
</style>