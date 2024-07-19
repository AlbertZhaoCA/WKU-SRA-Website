import HeavyProfile from "@/components/ui/heavy-profile";
import albert from './_datas/albert.json';
import  yifei from './_datas/yifei.json';
import wennedy from './_datas/wennedy.json';
import ComingSoon from "@/components/coming-soon";


import { heavyProfileProps } from "@/utils/types";
import { redirect } from "next/navigation";

const AL: heavyProfileProps = {
  ...albert,
  majorInfo: albert.majorInfo as [string, string],
};

const YI: heavyProfileProps = {
    ...yifei,
    majorInfo: albert.majorInfo as [string, string],
  };

  const WE: heavyProfileProps = {
    ...wennedy,
    majorInfo: albert.majorInfo as [string, string],
  };

export default function Page() {

    
    return (
    <ComingSoon />
    // <div>
    //     <HeavyProfile {...AL} />
    //     <HeavyProfile {...YI} />
    //     <HeavyProfile {...WE} />
    // </div>
    );
};