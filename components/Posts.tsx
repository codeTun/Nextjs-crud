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

import prisma from "@/lib/db";
import Link from "next/link";

export default async function Posts() {
  const posts = await prisma.posts.findMany();
  const count = posts.length;

  return (
    <Table>
      <TableCaption>A list of Posts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rang</TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post: any , index) => (
          
          <TableRow key={post.id}>
             <TableCell>{index+1}</TableCell>
            <Link href={`/posts/${post.id}`}>
              <TableCell className="font-medium">{post.title}</TableCell>
            </Link>
            <TableCell>{post.content}</TableCell>
            <TableCell>{post.createdAt.toLocaleDateString()}</TableCell>{" "}
            <TableCell className="text-right">
              {post.updatedAt.toLocaleDateString()}
            </TableCell>{" "}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{count} Post(s)</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
