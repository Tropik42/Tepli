import {$host} from "./index"
import jwt_decode from 'jwt-decode'

export const login = async (username, password, err) => {
 try{
     const {data} = await $host.post('http://localhost:5001/api/v1/user/login', {username, password})
     localStorage.setItem('token', data.token)
     console.log(data.token);
     return jwt_decode(data.token)}
    catch (err) {
        console.error(err.message)
    }

}

export const check = async () => {
    try {
        return await $host.get('api/v1/user/login',)
    } catch (error) {
        console.log(error.message)
    }
}
