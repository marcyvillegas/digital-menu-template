import React, { useState } from "react";
import { Menu, MenuType } from "../data/menu";

function useFilter(
  menuData: MenuType,
  setMenuData: React.Dispatch<React.SetStateAction<MenuType>>
) {
  const [filterValue, setFilterValue] = useState({
    categories: [],
    isNew: false,
    isFavorite: false,
  });
  const [originalMenuData] = useState<MenuType>(menuData);

  // grouping of menu categories
  function groupMenuByCategory(
    menu: typeof Menu,
    filteredCategories: string[] = []
  ) {
    const categories: any = {};

    for (const item in Menu) {
      const category = Menu[item as keyof MenuType];

      if (!categories[category as unknown as keyof MenuType]) {
        categories[category as unknown as keyof MenuType] = [];
      }

      categories[category as unknown as keyof MenuType].push(item);
    }

    if (filteredCategories.length > 0) {
      const filteredCategoriesSet = new Set(filteredCategories);

      for (const category in categories) {
        if (!filteredCategoriesSet.has(category)) {
          delete categories[category];
        }
      }
    }

    return categories;
  }

  // if these filters has values then call the filterMenuByCategory function
  const categories = filterValue.categories;
  const isNewFilter = filterValue.isNew;
  const isFavoriteFilter = filterValue.isFavorite;

  function filterMenuByCategory(
    categories: (keyof MenuType)[],
    filters: {
      isNew?: boolean;
      isFavorite?: boolean;
    } = {}
  ): MenuType[] {
    let filteredMenu: any[] = [];

    categories.forEach((category) => {
      let categoryMenu = Menu[category];

      if (filters.isNew !== undefined) {
        categoryMenu = categoryMenu.filter(
          (item) => item.isNew === filters.isNew
        );
      }

      if (filters.isFavorite !== undefined) {
        categoryMenu = categoryMenu.filter(
          (item) => item.isFavorite === filters.isFavorite
        );
      }

      filteredMenu = filteredMenu.concat(categoryMenu);
    });

    return filteredMenu;
  }

  return {
    setFilterValue,
  };
}

export default useFilter;
