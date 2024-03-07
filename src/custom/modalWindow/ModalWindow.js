import Authorization from "./authorization/Authorization";
import AddExpert from "./addExpert/AddExpert";
import Map from "../../components/map/Map";
import "./ModalWindow.scss";
import MeatingInfo from "./meatingInfo/MeatingInfo";

function ModalWindow({ type, closeModal, svgClass, item }) {

    return (
        <div className="modal_window">
            {(type == "auth") && <Authorization closeModal={closeModal} />}
            {(type == "addExpert") && <AddExpert />}
            {(type == "map") && <Map svgClass={svgClass} />}
            {(type == "meating") && <MeatingInfo item={item} />}
            <div className="modal_window-back" onClick={() => closeModal(false)}></div>
        </div>
    );
}

export default ModalWindow;