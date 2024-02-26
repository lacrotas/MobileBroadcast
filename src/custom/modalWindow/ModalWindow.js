import Authorization from "./authorization/Authorization";
import AddExpert from "./addExpert/AddExpert";
import "./ModalWindow.scss";
import { useState } from "react";

function ModalWindow({ type, closeModal }) {

    return (
        <div className="modal_window">
            {(type == "auth") && <Authorization closeModal={closeModal} />}
            {(type == "addExpert") && <AddExpert />}
            <div className="modal_window-back" onClick={() => closeModal(false)}></div>
        </div>
    );
}

export default ModalWindow;