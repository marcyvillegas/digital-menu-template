import { useState } from "react";
import FoodItems from "../components/FoodItems";
import MenuCategoryName from "../components/MenuCategoryName";
import { Menu, MenuType } from "../data/menu";

// TODO:
// add mapping of sub menus and food list <- create component for Sub Menu Name and Food Items
// add addDecimal util
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

  return <>{getSubMenu()}</>;
}

export default MenuContainer;
