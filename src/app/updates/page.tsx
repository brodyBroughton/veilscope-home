import type { Metadata } from "next";
import UpdatesClient from "./UpdatesClient";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Updates — Veilscope",
  description: "Product progress and research notes from the Veilscope team.",
};

export default async function UpdatesPage() {
  const items = await prisma.update.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
    take: 20,
    select: {
      id: true,
      slug: true,
      title: true,
      date: true,
      summary: true,
      tags: true,
      featured: true,
    },
  });

  const initialItems = items.map((item) => ({
    ...item,
    date: item.date.toISOString(),
  }));

  return (
    <div className="container section">
      <h1>Updates</h1>
      <p className="lead">
        Product progress and research notes. Educational only. Not investment advice.
      </p>

      <UpdatesClient initialItems={initialItems} />
    </div>
  );
}