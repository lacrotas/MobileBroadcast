import MainPage from "../MainPage";
import { MAIN_ROUTE, CITY_ROUTE, EXPERT_ROUTE, MEATING_ROUTE, EXPERT_ADMIN_ROUTE, ADMIN_MAIN_ROUTE, CITY_ADMIN_ROUTE, MEATING_ADMIN_ROUTE, ADD_ADMIN_ROUTE } from './Const';
import CurrentCityInfo from "../currentCityComponents/currentCityInfo/CurrentCityInfo";
import CityChoosePage from "../CityChoosePage";
import ExpertChoosePage from "../ExpertChoosePage";
import MeatingPage from "../MeatingPage";
import CurrentExpertInfo from "../CurrentExpertInfo";
import ExpertStatementPage from "../adminPages/expertStatement/ExpertStatementPage";
import AdminMainPage from "../adminPages/adminMainPage/AdminMainPage";
import CityStatement from "../adminPages/cityStatement/CityStatement";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: CITY_ROUTE,
        Component: CityChoosePage
    },
    {
        path: CITY_ROUTE + '/:id',
        Component: CurrentCityInfo
    },
    {
        path: EXPERT_ROUTE,
        Component: ExpertChoosePage
    },
    {
        path: EXPERT_ROUTE + '/:id',
        Component: CurrentExpertInfo
    },
    {
        path: MEATING_ROUTE,
        Component: MeatingPage
    }
];

export const adminRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: ADMIN_MAIN_ROUTE,
        Component: AdminMainPage
    }, 
    {
        path: EXPERT_ADMIN_ROUTE,
        Component: ExpertStatementPage
    },
    {
        path: CITY_ADMIN_ROUTE,
        Component: CityStatement
    },
    {
        path: MEATING_ADMIN_ROUTE,
        Component: MainPage
    },
    {
        path: ADD_ADMIN_ROUTE,
        Component: MainPage
    }
];