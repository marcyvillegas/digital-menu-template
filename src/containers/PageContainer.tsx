import React from 'react';

type PageContainerPropType = {
    children: React.ReactNode
}

function PageContainer({children}:PageContainerPropType) {
  return (
    <div>
        {children}
    </div>
  );
}

export default PageContainer;
