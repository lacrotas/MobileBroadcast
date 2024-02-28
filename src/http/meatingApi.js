import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchMeatings= async() => {
    const { data } = await $host.get('api/meating/getAllMeating');
    return data;
}

export const fetchOneMeating = async (id) => {
    const {data} = await $host.get('api/meating/' + id)
    return data
}

export const fetchMeatingByExpert = async (expertId) => {
    const {data} = await $host.get('api/meating/' + expertId)
    return data
}