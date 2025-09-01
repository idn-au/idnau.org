<script lang="ts" setup>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faFacebookF, faLinkedinIn, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk && titleChunk !== "The Indigenous Data Network" ? `${titleChunk} | IDN` : "The Indigenous Data Network";
    }
});

const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("content").path(route.path).first();
});
</script>

<template>
    <div class="flex flex-col min-h-dvh">
        <MainNav />
        <main class="grow mb-12">
            <div class="mx-auto max-w-[1200px] px-5 prose dark:prose-invert">
                <IIRCNav v-if="route.path.startsWith('/research/iirc')" />
                <ContentRenderer v-if="page" :value="page" />
                <div v-else>
                    <h1>Page not found</h1>
                    <p>Sorry, this page does not exist. <NuxtLink to="/">Go home</NuxtLink>.</p>
                </div>
            </div>
        </main>
        <footer class="bg-secondary">
            <div class="mx-auto max-w-[1200px] py-12 px-5 text-center">
                <!-- <div class="flex flex-row gap-3 justify-center">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon :icon="faXTwitter" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon :icon="faFacebookF" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon :icon="faLinkedinIn" /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon :icon="faYoutube" /></a>
                </div> -->
                <div class="text-sm">The Indigenous Data Network acknowledges the Aboriginal and Torres Strait Islander Traditional Custodians of the lands on which we work and live. We pay respect to their Elders, past and present, and the place of Indigenous Knowledge in the academy and beyond. We acknowledge and respect that Aboriginal and Torres Strait Islander people have always used resources from the land and waters for nourishment, medicine and healing.</div>
                <div>&copy; Indigenous Data Network 2025</div>
            </div>
        </footer>
    </div>
</template>
