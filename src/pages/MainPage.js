import MainInfo from "../components/mainInfo/MainInfo";
import AnhorGrid from "../components/anhorGrid/AnhorGrid";
import Sponsors from "../components/sponsors/Sponsors";
function MainPage() {
  return (
    <div className="main_page">
        <MainInfo />
        <AnhorGrid />
        <Sponsors />
    </div>
  );
}

export default MainPage;
