import { FaArrowRight } from 'react-icons/fa'
import styles from './NoticeCard.module.css'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

function NoticeCard({id ,img, alt, title, text_link, date}) {
    const { token } = useAuth;

    const navigate = useNavigate()

    const handleEdit = () => {
        navigate(`/editarNoticia/${id}`)
    }

    const handleRead = () => {
        navigate(`/noticia/${id}`)
    }

    const handleDelete = async () => {
        const confirm = window.confirm("Tem certeza que deseja remover essa notícia?")

        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:3001/notice/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: token,
                }
            })

            if(response.ok) {
                alert('Notícia deletada com sucesso!');
                window.location.reload()
            } else {
                const error = await  response.text();
                alert('Erro ao deletar: ' + error);
            }
        } catch (error) {
            console.log('Error no DELETE: ', error);
            alert('Erro ao deletar notícia')
        }
    }

    return (
        <div className={styles.card} >
            <div className={styles.container_img}>
                <img src={img} alt={alt}/>
                <div className={styles.icons}>
                    <MdEdit onClick={handleEdit} className={styles.edit}/>
                    <MdDelete onClick={handleDelete} className={styles.delete}/>
                </div>
            </div>
            <div className={styles.text} onClick={handleRead}>
                <h2>{date}</h2>
                <p>{title}</p>
                <span>{text_link} <FaArrowRight/> </span>
            </div>
        </div>
    )
}

export default NoticeCard 