import { Link } from 'react-router-dom'
import styles from './Notice.module.css'

function Notice({img, alt, text, link, text_link}) {
    return (
        <div className={styles.card}>
            <div className={styles.container_img}>
                <img src={img} alt={alt}/>
            </div>
            <div className={styles.text}>
                <h2>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</h2>
                <p>{text}</p>
                <a href={link} target='_self' title='link'>{text_link}</a>
            </div>
        </div>
    )
}

export default Notice