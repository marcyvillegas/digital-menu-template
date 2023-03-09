import { useState } from "react";
import FilterButton from "../components/FilterButton";
import FoodItems from "../components/FoodItems";
import MenuCategoryName from "../components/MenuCategoryName";
import SearchInput from "../components/SearchInput";
import { Menu, MenuType } from "../data/menu";
import useSearch from "../hooks/useSearch";

// TODO:
// filter modal component
// useHook for filter and search

function MenuContainer() {
  const [menuData, setMenuData] = useState<MenuType>(Menu);

  const { searchValue, changeSearchValue } = useSearch(menuData);

  function getSubMenu(): Array<JSX.Element> {
    let subMenuItems: Array<JSX.Element> = [];

    for (const subMenu in menuData) {
      const foodList = menuData[subMenu as keyof MenuType];

      let createdSubMenu = (
        <>
          <MenuCategoryName name={subMenu} />
          <FoodItems foodList={foodList} />
        </>
      );

      subMenuItems.push(createdSubMenu);
    }

    return subMenuItems.map((item) => item);
  }

  return (
    <>
      <button className="p-2 mb-5 border-[0.5px] border-[#AD6639]">
        <img src="src/assets/back_icon.png" />
      </button>
      <div className="mb-5 flex justify-between items-center">
        <SearchInput value={searchValue} onChange={changeSearchValue} />
        <FilterButton />
      </div>
      {getSubMenu()}
    </>
  );
}

export default MenuContainer;
