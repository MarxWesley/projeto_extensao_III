import styles from './Home.module.css'
import img_pessoas from '../../assets/img/pessoas_iee.jpeg'
import Notice from '../../components/Notice/Notice'

function Home() {
    return (
        <section className={styles.section}>
            <Notice img={img_pessoas} alt='sem imagem por enquanto' text='lorem saklojdkasjdklajsdkljaskdlj' link='https://trackmob.com.br/blog/6-sites-de-ongs-para-inspirar-sua-captacao-online/' text_link='Leia mais'/>
        </section>
    )
}

export default Home