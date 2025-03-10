import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export type Skill = {
  title: string;
  icon: React.ReactNode;
  type: "front" | "back";
};

// type SkillsProps = {
//   skills: Skill[];
// };

const SkillsList = ({
  skills,
  itemsWrapperClassName,
}: {
  skills: Skill[];
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
      <div
        className={twMerge(
          "flex flex-none p-0 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-1.5 px-2.5 outline outline-2 outline-white/10 rounded-lg"
              >
                <span className="w-4 h-4">{skill.icon}</span>
                <span className="font-semibold">{skill.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default SkillsList;
