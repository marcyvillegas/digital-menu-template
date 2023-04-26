import React from "react";

type PropsType = {
  onClick: () => void;
};

function FilterButton(props: PropsType) {
  const { onClick } = props;

  return (
    <button
      className="py-1 border-[0.5px] border-[#AD6639] text-[#AD6639]"
      onClick={onClick}
    >
      Filter
    </button>
  );
}

export default FilterButton;
