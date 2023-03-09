import React, { useState } from "react";
import { MenuType } from "../data/menu";

const SEARCH_DELAY = 3; // seconds

// USE SEARCH LOGIC
// filter the data
// have a delay when searching and return isSearching value
// return searchedMenu data

function useSearch(props: MenuType) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedData, setSearchedData] = useState();

  function filterData(data: MenuType) {
    
  }

  function changeSearchValue(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }

  return {
    searchValue,
    changeSearchValue
  };
}

export default useSearch;
