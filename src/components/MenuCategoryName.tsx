type PropsType = {
  name: string;
};

function MenuCategoryName(props: PropsType) {
  const { name } = props;

  return (
    <div key={name}>
      <p className='font-oxygen font-bold text-[#AD6639] text-xl'>
        {name.toUpperCase()}</p>
      <hr className='w-40 border-[#AD6639]' />
    </div>
  );
}

export default MenuCategoryName;
