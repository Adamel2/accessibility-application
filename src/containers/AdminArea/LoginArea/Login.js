import React, { useImperativeHandle, useState } from "react";
import "./Login.css"

import ImageUser from '../../../assets/img/login_img.png'
import { useHistory } from "react-router-dom";

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const handleLogin = () =>{

        if(userName === 'admin' && password === 'admin'){
            history.push('/addProduct');
        }
        else{
            alert('Error password or username!');
        }
    }

    return (

        <div className="d-flex flex-column justify-content-center">
            <div id="formContent" className="d-flex  flex-column align-self-center">

                <div className="d-flex flex-column">
                    <img className="img" src={ImageUser} id="icon" alt="User Icon" />
                </div>


                    <input onChange={(e) => setUserName(e.target.value)} type="text" id="login" className="fadeIn second" name="login" placeholder="login" /><br/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="fadeIn third" name="login" placeholder="password" /><br/>
                    <button onClick = {handleLogin}className="btn bg-success" value="Log In" >Login</button>

            </div>
        </div>

    )
}

export default Login;