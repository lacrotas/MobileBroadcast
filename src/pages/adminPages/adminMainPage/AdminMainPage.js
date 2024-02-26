import "./AdminMainPage.scss";
import AnhorCard from "../../../components/anhorGrid/anhorCard/AnhorCard";
import { EXPERT_ADMIN_ROUTE, CITY_ADMIN_ROUTE } from "../../../pages/appRouter/Const";

function AdminMainPage() {
    return (
        <section className="admin_main_page">
            <AnhorCard title={"Заявления экспертов"} description={"Здесь отображаются заявления пользователей, заинтересованных стать экспертами"} path={EXPERT_ADMIN_ROUTE} />
            <AnhorCard title={"Заявления сообществ"} description={"Здесь отображаются заявления пользователей, заинтересованных в создании  своего сообщества"} path={CITY_ADMIN_ROUTE} />
            <AnhorCard title={"Список встреч"} description={"Здесь можно добавить или отменить встречу назначенного сообществом"} />
            <AnhorCard title={"Редактирование экспертов"} description={"Здесь отображаются все эксперты данного сообщества, после выбора нужного вы можете редактировать его"} />
            <AnhorCard title={"Добавить администратора"} description={"Здесь можно добавить или удалить администратора"} />
        </section>
    );
}

export default AdminMainPage;