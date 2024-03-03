import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchCityes = async () => {
    const { data } = await $host.get('api/city/getAllCity');
    return data;
}

export const fetchOneCity = async (id) => {
    const { data } = await $host.get('api/city/' + id)
    return data
}