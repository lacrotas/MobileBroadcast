import ExpertFilterAdmin from "./components/expertFilterAdmin/ExpertFilterAdmin";
// import ExpertGridAdmin from "./components/expertGridAdmin/ExpertGridAdmin";
import ExpertCardStatement from "./components/expertGridAdmin/expertCardStatement/ExpertCardStatement";
import { fetchAllExpertStatement } from "../../../http/expertsStatementApi";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { useEffect, useContext } from "react";
const ExpertStatementPage = observer(() => {
    const { expertStatements } = useContext(Context);
    useEffect(() => {
        fetchAllExpertStatement().then(data => expertStatements.setExpertStatemnets(data));
    }, []);
    return (
        <section className="expert_grid_admin_page">
            <ExpertFilterAdmin />
            <div className="expert_grid_admin">
                {expertStatements._expertStatements.map((item, index) => (
                    <ExpertCardStatement key={index} name={item.name}
                        city={item.cityId} links={item.links} technologies={item.technologies} aboutText={item.aboutText} />
                ))}
            </div>
            {/* <ExpertGridAdmin /> */}
        </section>
    );
})

export default ExpertStatementPage;