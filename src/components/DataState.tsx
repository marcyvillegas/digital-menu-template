import React from "react";

type PropsType = {
  icon: string;
  label: string;
};

function DataState(props: PropsType) {
  const { icon, label } = props;

  return (
    <div className="w-100 h-100">
      <div className="flex justify-center items-center flex-col">
        <img className="w-32 mt-7" src={`/assets/${icon}`} />
        <p className="text-[#6B4E3C] font-abeezee mt-2">{label}</p>
      </div>
    </div>
  );
}

export default DataState;
