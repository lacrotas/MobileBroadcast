import "./CityFilterAdmin.scss";
import CustomInput from "../../../../../custom/customInput/CustomInput";

function CityFilterAdmin() {
    return (
        <section className="expert_filter">
            <div className="expert_filter_container">
                <h2 className="expert_filter_label h2_text">Заявления на сообщества</h2>
                <p className="expert_filter_paragraph paragraph_text">Здесь отображаются заявления пользователей, заинтересованных в создании  своего сообщества</p>
            </div>
            <CustomInput pl={"Поиск по названию"} />
        </section>
    );
}

export default CityFilterAdmin;
