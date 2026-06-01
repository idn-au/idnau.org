import type {ContentNavigationItem} from "@nuxt/content";
import {externalLinks} from "~/utils/consts";

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

export function filterPartialPaths(items: ContentNavigationItem[]): ContentNavigationItem[] {
    return items.filter(i => !i.path.split("/").some(s => s.startsWith("_"))).map(i => {
        return {
            ...i,
            children: i.children ? filterPartialPaths(i.children) : undefined,
        }
    });
}

function mergeExternalLinks(nav: ContentNavigationItem[], external: ContentNavigationItem[]): ContentNavigationItem[] {
    const links = nav.filter(n => n.path !== "/");

    external.forEach(e => {
        const parent = links.find(l => l.path === e.path);
        if (!parent) {
            links.push(e);
        } else {
            const newChildren = e.children?.filter(c1 => !parent.children?.map(c2 => c2.path).includes(c1.path));
            parent.children = [...(parent.children || []), ...(newChildren || [])].sort((a, b) => a.stem.localeCompare(b.stem));
        }
    });

    return links.sort((a, b) => a.stem.localeCompare(b.stem));
}

export async function getNavigation(includeExternal: boolean = false): Promise<ContentNavigationItem[]> {
    const nav = await queryCollectionNavigation("content", ["description"]);
    const navigation = filterPartialPaths(nav);

    if (includeExternal) {
        return mergeExternalLinks(navigation, externalLinks);
    } else {
        return navigation;
    }
}
