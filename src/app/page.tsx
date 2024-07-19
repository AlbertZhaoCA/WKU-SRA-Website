"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Intro from "./_components/HomeIntro";
import Group from "./_components/GroupModal";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center antialiased">
      <div className="max-w-4xl mt-8 mx-auto p-4 ">
        <h1 className="relative z-0 sm:text-5xl text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b text-center font-sans font-bold fallback-text-color">
          科技·创新·未来 <br />
          Science·Innovation
        </h1>
        <Intro />
     
      </div>
      <BackgroundBeams />

      <Group />

    </div>
  );
}