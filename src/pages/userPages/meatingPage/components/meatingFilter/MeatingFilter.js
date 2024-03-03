import "./MeatingFilter.scss";
import CustomInput from "../../../../../custom/customInput/CustomInput";

function MeatingFilter() {
    return (
        <section className="expert_filter">
            <div className="expert_filter_container">
                <h2 className="expert_filter_label h2_text">Встречи</h2>
                <p className="expert_filter_paragraph paragraph_text">Даннная страница содержит список встреч нашего сообщества</p>
            </div>
            <div className="expert_filter_buttons">
                <CustomInput pl={"Поиск по названию"} />
            </div>
        </section>
    );
}

export default MeatingFilter;
