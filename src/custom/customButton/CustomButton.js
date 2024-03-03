import "./CustomButton.scss";
import SelectImage from "../../assets/images/select.svg";
import { useState } from "react";

function CustomButton({ defaultValue, allValues }) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom_button" onClick={()=>setIsOpen(!isOpen)}>
      <img className="custom_image" src={SelectImage} alt="image" />
      <p className="custom_text">{selectedValue}</p>
      {isOpen && <div className="custom_button-container">
        {allValues.map((item, index) => (
          <p className="custom_text" key={index} onClick={()=>setSelectedValue(item)}>{item}</p>
        ))}
      </div>}
    </div>
  );
}

export default CustomButton;
