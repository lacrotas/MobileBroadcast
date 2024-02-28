import { useState, useEffect } from "react"
import "./CurrentExpertMeatings.scss"
import MeatingCard from "../../../custom/meatingCard/MeatingCard";
import { fetchMeatingByExpert } from "../../../http/meatingApi";

function CurrentExpertMeatings({ id }) {
    const [meatingId, setMeatingId] = useState();


    useEffect(() => {
        fetchMeatingByExpert(id).then(data => setMeatingId(data))
        console.log(meatingId);
    }, []);

    return (
        <section className="current_meating">
            <h3 className="h3_text">Ближайшие встречи</h3>
            {(meatingId) ?
                <section className="meating_grid">
                    {meatingId.map((item, index) => (
                        <MeatingCard key={index} location={item.location}
                            data={item.data} time={item.time} cityId={item.cityId} />
                    ))}
                </section>
                :
                <p className="paragraph_text">У данного эксперта не запланированно встреч</p>
            }
        </section>
    )
}
export default CurrentExpertMeatings