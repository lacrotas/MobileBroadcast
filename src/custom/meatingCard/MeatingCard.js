import LocationImage from "../../assets/images/location_meating.svg";
import TimeImage from "../../assets/images/time.svg";
import "./MeatingCard.scss";

function MeatingCard({ name, location, data, time, img }) {
    return (
        <div className="meating_card">
            <div className="meating_container-text">
                <p className="meating_label-offline">OFFLINE</p>
                <h2 className="meating_label h2_text">ВСТРЕЧА</h2>
                <h2 className="meating_label-name h3_text">{"MOBILE BROADCAST " + name}</h2>
                <div className="meating_container meating_container-location">
                    <img className="meating_image-location" src={LocationImage} alt="location" />
                    <p className="meating_paragraph paragraph_text">{location}</p>
                </div>
                <div className="meating_container meating_container-time">
                    <img className="meating_image-time" src={TimeImage} alt="time" />
                    <p className="meating_paragraph paragraph_text">{data + " в " + time}</p>
                </div>
            </div>
            <img className="meating_image" src={img} alt="city"/>
            {/* <div className="meating_container-hover">
                <button className="meating_button button">Подробней</button>
            </div> */}
        </div>
    );
}

export default MeatingCard;