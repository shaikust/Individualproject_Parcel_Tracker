import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppState, useAppThunkDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { AddparcelApi } from '../../redux/actions/authorization';
import './Addparcel.css';
import Navbar from '../../components/Navbar/Navbar';
const Addparcel=()=>{
    const[id,setId]=useState('');
    const[senderLocation,setsenderLocation]=useState('');
    const[receiverLocation,setreceiverLocation]=useState('');
    const[deliveryStatus,setdeliveryStatus]=useState('');
    const[createdBy,setcreatedBy]=useState('');
    const dispatch = useAppThunkDispatch();
    const user = useSelector((state: AppState) => state.login);
    const addItem=(e:any)=>{
        e.preventDefault();
        dispatch(AddparcelApi({
            id,senderLocation,receiverLocation,deliveryStatus,createdBy
        }));
    };
    return(
        <>
        {<Navbar/>}
           <div className="row">

                <div className="col">
                    <div className="wrapper">
                        <div className="text-center mt-4 name">
                            Add here
                        </div>
                        <form className="p-3 mt-3"  >
                        <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input type="number"  id="pid" placeholder="Parcel Id" required
                                    value={id} onChange={(e)=>setId(e.target.value)}></input>
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input type="text"  id="senderLocation" placeholder="Sender Location" required
                                    value={senderLocation} onChange={(e)=>setsenderLocation(e.target.value)}></input>
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="far fa-user"></span>
                                <input type="text"  id="receiverLocation" placeholder="Reciever Location"
                                    required value={receiverLocation}
                                     onChange={(e)=>setreceiverLocation(e.target.value)}></input>
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input type="text" id="deliveryStatus"  placeholder="Delivery Status"
                                value={deliveryStatus} onChange={(e)=>setdeliveryStatus(e.target.value)}></input>
                            </div>
                            <div className="form-field d-flex align-items-center">
                                <span className="fas fa-key"></span>
                                <input type="text"  id="createdBy" placeholder="Created By" required
                                    value={createdBy} onChange={(e)=>setcreatedBy(e.target.value)}></input>
                            </div>
                            <button className="btn mt-3" onClick={addItem}>Add</button>
                        </form>
                        <div className="text-center fs-6">
                        Go back?<Link to='parcellist'>back</Link>
                    </div>
                    </div>
                </div>
</div>

        </>

    );
};
export default Addparcel;