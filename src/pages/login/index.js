import '../../App.css'
import logo from '../../assets/logo.svg'
import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button'
import axios from 'axios'
import { useState } from 'react';

export default function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginForm = () => {
        axios
        .post('https://reqres.in/api/login', {
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res)
            if(res.status === 200){
                props.login(true)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const cardLogin = {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        padding: '20px',
        borderRadius: '6px',
        backgroundColor: 'white',
        margin: 'auto',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }

    const title = {
        fontFamily: 'Roboto',
        margin: 0,
        marginBottom: '4px'
    }

    const subtitle = {
        fontFamily: 'Roboto',
        margin:0,
        marginBottom: '4px'
    }

    return(
        <div id="login-page" >
            <div style={cardLogin}>
                <img src={logo} alt="rick and morty" width='100%' height='100px'/>
                <h2 style={title}>
                    Login
                </h2>
                <p style={subtitle}>
                    Welcome to Rick N Morty Website
                </p>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label for='email' style={subtitle}>Email</label>
                    <TextInput id='email' type='email' placeholder='Insert Your Email' style={{marginBottom: '12px'}} onChange={(e) => setEmail(e.target.value)}/>
                    <label for='password' style={subtitle}>Password</label>
                    <TextInput id='password' type='password' placeholder='Insert Your Password' onChange={(e) => setPassword(e.target.value)}/>
                    <div onClick={loginForm} style={{display: 'flex', marginTop: '12px'}}>
                        <Button title='Login' margin='auto'/>
                    </div>
                </form>
            </div>
        </div>
    )
}