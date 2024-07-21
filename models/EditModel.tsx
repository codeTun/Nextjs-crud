"use server";
import prisma from "@/lib/db";

export async function editPost(formData: FormData , id: string) {
  await prisma.posts.update({
    where: {id},
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
}
