import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = ()=>{
        auth.signInWithPopup(provider).then(result => console.log(result)
        ).catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://freepngimg.com/thumb/whatsapp/4-2-whatsapp-transparent.png" alt=""/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="Submit" onClick={signIn}>
                    SignIn with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
