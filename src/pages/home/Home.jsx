import styles from './Home.module.css'
import Notice from '../../components/Notice/Notice'

function Home() {
    return (
        <section className={styles.section}>
            <Notice />
        </section>
    )
}

export default Home