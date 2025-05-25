import { Link } from 'react-router-dom'
import styles from './NewNotice.module.css'
import plus from './plus.svg'

export default function NewNotice() {
    
    return (
        <Link to='/criarNoticia' className={styles.container}>
            <div className={styles.add}>
                <img src={plus} alt="simbolo mais"/>
                <h2>adicionar notícia</h2>
            </div>
        </Link>
    )    
}