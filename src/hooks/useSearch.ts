import React, { useState } from "react";
import { MenuType } from "../data/menu";
import { FilterValuesType } from "./useFilter";

function useSearch(
  menuData: MenuType,
  setMenuData: React.Dispatch<React.SetStateAction<MenuType>>,
  setAppliedFilterValues: React.Dispatch<
    React.SetStateAction<FilterValuesType>
  >,
  setAppliedSelectedCategories: React.Dispatch<
    React.SetStateAction<(keyof MenuType)[]>
  >
) {
  const [timer, setTimer] = useState(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [originalMenuData] = useState<MenuType>(menuData);

  function getSearchedData(): void {
    setMenuData(originalMenuData);

    let menuDataObject: any = {};

    for (const subMenu in menuData) {
      const foodList = menuData[subMenu as keyof MenuType];

      const filteredFoodList = foodList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      menuDataObject[subMenu] = filteredFoodList;
      setIsSearching(false);
    }

    setMenuData(menuDataObject);
  }

  function changeSearchValue(event: React.ChangeEvent<HTMLInputElement>): void {
    setIsSearching(true);
    setSearchValue(event.target.value);
    setAppliedSelectedCategories([]);
    setAppliedFilterValues({
      isNew: false,
      isBestSeller: false,
    });

    if (event.target.value.trim() === "") {
      setIsSearching(false);
      clearTimeout(timer as any);
      return setMenuData(originalMenuData);
    }

    clearTimeout(timer as any);
    const newTimer = setTimeout(() => getSearchedData(), 1000);
    setTimer(newTimer as any);
  }

  return {
    searchValue,
    changeSearchValue,
    isSearching,
    setSearchValue,
  };
}

export default useSearch;
