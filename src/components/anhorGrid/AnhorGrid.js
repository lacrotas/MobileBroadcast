import "./AnhorGrid.scss"
import AnhorCard from "./anhorCard/AnhorCard";
import { CITY_ROUTE, MEATING_ROUTE } from "../../pages/appRouter/Const";

function AnhorGrid() {
    return (
        <section className="anhor_grid">
            <AnhorCard title={"Создать сообщество"} description={"Вы можете подать заявку на регистрацию сообщества в своем городе"} />
            <AnhorCard title={"Список сообществ"} description={"Тут можно ознакомиться со списком сообществ mobile broadcast"} path={CITY_ROUTE} />
            <AnhorCard title={"Список встреч"} description={"Тут можно ознакомиться со списком встреч mobile broadcast"} path={MEATING_ROUTE} />
        </section>
    );
}

export default AnhorGrid;
