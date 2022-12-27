import jwt_decode from 'jwt-decode';
// eslint-disable-next-line import/named
import {$authHost, $host} from '../axios/axiosController';

export const registration = async (username, password, isAdmin) => {
    try {
        const {data: {token}} = await $host.post('/user', {username, password, isAdmin});
        localStorage.setItem('token', token);
        console.log('registToken', token);
        return jwt_decode(token);
    } catch (err) {
        return console.error(err.message);
    }
};

export const login = async (username, password, isAdmin) => {
    try {
        const {data: {token}} = await $host.post('user/login', {username, password, isAdmin});
        localStorage.setItem('token', token);
        console.log('loginToken', token);
        return jwt_decode(token);
    } catch (err) {
        return console.error(err.message);
    }
};

export const check = async () => {
    const {data: {token}} = await $authHost.get('/user/auth');
    localStorage.setItem('checkToken', token);
    console.log('token', token);
    return jwt_decode(token);
};
