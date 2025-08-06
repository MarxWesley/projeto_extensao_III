import { useAuth } from '../../components/AuthContext'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import logo from './logo.png'
import { useState } from 'react'

export default function Login() {

    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password)
            navigate('/')
            window.location.reload()
        } catch (error) {
            alert('Usuário ou senha inválida!')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo do instituto Diomício'/>
                </div>
                <form className={styles.form} onSubmit={submit}>
                    <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email" 
                        class="form-control" 
                        id="exampleFormControlInput1"      
                        placeholder="name@example.com"
                    />
                    <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" 
                        id="inputPassword5" 
                        class="form-control" 
                        aria-describedby="passwordHelpBlock" 
                        placeholder='senha'
                    />
                    <div className={styles.btn} >
                        <button type="submit" class="btn btn-primary">
                            Entrar
                        </button>
                    </div>
                </form>
                <div className={styles.version}>
                    1.0
                </div>
            </div>
        </div>
    )
}