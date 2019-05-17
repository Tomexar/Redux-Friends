import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_LIST_START = 'FETCH_LIST_START '
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS '
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL '

export const login = creds => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then (res =>{
            console.log(res.data)
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch (err => console.log(err));
}

export const getFriends = () => dispatch =>{
    dispatch( {type: FETCH_LIST_START});
        axiosWithAuth()  
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
                dispatch({type: FETCH_LIST_SUCCESS, payload: res.data})
            })
            .catch (err => console.log(err));
}






