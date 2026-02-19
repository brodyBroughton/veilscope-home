import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
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

        return NextResponse.json(items);
    } catch (error) {
        console.error("Updates API failed:", error);
        return NextResponse.json({ items: [] });
    }
}