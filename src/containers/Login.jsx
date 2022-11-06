import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {

    const [state, setState] = useState('');

    const onValueChange = (event) => {
        setState(event.target.value);
    }
    
    const persona =state;
    localStorage.setItem('nombre', persona);

    return (
        <div className="filter">
            <div className="filter2">
        <form className="form" 
            action="/drawings"
            value={state}
            onChange={onValueChange}
        >
                <label id="nombre">Nombre:</label>
                <input id="name" name="texto" type={"text"} required
                placeholder="" ></input>
                <input id="Link" type={'submit'} value='Enviar' ></input>

        </form>
            </div>
        </div>
    );
}; 

export default Login;