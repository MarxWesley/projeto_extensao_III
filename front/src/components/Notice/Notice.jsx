import { useAuth } from '../AuthContext'
import NewNotice from '../newNotice/NewNotice'
import NoticeCard from '../NoticeCard/NoticeCard'
import styles from './Notice.module.css'
import { useEffect, useState } from 'react'
import img from './teste_1.png'

function Notice() {

    const [notice, setNotice] = useState([])
    const { token } = useAuth();

    useEffect(() => {
        fetch('http://localhost:3001/notice', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            const filterData = data
            .map(item => {
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
            setNotice(filterData);
        })
        .catch((err) => console.log(err))
    }, [])
 
    return (
        <>
            {notice.length > 0 ? (
                <div className={styles.container}>
                    {notice.map((noticia) =>
                    <div key={noticia.id} className={styles.container_img}>
                        <NoticeCard
                            date={noticia.createdAt}
                            id={noticia.id}
                            img={noticia.img}
                            alt={noticia.title}
                            title={noticia.title}
                            link={noticia.link}
                            text_link={'Leia mais'}
                        />
                    </div>
                    )}
                    {token && 
                        <NewNotice />
                    }
                </div>
                ) : (
                <div className={styles.containerNoNotice}>
                    <img 
                        src={img} 
                        alt="Imagem para quando está sem notícia" 
                    />
                    {token && 
                        <NewNotice />
                    }
                </div>
                ) }
        </>
    )
}

export default Notice