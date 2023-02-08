import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About/About';
import Addparcel from '../../pages/Addparcel/Addparcel';
import Admin from '../../pages/Admin/Admin';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Tracker from '../../pages/Tracker/Tracker';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/parceltracker' element={<Tracker/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/addparcel' element={<Addparcel/>}/>
        </Routes>
    );
};

export default AppRoutes;
