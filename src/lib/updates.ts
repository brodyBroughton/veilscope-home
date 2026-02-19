import { UPDATES_API_URL } from "@/lib/links";

export type UpdateRecord = {
    id: string;
    slug?: string;
    title: string;
    date: string;
    summary: string;
    featured?: boolean;
    content?: string;
    body?: string;
    tags?: string[];
};

const resolveSiteUrl = () => {
    const base =
        process.env.NEXT_PUBLIC_SITE_URL ??
        process.env.VERCEL_URL ??
        "http://localhost:3000";

    return base.startsWith("http") ? base : `https://${base}`;
};

const resolveUpdatesUrl = () => {
    if (UPDATES_API_URL.startsWith("http")) return UPDATES_API_URL;
    return `${resolveSiteUrl()}${UPDATES_API_URL}`;
};

export const formatUpdateDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
};

export async function fetchUpdateBySlug(slug: string) {
    const res = await fetch(resolveUpdatesUrl(), { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to load updates.");
    }

    const data = await res.json();
    const list = Array.isArray(data) ? data : data?.items ?? [];
    const match = list.find((item: UpdateRecord) => item.slug === slug || item.id === slug);

    if (!match) return undefined;

    const tags = match.tags ? [...match.tags] : [];
    if (match.featured && !tags.some((tag) => tag.toLowerCase() === "featured")) {
        tags.unshift("Featured");
    }

    return {
        ...match,
        tags,
        body: match.body ?? match.content,
    };
}

export const resolveUpdateShareUrl = (slug: string) => `${resolveSiteUrl()}/updates/${slug}`;
