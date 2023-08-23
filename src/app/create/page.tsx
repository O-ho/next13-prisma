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
    <div>
      <form onSubmit={submitData}>
        <h1>New Draft</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          rows={8}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          value={content}
        />
        <input
          disabled={!content || !title || isLoading}
          type="submit"
          value={isLoading ? "Creating..." : "Create"}
        />
        <Link href={"/"} replace>
          or Cancel
        </Link>
        <style jsx>{`
          .page {
            background: var(--geist-background);
            padding: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          input[type="text"],
          textarea {
            width: 100%;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border-radius: 0.25rem;
            border: 0.125rem solid rgba(0, 0, 0, 0.2);
          }

          input[type="submit"] {
            background: #ececec;
            border: 0;
            padding: 1rem 2rem;
          }

          .back {
            margin-left: 1rem;
          }
        `}</style>
      </form>
    </div>
  );
};
export default Draft;
