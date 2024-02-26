import "./CustomButton.scss";
import SelectImage from "../../assets/images/select.svg";

function CustomButton({text}) {
  return (
    <div className="custom_button button">
        <img className="custom_image" src={SelectImage} alt="image" />
        <p className="custom_text">{text}</p>
    </div>
  );
}

export default CustomButton;
