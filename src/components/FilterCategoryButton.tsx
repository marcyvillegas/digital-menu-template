import React from "react";
import { MenuType } from "../data/menu";

type PropsType = {
  name: string;
  selectCategory: (categoryName: string) => void;
  selectedCategories: (keyof MenuType)[];
};

function MenuCategoryButton(props: PropsType) {
  const { name, selectCategory, selectedCategories } = props;

  function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function toggleFilter(): void {
    selectCategory(name);
  }

  const buttonColor = changeButtonColor(
    selectedCategories.includes(name as keyof MenuType)
  );

  return (
    <button
      onClick={toggleFilter}
      className={`p-2 mr-2 mt-1 border-[0.5px] border-[#6B4E3C] font-abeezee rounded-md ${buttonColor}`}
    >
      {capitalizeFirstLetter(name)}
    </button>
  );
}

export default MenuCategoryButton;

export function changeButtonColor(truthyValue: boolean): string {
  if (truthyValue) {
    return "bg-[#6B4E3C] text-white";
  }

  return "text-[#6B4E3C]";
}
