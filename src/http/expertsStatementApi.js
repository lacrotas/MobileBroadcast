import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const fetchExpertStatement = async(state) => {
    const {data} = await $host.post('api/expertStatement/addStatement', state)
    return data
}
export const fetchAllExpertStatement = async () => {
    const {data} = await $host.get('api/expertStatement/getAllStatement')
    return data
}
export const fetchOneExpertStatement = async (id) => {
    const {data} = await $host.get('api/expertStatement/statement/' + id)
    return data
}