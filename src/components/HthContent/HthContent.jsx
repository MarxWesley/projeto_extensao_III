import styles from './HthContent.module.css'

export default function HthContent({title, content, buttonText}) {
    return (
        <div className={styles.card}>
                <div className={styles.icon}></div>
                <div className={styles.content}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardText}>
                        {content}
                    </p>
                    <button className={styles.button}>{buttonText}</button>
                </div>
            </div>
    );
}