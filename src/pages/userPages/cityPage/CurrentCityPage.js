import CurrentCityInfo from "./components/currentCityInfo/CurrentCityInfo";
import CITYIMAGE from "../../../base/CITYIMAGE";
import SLIDER from "../../../base/SLIDER";
import Slider from "./components/slider/Slider";
import CityCreators from "./components/cityCreators/CityCreators";

function CurrentCityPage({ cityId }) {
    return (
        <div className="current_city-page">
            <CurrentCityInfo img={CITYIMAGE[0]} />
            <Slider imgArr={SLIDER} />
            <CityCreators />
        </div>
    );
}

export default CurrentCityPage;
