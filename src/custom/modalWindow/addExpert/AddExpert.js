import "./AddExpert.scss";

function AddExpert() {
    return (
        <div className="authorizaton">
            <h3 className="authorizaton_label h3_text">Заявление на эксперта</h3>
            <input type="text" className="authorizaton_input paragraph_text" placeholder="ФИО" />
            <input type="text" className="authorizaton_input paragraph_text" placeholder="Город" />
            <input type="text" className="authorizaton_input paragraph_text" placeholder="Технологии" />
            <textarea className="authorizaton_input paragraph_text" placeholder="О себе" />
            <input type="text" className="authorizaton_input paragraph_text" placeholder="Телеграмм" />
            <input type="text" className="authorizaton_input paragraph_text" placeholder="Почта" />
        </div>
    );
}

export default AddExpert;