import React from "react";
import { ButtonTypeEnum } from "../enums/ButtonTypeEnum";

type PropsType = {
  label: string;
  type: string;
  onClick: () => void;
};

function ModalButton(props: PropsType) {
  const { type, label, onClick } = props;

  function getClassName(): string {
    if (type === ButtonTypeEnum.FILLED) {
      return "bg-[#AD6639] text-white p-2 rounded-md";
    }

    return "border-[0.5px] border-[#AD6639] text-[#AD6639] p-2 rounded-md";
  }

  return (
    <button onClick={onClick} className={` ${getClassName()}`}>
      {label}
    </button>
  );
}

export default ModalButton;
