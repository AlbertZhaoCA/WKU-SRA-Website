"use client";
import React, { ReactNode, useState } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import avatarLi from '../_datas/avatarLi.jpg'
import avatarMi from '../_datas/avatarMi.jpg'
import Modal from "@/components//ui/pop-up";
import LiIntro from "./LiIntro";
import MiIntro from "./MiIntro";


export default function Leaders() {
  const [openLi,setOpenLi] = useState(false);
  const [openMi,setOpenMi] = useState(false);

  const people = [
    {
      id: 1,
      name: "米逸轩",
      designation: "24 应用数学",
      image:
       avatarLi.src,
        action:()=>{
          const timer = setTimeout(
           ()=> {
            setOpenMi(true);
            setOpenLi(false);
           },500)
         }

     },
    
    {
      id: 2,
      name: "李嘉树",
      designation: "24 应用数学",
      image:
      avatarMi.src,
      action:()=>{
        const timer = setTimeout(()=> {
          setOpenLi(true);
          setOpenMi(false);
          },500)
       }
     },
    
  ];
 
  

  return (
    <div className="  flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
      {
        openLi&&<Modal Component={LiIntro as unknown as React.FC<{}>} isOpen={openLi} setOpen={setOpenLi} />
      }
      {
        openMi&&<Modal Component={MiIntro as unknown as React.FC<{}>} isOpen={openMi} setOpen={setOpenMi} />
      }
    </div>
  );
}
