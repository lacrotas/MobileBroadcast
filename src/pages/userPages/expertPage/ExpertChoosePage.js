import { useContext, useEffect } from "react";
import ExpertFilter from "./components/expertFilter/ExpertFilter";
import ExpertGrid from "../../../components/expertGrid/ExpertGrid";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { fetchExperts } from "../../../http/expertApi";

const ExpertChoosePage = observer(() => {
    const { expert } = useContext(Context);
    useEffect(() => {
        fetchExperts().then(data => expert.setExperts(data));
    }, []);

    return (
        <div className="city_choose_page">
            <ExpertFilter />
            <ExpertGrid expertArray={expert._experts} />
        </div>
    );
})

export default ExpertChoosePage;
