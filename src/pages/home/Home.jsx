import styles from './Home.module.css'
import img_pessoas from '../../assets/img/WhatsApp Image 2025-03-10 at 14.31.26 (1).jpeg'

function Home() {
    return (
        <section className={styles.section}>
            <img className={styles.img} src={img_pessoas} alt='IEE' />
        </section>
    )
}

export default Home