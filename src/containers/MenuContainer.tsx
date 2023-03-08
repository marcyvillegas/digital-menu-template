import { useState } from "react";
import FoodItems from "../components/FoodItems";
import MenuCategoryName from "../components/MenuCategoryName";
import SearchInput from "../components/SearchInput";
import { Menu, MenuType } from "../data/menu";

// TODO:
// back button
// search and filter component
// useHook for filter and search
function MenuContainer() {
  const [menuData, setMenuData] = useState(Menu);

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
      <div>
        <SearchInput />
      </div>
      {getSubMenu()}
    </>
  );
}

export default MenuContainer;
