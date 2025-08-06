import styles from './Banner.module.css'

export default function Banner({img, text}) {
    return (
        <div className={styles.banner} style={{backgroundImage: `url(${img})`}}>
            <div className={styles.overlay}></div>
            <h1 className={styles.text}>{text}</h1>
        </div>
    )
}