import logo from "../assets/logo.png";
import { LogoSizeEnum } from "../enums/LogoSizeEnum";

type NotificationPropsType = {
  size: LogoSizeEnum;
};

function Logo(props: NotificationPropsType) {
  const { size } = props;

  return <img src={logo} className={size} />;
}

export default Logo;
