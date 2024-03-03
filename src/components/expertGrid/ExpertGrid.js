import "./ExpertGrid.scss";
import ExpertCard from "../../custom/expertCard/ExpertCard";

function ExpertGrid({ expertArray }) {
    return (
        <div className="expert_grid">
            {expertArray.map((item, index) => (
                <ExpertCard key={index} id={item.id} name={item.name} image={item.image}
                    aboutText={item.aboutText} sex={item.sex} articles={item.articles}
                    technologies={item.technologies} cityId={item.cityId} link={item.link}
                    meatingId={item.meatingId} />
            ))}
        </div>
    );
}

export default ExpertGrid;
