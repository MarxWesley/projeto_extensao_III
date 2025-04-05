import styles from './Home.module.css'
import Notice from '../../components/Notice/Notice'
import Section from '../../components/Section/Section'

function Home() {
    return (
        <section className={styles.section}>
            <Section />
            <Notice />
        </section>
    )
}

export default Home