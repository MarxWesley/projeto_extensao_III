import styles from './Home.module.css'
import Notice from '../../components/Notice/Notice'
import Section from '../../components/Section/Section'
import entrada from '../../assets/img/Entrada.jpeg'
import pessoas from '../../assets/img/pessoas_iee.jpeg'
import CarouselBs from '../../components/CarouselBs/CarouselBs'

function Home() {
    return (
        <section className={styles.section}>
            <CarouselBs img1={entrada} img2={pessoas}/>
            <Section impactPhrase="Transformar vidas por meio da educação, da inclusão e da solidariedade."/>
            <Notice />
        </section>
    )
}

export default Home