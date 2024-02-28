import { useContext, useEffect } from "react";
import ExpertFilter from "../components/expertFilter/ExpertFilter";
import ExpertGrid from "../components/expertGrid/ExpertGrid";
import ExpertCard from "../custom/expertCard/ExpertCard";
/* */
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { fetchExperts } from "../http/expertApi";

const ExpertChoosePage = observer(() => {
    const { expert } = useContext(Context);
    // useEffect(() => {
    //     fetchExperts().then(data => expert.setExperts(data));
    // }, []);

    return (
        <div className="city_choose_page">
            <ExpertFilter />
            <div className="expert_grid">
                {expert._experts.map((item, index) => (
                    <ExpertCard key={index} id={item.id} name={item.name} image={item.image}
                        aboutText={item.aboutText} sex={item.sex} articles={item.articles}
                        technologies={item.technologies} cityId={item.cityId} link={item.link}
                        meatingId={item.meatingId} />
                ))}
            </div>
        </div>
    );
})

export default ExpertChoosePage;
