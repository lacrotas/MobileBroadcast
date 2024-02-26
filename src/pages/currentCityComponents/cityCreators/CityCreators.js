import "./CityCreators.scss";
import ORGANIZATORS from "../../../base/ORGANIZATORS";
import CreatorCard from "./creatorCard/CreatorCard.js";

function CityCreators({ organizators }) {
    return (
        <section className="city_creators">
            <div className="city_creators_container">
                <h3 className="city_creators_text h3_text">Организаторы сообщества</h3>
                <p className="city_creators_paragraph paragraph_text">Эти люди основали
                    сообщество в данном городе,
                    если у вас есть идеи по его
                    улучшению, свяжитесь с ними</p>
            </div>
            {ORGANIZATORS.map((organizator, index) => (
                <CreatorCard key={index} image={organizator.image}
                    name={organizator.name} telegram={organizator.telegram}
                    mail={organizator.mail} />
            ))}
        </section >
    );
}

export default CityCreators;
