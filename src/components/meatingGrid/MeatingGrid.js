import "./MeatingGrid.scss";
import MeatingCard from "../../custom/meatingCard/MeatingCard";
import MEATING from "../../base/MEATING";

function MeatingGrid() {
    return (
        <section className="meating_grid">
            {MEATING.map((item, index) => (
                <MeatingCard key={index} name={item.meating_name}
                location={item.location} data={item.data}
                time={item.time} img={item.image} />
            ))}
        </section>
    );
}

export default MeatingGrid;
