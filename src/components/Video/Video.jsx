import styles from './Video.module.css'

function Video() {
    return (
        <div className={styles.container}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.213099623118!2d-49.381634423750654!3d-28.683271369500794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95218289dcc4f0bd%3A0x34d48ba2a20e3375!2sR.%20L%C3%BAcia%20Milioli%2C%20211%20-%20Santa%20Barbara%2C%20Crici%C3%BAma%20-%20SC%2C%2088802-020!5e0!3m2!1spt-BR!2sbr!4v1745536395467!5m2!1spt-BR!2sbr" title="Localização do instituto" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Video;