
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PostsForm from "../../components/Form";

import prisma from "@/lib/db";
import Link from "next/link";

export default async function Posts() {
  const posts = await prisma.posts.findMany();
  const count = posts.length;

  return (
    <>
    <PostsForm/>
    <Table>
      <TableCaption>A list of Posts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead className="w-[200px]">Name</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: any, index) => (
          <TableRow key={post.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>
              <Link
                href={`/posts/${post.id}`}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Details
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">{count} Post(s)</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </>
  );
}
