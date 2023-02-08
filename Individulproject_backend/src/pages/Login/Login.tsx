/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoginApi } from '../../redux/actions/authentication';
import { AppState, useAppThunkDispatch } from '../../redux/store';
import './Login.css';

const Login=()=>{
  const [email,setEmailid]=useState('');
  const [password,setPassword]=useState('');
  const dispatch = useAppThunkDispatch();
  const user = useSelector((state: AppState) => state.login);
  // eslint-disable-next-line no-console
  console.log('User ',user);
  const submit =(e:any)=>{
     e.preventDefault();
    dispatch(LoginApi({
      email,password
    }));
  };
    return (
        <body>
        <div className="body">
        </div>
        <div className="grad"></div>
        <div className="header">
          <div>Parcel<span>Tracker</span></div>
        </div>
        <br />
        <form onSubmit={submit}>
            <div className="login">
            <div className="login-header">
              <h1>Login</h1>
            </div>
            <div className="login-form">
              <h3>Username:</h3>
              <input name="email"
              id="email" type="text" placeholder="Email"
               onChange={e=> setEmailid(e.target.value)}/>
               <br />
              <h3>Password:</h3>
              <input name="password"
               id="password"type="password" placeholder="Password"
              onChange={e=> setPassword(e.target.value)}/>
              <br />
              <div >
              <button className="btn mt-3" type="submit">Login</button>
              </div>
              <br />
             <div>
                 Don&apos;t have an account<Link to="/register">Register</Link>
             </div>
              <br />
            </div>
          </div>
          </form>
          </body>

    );
};
export default Login;