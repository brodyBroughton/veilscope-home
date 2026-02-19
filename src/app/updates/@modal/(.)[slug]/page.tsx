import { notFound } from "next/navigation";
import UpdateModal from "@/components/UpdateModal";
import { prisma } from "@/lib/prisma";
import { formatUpdateDate, resolveUpdateShareUrl } from "@/lib/updates";

export const revalidate = 60;

type UpdateModalPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function UpdateModalPage({ params, }: UpdateModalPageProps) {
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
        <UpdateModal
            title={update.title}
            date={formatUpdateDate(update.date.toISOString())}
            summary={update.summary}
            tags={tags}
            body={update.content}
            shareUrl={resolveUpdateShareUrl(update.slug ?? update.id)}
        />
    );
}