import "./ExpertGrid.scss";
import ExpertCard from "../../custom/expertCard/ExpertCard";
import { useEffect, useState } from "react";

function ExpertGrid({ expertArray, cityFilter, tehnologyFilter, nameFilter }) {
    const [experArraFiltered, setExpertsArrayFiltered] = useState(expertArray);
    useEffect(() => {
        setExpertsArrayFiltered(expertArray);
    }, [expertArray]);
    console.log(cityFilter);
    return (
        <div className="expert_grid">
            {experArraFiltered.map((item, index) => (
                <ExpertCard key={index} id={item.id} name={item.name} image={item.image}
                    aboutText={item.aboutText} sex={item.sex} articles={item.articles}
                    technologies={item.technologies} cityId={item.cityId} link={item.link}
                    meatingId={item.meatingId} cityFilter={cityFilter}
                    tehnologyFilter={tehnologyFilter} nameFilter={nameFilter} />
            ))}
        </div>
    );
}

export default ExpertGrid;
