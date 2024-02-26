import "./MeatingFilter.scss";
import CustomButton from "../../custom/customButton/CustomButton";
import CustomInput from "../../custom/customInput/CustomInput";

function MeatingFilter() {
    return (
        <section className="expert_filter">
            <div className="expert_filter_container">
                <h2 className="expert_filter_label h2_text">Встречи</h2>
                <p className="expert_filter_paragraph paragraph_text">Даннная страница содержит список встреч нашего сообщества</p>
                <button className="expert_filter_button button">Подать заявление</button>
            </div>
            <CustomButton text="Город" />
            <CustomButton text="Технология" />
            <CustomInput pl={"Поиск по названию"} />
        </section>
    );
}

export default MeatingFilter;
