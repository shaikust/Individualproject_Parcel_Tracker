import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { handleError } from '../../utils/handle-error';
import {  REGISTER, LOGIN } from './types';

export const RegisterApi = (data:any) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        // eslint-disable-next-line no-console
        console.log('Data ',data);
        const response = await axios.post('http://localhost:8080/controller/register',{
            email:data.email,
            name:data.name,
            password:data.password,
            phone:data.phone

        });
        dispatch({
            type:REGISTER ,
            payload: response.data
        });
        // eslint-disable-next-line no-console
        console.log('pay',response.data);
        if(response.status===200){
            alert(response.data);
        }else{
            alert('failed to register');
        }
    } catch (err: any) {
        handleError(err);
        alert('registration Failed');
    }
};

export const LoginApi = (data:any) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.post('http://localhost:8080/controller/login',{
            email:data.email,
            password:data.password
        });
        dispatch({
            type: LOGIN,
            payload: response.data
        });
        // eslint-disable-next-line no-console
        console.log('pay',response.status);
        if(response.status===200){
            alert('Success');
            sessionStorage.setItem('accesstoken',response.data.accessToken);
            window.location.href ='http://localhost:3000/home';
        }else {
            alert('Incorrect username or password');
        }
        return response.data;
    } catch (err: any) {
        // handleError(err);
        // eslint-disable-next-line no-console
        console.error(err);
        alert('Login Failed');
    }
};