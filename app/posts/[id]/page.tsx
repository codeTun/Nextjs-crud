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

export default async function PostPage({ params }: any) {
  const post = await prisma.posts.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <Table>
      <TableCaption>Find post by id.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow key={post?.id}>
          <TableCell className="font-medium">{post?.title}</TableCell>
          <TableCell>{post?.content}</TableCell>
          <TableCell>{post?.createdAt.toLocaleDateString()}</TableCell>{" "}
          <TableCell className="text-right">
            {post?.updatedAt.toLocaleDateString()}
          </TableCell>{" "}
        </TableRow>
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
