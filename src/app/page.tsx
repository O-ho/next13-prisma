"use client";

import ListUser from "@/app/components/ListUser";
import HomeCarousel from "@/app/components/Carousel/HomeCarousel";

export default function Home() {
  return (
    <main>
      <div>활성화 유저</div>
      <ListUser />
      <HomeCarousel />
    </main>
  );
}
