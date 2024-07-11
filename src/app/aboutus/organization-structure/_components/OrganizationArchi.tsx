import { HoverEffect } from "../../../../components/ui/card-hover";

export function Organization() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "理科学术部",
    description:
      "推动科学研究的发展，组织各类学术活动促进会员间的学术交流与合作。",
    link: "/aboutus/science-academic",
  },
  {
    title: "商科学术部",
    description:
      "🚀 加入商科学术部，开启你的数据之旅 ",
    link: "/aboutus/business-academic",
  },
  {
    title: "宣传部",
    description:
      "📣 巧绘奇思，妙笔生花",
    link: "/aboutus/publicity",
  },
  {
    title: "秘书部",
    description:
      "👩🏻‍💼 加入秘书部，成为科协管理的中坚力量！在这里，你将有机会处理重要文件，制定协会管理规则，提高科协运行效率！",
    link: "/aboutus/secretary",
  },
  {
    title: "公关部",
    description:
      "📞 加入公关部，开启你的沟通与传播之旅！",
    link: "/aboutus/public-relations",
  },
  {
    title: "策划部",
    description:
      "策划部以服务学生、丰富校园文化生活",
    link: "/aboutus/planning",
  },
  {
    title: "主席团",
    description:
      "策划组织科协活动",
    link: "/aboutus/presidium",
  },
];
