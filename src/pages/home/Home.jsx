import styles from './Home.module.css'
import img_pessoas from '../../assets/img/pessoas.png'

function Home() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <img className={styles.img} src={img_pessoas} alt='IEE' />
            </div>
        </section>
    )
}

export default Home