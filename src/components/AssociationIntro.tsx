"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function AssociationIntro() {
  return <HeroParallax products={list} />;
}
export const list = [
  {
    title: "科技家乡之旅",
    thumbnail:
      "/activity-research-hometown.jpg",
  },
  {
    title: "WYSS",
    thumbnail:
      "/wyss.jpg",
  }, 
  {
    title: "破冰",
    thumbnail:
      "/first-day-at-rsa.jpg",
  },{
    title: "青科会",
    thumbnail:
      "/teenager-sci.jpg",
  },
  
];
