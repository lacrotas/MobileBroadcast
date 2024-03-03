import "./CurrentExpertPerson.scss";
import { fetchOneCity } from "../../../../../http/cityApi";
import { useState, useEffect } from "react";
import WomenAvatar from "../../../../../assets/images/womenAvatar.png";
import MenAvatar from "../../../../../assets/images/menAvatar.png";
import TelegramImage from "../../../../../assets/images/telegram_circle.svg";
import MailImage from "../../../../../assets/images/mail_circle.svg";


function CurrentExpertPerson({ name, image, aboutText, sex, technologies, cityId, link }) {
    const stack = technologies.split("/");
    const links = link.split("/");
    const telegram = (links[0].startsWith("@")) ? links[0] : false;
    const mail = (links.length === 2 || !links[0].startsWith("@")) ? links[1] : false;
    const [city, setCity] = useState();
    const avatar = (sex === "men") ? MenAvatar : WomenAvatar;
    useEffect(() => {
        fetchOneCity(cityId).then(data => setCity(data));
    }, []);

    return (
        <section className="expert_person">
            <div className="expert_person-left">
                <h2 className="h2_text">{name}</h2>
                <div className="expert_person_container">
                    {stack.map((item, index) => (
                        <p className="paragraph_text" key={index}>{item}</p>
                    ))}
                </div>
                <p className="paragraph_text">{city ? city.name : null}</p>
                <div className="expert_person_container">
                {/* href={telegram} */}
                    {telegram ? <a onClick={()=>alert("переадресация на телега")}>
                        <img className="container_image" src={TelegramImage} />
                    </a> : <></>}
                    {/* href={mail} */}
                    {mail ? <a onClick={()=>alert("переадресация на почту")}>
                        <img className="container_image" src={MailImage} />
                    </a> : <></>}
                </div>
            </div>
            <img className="expert_person_image" src={(image !== null) ? process.env.REACT_APP_API_URL + image : avatar} alt="logo" />
            <p className="expert_person_paragraph_text paragraph_text">{aboutText}</p>
        </section>
    );
}

export default CurrentExpertPerson;