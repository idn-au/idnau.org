export type SPARQLResultsJSON = {
    head: {
        vars?: string[];
        link?: string[];
    },
    results?: {
        bindings: Record<string, {
            type: "uri" | "literal" | "bnode";
            value: string;
            "xml:lang"?: string;
            datatype?: string;
        }>[];
    },
    boolean?: boolean;
};

export type TimelineItem = {
    title: string;
    description?: string;
    date: string;
};

export type PublicationItem = {
    title: string;
    description?: string;
    date: string;
    author?: string[];
    img?: string;
    url: string;
};

export type NewsItem = {
    title: string;
    description: string;
    date: string;
    img?: string;
};

export type EventItem = {
    title: string;
    description?: string;
    start: string; // datetime
    end?: string; // datetime
    location?: string;
    url?: string;
    img?: string;
};
