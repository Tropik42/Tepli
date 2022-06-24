import {$authHost, $host} from "./index"
import jwt_decode from 'jwt-decode'

export const login = async (username, password) => {
    const {data} = await $host.post('api/v1/user/login', {username, password})
    return jwt_decode(data.token)
}

export const check = async () => {
    const response = await $host.get('api/v1/user/login',)
    return response
}