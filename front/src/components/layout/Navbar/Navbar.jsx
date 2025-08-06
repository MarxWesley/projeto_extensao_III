import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from './logo.svg'
import { useAuth } from "../../AuthContext"

function Navbar() {

    const { token, logout } = useAuth();

    return (
        <nav className={`navbar navbar-expand-lg ${styles.container}`}>
            <div className={`container-fluid ${styles.logo}`}>
                <Link to='/'>
                    <img src={logo} alt="Logo do Instituto" />
                </Link>
                <button className={`navbar-toggler ${styles.btn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.navgation}`} id="navbarNav">
                    <ul className={`navbar-nav ${styles.lista}`}>
                        <li className={`nav-item ${styles.item}`}>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className={`nav-item ${styles.item}`}>
                            <a className="nav-link" href="/comoajudar">Como ajudar</a>
                        </li>
                        <li className={`nav-item ${styles.item}`}>
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                        <li className={`nav-item ${styles.item}`}>
                            <a className="nav-link" href="/contato">Contato</a>
                        </li>
                        <li className={`nav-item ${styles.item}`}>
                            {
                                token ? (
                                    <a  
                                        className="nav-link"
                                        href="/"
                                        onClick={logout}
                                    >
                                        Logout
                                    </a> 
                                ) :
                                    <a className="nav-link" href="/login">  
                                        Login
                                    </a> 
                            } 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar