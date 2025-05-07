import styles from './Article.module.css'

export default function Article({children}) {
    return (
            <article className={styles.container}>
                {children}
            </article>
    )
}