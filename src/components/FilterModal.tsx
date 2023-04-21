import React from "react";
import FilterCategoryButton from "./FilterCategoryButton";
import { MenuType } from "../data/menu";

type PropsType = {
  menuData: MenuType;
}

function FilterModal(props: PropsType) {

  const { menuData } = props;

  function getMenuCategories(): Array<JSX.Element> {
    let subMenuItems: Array<JSX.Element> = [];

    for (const subMenu in menuData) {

      let createdSubMenu = (
        <>
          <FilterCategoryButton name={subMenu} />
        </>
      );

      subMenuItems.push(createdSubMenu);
    }

    return subMenuItems.map((item) => item);
  }

  return (
    <div className="fixed mt-5">
      <div className="z-10 p-4 w-100 rounded-md bg-[#FDF2D7] border-[1px] border-[#AD6639] flex justify-center flex-col">
        <div>
          <p className="font-oxygen font-bold text-[#AD6639] text-lg mb-3">
            Menu Categories
            <hr className="w-100 mt-1 border-[#AD6639]" />
          </p>

          {/* Map button menu categories here */}
          {getMenuCategories()}
        </div>

        <div className="mt-3">
          <p className="font-oxygen font-bold text-[#AD6639] text-lg">
            Others
            <hr className="w-100 mt-1 border-[#AD6639]" />
          </p>

          {/* Map "other" buttons here */}
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
