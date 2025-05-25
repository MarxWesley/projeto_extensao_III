import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from './NoticeForm.module.css'
import Container from "../../components/layout/Container/Container"

export default function NoticeForm() {

    const {id} = useParams()
    const navigate = useNavigate()
    const isEditMode = Boolean(id)

    const[fileName, setFileName] = useState('escolher imagem JPG, PNG, JPEG.')

    function fileNameChange(e) {
        const file = e.target.files[0]
        if(file) {
            setFileName(file.name)
            setNotice({
                ...notice, 
                file: file
            })
        }
    } 

    const [notice, setNotice] = useState({
        file: '',
        title: '',
        description: ''
    })
    
    useEffect(() => {
      if(isEditMode) {
        fetch(`http://localhost:3001/notice/${id}`)
            .then(res => res.json()) 
            .then(data => {
                setNotice({
                    file: data.file || 'Arquivo',
                    title: data.title || 'Título',
                    description: data.description || 'Descrição',
                })
            })
            .catch(err => console.log(err))
      }
    }, [id, isEditMode])

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setNotice({...notice, [name]: value})
    }
 
    function handleSubmit(e) {
        e.preventDefault()

        if(!notice.file) {
            alert('Selecione uma imagem antes de continuar.')
            return
        }

        const method = isEditMode ? 'PUT' : 'POST'
        const url = isEditMode ? `http://localhost:3001/notice/${id}` : `http://localhost:3001/notice`

        const formData = new FormData()
        formData.append('title', notice.title)
        formData.append('description', notice.description)
        formData.append('file', notice.file)

        fetch(url, {
            method: method,
            body: formData
        })
        .then(res => res.json())
        .then(() => navigate('/')) // redireciona após salvar
        .catch(err => console.error(err))
    }
   
    return (
        <Container>
            <div className={styles.container} onSubmit={handleSubmit}>
                <h2 className={styles.h2}>{isEditMode ? 'Editar notícia' : 'Criar nova notícia'}</h2>
                <form className={styles.form}>
                    <label className={styles.title}>
                        <h3>Título</h3>
                    </label> 
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Título"
                        value={notice.title}
                        onChange={handleOnChange}
                        required
                        className={styles.input}
                    />
                    <label className={styles.title}>
                        <h3>Descrição</h3>
                    </label> 
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Descrição da notícia"
                        value={notice.description}
                        onChange={handleOnChange}
                        required
                        className={styles.area}
                    />
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => {
                            handleOnChange(e)
                            fileNameChange(e)
                        }}
                        className={styles.inputFile}
                    />
                    <label htmlFor="file" className={styles.customFileUpload}>
                        <span className={styles.icon}>📄</span>
                        {fileName}
                    </label>
                    <button  type="submit">
                        {isEditMode? 'Atualizar' : 'Criar'}
                    </button>
                </form>
            </div>
        </Container>
    )
}