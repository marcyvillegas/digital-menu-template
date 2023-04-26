import React, { useState } from "react";
import MenuCategoryButton from "./FilterCategoryButton";
import { Menu, MenuType } from "../data/menu";
import { FilterValuesType } from "../hooks/useFilter";
import { changeButtonColor } from "../components/FilterCategoryButton";
import OtherFilterButton from "./OtherFilterButton";

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
  removeFilter: () => void;
  applyFilterButtonIsClicked: boolean;
  setAppliedFilterIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

function FilterModal(props: PropsType) {
  const {
    filterMenuByCategory,
    toggleFilterModal,
    selectedCategories,
    setSelectedCategories,
    filterValues,
    setFilterValues,
    removeFilter,
    applyFilterButtonIsClicked,
    setAppliedFilterIsClicked,
  } = props;

  const menuData: MenuType = Menu;

  function getMenuCategories(): Array<JSX.Element> {
    let subMenuItems: Array<JSX.Element> = [];

    for (const subMenu in menuData) {
      let createdSubMenu = (
        <MenuCategoryButton
          name={subMenu}
          selectCategory={selectCategory}
          selectedCategories={selectedCategories}
        />
      );

      subMenuItems.push(createdSubMenu);
    }

    return subMenuItems.map((item) => item);
  }

  function selectCategory(categoryName: string): void {
    setSelectedCategories((prevData) => {
      if (selectedCategories.includes(categoryName as keyof MenuType)) {
        return prevData.filter((item) => item !== categoryName);
      }

      return [...prevData, categoryName as keyof MenuType];
    });
  }

  function selectOtherCategories(filterName: string): void {
    if (filterName === "New") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isNew: !filterValues.isNew,
        };
      });
    }

    if (filterName === "Best Seller") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isBestSeller: !filterValues.isBestSeller,
        };
      });
    }
  }

  function applyFilters(): void {
    setAppliedFilterIsClicked(true);
    filterMenuByCategory(selectedCategories, filterValues);
    toggleFilterModal();
  }

  const applyFilterButton = (
    <button
      className={"bg-[#AD6639] text-white p-2 rounded-md"}
      onClick={applyFilters}
    >
      Apply filters
    </button>
  );
  const clearFilterButton = (
    <button
      className={
        "border-[0.5px] border-[#AD6639] text-[#AD6639] p-2 rounded-md"
      }
      onClick={removeFilter}
    >
      Clear
    </button>
  );

  function displayModalButtons() {
    if (
      selectedCategories.length !== 0 ||
      filterValues.isNew ||
      filterValues.isBestSeller ||
      applyFilterButtonIsClicked
    ) {
      return (
        <>
          <hr className="w-100 mt-4 border-[#e6a881]" />
          <div className="flex justify-end gap-2 mt-2">
            {applyFilterButton}
            {clearFilterButton}
          </div>
        </>
      );
    }
  }

  const bestSellerButtonColor = changeButtonColor(filterValues.isBestSeller);
  const newButtonColor = changeButtonColor(filterValues.isNew);

  return (
    <div className="fixed mt-5 m-3">
      <div className="z-10 p-4 w-100 rounded-md bg-[#FDF2D7] border-[1px] border-[#AD6639] flex justify-center flex-col">
        <div className="flex justify-end">
          <button onClick={toggleFilterModal}>
            <img src="src/assets/close_icon.png" />
          </button>
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
            <OtherFilterButton
              name={"Best Seller"}
              selectOtherCategories={selectOtherCategories}
              buttonColor={bestSellerButtonColor}
            />
            <OtherFilterButton
              name={"New"}
              selectOtherCategories={selectOtherCategories}
              buttonColor={newButtonColor}
            />
          </div>
        </div>

        {displayModalButtons()}
      </div>
    </div>
  );
}

export default FilterModal;
