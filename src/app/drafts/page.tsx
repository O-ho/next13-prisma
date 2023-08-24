import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import Post from "@/app/components/Post";

type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};
type Props = {
  drafts: PostProps[];
};
//https://next13-prisma-ochre.vercel.app
async function getDrafts() {
  const res = await fetch("https://next13-prisma-ochre.vercel.app/api/post", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const drafts = await res.json();

  return { post: drafts };
}

export default async function Drafts(props: any) {
  const session = await getServerSession(authOptions);

  const data = await getDrafts();
  if (!session) {
    return (
      <div>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </div>
    );
  }

  return (
    <div>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {data.post.map((item: PostProps) => (
            <div key={item.id} className="post">
              <Post post={item} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
