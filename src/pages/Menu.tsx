import Logo from "../components/Logo";
import PageContainer from "../containers/PageContainer";
import { LogoSizeEnum } from "../enums/LogoSizeEnum";


function Menu() {
  return (
    <PageContainer>
        <Logo size={LogoSizeEnum.SMALL} />

    </PageContainer>
  );
}

export default Menu;
