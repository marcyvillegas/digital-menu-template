import React from "react";
import MenuCategoryButton from "./FilterCategoryButton";
import { Menu, MenuType } from "../data/menu";
import { FilterValuesType } from "../hooks/useFilter";

type PropsType = {
  filterMenuByCategory: (
    categories: (keyof MenuType)[],
    filters: {
      isNew?: boolean;
      isBestSeller?: boolean;
    }
  ) => void;
  toggleFilterModal: () => void;
  selectedCategories: (keyof MenuType)[];
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<(keyof MenuType)[]>
  >;
  filterValues: FilterValuesType;
  setFilterValues: React.Dispatch<React.SetStateAction<FilterValuesType>>;
};

function FilterModal(props: PropsType) {
  const {
    filterMenuByCategory,
    toggleFilterModal,
    selectedCategories,
    setSelectedCategories,
    filterValues,
    setFilterValues,
  } = props;

  const menuData: MenuType = Menu;

  function getMenuCategories(): Array<JSX.Element> {
    let subMenuItems: Array<JSX.Element> = [];

    for (const subMenu in menuData) {
      let createdSubMenu = (
        <MenuCategoryButton name={subMenu} selectCategory={selectCategory} />
      );

      subMenuItems.push(createdSubMenu);
    }

    return subMenuItems.map((item) => item);
  }

  function selectCategory(categoryName: string): void {
    setSelectedCategories((prevData) => [
      ...prevData,
      categoryName as keyof MenuType,
    ]);
  }

  function selectOtherCategories(filterName: string): void {
    if (filterName === "New") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isNew: true,
        };
      });
    }

    if (filterName === "Best Seller") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isBestSeller: true,
        };
      });
    }
  }

  function filterMenu(): void {
    filterMenuByCategory(selectedCategories, filterValues);
    toggleFilterModal();
  }

  function removeFilters(): void {
    setSelectedCategories([]);
    setFilterValues({
      isNew: false,
      isBestSeller: false,
    });
  }

  const modalButton = (
    <>
      <hr className="w-100 mt-4 border-[#e6a881]" />
      <div className="flex justify-end gap-2">
        <button onClick={filterMenu}>Apply filters</button>
        <button onClick={removeFilters}>Clear</button>
      </div>
    </>
  );

  return (
    <div className="fixed mt-5 m-3">
      <div className="z-10 p-4 w-100 rounded-md bg-[#FDF2D7] border-[1px] border-[#AD6639] flex justify-center flex-col">
        <div className="flex justify-end" onClick={toggleFilterModal}>
          Close
        </div>

        <div>
          <p className="font-oxygen font-bold text-[#AD6639] text-lg mb-2">
            Menu Categories
            <hr className="w-100 mt-1 border-[#AD6639]" />
          </p>

          <div className="flex flex-wrap gap-1">{getMenuCategories()}</div>
        </div>

        <div className="mt-3">
          <p className="font-oxygen font-bold text-[#AD6639] text-lg">
            Others
            <hr className="w-100 mt-1 border-[#AD6639] mb-2" />
          </p>

          <div className="flex flex-wrap gap-1">
            <button
              className="p-2 mr-2 mt-1 border-[0.5px] border-[#6B4E3C] text-[#6B4E3C] font-abeezee rounded-md"
              onClick={() => selectOtherCategories("Best Seller")}
            >
              Best Seller
            </button>
            <button
              className="p-2 mr-2 mt-1 border-[0.5px] border-[#6B4E3C] text-[#6B4E3C] font-abeezee rounded-md"
              onClick={() => selectOtherCategories("New")}
            >
              New
            </button>
          </div>
        </div>

        {modalButton}
      </div>
    </div>
  );
}

export default FilterModal;
