import React from 'react';
import './HowToHelp.module.css';
import qrCodeImg from '../../../assets/img/qrcode-pix.png';

function HowToHelp() {
  return (
    <div className="how-to-help-container">
        
      <h1>Como Ajudar?</h1>
      <p>
        Você pode contribuir com nosso projeto fazendo uma doação via PIX.
        Basta escanear o QR Code abaixo:
    </p>
      <img src={qrCodeImg} alt="QR Code para doação via PIX" className="qr-code" />
      <p>Chave PIX: <strong>exemplo@email.com</strong></p>
      
    </div>
  );
}

export default HowToHelp;