

import {$authHost, $host} from "./index"
import jwt_decode from 'jwt-decode'

export const login = async (username, password,err) => {
    try{
        const {data} = await $host.post('http://localhost:5000/api/v1/user/login', {username, password})
    localStorage.setItem('token', data.token)
    console.log(data.token);
    return jwt_decode(data.token)
}
    catch (err) {
        console.error(err.message)
    }

}

export const check = async () => {
    const response = await $host.get('http://localhost:5000/api/v1/user/login',)
    return response
}