import { PropsWithChildren } from "react";

function MenuWrapper({children}: PropsWithChildren) {
  return (
    <div>
        {children}
    </div>
  );
}

export default MenuWrapper;
