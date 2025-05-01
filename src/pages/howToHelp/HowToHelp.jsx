import HthContent from '../../components/HthContent/HthContent';
import styles from './HowToHelp.module.css';

function HowToHelp() {

    const contents = [
        {
            title: "Fazer um Pix para o instituto",
            content: "O Pix é uma forma rápida de ajudar o instituto Diomício Freitas em suas diversas demandas financeiras. Clique no botão abaixo e doe agora mesmo!",
            buttonText: "Copiar Chave"
        },
        {
            title: "Realizar uma doação online",
            content: "A doação online é uma das formas mais práticas de ajudar. Basta clicar no botão abaixo e doar o valor que quiser agora mesmo!",
            buttonText: "Doe pelo PayPal Chave"
        },
        {
            title: "Doar produtos e serviços",
            content: "A Viver precisa de diversos produtos e serviços em seu dia-a-dia, e você ou sua empresa podem colaborar doando-os. "
        }

    ] 

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Faça parte desta história de amor ao próximo!</h1>
            <p className={styles.subtitle}>
                Para apoiar a Viver e as crianças e adolescentes beneficiados pela instituição, você pode:
            </p>

            { contents.length > 0 && contents.map((content) =>
            <HthContent 
                title={content.title}
                buttonText={content.buttonText}
                content={content.content}
            /> )}
        
        </section>
    );
}

export default HowToHelp;