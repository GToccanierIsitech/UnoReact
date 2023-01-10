import { Link } from 'react-router-dom'
import './Login.scss'

function Login() {
    return (
        <div className='LoginPage'>
            <div className='content'>
                <h1 className='Title'>Se connecter</h1>
                <input
                    className='Textbox'
                    placeholder='Pseudonyme'
                />
                <input
                    className='Textbox'
                    placeholder='Mot de passe'
                    type={"Password"}
                />
                <button className='Button'>Se connecter</button>
                <Link
                    to={`/register`}
                    className='Text'
                >
                    <p>Pas de compte ?</p>
                </Link>

            </div>
        </div>
    )
}

export default Login