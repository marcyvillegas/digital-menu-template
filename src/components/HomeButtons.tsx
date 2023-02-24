import { HomeButtonsData } from "../data/homeButtons";

function HomeButtons() {
  return (
    <div className='flex flex-col p-8 mt-2 gap-4 text-[#6B4E3C] font-abeezee'>
      {HomeButtonsData.map((item) => (
        <button className='p-4 border border-[#6B4E3C]'>
          <div className='flex justify-center items-center'>
            <img src={item.icon} className='mr-2' />
            {item.label}
            </div>
        </button>
      ))}
    </div>
  );
}

export default HomeButtons;
