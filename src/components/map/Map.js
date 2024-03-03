import "./Map.scss";
import { useState } from "react";
import { MAP_PATH } from "./mapPath";
import BackImage from "../../assets/images/arrowBack.svg";
import DeleteImage from "../../assets/images/delete.svg";
import CustomButton from "../../custom/customButton/CustomButton";

function Map({ svgClass }) {
  const [step, setStep] = useState(svgClass === "modal_map_svg" ? 1 : 0);
  const [currentCountry, setCurrentCountry] = useState();
  const [strokeColor, setStrokeColor] = useState("#000");
  const [backColor, setBackColor] = useState("#000");
  const [selectedFileArr, setSelectedFileArr] = useState([""]);
  const [organizatorArr, setOrganizatorArr] = useState([{}]);

  function handeleCountryCreate(index) {
    if (step === 1) {
      setCurrentCountry(index);
      setStep(2);
    }
    console.log(currentCountry)
  }

  function deleteOrganiizatorByIndex(index) {
    let arr = organizatorArr;
    arr.splice(index, 1)
    setOrganizatorArr(arr);
  }
  return (
    <div className={svgClass}>
      {(step === 1) ?
        <div className="modal_map_setting">
          <h3 className="h3_text">Выберите страну</h3>
        </div> :
        (step == 2) ?
          <div className="modal_map_setting-second">
            <img className="image" src={BackImage} alt="back-arrow" onClick={() => setStep(1)} />
            <h3 className="h3_text">Выберите цвет</h3>
            <input className="modal_map_setting_input" type="text" placeholder="название страны" />
            <div className="input_container">
              <p className="paragraph_text">Граница</p>
              <input value={strokeColor} type="color" className="input" placeholder="цвет границы" onChange={(e) => setStrokeColor(e.target.value)} />
            </div>
            <div className="input_container">
              <p className="paragraph_text">Фон</p>
              <input value={backColor} type="color" className="input" placeholder="цвет границы" onChange={(e) => setBackColor(e.target.value)} />
            </div>
            <button className="button" onClick={() => setStep(3)}>Следующий шаг</button>
          </div> :
          (step == 3) ?
            <div className="modal_map_setting-third">
              <div className="container_label">
                <img className="image" src={BackImage} alt="back-arrow" onClick={() => setStep(2)} />
                <h3 className="h3_text">Информация по:</h3>
              </div>
              <h3 className="h3_text">Городу</h3>
              <div className="container_city">
                <input className="paragraph_text" type="text" placeholder="Название города" />
                <input className="paragraph_text" type="text" placeholder="Ссылка на группу" />
                <input className="paragraph_text" type="text" placeholder="Логотип" />
              </div>
              <h3 className="h3_text">Галлерее</h3>
              <div className="container_galarry">
                {selectedFileArr.map((item, index) => (
                  <div className="gallary_item" key={index}>
                    <input className="paragraph_text" type="file" />
                    <img src={DeleteImage} alt="delete" />
                  </div>
                ))}
              </div>
              <button className="button" onClick={() => setSelectedFileArr([...selectedFileArr, ""])}>Добавить фото</button>
              <h3 className="h3_text">Организаторам</h3>
              <div className="container_organizator">
                {organizatorArr.map((item, index) => (
                  <div className="organizator_item" key={index}>
                    <input className="paragraph_text" type="text" placeholder="Имя фамилия организатора" />
                    <input className="paragraph_text" type="file" />
                    <CustomButton allValues={["мужской", "женский"]} defaultValue="Пол" />
                    <input className="paragraph_text" type="text" placeholder="Ссылка на телеграмм" />
                    <img src={DeleteImage} alt="delete" onClick={() => deleteOrganiizatorByIndex(index)} />
                  </div>
                ))}
              </div>
              <button className="button" onClick={() => setOrganizatorArr([...organizatorArr, ""])}>Добавить организатора</button>
            </div> :
            <></>
      }
      {(step !== 3) ?
        <svg width="677" height="364" viewBox="0 0 677 364" fill="none" xmlns="http://www.w3.org/2000/svg">
          {MAP_PATH.map((item, index) => (
            <path d={item} key={index} fill="#B3A8A8" style={(index === currentCountry) ? { fill: backColor, stroke: strokeColor } : {}} onClick={() => { handeleCountryCreate(index) }} />
          ))}
        </svg>
        : <></>
      }
    </div>
  );
}

export default Map;