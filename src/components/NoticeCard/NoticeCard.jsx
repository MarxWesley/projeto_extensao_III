import styles from './NoticeCard.module.css'

function NoticeCard({img, alt, text, link, text_link}) {

    const formatDate = () => {
        const today = new Date();
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).format(today);
    };
      
    return (
        <div className={styles.card}>
            <div className={styles.container_img}>
                <img src={img} alt={alt}/>
            </div>
            <div className={styles.text}>
                <h2>{formatDate()}</h2>
                <p>{text}</p>
                <a href={link} target='_self' title='link'>{text_link}</a>
            </div>
        </div>
    )
}

export default NoticeCard