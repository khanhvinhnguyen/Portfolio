import React from "react";

type SkillItemProps = {
  iconSkill: any;
  nameSkill: string;
};

const SkillItem = (props: SkillItemProps) => {
  const { nameSkill } = props;

  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <props.iconSkill size={64} />{" "}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold">{nameSkill}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
