"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div
      className={
        "mt-8 border-slate-200 border-4 rounded-2xl p-4 shadow-lg shadow-gray-200"
      }
    >
      <h2 className={"font-cafe24 tracking-widest text-3xl"}>{post.title}</h2>
      <p className={"font-pretendard text-lg my-4 italic"}>By - {authorName}</p>
      {/* eslint-disable-next-line react/no-children-prop */}
      <span className={"font-pretendard text-2xl tracking-wide leading-10"}>
        {" "}
        {post.content}
      </span>
    </div>
  );
};

export default Post;
