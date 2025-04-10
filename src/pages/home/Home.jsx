import styles from './Home.module.css'
import Notice from '../../components/Notice/Notice'
import Section from '../../components/Section/Section'
import Carousel from '../../components/Carousel/Carousel'
import entrada from '../../assets/img/Entrada.jpeg'

function Home() {
    return (
        <section className={styles.section}>
            <Carousel img1={entrada} img2={entrada} img3={entrada} alt="Imagens do Banner"/>
            <Section />
            <Notice />
        </section>
    )
}

export default Home