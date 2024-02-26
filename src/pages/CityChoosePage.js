import CityFilterInfo from "../components/cityFilterInfo/CityFilterInfo";
import CityGrid from "../components/cityGrid/CityGrid";

function CityChoosePage() {
    return (
        <div className="city_choose_page">
            <CityFilterInfo />
            <CityGrid />
        </div>
    );
}

export default CityChoosePage;
