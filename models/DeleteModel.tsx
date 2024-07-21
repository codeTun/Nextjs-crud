"use server";
import prisma from "@/lib/db";

export async function deletePost(id: string
    ) {
    await prisma.posts.delete({
        where: {
            id,
        },
    });
}