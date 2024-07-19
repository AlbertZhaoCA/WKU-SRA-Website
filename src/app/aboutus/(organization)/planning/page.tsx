'use client';
import LightProfile from "@/components/ui/light-profile";
import avatarImg from "./_datas/avatar.png";
import { useState } from 'react';
import contact from "./_datas/contact.png";
import Modal from "@/components/picture-pop-up";
import {svgArray} from "./_datas/svg";
import qq from "./_datas/qq.png";

//it is a bad code cause I used this logic also in other pages, rewrite when I have time (strange to use I, and I also do not 
//know is it a good idea to write comment like
export default function Page() {
    const [clicked, setClicked] = useState(false);
    const [qqClicked, setQQClicked] = useState(false);

    const handleChildClick = () => {
        setClicked(!clicked);
      };

      const handleQQChildClick = () => {
        setQQClicked(!qqClicked);
      };
    
return (
<div>
    <LightProfile onChildClick={[handleChildClick, handleQQChildClick]} avatar={avatarImg} person={{ name: "陈嘉悦 (Cynthia)", intro: "27级 金融学", contact: "WeChat 与 QQ",media:svgArray }} />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  pb-16 text-center lg:pt-10">
  

    <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="inline-block">迎万难，
            <span className="relative whitespace-nowrap text-blue-600">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative">赢</span></span>
        </span>
        <span className="inline-block">万难</span>
    </h1>

    <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
        <span className="inline-block">
            策划部是科技与科研协会中的一个核心部门，主要负责科协各类活动的策划、组织。如负责组织和协调活动的各项事务，
            包括场地布置、人员安排、物资准备等。策划部成员需要与相关部门和团队进行紧密的沟通和协调，确保活动的顺利进行。同时，他们还需要关注活动的细节，
            确保活动的每一个环节都能够完美呈现。制定学校与科研类型活动相关的策划方案，包括活动目标、内容、时间、地点等，确保活动的独特性和吸引力。在策划过程中，
            策划部成员需要充分考虑学生的兴趣和需求，以及学校的实际情况，力求打造既有意义又受欢迎的活动。
            策划部以服务学生、丰富校园文化生活为宗旨，致力于通过精心策划和组织各类大型活动，提升学生的综合素质，促进校园文化的繁荣发展。</span>
        <span className="inline-block"></span>
    </p>
    {
    clicked ? <Modal width={avatarImg.width} height={avatarImg.height} isOpen={clicked} setOpen={handleChildClick} imageUrl={contact.src} /> : null
    }
    {
    qqClicked ? <Modal width={avatarImg.width} height={avatarImg.height} isOpen={qqClicked} setOpen={handleQQChildClick} imageUrl={qq.src}  /> : null
    }


</div>
    </div>
);
};
