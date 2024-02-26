import "./CustomInput.scss";
import SearchImage from "../../assets/images/find.svg";

function CustomInput({pl}) {
    return (
        <div className="custom_input-container">
            <input className="custom_input" type="text" placeholder={pl} />
            <img className="custom_image" src={SearchImage} alt="find" />
        </div>
    );
}

export default CustomInput;
