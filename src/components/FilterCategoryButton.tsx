import React from 'react';

type PropsType = {
    name: string;
}

function FilterCategoryButton(props: PropsType) {
  
    const { name } = props;

    return (
    <button className='p-2 border-[0.5px] border-[#6B4E3C] text-[#6B4E3C] font-abeezee rounded-md'>
      {name}
    </button>
  );
}

export default FilterCategoryButton;
