import "./CityGridAdmin.scss";
import CityCardStatement from "./cityCardStatement/CityCardStatement";

const cityStatements = [
    { city: "Минск", about: "таоуцташц ащауатуат щйтацтмиокук цуашоошщо",  creators: ["Иванов Иван Иванович", "Иванов Иван Иванович"], link: ["telega", "mail"] },
    { city: "Гродно", about: "таоуцташц ащауатуат щйтацтмиокук цуашоошщо",  creators: ["Иванов Иван Иванович", "Иванов Иван Иванович"], link: ["telega", "mail"] },
    { city: "Гомель", about: "таоуцташц ащауатуат щйтацтмиокук цуашоошщо",  creators: ["Иванов Иван Иванович", "Иванов Иван Иванович"], link: ["telega", "mail"] }
]

function CityGridAdmin() {
    return (
        <div className="expert_grid_admin">
            {cityStatements.map((item, index) => (
                <CityCardStatement key={index} city={item.city}
                about={item.about} creators={item.creators} link={item.link} />
            ))}
        </div>
    );
}

export default CityGridAdmin;
