import ExpertFilter from "../components/expertFilter/ExpertFilter";
import ExpertGrid from "../components/expertGrid/ExpertGrid";

function ExpertChoosePage() {
    return (
        <div className="city_choose_page">
            <ExpertFilter />
            <ExpertGrid />
        </div>
    );
}

export default ExpertChoosePage;
