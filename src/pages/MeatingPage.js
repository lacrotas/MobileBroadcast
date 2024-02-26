import MeatingFilter from "../components/meatingFilter/MeatingFilter";
import MeatingGrid from "../components/meatingGrid/MeatingGrid";

function MeatingPage() {
  return (
    <div className="meating_page">
      <MeatingFilter />
      <MeatingGrid />
    </div>
  );
}

export default MeatingPage;
