import jwt_decode from 'jwt-decode';
import {$authHost, $host} from './index';

export const registration = async (username, password) => {
    try {
        const {data: {token}} = await $host.post('/user', {username, password});
        localStorage.setItem('token', token);
        console.log('token', token);
        return jwt_decode(token);
    } catch (err) {
        return console.error(err.message);
    }
};

export const login = async (username, password) => {
    try {
        const {data: {token}} = await $host.post('user/login', {username, password});
        localStorage.setItem('token', token);
        console.log('token', token);
        return jwt_decode(token);
    } catch (err) {
        return console.error(err.message);
    }
};

export const check = async () => {
    const {data: {token}} = await $authHost.get('/user/auth');
    localStorage.setItem('token', token);
    console.log('token', token);
    return jwt_decode(token);
};
