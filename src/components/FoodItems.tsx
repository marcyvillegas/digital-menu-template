import React from 'react';
import { SubMenuType } from "../data/subMenus";

type PropsType = {
  foodList: SubMenuType[]
}

function FoodItems(props: PropsType) {

  const { foodList } = props;

  const createdFoodLists = foodList.map((item) => (
    <div className='flex justify-between'>
      <p className='mr-10'>{item.name}</p>
      <p>{item.price}</p>
    </div>
  ));

  return (
    <div>
      {createdFoodLists}
    </div>
  );
}

export default FoodItems;
