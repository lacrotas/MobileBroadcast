import "./CityFilterInfo.scss";
import CustomButton from "../../../../../custom/customButton/CustomButton";
import CustomInput from "../../../../../custom/customInput/CustomInput";

function CityFilterInfo() {
  return (
    <section className="city_filter">
      <div className="city_filter_container">
        <h2 className="city_filter_label h2_text">Выберите город</h2>
        <p className="city_filter_paragraph paragraph_text">Может в вашем городе уже есть наше сообщество, если нет, то создайте его сами</p>
        <button className="city_filter_button button">Подать заявление</button>
      </div>
      <div className="city_filter_buttons">
        <CustomButton allValues={["Беларусь", "Россия"]} defaultValue="Страна" />
        <CustomInput pl={"Поиск по названию"} />
      </div>
    </section>
  );
}

export default CityFilterInfo;
