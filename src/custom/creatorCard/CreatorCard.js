import TelegramImage from "../../assets/images/telegram_circle.svg";
import MailImage from "../../assets/images/mail_circle.svg";
import "./CreatorCard.scss";

function CreatorCard({image, name, telegram, mail}){
    return(
        <div className="creators_card">
            <img className="creators_image" src={image} alt="creators image"/>
            <p className="creators_card_label paragraph_text">{name}</p>
            <div className="creators_container">
                <img className="creators_container_image" src={TelegramImage} alt="telegram" />
                <p className="creators_container_paragraph paragraph_text">{telegram}</p>
            </div>
            <div className="creators_container">
                <img className="creators_container_image" src={MailImage} alt="telegram" />
                <p className="creators_container_paragraph paragraph_text">{mail}</p>
            </div>
        </div>
    )
}

export default CreatorCard;