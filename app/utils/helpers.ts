export function formatDate(date: string): string {
    let options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    if (date.includes("T")) {
        options = {
            ...options,
            hour: "numeric",
            minute: "numeric",
        }
    }

    return new Date(date).toLocaleDateString("en-AU", options);
}