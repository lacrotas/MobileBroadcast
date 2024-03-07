import "./AdminCityPage.scss";
import AdminCitytFilter from "./AdminCitytFilter";
import AdminCityGrid from "./AdminCityGrid";
import { useState } from "react";
import DeleteImage from "../../../assets/images/delete.svg"
import CustomButton from "../../../custom/customButton/CustomButton";
import { createCity } from "../../../http/cityApi";

export default function AdminCityPage() {
    /*filters for search */
    const [countryFilter, setCountryFilter] = useState(false);
    const [nameFilter, setNameFilter] = useState(false);

    /*conditions */
    const [addMeating, setAddMeating] = useState(false);
    /* form values */
    const [cityName, setCityName] = useState();
    const [cityLink, setCityLink] = useState();
    const [cityLogo, setCityLogo] = useState("Логотип");
    const [country, setCountry] = useState();
    /* design statement */
    const [cityLogoText, setCityLogoText] = useState("Логотип");

    /* save file */
    function setFileInputLogo(e) {
        setCityLogo(e.target.files[0]);
        setCityLogoText(e.target.value.slice(-10));
    }

    // const [cityGallaryText, setCityGallaryText] = useState(["Выберите файл"]);
    // const [cityGallary, setCityGallary] = useState([""]);
    // function setFileInputGallary(e, index) {
    //     handleSetGallaryItem(e.target.files[0], index);
    //     let newGallary = cityGallaryText;
    //     newGallary[index] = e.target.value.slice(-10);
    //     setCityGallaryText(newGallary);
    // }

    // function handleSetGallaryItem(image, index) {
    //     let newGallary = cityGallary;
    //     newGallary[index] = image;
    //     setCityGallary(newGallary);
    // }
    // function createNewFileInGallary() {
    //     setCityGallary([...cityGallary, "Выберите файл"]);
    //     setCityGallaryText([...cityGallaryText, "Выберите файл"]);
    // }
    // /*delete item from galary */
    // function deleteGallaryItem(index) {
    //     let textArray = cityGallaryText;
    //     textArray.splice(index, 1);
    //     setCityGallaryText(textArray);
    //     let fileArray = cityGallary;
    //     fileArray.splice(index, 1);
    //     setCityGallary(fileArray);
    // }
    function addCity() {
        console.log(country.id);
        if (cityName && cityLink && cityLogo && country) {
            const formData = new FormData()
            formData.append('name', cityName)
            formData.append('link', cityLink)
            formData.append('image', cityLogo)
            formData.append('countryId', country.id)
            createCity(formData);
            alert("Сообщество успешно созданно");
            window.location.reload();
        } else {
            alert("Заполните все поля");
        }

    }
    /*{cityLogo} */
    return (
        <section>
            {!addMeating ?
                <>
                    <AdminCitytFilter  setNameFilter={setNameFilter} setCountryFilter={setCountryFilter} />
                    <AdminCityGrid nameFilter={nameFilter} countryFilter={countryFilter} setAddMeating={setAddMeating} />
                </>
                :
                <div className="admin_city_page">
                    <h3 className="h3_text">Создание сообщества:</h3>
                    <div className="admin_city_page_container">
                        <input className="my_input" type="text" value={cityName} placeholder="Город" onChange={(e) => setCityName(e.target.value)} />
                        <input className="my_input" type="text" value={cityLink} placeholder="Телеграм" onChange={(e) => setCityLink(e.target.value)} />
                        <CustomButton type="country" defaultValue="Страна" isFullObject={true} setValue={setCountry} />
                        <div className="file-input-container">
                            <input type="file" id="fileInput" accept=".png, .jpg, .svg" className="file-input" onChange={(e) => setFileInputLogo(e)} />
                            <label htmlFor="fileInput" className="custom-button">{cityLogoText}</label>
                        </div>
                    </div>
                    {/* <div className="container_galarry">
                        <h3 className="h3_text">Галерея:</h3>
                        {cityGallary.map((item, index) => (
                            <div className="gallary_item" key={index}>
                                <div className="file-input-container">
                                    <input type="file" id="fileInput" accept=".png, .jpg, .svg" className="file-input" onChange={(e) => setFileInputGallary(e, index)} />
                                    <label htmlFor="fileInput" className="custom-button">{cityGallaryText[index]}</label>
                                </div>
                                <img src={DeleteImage} alt="delete" onClick={() => deleteGallaryItem(index)} />
                            </div>
                        ))}
                        <button className="button" onClick={() => createNewFileInGallary()}>Добавить фото</button>
                    </div> */}
                    <button className="button button_final" onClick={() => addCity()}>Добавить сообщество</button>
                </div>
            }
        </section>
    )
}