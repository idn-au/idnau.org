import type {ScoreType} from "~/utils/types";

export const scoreDefs: Record<ScoreType, ScoreDef[]> = {
    fair: [
        {
            key: "F",
            title: "Findable",
            description: "Metadata and data should be easy to find for both humans and computers.",
            scores: [
                {
                    key: "F1",
                    description: "(Meta)data are assigned a globally unique and persistent identifier",
                },
                {
                    key: "F2",
                    description: "Data are described with rich metadata",
                },
                {
                    key: "F3",
                    description: "Metadata clearly and explicitly include the identifier of the data they describe",
                },
                {
                    key: "F4",
                    description: "(Meta)data are registered or indexed in a searchable resource",
                },
            ],
        },
        {
            key: "A",
            title: "Accessible",
            description: "Once data is found, access information needs to be clearly indicated on the metadata.",
            scores: [
                {
                    key: "A1",
                    description: "(Meta)data are retrievable by their identifier using a standardised communications protocol",
                    scores: [
                        {
                            key: "A1.1",
                            description: "The protocol is open, free, and universally implementable",
                        },
                        {
                            key: "A1.2",
                            description: "The protocol allows for an authentication and authorisation procedure, where necessary",
                        },
                    ]
                },
                {
                    key: "A2",
                    description: "Metadata are accessible, even when the data are no longer available",
                },
            ],
        },
        {
            key: "I",
            title: "Interoperable",
            description: "The data should be able to be integrated with other data.",
            scores: [
                {
                    key: "I1",
                    description: "(Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.",
                },
                {
                    key: "I2",
                    description: "(Meta)data use vocabularies that follow FAIR principles",
                },
                {
                    key: "I3",
                    description: "(Meta)data include qualified references to other (meta)data",
                },
            ],
        },
        {
            key: "R",
            title: "Reusable",
            description: "Metadata and data should be well-described so that they can be replicated and/or combined in different settings.",
            scores: [
                {
                    key: "R1",
                    description: "(Meta)data are richly described with a plurality of accurate and relevant attributes",
                    scores: [
                        {
                            key: "R1.1",
                            description: "(Meta)data are released with a clear and accessible data usage license",
                        },
                        {
                            key: "R1.2",
                            description: "(Meta)data are associated with detailed provenance",
                        },
                        {
                            key: "R1.3",
                            description: "(Meta)data meet domain-relevant community standards",
                        },
                    ]
                },
            ],
        },
    ],
    care: [
        {
            key: "C",
            title: "Collective Benefit",
            description: "Data ecosystems shall be designed and function in ways that enable Indigenous Peoples to derive benefit from the data.",
            scores: [
                {
                    key: "C1",
                    description: "For inclusive development and innovation",
                },
                {
                    key: "C2",
                    description: "For improved government and citizen engagement",
                },
                {
                    key: "C3",
                    description: "For inclusive development and innovation",
                },
            ],
        },
        {
            key: "A",
            title: "Authority to Control",
            description: "Indigenous Peoples' rights and interests in Indigenous data must be recognised and their authority to control such data be empowered.",
            scores: [
                {
                    key: "A1",
                    description: "Recognizing rights and interests",
                },
                {
                    key: "A2",
                    description: "Data for governance",
                },
                {
                    key: "A3",
                    description: "Governance of data",
                },
            ],
        },
        {
            key: "R",
            title: "Responsibility",
            description: "Those working with Indigenous data have a responsibility to share how those data are used to support Indigenous Peoples' self-determination and collective benefit.",
            scores: [
                {
                    key: "R1",
                    description: "For positive relationships",
                },
                {
                    key: "R2",
                    description: "For expanding capability and capacity",
                },
                {
                    key: "R3",
                    description: "For Indigenous languages and worldviews",
                },
            ],
        },
        {
            key: "E",
            title: "Ethics",
            description: "Data ecosystems shall be designed and function in ways that enable Indigenous Peoples to derive benefit from the data.",
            scores: [
                {
                    key: "E1",
                    description: "For minimising harm and maximising benefit",
                },
                {
                    key: "E2",
                    description: "For justice",
                },
                {
                    key: "E3",
                    description: "For future use",
                },
            ],
        },
    ],
}