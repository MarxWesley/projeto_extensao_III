import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import logo from './iee_no_bg.png'

function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.img}>
                <Link to='/'>
                    <img src={logo} alt="Logo do Instituto"/>
                </Link>
            </div>
            <div className={styles.navgation}>
                <ul className={styles.lista}>
                    <li className={styles.item} ><Link to='/'>Home</Link></li>
                    <li className={styles.item} ><Link to='/comoajudar'>Como ajudar</Link></li>
                    <li className={styles.item} ><Link to='/'>Seja um voluntário</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar