import styles from "./DataSection.module.css";

function DataSection({label, number}) {
    return (
        <div className={styles.dataItem}>
            <span className={styles.label}>{label}</span>
            <span className={styles.number}>{number}</span>
        </div>
    )
}

export default DataSection