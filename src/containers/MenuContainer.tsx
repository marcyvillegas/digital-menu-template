import { useState } from "react";
import FilterButton from "../components/FilterButton";
import FilterModal from "../components/FilterModal";
import FoodItems from "../components/FoodItems";
import MenuCategoryName from "../components/MenuCategoryName";
import SearchInput from "../components/SearchInput";
import { Menu, MenuType } from "../data/menu";
import useSearch from "../hooks/useSearch";

function MenuContainer() {
  const [menuData, setMenuData] = useState<MenuType>(Menu);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  const { searchValue, changeSearchValue, isSearching } = useSearch(
    menuData,
    setMenuData
  );

  function getSubMenu(): Array<JSX.Element> {
    let subMenuItems: Array<JSX.Element> = [];

    for (const subMenu in menuData) {
      const foodList = menuData[subMenu as keyof MenuType];

      let createdSubMenu = (
        <>
          {foodList.length !== 0 && <MenuCategoryName name={subMenu} />}
          <FoodItems foodList={foodList} />
        </>
      );

      subMenuItems.push(createdSubMenu);
    }

    return subMenuItems.map((item) => item);
  }

  function toggleFilterModal() {
    setShowFilterModal(!showFilterModal);
  }

  const menuItems = isSearching ? <>SEARCHING</> : getSubMenu()

  return (
    <div className="w-100">
      {showFilterModal && <FilterModal />}
      <button className="p-2 mb-5 border-[0.5px] border-[#AD6639]">
        <img src="src/assets/back_icon.png" />
      </button>
      <div className="mb-5 grid grid-cols-4 gap-4">
        <SearchInput value={searchValue} onChange={changeSearchValue} />
        <FilterButton onClick={toggleFilterModal} />
      </div>
      {menuItems}
    </div>
  );
}

export default MenuContainer;
