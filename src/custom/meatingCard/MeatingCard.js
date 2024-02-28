import { useEffect, useState } from "react";
import LocationImage from "../../assets/images/location_meating.svg";
import TimeImage from "../../assets/images/time.svg";
import "./MeatingCard.scss";
import { fetchOneCity } from "../../http/cityApi";

function MeatingCard({ location, data, time, cityId }) {
    const [city, setCity] = useState();
    const dataArr = data.split(".");
    const myData = dataArr[0]+" " + setDataName(dataArr[1]);

    function setDataName(number) {
        switch (number) {
            case "1":
                return "января"
            case "2":
                return "февраля"
            case "3":
                return "марта"
            case "4":
                return "апреля"
            case "5":
                return "мая"
            case "6":
                return "июня"
            case "7":
                return "июля"
            case "8":
                return "августа"
            case "9":
                return "сентября"
            case "10":
                return "октября"
            case "11":
                return "ноября"
            case "12":
                return "декабря"
        }
    }
    useEffect(() => {
        fetchOneCity(cityId).then(data => setCity(data));
    }, []);

    return (
        <div className="meating_card">
            <div className="meating_container-text">
                <p className="meating_label-offline">OFFLINE</p>
                <h2 className="meating_label h2_text">ВСТРЕЧА</h2>
                <h2 className="meating_label-name h3_text">{"MOBILE BROADCAST " + location}</h2>
                <div className="meating_container meating_container-location">
                    <img className="meating_image-location" src={LocationImage} alt="location" />
                    <p className="meating_paragraph paragraph_text">{location}</p>
                </div>
                <div className="meating_container meating_container-time">
                    <img className="meating_image-time" src={TimeImage} alt="time" />
                    <p className="meating_paragraph paragraph_text">{myData + " в " + time}</p>
                </div>
            </div>
            <img className="meating_image" src={city ? process.env.REACT_APP_API_URL + city.image : ""} alt="city" />
            {/* <div className="meating_container-hover">
                <button className="meating_button button">Подробней</button>
            </div> */}
        </div>
    );
}

export default MeatingCard;