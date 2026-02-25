import { CSSProperties } from "react";
import { formatUpdateDate } from "@/lib/updates";
import UpdateCardLink from "@/components/UpdateCardLink";

type UpdateItem = {
    id: string;
    slug?: string;
    title: string;
    date: string;
    summary: string;
    tags?: string[];
    featured?: boolean;
};

type UpdatesFeedProps = {
    status: "loading" | "error" | "empty" | "ready";
    items: UpdateItem[];
    animationKey?: string;
    compactFeatured?: boolean;
    linkBase?: string;
};

export default function UpdatesFeed({ status, items, animationKey, compactFeatured, linkBase }: UpdatesFeedProps) {
    if (status === "loading") {
        return <div className="updates-feed">Loading updates...</div>;
    }

    if (status === "error") {
        return <div className="updates-feed">Unable to load updates.</div>;
    }

    if (status === "empty") {
        return <div className="updates-feed">No updates yet.</div>;
    }

    return (
        <div
            className={`updates-grid updates-grid--animated${compactFeatured ? " updates-grid--compact" : ""}`}
            key={animationKey}
        >
            {items.map((item, index) => {
                const tags = item.tags ? [...item.tags] : [];
                if (item.featured && !tags.some((tag) => tag.toLowerCase() === "featured")) {
                    tags.unshift("Featured");
                }

                const slug = item.slug ?? item.id;
                const href = linkBase
                    ? `${linkBase}?slug=${encodeURIComponent(slug)}`
                    : `/updates/${slug}`;

                return (
                    <UpdateCardLink
                        key={item.id}
                        className={`update-card${item.featured && !compactFeatured ? " is-featured" : ""}`}
                        href={href}
                        style={{ "--update-delay": `${index * 40}ms` } as CSSProperties}
                    >
                        <div className="update-card-media" aria-hidden="true" />
                        <div className="update-card-tags">
                            {tags.length > 0 ? (
                                tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className={`update-tag${tag.toLowerCase() === "featured" ? " is-featured" : ""}`}
                                    >
                                        {tag}
                                    </span>
                                ))
                            ) : (
                                <span className="update-tag">Update</span>
                            )}
                        </div>
                        <div className="update-card-date">{formatUpdateDate(item.date)}</div>
                        <h4 className="update-card-title">{item.title}</h4>
                        <p className="update-card-summary">{item.summary}</p>
                    </UpdateCardLink>
                );
            })}
        </div>
    );
}