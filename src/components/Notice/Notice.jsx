import NoticeCard from '../NoticeCard/NoticeCard'
import styles from './Notice.module.css'
import { useEffect, useState } from 'react'

function Notice() {

    const [notice, setNotice] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/notice', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            const dataFormatada = data.map(item => {
                const dataOriginal = new Date(item.createdAt);
                const newDate = dataOriginal.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });

                return {
                    ...item,
                    createdAt: newDate, // substitui a data original pela formatada
                };
            });
            setNotice(dataFormatada);
        })
        .catch((err) => console.log(err))
    }, [])
 
    return (
        <div className={styles.container}>
            {notice.length > 0 && notice.map((noticia) => 
                <div key={noticia.id} className={styles.container_img}> 
                    <NoticeCard
                        img={noticia.img}
                        alt={noticia.description}
                        text={noticia.description}
                        link={noticia.link}
                        text_link={'Leia mais'}
                    />
                </div>
            )}
        </div>
    )
}

export default Notice