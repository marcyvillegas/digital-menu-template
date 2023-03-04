import Logo from "../components/Logo";
import MenuContainer from "../containers/MenuContainer";
import MenuWrapper from "../containers/MenuWrapper";
import PageContainer from "../containers/PageContainer";
import { LogoSizeEnum } from "../enums/LogoSizeEnum";

function Menu() {
  return (
    <PageContainer>
      <Logo size={LogoSizeEnum.SMALL} />
      <MenuWrapper>
        {/* Search and Filter component wrapper */}
        <MenuContainer />
      </MenuWrapper>
    </PageContainer>
  );
}

export default Menu;
