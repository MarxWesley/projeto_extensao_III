import styles from './Home.module.css'
import Notice from '../../components/Notice/Notice'
import Section from '../../components/Section/Section'
import Carousel from '../../components/Carousel/Carousel'
import entrada from '../../assets/img/Entrada.jpeg'
import pessoas from '../../assets/img/pessoas_iee.jpeg'

function Home() {
    return (
        <section className={styles.section}>
            <Carousel img1={entrada} img2={pessoas} img3={entrada} alt="Imagens do Banner"/>
            <Section impactPhrase="Transformar vidas por meio da educação, da inclusão e da solidariedade."/>
            <Notice />
        </section>
    )
}

export default Home