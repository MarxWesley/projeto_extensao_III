import { FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Footer.module.css'
import casinha from './casa.svg'
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'

export default function Footer() {
    const phoneNumber = '48998384125';
    const message = 'Olá, quero mais informações sobre o instituto e os projetos realizados por vocês!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={casinha} alt='instituto' className={styles.casinha}/>
                    <div className={styles.info}>
                        <p>Rua Lúcia Milloli, 211 - Criciúma/SC</p>
                        <p>educ.especial@ibest.com.br</p>
                        <p>(48) 3433-8235</p>
                    </div>
                    <div className={styles.mapIcon}>
                        <a  href='https://maps.app.goo.gl/dZWGRLCH9bCLZKUcA'
                            rel="noopener noreferrer"
                            title="Localizacao"
                            target='_blank'
                        >
                            <FaMapMarkerAlt />
                        </a>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.svg}>
                        <a  href='https://www.facebook.com/p/IEE-Diomício-Freitas-100066695940896/?locale=pt_BR&_rdr'
                            rel="noopener noreferrer"
                            title="Facebook"
                            target='_blank'
                        >
                            <BsFacebook/>
                        </a>
                        <a  href='https://www.instagram.com/ieediomicio/'
                            rel="noopener noreferrer"
                            title="Instagram"
                            target='_blank'
                        >
                            <BsInstagram/>
                        </a>
                        <a  href='https://example.com'
                            rel="noopener noreferrer"
                            title="Youtube"
                        >
                            <BsYoutube/>
                        </a>
                        <a  
                            href={whatsappLink}
                            rel="noopener noreferrer"
                            title="WhatsApp"
                            target='_blank'
                        >
                            <BsWhatsapp/>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.copy}>
                <p>&copy; 2025 IEEDF - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}