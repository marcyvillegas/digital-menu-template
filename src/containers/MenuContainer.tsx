import { useState } from "react";
import FilterButton from "../components/FilterButton";
import FilterModal from "../components/FilterModal";
import FoodItems from "../components/FoodItems";
import MenuCategoryName from "../components/MenuCategoryName";
import SearchInput from "../components/SearchInput";
import { Menu, MenuType } from "../data/menu";
import useSearch from "../hooks/useSearch";
import useFilter from "../hooks/useFilter";
import { useNavigate } from "react-router-dom";
import DataState from "../components/DataState";

function MenuContainer() {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState<MenuType>(Menu);

  const {
    filterMenuByCategory,
    selectedCategories,
    setSelectedCategories,
    filterValues,
    setFilterValues,
    removeFilter,
    toggleFilterModal,
    showFilterModal,
    setAppliedFilterValues,
    setAppliedSelectedCategories,
  } = useFilter(menuData, setMenuData);

  const { searchValue, changeSearchValue, isSearching, setSearchValue } =
    useSearch(
      menuData,
      setMenuData,
      setAppliedFilterValues,
      setAppliedSelectedCategories
    );

  function redirectToHome(): void {
    navigate("/");
  }

  function checkMenuLenght(): boolean {
    let menuLength = 0;

    for (const subMenu in menuData) {
      const foodList = menuData[subMenu as keyof MenuType];

      menuLength += foodList.length;
    }

    if (menuLength > 0) {
      return true;
    }

    return false;
  }

  function getMenuCategories(): Array<JSX.Element> {
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

  function displayMenu() {
    if (isSearching) {
      return <DataState icon={"search_icon.png"} label={"Searching..."} />;
    }

    if (!checkMenuLenght()) {
      return (
        <DataState icon={"empty_box_icon.png"} label={"No Results Found"} />
      );
    }

    return getMenuCategories();
  }

  const filterModal = showFilterModal && (
    <FilterModal
      toggleFilterModal={toggleFilterModal}
      filterMenuByCategory={filterMenuByCategory}
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      filterValues={filterValues}
      setFilterValues={setFilterValues}
      removeFilter={removeFilter}
      setSearchValue={setSearchValue}
    />
  );

  return (
    <div className="flex justify-center">
      {filterModal}
      <div className="w-100">
        <button
          className="p-2 mb-5 border-[0.5px] border-[#AD6639]"
          onClick={redirectToHome}
        >
          <img src="src/assets/back_icon.png" />
        </button>
        <div className="mb-5 grid grid-cols-4 gap-4">
          <SearchInput value={searchValue} onChange={changeSearchValue} />
          <FilterButton onClick={toggleFilterModal} />
        </div>
        {displayMenu()}
      </div>
    </div>
  );
}

export default MenuContainer;
