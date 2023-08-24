"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitData = async (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(async (res) => {
        if (res.ok) {
          router.replace("/drafts");
          alert("Post created successfully!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className={"px-8"}>
      <form onSubmit={submitData} className={"flex flex-col"}>
        <h1 className={"font-cafe24 tracking-widest text-3xl"}>POSTING</h1>
        <input
          className={
            "border-slate-500 border-2 rounded-2xl p-4 my-4 font-pretendard"
          }
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          className={
            "border-slate-500 border-2 rounded-2xl p-4 font-pretendard"
          }
          maxLength={100}
          cols={50}
          rows={8}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          value={content}
        />
        <input
          className={`border-slate-500 border-2 rounded-2xl p-4 my-4 font-pretendard ${
            !content || !title || isLoading
              ? "bg-gray-100 text-slate-200"
              : "bg-slate-500 text-white"
          }`}
          disabled={!content || !title || isLoading}
          type="submit"
          value={isLoading ? "Creating..." : "Create"}
        />
        <Link
          href={"/"}
          replace
          className={
            "flex justify-center border-slate-500 border-2 rounded-2xl p-4  font-pretendard"
          }
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default Draft;
