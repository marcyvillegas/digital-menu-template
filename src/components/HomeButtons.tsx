import { HomeButtonsData } from '../data/homeButtons';

function HomeButtons() {
  return (
    <div className='flex flex-col p-8 mt-2'>
        {HomeButtonsData.map(item => (
            <button className='p-2'>
                {item.label}                
            </button>
        ))}
    </div>
  );
}

export default HomeButtons;
