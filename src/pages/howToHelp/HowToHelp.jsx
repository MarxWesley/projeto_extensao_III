import Container from '../../components/layout/Container/Container';
import HthContent from '../../components/HthContent/HthContent';
import styles from './HowToHelp.module.css';
import Banner from  '../../components/Banner/Banner';
import image from './atv_fisica3.png';
import { FaPiggyBank, FaDonate, FaBoxOpen, FaRecycle, FaCalendarAlt } from 'react-icons/fa';
import Article from '../../components/layout/Article/Article';


function HowToHelp() {

    const contents = [
        {
            title: "Fazer um Pix para o instituto",
            content: "O Pix é uma forma rápida de ajudar o instituto Diomício Freitas em suas diversas demandas financeiras. Clique no botão abaixo e doe agora mesmo!",
            buttonText: "Copiar Chave",
            icon: <FaPiggyBank />
        },
        {
            title: "Realizar uma doação online",
            content: "A doação online é uma das formas mais práticas de ajudar. Basta clicar no botão abaixo e doar o valor que quiser agora mesmo!",
            buttonText: "Doe pelo PayPal Chave",
            icon: <FaDonate />
        },
        {
            title: "Doar produtos e serviços",
            content: "A Viver precisa de diversos produtos e serviços em seu dia-a-dia, e você ou sua empresa podem colaborar doando-os. ",
            icon: <FaBoxOpen />
        },
        {
            title: 'Doar Lacres de Alumínio e Tampinhas Plásticas',
            content: 'Desde 2019 a Viver também tem como fonte de recursos os lacres de alumínio (de latas de bebidas) e as tampinhas plásticas (de refrigerante e diversas outras embalagens). Você pode ajudar simplesmente doando sua tampinhas e lacres ou também promovendo a arrecadação em sua empresa, condomínio ou grupo social.',
            icon: <FaRecycle />
        },
        {
            title: 'Participar dos nossos eventos e campanhas',
            content: 'A Viver promove diversos eventos e campanhas para arrecadar recursos e manter suas atividades. Você pode participar adquirindo vouchers das ações como a Pizzada da Viver, a Feijoada da Viver e o McDia Feliz, e também se tornando um patrocinador desses eventos. Acompanhe nossas redes sociais e não perca nenhum evento da Viver!',
            icon: <FaCalendarAlt />
        },
    ] 

    return (
        <>
            <Container>
                <Banner img={image} text={'Como ajudar?'}/>
                <Article>
                    <h1 className={styles.title}>Faça parte desta história de amor ao próximo!</h1>
                    <p className={styles.subtitle}>
                        Para apoiar a Viver e as crianças e adolescentes beneficiados pela instituição, você pode:
                    </p>

                    { contents.length > 0 && contents.map((content) =>
                    <HthContent 
                        title={content.title}
                        buttonText={content.buttonText}
                        content={content.content}
                        icon={content.icon}
                    /> )}
                </Article> 
            </Container>
        </>
    );
}

export default HowToHelp;