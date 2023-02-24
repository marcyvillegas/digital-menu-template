import HomeButtons from "../components/HomeButtons";
import Logo from "../components/Logo";
import PageContainer from "../containers/PageContainer";
import { LogoSizeEnum } from "../enums/LogoSizeEnum";

function Home() {
  return (
    <PageContainer>
      <div className="pt-14">
        <Logo size={LogoSizeEnum.LARGE} />
        <HomeButtons />
      </div>
    </PageContainer>
  );
}

export default Home;
