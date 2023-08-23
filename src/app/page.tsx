import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

export default function Home() {
  const session = getServerSession(authOptions);
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      main
    </main>
  );
}
