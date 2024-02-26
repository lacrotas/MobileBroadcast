import "./ExpertFilter.scss";
import CustomButton from "../../custom/customButton/CustomButton";
import CustomInput from "../../custom/customInput/CustomInput";
import ModalWindow from "../../custom/modalWindow/ModalWindow";
import { useState } from "react";

function ExpertFilter() {
    const [openModel, setOpenModal] = useState(false);
    return (
        <section className="expert_filter">
            <div className="expert_filter_container">
                <h2 className="expert_filter_label h2_text">Эксперты</h2>
                <p className="expert_filter_paragraph paragraph_text">Даннная страница содержит информацию об экспертах нашего сообщества. Вы также можете сами стать экспертом</p>
                <button className="expert_filter_button button" onClick={() => setOpenModal(true)}>Подать заявление</button>
            </div>
            <CustomButton text="Город" />
            <CustomButton text="Технология" />
            <CustomInput pl={"Поиск по ФИО"} />
            {openModel && <ModalWindow type="addExpert" closeModal={setOpenModal} />}
        </section>
    );
}

export default ExpertFilter;
