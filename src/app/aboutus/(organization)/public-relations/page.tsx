'use client'
import avatarImg from './_datas/avatar.jpg';
import LightProfile from '@/components/ui/light-profile';
import svgArray from './_datas/svg';
import Intro from './_components/Intro';
import { useState } from 'react';
import Modal from '@/components/picture-pop-up';
import wePic from './_datas/wechat-qr-code.jpg';

export default function Page() {
    const [clicked, setClicked] = useState(false);

    const handleChildClick = () => {
        setClicked(!clicked);
      };
    return (
        <div>
            <LightProfile onChildClick={[handleChildClick]} avatar={avatarImg} person={{name: "滕炫宇（Angela）", intro: "27级 数学与应用数学", contact: "WeChat: qwo1k-mm",media:svgArray}} />
            {
            clicked ? <Modal width={avatarImg.width} height={avatarImg.height} isOpen={clicked} setOpen={handleChildClick} imageUrl={wePic.src} /> : null}
            <Intro/>        
        </div>
    );

};
