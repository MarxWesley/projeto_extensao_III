import styles from './QrCode.module.css'
import qrCodeImg from '../../assets/img/qrcodepix.png';


function QrCode() {
    return (
        <div className={styles.qr_code_container}>
            <div className={styles.qr_code_img}>
                    <img src={qrCodeImg} alt="QR Code para doação via PIX" className={styles.qr_code} />
            </div>
            <div className={styles.steps}> 
                <h3>Escaneie esse código no seu aplicativo do telefone</h3>
                <div>
                    <ol>
                        <li>Open XXXXXX on your phone</li>
                        <li>Tap Linked Devices from the menu</li>
                        <li>Scan this QR code</li>
                    </ol>
                </div>
                <p>Chave PIX: <strong>exemplo@email.com</strong></p>
            </div>
        </div>
    )
    
}

export default QrCode