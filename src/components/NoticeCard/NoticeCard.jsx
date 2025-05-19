import { FaArrowRight } from 'react-icons/fa'
import styles from './NoticeCard.module.css'

function NoticeCard({img, alt, text, link, text_link, date}) {
      
    return (
        <div className={styles.card}>
            <div className={styles.container_img}>
                <img src={img} alt={alt}/>
            </div>
            <div className={styles.text}>
                <h2>{date}</h2>
                <p>{text}</p>
                <span>{text_link} <FaArrowRight/> </span>
            </div>
        </div>
    )
}

export default NoticeCard