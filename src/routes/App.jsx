import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Holap from '../containers/Holap';
import NotFound from '../pages/NotFound'; 
import Login from '../containers/Login';
import Drawings from '../pages/Drawings';

const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Holap />}></Route>
            <Route path="/drawings" element={<Drawings />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>     
        </BrowserRouter> 
    );
}

export default App;