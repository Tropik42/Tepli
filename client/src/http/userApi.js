import {$authHost, $host} from "./index"
import jwt_decode from 'jwt-decode'

export const login = async (username, password) => {
    const {data} = await $host.post('http://localhost:5000/api/v1/user/login', {username, password})
    localStorage.setItem('token', data.token)
    console.log(data.token);
    return jwt_decode(data.token)
}

export const check = async () => {
    const response = await $host.get('api/v1/user/login',)
    return response
}
