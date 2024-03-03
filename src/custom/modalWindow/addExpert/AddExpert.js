import "./AddExpert.scss";
import { fetchExpertStatement } from "../../../http/expertsStatementApi";
import { useState } from "react";

function AddExpert() {
    const [name, setName] = useState("");
    const [cityId, setCityId] = useState("");
    // const [sex, setSex] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [aboutText, setAboutText] = useState("");
    const [telegram, setTelegram] = useState("");
    const [mail, setMail] = useState("");
    function setNewStatement() {
        const newStatement = {
            name: name, aboutText: aboutText, sex: "men",
            technologies: technologies, cityId: cityId, links: telegram + "/" + mail
        }
        fetchExpertStatement(newStatement);
        alert("Заявка успешна подана");
    }

    return (
        <div className="expert_statement">
            <h3 className="authorizaton_label h3_text">Заявление на эксперта</h3>
            <input type="text" className="expert_statement_input paragraph_text" placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="expert_statement_input paragraph_text" placeholder="Город" value={cityId} onChange={(e) => setCityId(e.target.value)} />
            {/* <input type="text" className="expert_statement_input paragraph_text" placeholder="Пол" value={cityId} onChange={(e) => setCityId(e.target.value)} /> */}
            <input type="text" className="expert_statement_input paragraph_text" placeholder="Технологии" value={technologies} onChange={(e) => setTechnologies(e.target.value)} />
            <textarea className="expert_statement_input paragraph_text" placeholder="О себе" value={aboutText} onChange={(e) => setAboutText(e.target.value)} />
            <input type="text" className="expert_statement_input paragraph_text" placeholder="Телеграмм" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
            <input type="text" className="expert_statement_input paragraph_text" placeholder="Почта" value={mail} onChange={(e) => setMail(e.target.value)} />
            <button className="expert_statement_button button" onClick={() => setNewStatement()}>Отправить</button>
        </div>
    );
}

export default AddExpert;