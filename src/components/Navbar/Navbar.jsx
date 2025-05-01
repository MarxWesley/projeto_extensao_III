import { Link } from "react-router-dom"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import styles from './Navbar.module.css'
import logo from './logo.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className={styles.container}>
            <div className={styles.topRow}>
                <div className={styles.logo}>
                    <Link to='/'>
                        <img src={logo} alt="Logo do Instituto" />
                    </Link>
                </div>

                <button className={styles.toggle} onClick={toggleMenu} aria-label="Menu">
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>

            <div className={`${styles.navgation} ${isOpen ? styles.showMenu : ''}`}>
                <ul className={styles.lista}>
                    <li className={styles.item} onClick={handleLinkClick}><Link to='/'>Home</Link></li>
                    <li className={styles.item} onClick={handleLinkClick}><Link to='/comoajudar'>Como ajudar</Link></li>
                    <li className={styles.item} onClick={handleLinkClick}><Link to='/contato'>Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar