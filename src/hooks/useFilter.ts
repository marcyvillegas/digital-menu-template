import React, { useState } from "react";
import { MenuType } from "../data/menu";

export type FilterValuesType = {
  isNew: boolean;
  isBestSeller: boolean;
};

function useFilter(
  menuData: MenuType,
  setMenuData: React.Dispatch<React.SetStateAction<MenuType>>
) {
  const [selectedCategories, setSelectedCategories] = useState<
    Array<keyof MenuType>
  >([]);
  const [filterValues, setFilterValues] = useState<FilterValuesType>({
    isNew: false,
    isBestSeller: false,
  });
  const [originalMenuData] = useState<MenuType>(menuData);

  function filterMenuByCategory(
    categories: (keyof MenuType)[],
    filters: {
      isNew?: boolean;
      isBestSeller?: boolean;
    } = {}
  ) {
    let filteredMenu: any = {};

    if (categories.length === 0 && (filters.isNew || filters.isBestSeller)) {
      categories = Object.keys(menuData) as (keyof MenuType)[];
    }

    for (const subMenu in originalMenuData) {
      let categoryMenu = originalMenuData[subMenu as keyof MenuType];

      if (
        !categories.includes(subMenu as keyof MenuType) &&
        (!filters.isNew || !filters.isBestSeller)
      ) {
        categoryMenu = [];
      }

      if (filters.isNew && categories.includes(subMenu as keyof MenuType)) {
        categoryMenu = categoryMenu.filter((item) => item.isNew === true);
      }

      if (
        filters.isBestSeller &&
        categories.includes(subMenu as keyof MenuType)
      ) {
        categoryMenu = categoryMenu.filter(
          (item) => item.isBestSeller === true
        );
      }

      filteredMenu[subMenu] = categoryMenu;
    }

    setMenuData(filteredMenu);
  }

  return {
    selectedCategories,
    setSelectedCategories,
    filterValues,
    setFilterValues,
    filterMenuByCategory,
    //number of filters
  };
}

export default useFilter;
