import axios from '../../utils/interceptors';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { handleError } from '../../utils/handle-error';
import { PARCEL, VIEW, ADDPARCEL } from './types';

export const viewApi = (data:any) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.get(`admin-user-controller/parcel/${data.trackingid}`);
        dispatch({
            type: VIEW,
            payload: response.data,
        });
        // eslint-disable-next-line no-console
        // console.log(response);
        return response.data;
    } catch (err: any) {
        handleError(err);
    }
};

export const parcelApi = () => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.get('admin-user-controller/parcel');
        dispatch({
            type: PARCEL,
            payload: response.data,
        });
        // eslint-disable-next-line no-console
        //  console.log(response);
        return response.data;
    } catch (err: any) {
        handleError(err);
    }
};

export const AddparcelApi = (data:any) => async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axios.post('admin-user-controller/parcel',{
            id:data.id,
            senderLocation:data.senderLocation,
            receiverLocation:data.receiverLocation,
            deliveryStatus:data.deliveryStatus,
            createdBy:data.createdBy

        });
        dispatch({
            type: ADDPARCEL,
            payload: response.data,
        });
        // eslint-disable-next-line no-console
          console.log(response);
          if(response.status===200){
            alert('Success');
          }
        return response.data;
    } catch (err: any) {
        handleError(err);
        alert('cannot add');
    }
};