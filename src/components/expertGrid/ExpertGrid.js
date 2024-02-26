import "./ExpertGrid.scss";
import ExpertCard from "../../custom/expertCard/ExpertCard";
import EXPERTSIMAGE from "../../base/EXPERTSIMAGE";

function ExpertGrid() {
    return (
        <div className="expert_grid">
            {EXPERTSIMAGE.map((item, index) => (
                <ExpertCard key={index} img={item.image}
                    stack={item.stack} name={item.name} location={item.location} />
            ))}
        </div>
    );
}

export default ExpertGrid;
