import React from "react";
import { SubMenuType } from "../data/subMenus";

type PropsType = {
  foodList: SubMenuType[];
};

function FoodItems(props: PropsType) {
  const { foodList } = props;

  const createdFoodLists = foodList.map((item) => {
    const heartIcon = <img className="ml-1" src="/assets/heart_icon.png" />;
    const newIcon = <div className="bg-[#AD6639] text-white p-1 ml-1 text-[10px] rounded-md">New!</div>

    return (
      <div className="flex justify-between mb-1">
        <p className="mr-10 flex items-center">
          {item.name}
          {item.isBestSeller && heartIcon}
          {item.isNew && newIcon}
        </p>
        <p>{item.price.toFixed(2)}</p>
      </div>
    );
  });

  return (
    <div className="font-abeezee text-[#6B4E3C] my-2">{createdFoodLists}</div>
  );
}

export default FoodItems;
