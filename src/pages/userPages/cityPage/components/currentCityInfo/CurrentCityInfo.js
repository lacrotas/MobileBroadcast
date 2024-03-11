import ArrowImage from "../../../../../assets/images/arrowBack.svg";
import "./CurrentCityInfo.scss";
import { NavLink } from "react-router-dom";
import { CITY_ROUTE } from "../../../../appRouter/Const";

function CurrentCityInfo({ img }) {
    return (
        <section className="current_city">
            <NavLink to={CITY_ROUTE}>
                <img className="current_city_image-back" src={ArrowImage} alt="back" />
            </NavLink>
            <img className="current_city_image-logo" src={process.env.REACT_APP_API_URL + img} alt="city image" />
            <div className="current_city_text">
                <h2 className="city_text_label h2_text">Информация о городе</h2>
                <p className="city_text_paragraph paragraph_text">Вы можете просмотреть галлерею, ознакомиться с
                    организаторами сообщества в данном городе, а также вступить в него</p>
                <button className="city_text_button button" onClick={() => alert("откроется ссылка на тг")}>Вступить в сообщество</button>
            </div>
        </section>
    );
}

export default CurrentCityInfo;
