import React from "react";

const Legend = ({ color, title }) => {
  return (
    <div>
      <div
        className="w-[60px] h-[2px]"
        style={{ backgroundColor: color }}
      ></div>
      <span className="text-white font-normal text-xs">{title}</span>
    </div>
  );
};

export default Legend;
