import "./CityCard.scss";
import { NavLink } from "react-router-dom";
import { CITY_ROUTE } from "../../pages/appRouter/Const";

function CityCard({ img }) {
    return (
        <NavLink to={CITY_ROUTE + "/1"}>
            <section className="card">
                <img className="card_image" src={img} alt="city logo" />
                <div className="card_container-hover">
                    <button className="card_button button">Подробней</button>
                </div>
            </section>
        </NavLink>
    );
}
export default CityCard;