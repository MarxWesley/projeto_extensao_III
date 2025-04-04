import styles from './Banner.module.css'

function Banner({text, img}) {
    return (
        <div className={styles.banner}>
            <div className={styles.banner-content}>

            </div>
            <div className={styles.banner-image}>
                <img src={img} alt='Um banner com uma imagem'/>
            </div>
        </div>
    )    
}