import styles from './HthContent.module.css'

export default function HthContent({title1, title2, content1, content2, buttonText}) {
    return (
        <div className={styles.card}>
                <div className={styles.icon}></div>
                <div className={styles.content}>
                    <h2 className={styles.cardTitle}>{title1}</h2>
                    <p className={styles.cardText}>
                        {content1}
                    </p>
                    <button className={styles.button}>{buttonText}</button> <br /> <br />
                    <h2 className={styles.cardTitle}>{title2}</h2>
                    <p className={styles.cardText}>{content2}</p>
                </div>
            </div>
    );
}