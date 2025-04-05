import NoticeCard from '../NoticeCard/NoticeCard'
import styles from './Notice.module.css'
import img from '../../assets/img/pessoas_iee.jpeg'

const noticias = [
    {
        img: {img},
        alt: 'uma imagem qualquer',
        text: 'aqui alguma coisa vai ta escrita e eu nao to nem ai',
        link: 'https://trackmob.com.br/blog/6-sites-de-ongs-para-inspirar-sua-captacao-online/',
        text_link: 'Leia mais ->'
    },
    {
        img: {img},
        alt: 'uma outra imagem qualquer',
        text: 'aqui alguma coisa vai ta escrita e eu nao to nem ai pt 2',
        link: 'https://trackmob.com.br/blog/6-sites-de-ongs-para-inspirar-sua-captacao-online/',
        text_link: 'Leia mais ->'
    },
    {
        img: {img},
        alt: 'uma outra imagem qualquer',
        text: 'aqui alguma coisa vai ta escrita e eu nao to nem ai pt 2',
        link: 'https://trackmob.com.br/blog/6-sites-de-ongs-para-inspirar-sua-captacao-online/',
        text_link: 'Leia mais ->'
    },
    {
        img: {img},
        alt: 'uma outra imagem qualquer',
        text: 'aqui alguma coisa vai ta escrita e eu nao to nem ai pt 2',
        link: 'https://trackmob.com.br/blog/6-sites-de-ongs-para-inspirar-sua-captacao-online/',
        text_link: 'Leia mais ->'
    },
    {
        img: {img},
        alt: 'uma outra imagem qualquer',
        text: 'aqui alguma coisa vai ta escrita e eu nao to nem ai pt 2',
        link: 'https://trackmob.com.br/blog/6-sites-de-ongs-para-inspirar-sua-captacao-online/',
        text_link: 'Leia mais ->'
    },
]

function Notice() {

    return (
        <div className={styles.container}>
            {noticias.length > 0 && noticias.map((noticia) => 
                <div className={styles.container_img}> 
                    <NoticeCard
                    key={noticia.alt} 
                    img={img}
                    alt={noticia.alt}
                    text={noticia.text}
                    link={noticia.link}
                    text_link={noticia.text_link}
                    />
                </div>
            )}
        </div>
    )
}

export default Notice