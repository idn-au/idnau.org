<script setup>
// import streamsDrawing from "@/assets/images/iirc-streams-drawing3-final.svg";
</script>

<template>
    <h2 class="iirc-title">
        Improving Indigenous Research Capabilities
        <small>Building an Aboriginal and Torres Strait Islander Research Data Commons</small>
    </h2>
    <p>
        This project will strengthen the foundations of Aboriginal and Torres Strait Islander data governance, use, accessibility and management principles.
    </p>
    <p>
        The project represents Aboriginal and Torres Strait Islander researchers, organisations and communities across Australia, and facilitates collaboration with government agencies and other stakeholders.
    </p>
    <p>
        <a href="https://ardc.edu.au/project/improving-indigenous-research-capabilities/" target="_blank" rel="noopener noreferrer">Phase 1</a> of the project was undertaken from 2022-2024. Key outcomes included: 
    </p>
    <ul style="margin-top: 0;">
        <li>Reviewing existing national and international Indigenous data governance frameworks.</li>
        <li>Establishing novel data governance frameworks that are aligned with community needs, including the <a href="https://www.niaa.gov.au/resource-centre/framework-governance-indigenous-data" target="_blank" rel="noopener noreferrer">Framework for Governance of Indigenous Data</a>.</li>
        <li>Developing the <a href="https://idnau.org/resources/catalog" target="_blank" rel="noopener noreferrer">Indigenous Data Network Catalogue</a>, including a culturally appropriate spatio-temporal framework and vocabularies.</li>
        <li>Digitising initial legacy data assets.</li>
        <li>Translating interoperability between data infrastructures and platforms.</li>
        <li>Delivering training programs and workshops that significantly enhanced the capabilities of Indigenous data technicians and researchers.</li>
    </ul>
    <p>
        <a href="https://ardc.edu.au/project/improving-indigenous-research-capabilities/" target="_blank" rel="noopener noreferrer">Phase 2</a> of the project will be undertaken from 2024-2028. It will extend the foundations developed in Phase 1 through several activity streams:
    </p>
    <ul style="margin-top: 0;">
        <li>
            Foundation Stream: Aboriginal and Torres Strait Islander data governance and sovereignty
            <ul class="blocklist">
                <li>
                    The Foundation Stream will facilitate collaboration among Indigenous data governance leaders and stakeholders from Aboriginal and Torres Strait Islander communities and data custodians. This stream aims to develop Indigenous data governance principles and frameworks, such as the <a href="https://www.niaa.gov.au/resource-centre/framework-governance-indigenous-data" target="_blank" rel="noopener noreferrer">Framework for Governance of Indigenous Data</a>, which was co-designed with Australian Public Service Agencies.
                </li>
            </ul>
        </li>
        <li>
            Sub-Stream 1: Indigenous research data catalogue resources and extensions.
            <ul class="blocklist">
                <li>
                    Sub-Stream 1 will work with multiple Indigenous data custodians to review, refine and extend the Indigenous Data Network Catalogue model. This will include the digitisation and cataloguing of Indigenous data held by several Australian universities and contextual application of the Indigenous Data Catalogue model and tooling at the Yirrkala School Language Production Centre.
                </li>
            </ul>
        </li>
        <li>
            Sub-Stream 2: Indigenous spatio-temporal frameworks and infrastructure.
            <ul class="blocklist">
                <li>
                    Sub-Stream 2 will broaden the application of the Indigenous spatio-temporal framework, developing more sophisticated and accessible geospatial research tools. This will enhance the mapping of Indigenous data and multi-language representations of place names, and refine an interface that includes socioeconomic, education, cultural and social indicators.
                </li>
            </ul>
        </li>
        <li>
            Sub-Stream 3: Data capability building for Indigenous digital futures in Indigenous Australia.
            <ul class="blocklist">
                <li>
                    Sub-Stream 3 will strengthen the capacity of Indigenous communities and organisations to collect, manage, analyse and utilise data that is relevant to their needs and priorities. This will be achieved by developing and delivering formal training at the University of Melbourne, an internship program, and both researcher and community training modules.
                </li>
            </ul>
        </li>
        <li>
            Sub-Stream 4: Indigenous data repositories and data rematriation.
            <ul class="blocklist" style="margin-bottom: 0;">
                <li>
                    Sub-Stream 4 will investigate culturally appropriate and sustainable data repositories required for a wide range of Indigenous data custodians. It will prioritise refining, developing and leveraging data repository services to support critical and at-risk Indigenous data holdings. Rematriation and rehousing will be undertaken across several case studies, including <a href="https://yirrkala.com/" target="_blank" rel="noopener noreferrer">Buku-Larrnggay Mulka Centre</a>, working through community-led governance structures to protect sensitive information and foster collaboration between Indigenous communities and researchers.
                </li>
            </ul>
        </li>
    </ul>
    <p>
        The Improving Indigenous Research Capabilities project received investment (<a href="doi.org/10.3565/pr3g-s109" target="_blank" rel="noopener noreferrer">doi.org/10.3565/pr3g-s109</a> & <a href="doi.org/10.47486/HIR003" target="_blank" rel="noopener noreferrer">doi.org/10.47486/HIR003</a>) from the Australian Research Data Commons (ARDC) through the HASS and Indigenous Research Data Commons. The ARDC is enabled by the Australian Government's National Collaborative Research Infrastructure Strategy (NCRIS).
    </p>
</template>

<style lang="scss" scoped>
$muted: #555555;

.iirc-title {
    display: flex;
    flex-direction: column;
    gap: 8px;

    small {
        font-size: 0.6em;
        color: $muted;
    }
}

ul.blocklist {
    padding-left: 12px;
    margin-bottom: 20px;

    & > li {
        list-style: none;
        padding: 6px 12px;
        margin-top: 12px;
        // font-style: italic;
        color: $muted;
        border-left: 2px solid grey;
    }
}
</style>