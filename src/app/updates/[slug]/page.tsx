import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatUpdateDate } from "@/lib/updates";

export const revalidate = 60;

type UpdatePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function UpdatePage({ params }: UpdatePageProps) {
    const { slug } = await params;
    const update = await prisma.update.findFirst({
        where: {
            published: true,
            OR: [{ slug }, { id: slug }],
        },
        select: {
            id: true,
            slug: true,
            title: true,
            summary: true,
            date: true,
            tags: true,
            featured: true,
            content: true,
        },
    });

    if (!update) {
        notFound();
    }

    const tags = update.tags ? [...update.tags] : [];
    if (update.featured && !tags.some((tag) => tag.toLowerCase() === "featured")) {
        tags.unshift("Featured");
    }

    return (
        <div className="container section">
            <div className="update-card-tags">
                {tags.length > 0 ? (
                    tags.map((tag: string) => (
                        <span key={tag} className="update-tag">
                            {tag}
                        </span>
                    ))
                ) : (
                    <span className="update-tag">Update</span>
                )}
            </div>
            <div className="update-card-date">{formatUpdateDate(update.date.toISOString())}</div>
            <h1>{update.title}</h1>
            <p className="muted">{update.summary}</p>
            {update.content ? <p className="modal-body">{update.content}</p> : null}
        </div>
    );
}