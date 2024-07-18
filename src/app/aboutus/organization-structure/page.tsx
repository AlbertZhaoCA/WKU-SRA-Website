"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-box";
import { cn } from "@/lib/utils";
import { Highlight } from "@/components/ui/hero-hilght";
import { Organization } from "./_components/OrganizationArchi";

export default function OrganizationStructure() {
    return (
        <div className="min-h-screen z-0 relative w-full overflow-hidden bg-slate-800 flex flex-col items-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />

           
            <h1 className={cn("md:text-3xl  text-4xl  m-4 text-white relative z-20")}>
                使命
            </h1>

            <p className={cn("md:text-2xl max-w-5xl text-justify text-2xl m-4 text-white relative z-20")}>
                我们致力于满足<Highlight delay={0} duration={0.5}>每一位 WKUer 对科学研究以及学术探索的需求。</Highlight> 促进科协成员自身的学术水平的发展，提高每一位 WKUer 
                的科研能力及科学素养，协助 WKU 科学研究与学术探索活动的展开。
            </p>
            <h1 className={cn("md:text-3xl text-4xl m-4 text-white relative z-20")}>
                组织架构
            </h1>

            <p className={cn("md:text-2xl max-w-5xl text-justify text-2xl m-4 text-white relative z-20")}>
                温肯科协是一个致力于<Highlight delay={0.5} duration={0.5}>促进科学研究与学术探索</Highlight>的组织。协会由<Highlight delay={1} duration={1}>主席团，行政部以及学术部组成。</Highlight>
                主席团负责制定和执行战略方向。行政部<Highlight delay={2} duration={0.5}>具体参与科协事务的策划与执行</Highlight>。学术部参与科协举办的学术活动，包括学术讲座，学术项目等。
            </p>

            <h1 className={cn("md:text-3xl text-4xl m-4 text-white relative z-20")}>
                部门和职能
            </h1>

            <Organization />
            
        </div>
    );
}
