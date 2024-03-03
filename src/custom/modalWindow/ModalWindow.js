import Authorization from "./authorization/Authorization";
import AddExpert from "./addExpert/AddExpert";
import Map from "../../components/map/Map";
import "./ModalWindow.scss";

function ModalWindow({ type, closeModal, svgClass }) {

    return (
        <div className="modal_window">
            {(type == "auth") && <Authorization closeModal={closeModal} />}
            {(type == "addExpert") && <AddExpert />}
            {(type == "map") && <Map svgClass={svgClass} />}
            <div className="modal_window-back" onClick={() => closeModal(false)}></div>
        </div>
    );
}

export default ModalWindow;