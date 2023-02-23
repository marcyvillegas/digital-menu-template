import React from 'react';

type PageContainerPropType = {
    children: React.ReactNode
}

function PageContainer({children}:PageContainerPropType) {
  return (
    <div className='flex justify-center w-full p-4'>
        {children}
    </div>
  );
}

export default PageContainer;
