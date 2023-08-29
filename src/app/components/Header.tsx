"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Button from "@/app/components/Button";

const TITLE = "SUPER-STAR TOP6";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) => false;

  const { data: session, status } = useSession();
  const isBlack = session?.user?.email === "bjkim0228@naver.com";

  const Left = () => {
    return (
      <div className="left">
        <Link href="/">
          <p className={"text-head text-gray-700 font-cafe24 tracking-widest"}>
            {TITLE}
          </p>
        </Link>
      </div>
    );
  };
  let left = <Left />;

  let right;

  if (status === "loading") {
    left = <Left />;
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }
  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          <div>
            <Button text={"LOGIN"} />
          </div>
        </Link>
      </div>
    );
  }
  if (session) {
    left = (
      <div className={"flex items-center justify-center"}>
        <Link href="/">
          <p className={"text-head text-gray-700 font-cafe24 tracking-widest"}>
            {TITLE}
          </p>
        </Link>
        <Link
          href="/drafts"
          className={"ml-4 underline underline-offset-4 text-black-700"}
        >
          <div>POSTS</div>
        </Link>
        <Link
          href="/"
          className={"ml-4 underline underline-offset-4 text-black-700"}
        >
          <div>내가 쓴 글</div>
        </Link>
      </div>
    );
    right = (
      <div className={"flex flex-col items-end"}>
        <div className={"flex"}>
          <Link href="/create" className={"mr-3 mb-2"}>
            <Button text={"POSTING"} />
          </Link>
          <Link href="/api/auth/signout">
            <Button text={"LOGOUT"} />
          </Link>
        </div>
        <div className={"font-pretendard text-sm tracking-widest"}>
          {isBlack ? "퍼킹블랙컨슈머 " : null}
          {session.user?.name} ({session.user?.email})
        </div>
      </div>
    );
  }

  return (
    <nav
      className={
        "bg-gradient-to-t from-purple-100 to-blue-100 h-32 rounded-b-3xl px-6 py-5 flex justify-between mb-8"
      }
    >
      {left}
      {right}
    </nav>
  );
};

export default Header;
