import { getServerSession } from "next-auth";
import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { authOptions } from "@/app/lib/auth";

export async function POST(request: any, res: any) {
  const { title, content } = await request.json();
  console.log("---------------------------------------------------------");
  console.log(request);
  console.log("---------------------------------------------------------");

  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({ status: "fail", message: "You are not logged in" }),
      { status: 401 },
    );
  }
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: {
        connect: {
          email: session?.user?.email as string,
        },
      },
    },
  });
  return NextResponse.json(result);
}
