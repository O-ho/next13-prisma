"use client";

import React from "react";
import { getSession, useSession } from "next-auth/react";
import prisma from "@/app/lib/prisma";
import Post from "@/app/components/Post";

// const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = await getSession();
//   if (!session) {
//     res.statusCode = 403;
//     return { props: { drafts: [] } };
//   }
//   const drafts = await prisma.post.findMany({
//     where: {
//       author: { email: session?.user?.email },
//       published: false,
//     },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return {
//     props: { drafts },
//   };
// };
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
export default function Drafts({ params }: { params: Props }) {
  async function getDrafts() {
    const session = await getSession();
    if (!session) {
      return { props: { drafts: [] } };
    }
    const drafts = await prisma.post.findMany({
      where: {
        author: { email: session?.user?.email },
        published: false,
      },
      include: {
        author: {
          select: { name: true },
        },
      },
    });
    console.log('-------------------------------------')
    console.log(drafts);

    console.log('-------------------------------------')
    return {
      props: { drafts },
    };
  }
  const { data: session } = useSession();


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
          {params.drafts?.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: var(--geist-background);
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
