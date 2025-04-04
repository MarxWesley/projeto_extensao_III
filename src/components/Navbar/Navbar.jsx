import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from './iee_no_bg 1.png'

function Navbar() {
    return (
        <nav className={styles.container}>
            <Link to='/'>
                <img className={styles.img} src={logo} alt="Logo do Instituto"/>
            </Link>
            <ul className={styles.lista}>
                <li className={styles.item} ><Link to='/'>Home</Link></li>
                <li className={styles.item} ><Link to='/comoajudar'>Como ajudar</Link></li>
                <li className={styles.item} ><Link to='/'>Seja um voluntário</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar