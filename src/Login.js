import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { Input } from './layout';
import { storageSetJSON, dateCalculate, storageGetJSON } from './utils';

export default function Login({history}) {    
    const [email, setEmail] = useState('teste@teste.com');
    const [password, setPassword] = useState('1234560');   
    const [login, setLogin] = useState(storageGetJSON('login'));

    function handleSubmitForm(e) {
        e.preventDefault();                
        axios.post('https://api-todo-sqlite.herokuapp.com/login', {email, password})
        .then(result => {            
            const decode = jwtDecode(result.data.token);
            const {iat, exp} = decode;
            const issuedAt = dateCalculate(iat);
            const expiredAt = dateCalculate(exp);
            storageSetJSON('login', { ... result.data, issuedAt, expiredAt, iat, exp });
            redirectToTarget();
        })
        .catch(error => {
            console.log(error);
        });
    };

    function redirectToTarget() {
        history.push(`/`);
    };

    return ( 
        <>
        {login ? (
        <>
            <div>Logado {login.description}</div>
        </> ) : (
        <>
            <form method="post" id="frmLogin" name="frmLogin">
                <Input change={(e) => setEmail(e.target.value)} type="text" id="email" value={email} placeholder="E-mail user" label="Email:" />
                <Input change={(e) => setPassword(e.target.value)} type="password" id="password" value={password} placeholder="Password user" label="Password:" />
                <button onClick={handleSubmitForm} className="btn btn-default">Login</button>
            </form>
        </> )}        
        </>
    );        
}