import ArrowImage from "../../../assets/images/arrowBack.svg";
import "./CurrentCityInfo.scss";

function CurrentCityInfo({ img }) {
    return (
            <section className="current_city">
                <img className="current_city_image-back" src={ArrowImage} alt="back" />
                <img className="current_city_image-logo" src={img} alt="city image" />
                <div className="current_city_text">
                    <h2 className="city_text_label h2_text">Информация о городе</h2>
                    <p className="city_text_paragraph paragraph_text">Вы можете просмотреть галлерею, ознакомиться с
                        организаторами сообщества в данном городе, а также вступить в него</p>
                    <button className="city_text_button button">Вступить в сообщество</button>
                </div>
            </section>
    );
}

export default CurrentCityInfo;
