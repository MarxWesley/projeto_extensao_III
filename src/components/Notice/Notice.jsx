import NoticeCard from '../NoticeCard/NoticeCard'
import styles from './Notice.module.css'
import img from '../../assets/img/pessoas_iee.jpeg'
import { useEffect } from 'react';

    

function Notice() {

    const url = 'http://localhost:3001'

    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    
    useEffect(() => {
        fetch(`${url}/notice`).
        then((resposta) => {
            if(!resposta.ok){
                throw new Error('Erro na requisiçao')
            }
            return resposta.json()
        })
        .then((dados) )
    })

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