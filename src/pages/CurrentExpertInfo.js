import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneExpert } from "../http/expertApi";
import CurrentExpertPerson from "./currentExpertComponents/currentExpertPerson/CurrentExpertPerson";
import CurrentExpertMeatings from "./currentExpertComponents/currentExpertMeatings/CurrentExpertMeatings";
import CurrentExpertArticles from "./currentExpertComponents/currentExpertArticles/CurrentExpertArticles";

function CurrentExpertInfo() {
    const [expert, setExperts] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetchOneExpert(id).then(data => setExperts(data));
    }, []);

    return (
        <div>
            {expert ?
                <>
                    <CurrentExpertPerson name={expert.name} image={expert.image} aboutText={expert.aboutText}
                        sex={expert.sex} technologies={expert.technologies} cityId={expert.cityId} link={expert.link} />
                    <CurrentExpertArticles articles={expert.articles} />
                    <CurrentExpertMeatings id={expert.meatingId} />
                </>
                : <></>}
        </div>
    );
}

export default CurrentExpertInfo;