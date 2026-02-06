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
