<script setup>
import { RouterView, RouterLink } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import idnLogo from "@/assets/images/idn-logo-250.png";
import aiatsisLogo from "@/assets/images/logo-aiatsis.svg";
import anuLogo from "@/assets/images/logo-anu.jpeg";
import ardcLogo from "@/assets/images/logo-ardc.svg";
import umLogo from "@/assets/images/logo-um.svg";
</script>

<template>
    <header>
        <div id="header-left">
            <RouterLink to="/" id="idn-logo"><img :src="idnLogo" alt="IDN Logo"></RouterLink>
            <div id="logo-text">
                <a href="https://mspgh.unimelb.edu.au/centres-institutes/centre-for-health-equity/research-group/indigenous-data-network" target="_blank">
                    <h1>The Indigenous Data Network</h1>
                </a>
                <RouterLink to="/" id="idn-logo">
                    <h2>IDN Catalogue Project</h2>
                </RouterLink>
            </div>
        </div>
        <NavBar />
    </header>

    <main>
        <RouterView />
    </main>
    <footer>
        <div id="footer-logos">
            <div>
                <a href="https://aiatsis.gov.au/" target="_blank"><img :src="aiatsisLogo" alt="AIATSIS Logo"></a>
            </div>

            <div>
                <a href="https://www.anu.edu.au/" target="_blank"><img :src="anuLogo" alt="ANU Logo"></a>
            </div>
            <div>
                <a href="https://ardc.edu.au/" target="_blank"><img :src="ardcLogo" alt="ARDC Logo"></a>
            </div>
            <div>
                <a href="https://www.unimelb.edu.au/" target="_blank"><img :src="umLogo" alt="Melbourne Uni Logo"></a>
            </div>
        </div>
        <div id="footer-content">
            footer content
        </div>
    </footer>
</template>

<style lang="scss">
@import "@/assets/sass/_variables.scss";
$padding: 20px;

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    height: 100vh;
    font-family: Helvetica, Arial, sans-serif;
}

a {
    text-decoration: none;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: $padding;
    background-color: #eeeeee;

    #header-left {
        display: flex;
        flex-direction: row;
        gap: 20px;

        #idn-logo > img {
            height: 100px;
        }

        #logo-text {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            a {
                color: black;
            }

            h1 {
                margin: 0;
                font-size: 26px;
                margin-top: 6px;
            }

            h2 {
                margin: 0;
                font-size: 20px;
                margin-bottom: 18px;
            }
        }
    }
}

main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: $padding;
    gap: 12px;
}

footer {
    display: flex;
    flex-direction: column;

    #footer-logos {
        gap: 32px;
        padding: 32px 60px;
        height: 10vw;
        display: grid;
        grid-template-rows: minmax(0, 1fr);
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
        background-color: #eeeeee;

        div {
            max-height: 100%;
            display: flex;
            background-color: white;
            border-radius: 6px;
            padding: 12px;

            a {
                display: flex;
                flex-grow: 1;

                img {
                    height: auto;
                    max-width: 100%;
                    max-height: 100%;
                    margin: auto;
                }
            }
        }
    }

    #footer-content {
        padding: $padding;
        background-color: #eeeeee;
    }
}
</style>
