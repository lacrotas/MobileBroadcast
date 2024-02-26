import "./AnhorCard.scss"
import CardImage from "../../../assets/images/card_link.svg";
import LogoImage from "../../../assets/images/header_logo.svg";
import { NavLink } from "react-router-dom";

function AnhorCard({ title, description, path }) {
    return (
        <div className="anhor_card">
                <h3 className="card_title h3_text">{title}</h3>
                <p className="card_description paragraph_text">{description}</p>
                <div className="card_container">
                    <img className="card_image-hidden" src={LogoImage} alt="logo" />
                    <img className="card_image" src={CardImage} alt="link" />
                </div>
            <NavLink to={path || "/"}>
                <div className="anhor_card-back"></div>
            </NavLink>
        </div>
    );
}

export default AnhorCard;
