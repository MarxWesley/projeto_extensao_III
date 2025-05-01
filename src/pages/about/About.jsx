import Banner from "../../components/Banner/Banner";
import Article from "../../components/layout/Article/Article";
import Container from "../../components/layout/Container/Container";
import entrada from './Entrada.png'

export default function About() {
    return (
        <Container>
            <Banner img={entrada} text={"Diomício freitas"}/>
            <Article title={"História"} />
        </Container>
    )
}