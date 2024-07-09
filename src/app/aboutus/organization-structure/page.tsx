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

            <h1 className={cn("md:text-4xl text-xl m-4 text-white relative z-20")}>
                组织架构
            </h1>

            <p className={cn("md:text-2xl max-w-5xl text-3xl m-4 text-white relative z-20")}>
                温肯科协是一个致力于<Highlight delay={0} duration={0.5}>促进科学研究与学术探索</Highlight>的组织。协会由主席团，行政部以及学术部组成
            </p>

            <h1 className={cn("md:text-4xl text-xl  m-4 text-white relative z-20")}>
                领导团队与决策机构
            </h1>

            <p className={cn("md:text-2xl  text-xl max-w-5xl m-4 text-white relative z-20")}>
                温肯科协是一个致力于<Highlight delay={0} duration={0.5}>促进科学研究与学术探索</Highlight>的组织。协会的组织架构设计旨在有效管理和推动各项活动，确保科协成员和外界对我们使命的理解和认同。
                主席团负责制定和执行战略方向。行政部由不同专业背景的成员组成，具体参与科协事务的策划与执行，负责组织和推动温肯学生科学研究与学术探索活动。学术部参与科协的学术活动，包括学术讲座，学术项目等。
            </p>
            <h1 className={cn("md:text-4xl text-xl m-4 text-white relative z-20")}>
                部门和职能
            </h1>


            <Organization />
        </div>
    );
}
