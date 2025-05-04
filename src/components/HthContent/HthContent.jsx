import styles from './HthContent.module.css'

const HthContent = ({ title, content, buttonText, icon }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.content}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>
                    {content}
                </p>
                {buttonText && (
                    <>
                        <button className={styles.button}>{buttonText}</button>
                        <br /><br />
                    </>
                )}
            </div>
        </div>
    );
};

export default HthContent;
