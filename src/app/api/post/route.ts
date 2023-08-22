import { getSession } from "next-auth/react";
import prisma from "@/app/lib/prisma";

export default async function handler(req: any, res: any) {
  const { title, content } = req.body;
  const session = await getSession({ req });
  console.log(session);
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connect: {
          email: session?.user?.email as string,
        },
      },
    },
  });
  res.json(result);
}
