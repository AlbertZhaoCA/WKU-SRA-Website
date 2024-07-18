"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function AboutUs() {
    return (
        <TracingBeam className="px-6">

            <div className="max-w-2xl mx-auto antialiased pt-4 relative">

                {content.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item!.badge}
                        </h2>


                        <div className="text-sm  prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="800"
                                    width="800"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item!.description}
                        </div>
                    </div>
                ))}

            </div>

        </TracingBeam>
    );
}

const content = [
    {
        description: (
            <>
                <p>

                    开场即燃的街舞社, 戏剧团

                    民乐队，艺术团表演助力

                    干货多多的教授科研彩蛋

                    诚意满满，匠心出品的科举榜单

                    家乡记忆灼灼其辉，

                    省份文化荟萃一堂

                    给你意想不到的惊喜~
                </p>
                

          
               
            </>
        ),
        badge: "科技家乡之旅 ",
        image: "/activity-research-hometown.jpg"
    },
    {
        description: (
            <>
                <p>
                    ⛰️根音乐小镇
                </p>
                <p>
                    在温馨且活力四射的轰趴馆中，我们参与了各种互动游戏和团队建设活动，迅速拉近了距离。现场欢声笑语不断，大家不仅享受了美味的餐点和饮品，还通过互动游戏和团队挑战，增强了团队合作精神和凝聚力。
                    本次活动的成功举办不仅加强了会员之间的联系，也为科协注入了新的活力。我们相信，通过这样的活动，科协将继续在科学研究和学术交流领域发挥重要作用。
                    科协感谢所有支持和参与此次活动的朋友们，并期待在未来的活动中与更多热爱科学和研究的朋友们相聚，共同推动学术进步和创新发展。
                </p>
            </>
        ),
        badge: "科协破冰",
        image:
            "/first-day-at-rsa.jpg"
    }, {
        description: (
            <>
                <p>
                    我们组织了青科会志愿者面试，参与并协调青科会的各项工作
                </p>
            </>
        ),
        badge: "世界青年科学家峰会",
        image:"/teenager-sci.jpg"
    },
    , {
        description: (
            <>
                <p>
                   我们有幸邀请到了科协前副主席，俩个月雅思首八的学姐，为大家带来雅思备考经验，也邀请到了UCL和Uchicago的学长学姐，
                   为大家带来留学经验分享，日常也会有学术部优秀的学长学姐为大家带来有趣的labs
                </p>
            </>
        ),
        badge: "学长学姐留学雅思分享会，labs等",
        image:"/studyabroad.jpg"
    },
    , {
       
        badge: "剩下的故事由你书写",
        image:"/tbc.png"
    },

];
