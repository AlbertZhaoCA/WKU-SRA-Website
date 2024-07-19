"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-hilght";
 
export default function Intro() {
  return (
    <HeroHighlight>
       <motion.h1
      initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mt-8 px-4 xxsm:text-2xl xxsm:leading-normal text-xl xsm:text-3xl xsm:leading-snug sm:text-3xl sm:leading-normal md:text-4xl md:leading-snug  lg:text-3xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-normal  mx-auto" >
      欢迎加入<Highlight delay={0} duration={0.7} className="text-blue dark:text-white">温州肯恩大学科学研究协会</Highlight>（WKU-SRA），一个充满<Highlight delay={0} duration={0.5} className="text-blue dark:text-white">激情和创新</Highlight>的学术社区！
      在这里， 
        我们致力于推动科学研究的发展，鼓励跨学科合作，<Highlight delay={0.5} duration={0.8} className="text-blue dark:text-white">培养下一代科研人才。
        </Highlight> 无论你是对前沿科技充满热情，
      还是希望在学术领域留下自己的印记，我们都为你提供平台与资源，
      让你的科研梦想成为现实。
      <Highlight delay={0.8} duration={1} className="text-blue dark:text-white"> 加入我们，一起探索未知的科学领域，共同创造美好的未来！
        </Highlight>
        
      </motion.h1>
    </HeroHighlight>
  );
}
