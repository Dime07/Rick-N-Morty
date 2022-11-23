import '../../App.css'
import logo from '../../assets/logo.svg'
import TextInput from '../../elements/TextInput'
import Button from '../../components/Button'

export default function Login(){

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
                    <TextInput id='email' type='email' placeholder='Insert Your Email' style={{marginBottom: '12px'}}/>
                    <label for='password' style={subtitle}>Password</label>
                    <TextInput id='password' type='password' placeholder='Insert Your Password'/>
                    <div style={{display: 'flex', marginTop: '12px'}}>
                        <Button title='Login' margin='auto'/>
                    </div>
                </form>
            </div>
        </div>
    )
}