"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link?: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 5);
  const thirdRow = products.slice(5, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 900, damping: 300, bounce: 500 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-900, 150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
      科技科研协会
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      科技科研协会是以营造学术氛围，培养科研能力为主要目标的多元化学生组织。本学年，学生科技科研协会按照既定规划组织和参与了多个和学术有关的讲座和活动，同时也积极响应了学校，学生事务部组织以及科研办的日常活动。
          新学年，科协的小伙伴们可以参与到以下活动中。
          首先是科研方面，我们会开展每周一次或每月两次的科研讲座活动，由学长学姐带领大家学习科研基本知识和技能，如CNN-LSTM模型等。同时，我们预计建立属于科协的科研平台，让大家提出想进行的科研课题，找到志同道合的同学，有经验的学长学姐将根据提出较多的1-2个主题进行指导。
          其次是活动组织方面，科协作为举办单位之一将负责每年一度的国际文化节。往年项目组同学与各个受邀教授和社团进行有效沟通并保持密切联系，也积极参与到策划和布景等活动中，保证了文化节活动的趣味性和同学参与度。
          第三在讲座举办方面，科协多次邀请来自商学院和理工学院的教授分享科研学术成果或为同学们答疑解惑，如法翔教授的讨论会等。秉持着对学术的热爱，科协多次邀请优秀学长学姐为同学们提供升学指导和语言学习指南，如吴哲学长分享会和孙学姐雅思分享会等。
          最后在协调学校工作方面，科协多次协助科研办举行科研日和青年科学家峰会等活动，迎接嘉宾并招募志愿者维持科研讲座秩序。
          科协在接下来的日子里会站在成员的角度多举办科研相关的活动，争取为同学们学习和参与科研提供更便利有用的知识和方法，期待大家与我们一起在科协将科研精神发扬光大。
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link?: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link?? '/'}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
