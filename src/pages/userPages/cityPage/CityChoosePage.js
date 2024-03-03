import CityFilterInfo from "./components/cityFilterInfo/CityFilterInfo.js";
import CityGrid from "./components/cityGrid/CityGrid.js"
import CityCard from "../../../custom/cityCard/CityCard.js";
import { Context } from "../../../index.js";
import { fetchCityes } from "../../../http/cityApi.js";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";

const CityChoosePage = observer(() => {
    const { cities } = useContext(Context);

    useEffect(() => {
        fetchCityes().then(data => cities.setCity(data));
    }, []);

    return (
        <div className="city_choose_page">
            <CityFilterInfo />
            {/* <CityGrid /> */}
            <div className="city_grid">
                {cities._cityes.map((item, index) => (
                    <CityCard key={index} img={item.image} />
                ))}
            </div>
        </div>
    );
})

export default CityChoosePage;
