import { PropsWithChildren } from "react";

function MenuWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center">
      <div className="w-full">{children}</div>
    </div>
  );
}

export default MenuWrapper;
