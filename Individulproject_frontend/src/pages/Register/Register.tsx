/* eslint-disable max-len */

import { Console } from 'console';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterApi } from '../../redux/actions/authentication';
import { AppState, useAppThunkDispatch } from '../../redux/store';
import './Register.css';

/* eslint-disable react/react-in-jsx-scope */
const Register=()=>{
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [phone,setPhoneno]=useState('');
    const dispatch = useAppThunkDispatch();
    const user = useSelector((state: AppState) => state.user);
    // eslint-disable-next-line no-console
    // console.log('User ',user.status);
    const handleClick=(e:any)=>{
        e.preventDefault();
        dispatch(RegisterApi({
            email,name,password,phone
        }));
    };
    return(
        <body>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div className="wrapper">
                    <div className="logo">
                        <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-login-web-development-flaticons-flat-flat-icons.png" />
                    </div>
                    <div className="text-center mt-4 name">
                        Register here
                    </div>
                    <form className="p-3 mt-3" >
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="email"  id="emailid" placeholder="email" required
                                title="proxolo@gmail.com" pattern="[^@\s]+@[^@\s]+" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text"  id="name" placeholder="name" title="proxolo"
                                required value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password"id="password" required placeholder="password"value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="number"  id="phone" placeholder="PhNo" required
                                title="proxoloo" value={phone} onChange={(e)=>setPhoneno(e.target.value)}></input>
                        </div>
                        <button className="btn mt-3" onClick={handleClick}>register</button>
                    </form>
                    <div className="text-center fs-6">
                        Already registerd ?<Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

    );

};
export default Register;