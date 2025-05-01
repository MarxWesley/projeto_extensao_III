import HthContent from '../../components/HthContent/HthContent';
import styles from './HowToHelp.module.css';

function HowToHelp() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Faça parte desta história de amor ao próximo!</h1>
            <p className={styles.subtitle}>
                Para apoiar a Viver e as crianças e adolescentes beneficiados pela instituição, você pode:
            </p>

            
            <HthContent 
                title1={"Fazer um Pix para o instituto"}
                buttonText={"Copiar Chave"}
                content1={"O Pix é uma forma rápida de ajudar o instituto Diomício Freitas em suas diversas demandas financeiras. Clique no botão abaixo e doe agora mesmo!"}
                title2={"Realizar uma doação online"}
                content2={"A doação online é uma das formas mais práticas de ajudar. Basta clicar no botão abaixo doar o valor que quiser agora mesmo!"}
            /> 
        
        </section>
    );
}

export default HowToHelp;