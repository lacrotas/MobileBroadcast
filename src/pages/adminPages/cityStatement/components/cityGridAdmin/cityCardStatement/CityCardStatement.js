import "./CityCardStatement.scss";
import CardLinkImage from "../../../../../../assets/images/card_link.svg";
import { useState } from "react";
import mailImage from "../../../../../../assets/images/mail_circle.svg";
import telegramImage from "../../../../../../assets/images/telegram_circle.svg";

function CityCardStatement({ city, about, creators, link }) {
    const [isCardOpen, setIsCardOpen] = useState(false);

    return (
        <div>

            <div className="expert_statement_card-close" onClick={() => { setIsCardOpen(true) }}>
                <h3 className="expert_statement_card_label h3_text">{city}</h3>
                <p className="expert_statement_card_paragraph paragraph_text">{about}</p>
                <img className="expert_statement_card_image" src={CardLinkImage} alt="card link" />
            </div>

            {isCardOpen &&
                <div className="expert_statement_card-open">
                    <div className="expert_statement_card_container">
                        <h2 className="expert_statement_card_label h2_text">{city}</h2>
                        <p className="expert_statement_card_paragraph paragraph_text">{about}</p>
                        <h3 className="expert_statement_card_label h3_text">Организаторы</h3>
                        {creators.map((item, index) => (
                            <p className="expert_statement_card_paragraph paragraph_text" key={index}>{item}</p>
                        ))}
                        <h3 className="expert_statement_card_label h3_text">Контакты</h3>
                        <div className="container_expert_statement-link">
                            <img className="container_image" src={telegramImage} alt="telegram" />
                            <img className="container_image" src={mailImage} alt="mail" />
                        </div>
                        <div className="container_expert_statement_buttons">
                            <button className="expert_statement_button button">Отклонить</button>
                            <button className="expert_statement_button button">Одобрить</button>
                        </div>
                    </div>
                    <div className="expert_statement_card-open_back" onClick={() => setIsCardOpen(false)}></div>
                </div>
            }
        </div >
    );
}
export default CityCardStatement;