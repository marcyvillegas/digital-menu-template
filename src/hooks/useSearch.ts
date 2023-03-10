import React, { useState } from "react";
import { MenuType } from "../data/menu";

// USE SEARCH LOGIC
// filter the data
// have a delay when searching and return isSearching value
// return searchedMenu data

function useSearch(menuData: MenuType) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedData, setSearchedData] = useState<MenuType>(menuData);
  const [timer, setTimer] = useState(null);

  function getSearchedData(data: MenuType) {
    // seconds delay (setTimeout)
    // isSearching: true
    // for in loop
    // search name of food item from search value
    //

    let menuDataObject: any = {};

    for (const subMenu in menuData) {
      const foodList = menuData[subMenu as keyof MenuType];

      const filteredFoodList = foodList.filter((item) =>
        item.name.includes(searchValue)
      );

      menuDataObject[subMenu] = filteredFoodList;
    }
    console.log(menuDataObject);
  }

  function changeSearchValue(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
    clearTimeout(timer as any);
    const newTimer = setTimeout(() => getSearchedData(menuData), 1000);
    setTimer(newTimer as any);
  }

  return {
    searchValue,
    changeSearchValue,
  };
}

export default useSearch;
