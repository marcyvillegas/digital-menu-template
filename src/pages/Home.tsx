import HomeButtons from "../components/HomeButtons";
import Logo from "../components/Logo";
import { LogoSizeEnum } from "../enums/LogoSizeEnum";

function Home() {
  return (
    <div className='pt-14'>
      <Logo size={LogoSizeEnum.LARGE} />
      <HomeButtons />
    </div>
  );
}

export default Home;
