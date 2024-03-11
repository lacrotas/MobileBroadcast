import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneExpert, updateOneExpert, deleteOneExpert } from "../../../http/expertApi";
import CurrentExpertPerson from "./components/currentExpertPerson/CurrentExpertPerson";
import CurrentExpertMeatings from "./components/currentExpertMeatings/CurrentExpertMeatings";
import CurrentExpertArticles from "./components/currentExpertArticles/CurrentExpertArticles";
import "./CurrentExpertInfo.scss";

export default function AdminCurrentExpertInfo() {
    const [expert, setExperts] = useState();
    const { id } = useParams();
    const [currentExpertPersonValues, setCurrentExpertPersonValues] = useState();
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(() => {
        if (!expert) {
            fetchOneExpert(id).then(data => setExperts(data));
        }
        if (expert && !isUpdated) {
            setCurrentExpertPersonValues({
                name: expert.name, image: expert.image, aboutText: expert.aboutText,
                sex: expert.sex, technologies: expert.technologies.split("/"), cityId: expert.cityId,
                linkTelegram: expert.linkTelegram, linkMail: expert.linkMail
            })
            setIsUpdated(true);
        }
    }, [expert]);

    function updateExpert() {
        const formData = new FormData();
        formData.append('name', currentExpertPersonValues.name);
        formData.append('sex', currentExpertPersonValues.sex);
        formData.append('aboutText', currentExpertPersonValues.aboutText);
        formData.append('image', currentExpertPersonValues.image);
        formData.append('technologies', currentExpertPersonValues.technologies.join('/'));
        formData.append('cityId', currentExpertPersonValues.cityId);
        if (currentExpertPersonValues.linkTelegram) {
            formData.append('linkTelegram', currentExpertPersonValues.linkTelegram);
        }
        if (currentExpertPersonValues.linkMail) {
            formData.append('linkMail', currentExpertPersonValues.linkMail);
        }
        console.log(currentExpertPersonValues);
        updateOneExpert(expert.id, formData);
        alert("Эксперт отредактирован");
        window.location.reload();
    }
    function deleteExpert() {
        const result = prompt("Для удаления эксперта введите слово \"да\"", []);
        if (result === "да") {
            deleteOneExpert(id);
            alert("Эксперт удален");
            window.location.reload();
        }
    }
    return (
        <div>
            {expert ?
                <>
                    <CurrentExpertPerson name={expert.name} image={expert.image} aboutText={expert.aboutText}
                        sex={expert.sex} technologies={expert.technologies} cityId={expert.cityId}
                        linkTelegram={expert.linkTelegram} linkMail={expert.linkMail}
                        setCurrentExpertPersonValues={setCurrentExpertPersonValues} />
                    <div className="admin_current_expert">
                        <button className="button" onClick={() => deleteExpert()}>Удалить эксперта</button>
                        <button className="button" onClick={() => updateExpert()}>Применить изменения</button>
                    </div>
                    <CurrentExpertArticles expertId={expert.id} />
                    <CurrentExpertMeatings id={expert.meatingId} />
                </>
                : <></>}
        </div>
    );
}