import React from 'react';

type PropsType = {
    name: string;
    selectCategory: (categoryName: string) => void;
}

function MenuCategoryButton(props: PropsType) {
  
    const { name, selectCategory } = props;

    function capitalizeFirstLetter(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
    <button onClick={() => selectCategory(name)} className='p-2 mr-2 mt-1 border-[0.5px] border-[#6B4E3C] text-[#6B4E3C] font-abeezee rounded-md'>
      {capitalizeFirstLetter(name)}
    </button>
  );
}

export default MenuCategoryButton;
