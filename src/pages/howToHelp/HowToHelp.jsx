import QrCode from '../../components/QrCode/QrCode';
import Video from '../../components/Video/Video';
import styles from '../howToHelp/HowToHelp.module.css'


function HowToHelp() {
  
  return (
    <div className={styles.how_to_help_container}>
      <h1>Quem somos?</h1>
      <Video />
      <h2>Como ajudar?</h2>
      <p>
        Você pode contribuir com nosso projeto fazendo uma doação via PIX.
        Basta escanear o QR Code abaixo:
      </p>
      <QrCode />
    </div>
  );
}

export default HowToHelp;