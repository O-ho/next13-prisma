import React from "react";
import { headers } from "next/headers";
import { PostProps } from "@/app/drafts/page";
import Post from "@/app/components/Post";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/app/lib/auth";

async function getDrafts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/myDraft`, {
    method: "GET",
  });
  const drafts = await res.json();

  return { post: drafts };
}
async function MyDraftPage() {
  const session = await getServerSession(authOptions);
  const { post }: { post: PostProps[] } = await getDrafts();
  if (!session) {
    return (
      <div>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </div>
    );
  }
  return (
    <div className={"flex px-8"}>
      <div className="page">
        <h1 className={"font-cafe24 tracking-widest text-3xl"}>MY POSTINGS</h1>
        <main>
          {post.map((item: PostProps) => (
            <div key={item.id} className="post">
              <Post post={item} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default MyDraftPage;
