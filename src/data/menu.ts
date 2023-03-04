import { Beef, Breakfast, Dessert, Pork, Seafood, SubMenuType } from "./subMenus";

export type MenuType = {
    breakfast: SubMenuType[],
    pork: SubMenuType[],
    beef: SubMenuType[],
    seafood: SubMenuType[],
    dessert: SubMenuType[]
}

export const Menu: MenuType = {
    breakfast: Breakfast,
    pork: Pork,
    beef: Beef,
    seafood: Seafood,
    dessert: Dessert
}