import React from "react";

type PropsType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput(props: PropsType) {
  const { value, onChange } = props;

  return (
    <>
      <input
        placeholder="Search"
        type="text"
        value={value}
        onChange={onChange}
        className="col-span-3 p-1 border-[0.5px] border-[#AD6639] focus:outline-none bg-[#FDF2D7] text-[#AD6639] placeholder-[#AD6639] font-abeezee"
      />
    </>
  );
}

export default SearchInput;
