import QrCode from '../../components/QrCode/QrCode';
import styles from '../howToHelp/HowToHelp.module.css'

function HowToHelp() {
  
  return (
    <div className={styles.how_to_help_container}>
      <h1>Como Ajudar</h1>
      <p>
        Você pode contribuir com nosso projeto fazendo uma doação via PIX.
        Basta escanear o QR Code abaixo:
      </p>
      <QrCode />
    </div>
  );
}

export default HowToHelp;