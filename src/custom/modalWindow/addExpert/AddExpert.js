import "./AddExpert.scss";
import { postCreator, updateOneCreator, deleteCreatorById } from "../../../http/creatorApi";
import { useState, useEffect } from "react";
import CustomInputFile from "../../../custom/customInputFile/CustomInputFile";

function AddExpert({ cityId, creatorId, closeModal, nameValue, telegramValue, mailValue, imageValue, isReduct }) {
    const [name, setName] = useState("");
    const [telegram, setTelegram] = useState("");
    const [mail, setMail] = useState("");
    const [image, setImage] = useState("");
    useEffect(() => {
        if (isReduct) {
            init();
        }
    }, [isReduct])
    function addCreator() {
        if (name, image) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("telegram", telegram);
            formData.append("mail", mail);
            formData.append("cityId", cityId);
            formData.append("image", image.target.files[0]);
            postCreator(formData);
            alert("Организатор успешно добавлен");
            window.location.reload();
        } else {
            alert("заполните все поля");
        }
    }
    function init() {
        if (isReduct) {
            setName(nameValue);
            setTelegram(telegramValue);
            setMail(mailValue);
            setImage(imageValue);
        }
    }
    function reductCreator() {
        if (name, image) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("telegram", telegram);
            formData.append("mail", mail);
            formData.append("cityId", cityId);
            if (typeof (image) !== "string") {
                console.log("sss");
                formData.append("image", image.target.files[0]);
            }
            updateOneCreator(creatorId, formData);
            alert("Организатор успешно отредактирован");
            window.location.reload();
        } else {
            alert("заполните все поля");
        }
    }
    function deleteCreator() {
        const result = prompt("Вы собираетесь удалить организатора сообщества. Если уверены введите слово \"да\"", []);
        if (result === "да") {
            deleteCreatorById(creatorId);
            window.location.reload();
        }
    }
    return (
        <div className="expert_statement">
            {isReduct ?
                <h3 className="authorizaton_label h3_text">Редактирование организатора</h3>
                :
                <h3 className="authorizaton_label h3_text">Добавление организатора</h3>
            }
            <input type="text" className="expert_statement_input my_input" placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="expert_statement_input my_input" placeholder="Телеграмм" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
            <input type="text" className="expert_statement_input my_input" placeholder="Почта" value={mail} onChange={(e) => setMail(e.target.value)} />
            <CustomInputFile handleImageChange={setImage} />
            {isReduct ?
                <>
                    <button className="expert_statement_button button" onClick={() => deleteCreator()}>Удалить</button>
                    <button className="expert_statement_button button" onClick={() => reductCreator()}>Отправить</button>
                </>
                :
                <button className="expert_statement_button button" onClick={() => addCreator()}>Отправить</button>
            }
        </div>
    );
}

export default AddExpert;