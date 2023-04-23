import React from 'react';

type PropsType = {
    name: string;
}

function FilterCategoryButton(props: PropsType) {
  
    const { name } = props;

    function capitalizeFirstLetter(name: string): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
    <button className='p-2 mr-2 mt-1 border-[0.5px] border-[#6B4E3C] text-[#6B4E3C] font-abeezee rounded-md'>
      {capitalizeFirstLetter(name)}
    </button>
  );
}

export default FilterCategoryButton;
