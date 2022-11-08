<script setup>
import { ref } from "vue";
import fairCareImg from "@/assets/images/fair_and_care.png";

const accordionActive = ref("");
</script>

<template>
    <h2>FAIR, CARE, TK and Indigenous Data Governance</h2>
    <p>The IDN Catalogue Project will leverage Indigenous Data Network and ARDC capabilities and research in creating programmatic applications for FAIR and CARE scoring of metadata records. 
    <br>
    It will also seek to include <a href="https://localcontexts.org/notices/aboutnotices/" target="_blank">Traditional and Biocultural Knowledge Notices and Labels</a> that institutions and researchers can request, to apply to their metadata records.</p>
    <p>Outcomes include supporting institutions to manage and share data more freely and cooperatively following the principles of:</p>
    <ul>
        <li>FAIR (Findable, Accessible, Interoperable and Reusable) and </li>
        <li>CARE (Collective benefit, Authority to control, Responsibility and Ethics), </li>
        <li>Traditional Knowledge (TK) Labels and </li>
        <li><a href="https://pursuit.unimelb.edu.au/articles/indigenous-data-governance-for-the-21st-century" target="_blank">Indigenous Data Governance</a>. See also STREAM 1 project information.</li>
    </ul>
    <h3>FAIR and CARE Principles</h3>
    <img :src="fairCareImg" alt="">
    <div class="accordion">
        <div class="section">
            <div class="section-header" @click="accordionActive === 'fair' ? accordionActive = '' : accordionActive = 'fair'">
                <h4>FAIR Principles</h4>
                <i :class="`fa-regular fa-chevron-${accordionActive === 'fair' ? 'up' : 'down'}`"></i>
            </div>
            <div :class="`section-body-wrapper ${accordionActive === 'fair' ? 'open' : ''}`">
                <div class="section-body">
                    <p>In 2016, the <a href="https://doi.org/10.1038/sdata.2016.18" target="_blank">'FAIR Guiding Principles for scientific data management and stewardship'</a> were published in Scientific Data. The authors intended to provide guidelines to improve the Findability, Accessibility, Interoperability, and Reuse of digital assets. </p>
                    <p>The full principles are set out in full on the <a href="https://www.go-fair.org/fair-principles/" target="_blank">GO FAIR</a> website. ARDC also offers comprehensive <a href="https://ardc.edu.au/resource/fair-data/" target="_blank">information and training</a>. 
                    <br>
                    The FAIR Principles refer to three types of entities: data, metadata and infrastructure.
                    </p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-header" @click="accordionActive === 'care' ? accordionActive = '' : accordionActive = 'care'">
                <h4>CARE Principles</h4>
                <i :class="`fa-regular fa-chevron-${accordionActive === 'care' ? 'up' : 'down'}`"></i>
            </div>
            <div :class="`section-body-wrapper ${accordionActive === 'care' ? 'open' : ''}`">
                <div class="section-body">
                    <p>The CARE principles, developed by the <a href="https://www.gida-global.org/care" target="_blank">Global Indigenous Data Alliance (GIDA)</a>, reflect the crucial role of data in advancing Indigenous innovation and self-determination. They ensure that data movements like the open data movement, whatever they’re advocating and pursuing, respect the people and purpose behind the data.</p>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-header" @click="accordionActive === 'tk' ? accordionActive = '' : accordionActive = 'tk'">
                <h4>Traditional Knowledge Labels</h4>
                <i :class="`fa-regular fa-chevron-${accordionActive === 'tk' ? 'up' : 'down'}`"></i>
            </div>
            <div :class="`section-body-wrapper ${accordionActive === 'tk' ? 'open' : ''}`">
                <div class="section-body">
                    <p><a href="https://localcontexts.org/">Local Contexts</a> was founded in 2010 to support Indigenous communities to manage their intellectual and cultural property, cultural heritage, environmental data and genetic resources within digital environments. </p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.accordion {
    display: flex;
    flex-direction: column;

    .section {
        display: flex;
        flex-direction: column;

        .section-header {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 12px;
            background-color: #f2f2f2;

            h4 {
                margin: 0;
            }
        }

        .section-body-wrapper {
            height: 0;
            overflow-y: hidden;

            &.open {
                height: auto;
            }

            .section-body {
                background-color: #fbfbfb;
                padding: 12px;
            }
        }
    }
}
</style>