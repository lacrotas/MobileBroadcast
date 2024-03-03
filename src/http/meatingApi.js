import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchMeatings = async () => {
    const { data } = await $host.get('api/meating/getAllMeating');
    return data;
}

export const fetchOneMeating = async (id) => {
    if (!id) {
        return null;
    } else {
        const { data } = await $host.get('api/meating/' + id)
        return data;
    }
}
