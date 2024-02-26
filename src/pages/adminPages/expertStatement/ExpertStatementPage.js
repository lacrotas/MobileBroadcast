import ExpertFilterAdmin from "./components/expertFilterAdmin/ExpertFilterAdmin";
import ExpertGridAdmin from "./components/expertGridAdmin/ExpertGridAdmin";

function ExpertStatementPage(){
    return(
        <section className="expert_grid_admin_page">
            <ExpertFilterAdmin />
            <ExpertGridAdmin />
        </section>
    );
}

export default ExpertStatementPage;