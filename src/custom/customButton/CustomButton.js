import "./CustomButton.scss";
import SelectImage from "../../assets/images/select.svg";
import { useState, useEffect } from "react";
import { fetchCityes, fetchCountries } from "../../http/cityApi";

function CustomButton({ setValue, defaultValue, type, isFullObject, choosenValue }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [selectValues, setSelectValues] = useState();
  useEffect(() => {
    if (type === "city") {
      fetchCityes().then(data => setSelectValues(data));
      if (choosenValue) {
        setSelectValues(choosenValue.name);
      }
    } else if (type === "tehnology") {
      setSelectValues([
        { name: "Android" }, { name: "Aurora" }, { name: "Flutter" },
        { name: "IOS" }, { name: "Kotlin" }, { name: "Mobile Web" },
        { name: "ReactNative" }])
    } else if (type === "country") {
      fetchCountries().then(data => setSelectValues(data));
    }
  }, []);

  function handleSet(item) {
    setSelectedValue(item);
    if (item === defaultValue) {
      setValue(undefined);
    } else {
      setValue(item);
    }
  }
  function handleSetObj(item) {
    setSelectedValue(item.name);
    if (item === defaultValue) {
      setValue(undefined);
    } else {
      setValue(item);
    }
  }

  return (
    <div className="custom_button_container" onClick={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(false)}>
      <div className="custom_button">
        <img className="custom_image" src={SelectImage} alt="image" />
        <p className="custom_text">{selectedValue}</p>
      </div>
      {isOpen && <div className="custom_button-container">
        <p className="custom_text" onClick={() => handleSet(defaultValue)}>{defaultValue}</p>
        {selectValues.map((item, index) => (
          <p className="custom_text" key={index} onClick={() => isFullObject ? handleSetObj(item) : handleSet(item.name)}>{item.name}</p>
        ))}
      </div>}
    </div>
  );
}

export default CustomButton;
