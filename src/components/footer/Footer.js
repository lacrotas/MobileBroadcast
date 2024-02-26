import "./Footer.scss";
import LogoImage from "../../assets/images/header_logo.svg";
import TelegramImage from "../../assets/images/ph_telegram-logo.svg";
import MailImage from "../../assets/images/fluent_mail-24-regular.svg";

function Footer() {
    return (
        <footer className="footer">
            <img className="footer_image" src={LogoImage} alt="logo" />
            <div className="footer_container">
                <div className="container_creators">
                    <h3 className="creators_label h3_text">Основатели</h3>
                    <div className="creators_container">
                        <p className="creators_item paragraph_text"><strong>Кирилл Розов</strong> -
                            MBE по Android, блогер, основатель Android Broadcast</p>
                        <p className="creators_item paragraph_text"><strong>Кирилл Розов</strong> -
                            MBE по Android, блогер, основатель Android Broadcast</p>
                    </div>
                </div>
                <div className="container_contacts">
                    <h3 className="contacts_label h3_text">Контакты</h3>
                    <div className="contacts_container">
                        <p className="contacts_paragraph paragraph_text">@mobile_broadcast_news</p>
                        <img className="contacts_image" src={TelegramImage} alt="telegram" />
                    </div>
                    <div className="contacts_container">
                        <p className="contacts_paragraph paragraph_text">info.Mobilebroadcast@gmail.com</p>
                        <img className="contacts_image" src={MailImage} alt="telegram" />
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <div className="copyright_line"></div>
                <p className="footer_paragraph paragraph_text">copyright © Mobile Broadcast 2024</p>
            </div>
        </footer>
    );
}

export default Footer;
