import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { Input } from './layout';
import { storageSetJSON, dateCalculate, storageGetJSON, storageDelete } from './utils';

export default function Login({history}) {    
    const [email, setEmail] = useState('teste@teste.com');
    const [password, setPassword] = useState('1234560');   
    const [login, setLogin] = useState(storageGetJSON('login'));
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    function handleSubmitForm(e) {        
        e.preventDefault();       
        setLoading(true);         
        axios.post('https://api-todo-sqlite.herokuapp.com/api/login', {email, password})
        .then(result => {            
            const decode = jwtDecode(result.data.token);
            const {iat, exp} = decode;
            const issuedAt = dateCalculate(iat);
            const expiredAt = dateCalculate(exp);
            storageSetJSON('login', {...result.data, issuedAt, expiredAt, iat, exp});
            setLoading(false);
            redirectToTarget();
        })
        .catch(error => {
            setLoading(false);
            setErrors(true);
        });
    }

    function redirectToTarget() {
        history.push(`/`);
    }

    function handleLogoff() {
        storageDelete('login');
        setLogin(null);
    }

    function handleErrorsOff() {
        setErrors(false);
    }

    return ( 
        <>
        {login ? (
        <>
            <div className="title">
                Logado                
            </div>
            <div>
                <button className="button is-danger" onClick={handleLogoff}>Logoff</button>
            </div>
        </> ) : (
        <>
            {(errors) ? (
                <div className="notification is-danger">
                    <button className="delete" onClick={handleErrorsOff}></button>
                    <strong>Login invalid</strong>                
                </div>
            ): null}
            <form method="post" id="frmLogin" name="frmLogin">
                <Input change={(e) => setEmail(e.target.value)} type="text" id="email" value={email} placeholder="E-mail user" label="Email:" />
                <Input change={(e) => setPassword(e.target.value)} type="password" id="password" value={password} placeholder="Password user" label="Password:" />
                <button onClick={handleSubmitForm} className={loading?'button is-primary is-loading':'button is-primary'}>Login</button>
            </form>
        </> )}        
        </>
    );        
}