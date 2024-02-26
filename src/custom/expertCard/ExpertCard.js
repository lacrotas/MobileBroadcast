import "./ExpertCard.scss";
import LocationImage from "../../assets/images/location.svg";
import { NavLink } from "react-router-dom";
import { EXPERT_ROUTE } from "../../pages/appRouter/Const";

function ExpertCard({ img, stack, name, location }) {
    return (
        <NavLink to={EXPERT_ROUTE + "/1"}>
            <section className="expert">
                <img className="expert_image" src={img} alt="expert" />
                <p className="expert_label paragraph_text">{name}</p>
                <div className="expert_container-location">
                    <img src={LocationImage} alt="location" />
                    <p className="location_paragraph paragraph_text">{location}</p>
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
