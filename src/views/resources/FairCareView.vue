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
    <div>
        <img :src="fairCareImg" alt="Be FAIR and CARE" />
        <div>Image credit: <a href="https://www.gida-global.org/care" target="_blank">GIDA</a></div>
    </div>
    <div class="accordion">
        <div class="section">
            <div class="section-header" @click="accordionActive === 'fair' ? accordionActive = '' : accordionActive = 'fair'">
                <h4>FAIR Principles</h4>
                <i :class="`fa-regular fa-chevron-${accordionActive === 'fair' ? 'up' : 'down'}`"></i>
            </div>
            <div :class="`section-body-wrapper ${accordionActive === 'fair' ? 'open' : ''}`">
                <div class="section-body">
                    <p>In 2016, the <a href="https://doi.org/10.1038/sdata.2016.18" target="_blank">'FAIR Guiding Principles for scientific data management and stewardship'</a> were published in Scientific Data. The authors intended to provide guidelines to improve the Findability, Accessibility, Interoperability, and Reuse of digital assets. </p>
                    <p>The full principles are set out in full on the <a href="https://www.go-fair.org/fair-principles/" target="_blank">GO FAIR</a> website. ARDC also offers comprehensive <a href="https://ardc.edu.au/resource/fair-data/" target="_blank">information and training</a>. The FAIR Principles refer to three types of entities: data, metadata and infrastructure.
                    </p>
                    <div class="score-section">
                        <h5>Findable</h5>
                        <p>Metadata and data should be easy to find for both humans and computers.</p>
                        <ol class="f-score-list">
                            <li>(Meta)data are assigned a globally unique and persistent identifier</li>
                            <li>Data are described with rich metadata (defined by R1 below)</li>
                            <li>Metadata clearly and explicitly include the identifier of the data they describe</li>
                            <li>(Meta)data are registered or indexed in a searchable resource</li>
                        </ol>
                    </div>
                    <div class="score-section">
                        <h5>Accessible</h5>
                        <p>Once data is found, access information needs to be clearly indicated on the metadata.</p>
                        <ol class="a-score-list">
                            <li>(Meta)data are retrievable by their identifier using a standardised communications protocol
                                <ol class="subscore-list">
                                    <li>The protocol is open, free, and universally implementable</li>
                                    <li>The protocol allows for an authentication and authorisation procedure, where necessary</li>
                                </ol>
                            </li>
                            <li>Metadata are accessible, even when the data are no longer available</li>
                        </ol>
                    </div>
                    <div class="score-section">
                        <h5>Interoperable</h5>
                        <p>The data should be able to be integrated with other data.</p>
                        <ol class="i-score-list">
                            <li>(Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.</li>
                            <li>(Meta)data use vocabularies that follow FAIR principles</li>
                            <li>(Meta)data include qualified references to other (meta)data</li>
                        </ol>
                    </div>
                    <div class="score-section">
                        <h5>Reusable</h5>
                        <p>Metadata and data should be well-described so that they can be replicated and/or combined in different settings.</p>
                        <ol class="r-score-list">
                            <li>(Meta)data are richly described with a plurality of accurate and relevant attributes
                                <ol class="subscore-list">
                                    <li>(Meta)data are released with a clear and accessible data usage license</li>
                                    <li>(Meta)data are associated with detailed provenance</li>
                                    <li>(Meta)data meet domain-relevant community standards</li>
                                </ol>
                            </li>
                        </ol>
                    </div>
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
                    <div class="score-section">
                        <h5>Collective Benefit</h5>
                        <p>Data ecosystems shall be designed and function in ways that enable Indigenous Peoples to derive benefit from the data.</p>
                        <ol class="c-score-list">
                            <li>For inclusive development and innovation</li>
                            <li>For improved government and citizen engagement</li>
                            <li>For equitable outcomes</li>
                        </ol>
                    </div>
                    <div class="score-section">
                        <h5>Authority to Control</h5>
                        <p>Indigenous Peoples' rights and interests in Indigenous data must be recognised and their authority to control such data be empowered.</p>
                        <ol class="a-score-list">
                            <li>Recognizing rights and interests</li>
                            <li>Data for governance</li>
                            <li>Governance of data</li>
                        </ol>
                    </div>
                    <div class="score-section">
                        <h5>Responsibility</h5>
                        <p>Those working with Indigenous data have a responsibility to share how those data are used to support Indigenous Peoples' self-determination and collective benefit.</p>
                        <ol class="r-score-list">
                            <li>For positive relationships</li>
                            <li>For expanding capability and capacity</li>
                            <li>For Indigenous languages and worldviews.</li>
                        </ol>
                    </div>
                    <div class="score-section">
                        <h5>Ethics</h5>
                        <p>Indigenous Peoples' rights and wellbeing should be the primary concern at all stages of the data life cycle and across the data ecosystem.</p>
                        <ol class="e-score-list">
                            <li>For minimising harm and maximising benefit</li>
                            <li>For justice</li>
                            <li>For future use.</li>
                        </ol>
                    </div>
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
                    <p><a href="https://localcontexts.org/" target="_blank">Local Contexts</a> was founded in 2010 to support Indigenous communities to manage their intellectual and cultural property, cultural heritage, environmental data and genetic resources within digital environments.</p>
                    <p>This initiative offers digital strategies for Indigenous communities, cultural institutions and researchers through the TK (Traditional Knowledge) and BC (Biocultural) Labels and Notices. Together they function as a practical mechanism to advance aspirations for Indigenous data sovereignty and Indigenous innovation.</p>
                    <p>The IDN Catalogue Project is investigating ways to programmatically indicate to legacy indigenous data holders the appropriate labels and notices that could be applied to their metadata. Whilst there are many traditional knowledge and biocultural knowledge labels that can be applied by Indigenous Data Custodians, this project is only concerned with the application of the following four notices:</p>
                    <ul>
                        <li>TK (Traditional Knowledge) Notice</li>
                        <li>BC (Biocultural) Notice</li>
                    </ul>
                    <p>And the two Institution Notices</p>
                    <ul>
                        <li>Attribution Incomplete Notice</li>
                        <li>Open to Collaboration Notice.</li>
                    </ul>
                    <p>The Notices are a mechanism for researchers and institutional staff to identify Indigenous collections and Indigenous interests in data.</p>
                    <p>The Notices can function as place-holders on collections, data, or in a sample field until a TK or a BC Label is added by a community.</p>
                    <p>In order to apply these notices, you need to register for the Local Contexts Hub <a href="https://localcontexts.org/tk-label-hub/" target="_blank">here</a>.</p>
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
            // transition: height 0.2s ease-in-out;

            &.open {
                height: auto;
            }

            .section-body {
                background-color: #fbfbfb;
                padding: 12px;

                .score-section {
                    @each $x in (a, c, e, f, i, r) {
                        ol.#{$x}-score-list {
                            counter-reset: item;

                            & > li {
                                list-style-type: none;

                                &::before {
                                    display: inline-block;
                                    width: 2em;
                                    margin-left: -2em;
                                    content: "#{to-upper-case($x)}."counter(item);
                                    counter-increment: item;
                                }

                                ol.subscore-list {
                                    counter-reset: subitem;

                                    & > li {
                                        list-style-type: none;

                                        &::before {
                                            display: inline-block;
                                            width: 3em;
                                            margin-left: -2em;
                                            content: "#{to-upper-case($x)}."counter(item)"."counter(subitem);
                                            counter-increment: subitem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>