import logo from "../assets/logo.png";
import { LogoSizeEnum } from "../enums/LogoSizeEnum";

type NotificationPropsType = {
  size: LogoSizeEnum;
};

function Logo(props: NotificationPropsType) {
  const { size } = props;

  function getClassName(): string {
    if (size === LogoSizeEnum.SMALL) {
      return "w-44";
    }

    return "";
  }

  return <img src={logo} className={getClassName()} />;
}

export default Logo;
