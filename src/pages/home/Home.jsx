import styles from './Home.module.css'
import img_pessoas from '../../assets/img/pessoas_iee.jpeg'

function Home() {
    return (
        <section className={styles.section}>
            <img className={styles.img} src={img_pessoas} alt='IEE' />
        </section>
    )
}

export default Home