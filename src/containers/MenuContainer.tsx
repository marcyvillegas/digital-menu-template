import { useState } from "react";
import { Menu, MenuType } from "../data/menu";
import { SubMenuType } from "../data/subMenus";

// todo:
// add mapping of sub menus and food list
// useHook for filter and search
function MenuContainer() {
  const [menuData, setMenuData] = useState(Menu);

  function getSubMenu() {
    let menuItems = [];

    for (const subMenu in menuData) {
      const foodList = menuData[subMenu as keyof MenuType].map(
        (menuItem: SubMenuType) => menuItem
      );

      let createdSubMenu = (
        <>
          <p key={subMenu}>
            {subMenu.charAt(0).toUpperCase() + subMenu.slice(1)}
          </p>
          {foodList.map((item) => (
            <>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </>
          ))}
        </>
      );

      menuItems.push(createdSubMenu);
    }

    return menuItems.map((item) => item);
  }

  return <>{getSubMenu()}</>;
}

export default MenuContainer;
