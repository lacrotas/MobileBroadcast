import CurrentCityInfo from "./currentCityComponents/currentCityInfo/CurrentCityInfo";
import CITYIMAGE from "../base/CITYIMAGE";
import SLIDER from "../base/SLIDER";
import Slider from "./currentCityComponents/slider/Slider";
import CityCreators from "./currentCityComponents/cityCreators/CityCreators";

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
