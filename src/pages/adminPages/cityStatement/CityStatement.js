import "./CityStatement.scss";
import CityFilterAdmin from "./components/cityFilterAdmin/CityFilterAdmin";
import CityGridAdmin from "./components/cityGridAdmin/CityGridAdmin";

function CityStatement() {
    return (
        <section className="city_statement">
            <CityFilterAdmin />
            <CityGridAdmin />
        </section>
    );
}

export default CityStatement;