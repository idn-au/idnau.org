import type {ButtonVariants} from "~/components/ui/button";

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
    url?: string;
    publisher?: string;
    idn?: boolean;
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

export type ScoreType = "fair" | "care";

export type ScoreDef = {
    key: string;
    title?: string;
    description: string;
    scores?: ScoreDef[];
};

export type CustomIDCButtonVariants = "red" | "yellow" | "green" | "blue" | "black" | "dark-ghost";

export type IDCButtonVariants = ButtonVariants["variant"] | CustomIDCButtonVariants;
