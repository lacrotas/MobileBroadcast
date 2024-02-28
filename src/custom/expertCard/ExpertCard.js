import "./ExpertCard.scss";
import LocationImage from "../../assets/images/location.svg";
import { NavLink } from "react-router-dom";
import { EXPERT_ROUTE } from "../../pages/appRouter/Const";
import { fetchOneCity } from "../../http/cityApi";
import { useState, useEffect } from "react";

function ExpertCard({ id, name, image, aboutText, sex, articles, technologies, cityId, link, meatingId }) {
    const stack = technologies.split("/");
    const [city, setCity] = useState();
    useEffect(() => {
        fetchOneCity(id).then(data => setCity(data));
    }, []);
    return (
        <NavLink to={EXPERT_ROUTE + "/" + id}>
            <section className="expert">
                <img className="expert_image" src={process.env.REACT_APP_API_URL + image} alt="expert" />
                <p className="expert_label paragraph_text">{name}</p>
                <div className="expert_container-location">
                    <img src={LocationImage} alt="location" />
                    <p className="location_paragraph paragraph_text">{(city) ? city.name : null}</p>
                </div>
                <div className="expert_container-stack">
                    {stack.map((technology, index) => (<p className={"stack_paragraph paragraph_text" + " stack_paragraph" + index} key={index}>#{technology}</p>))}
                </div>
                <div className="expert_container-hover">
                    <button className="expert_button button">Подробней</button>
                </div>
            </section>
        </NavLink>
    );
}

export default ExpertCard;
