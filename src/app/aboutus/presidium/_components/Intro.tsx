import HeavyProfile from "@/components/ui/heavy-profile";
import albert from '../_datas/albert.json';
import { heavyProfileProps } from "@/utils/types";

const person: heavyProfileProps = {
  ...albert,
  majorInfo: albert.majorInfo as [string, string],
};

export default function Page() {
    
    return (
        <HeavyProfile {...person} />
    );
};