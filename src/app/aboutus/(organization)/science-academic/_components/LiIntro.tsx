import ranking from "../_datas/ranking.jpg";
import ranking2 from "../_datas/ranking2.jpg";
import Image from "next/image";

export default function LiIntro() {

    return(
    <div>
        <ul className=" mt-8">
            <li className="text-lg mb-2 ">
            项目：计算机视觉中的医学影像
            </li>
            <li className="text-lg mb-2 ">
            常用编程语言： C++，python和go
            </li>
            <li className="text-lg mb-2 ">
            CodeForces 排名： 1600+  
            </li>
            <li className="text-lg mb-2 ">

            <Image className="text-4xl mt-4 mb-4" width={ranking.width} height={ranking.height} src={ranking.src} alt="ranking"/>
            <Image className="text-4xl " width={ranking.width} height={ranking.height}  src={ranking2.src} alt="ranking" />
       
           </li>
        </ul>
        
</div>)
};
