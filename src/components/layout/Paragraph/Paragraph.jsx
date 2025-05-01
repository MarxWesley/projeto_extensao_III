import styles from './Paragraph.module.css'

export default function Paragraph({text, type}) {
    return (
        <>
            <p className={`${styles.p} ${styles[type]}`}>{text}</p>
        </>
    )
}