import Banner from "../../components/Banner/Banner";
import Article from "../../components/layout/Article/Article";
import Container from "../../components/layout/Container/Container";
import entrada from './Entrada.png'
import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.body}>
            <Container>
                <Banner img={entrada} text={"Diomício freitas"}/>
                <Article title={"História"} />
            </Container>
        </div>
    )
}