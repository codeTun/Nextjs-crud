"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.posts.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    },
  });
  revalidatePath("/");
}
