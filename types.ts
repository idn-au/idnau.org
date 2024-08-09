export type NavItem = {
    label: string;
    to: string;
    items?: NavItem[];
};

export type Publication = {
    title: string;
    url: string;
    img?: string;
    author: string;
    date: string;
    description?: string;
    type: "literature" | "podcast" | "video";
    length?: string; // pages or time
};

export type Event = {
    title: string;
    timestamp: string;
    body: string;
    author?: string;
    endtime?: string;
    location?: string;
};

export type SearchResult = {
    id: string;
    score: number;
    terms: string[];
    queryTerms: string[];
    match: { [term: string]: string[] };
    title: string;
    content: string;
    titles?: string[];
};