<script lang="ts" setup>
import { faXTwitter, faFacebookF, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | IDN` : 'The Indigenous Data Network';
    }
});
</script>

<template>
    <header>
        <TopNav />
    </header>
    <main>
        <div id="main-content">
            <NuxtPage />
        </div>
    </main>
    <footer class="bg-light">
        <div id="footer-content">
            <div class="socials">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesome :icon="faXTwitter" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesome :icon="faFacebookF" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesome :icon="faLinkedinIn" /></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FontAwesome :icon="faYoutube" /></a>
            </div>
            <div>Acknowledgement</div>
            <div>&copy; IDN 2024</div>
        </div>
    </footer>
</template>

<style lang="scss">
header {

}

main {
    flex-grow: 1;
    display: flex;

    #main-content {
        width: 100%;
        margin: 0 auto;
        max-width: 1300px;
        flex-grow: 1;
        padding: 12px;

        .document-driven-page {
            & > div {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
        }
    }
}

footer {
    // background-color: #e8e8e8;

    #footer-content {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        max-width: 1300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
        padding: 20px;

        .socials {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
        }
    }
}
</style>