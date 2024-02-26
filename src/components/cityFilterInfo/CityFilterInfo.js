import "./CityFilterInfo.scss";
import CustomButton from "../../custom/customButton/CustomButton";
import CustomInput from "../../custom/customInput/CustomInput";

function CityFilterInfo() {
  return (
    <section className="city_filter">
      <div className="city_filter_container">
        <h2 className="city_filter_label h2_text">Выберите город</h2>
        <p className="city_filter_paragraph paragraph_text">Может в вашем городе уже есть наше сообщество, если нет, то создайте его сами</p>
        <button className="city_filter_button button">Подать заявление</button>
      </div>
      <CustomButton text="Страна" />
      <CustomInput pl={"Поиск по названию"} />
    </section>
  );
}

export default CityFilterInfo;
