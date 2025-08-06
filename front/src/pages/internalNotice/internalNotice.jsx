import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Container from "../../components/layout/Container/Container";
import { useEffect, useState } from "react";
import api from "../../assets/api/Api";
import styles from "./internalNotice.module.css"

export default function InternalNotice() {

    const [notice, setNotice] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
        api.get(`/notice/${id}`)
            .then(res => {
                setNotice(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <Container>
            <Banner img={notice.img}/>
            <h1 className={styles.title}>{notice.title}</h1>
            <div className={styles.div}>
                <p className={styles.p}>{notice.description}</p>
            </div>
        </Container>
    )
}