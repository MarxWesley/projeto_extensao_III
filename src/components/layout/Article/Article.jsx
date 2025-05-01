import Video from "../../Video/Video";
import Paragraph from "../Paragraph/Paragraph";
import styles from './Article.module.css'

export default function Article({title}) {
    return (
        <div className={styles.container}>
            <article>
                <h2 className={styles.title}>{title}</h2>
                <Paragraph text={"  O Instituto Diomício Freitas surgiu com a missão de oferecer educação especializada para pessoas com deficiência intelectual, promovendo sua inclusão social e integração comunitária. Desde sua fundação, a instituição tem se dedicado a criar um ambiente acolhedor, adaptado e inclusivo, onde cada aluno recebe atendimento personalizado conforme suas necessidades. Seu foco está no desenvolvimento integral dos estudantes, respeitando suas particularidades e estimulando suas potencialidades."} type={'indent'}/>
                <Paragraph text={"  Como uma organização filantrópica, o Instituto atua sem fins lucrativos e é mantido por meio de doações, parcerias com o poder público — especialmente com o município de Criciúma e o governo estadual — e a colaboração da sociedade civil. Ao longo de sua trajetória, tem se consolidado como referência em educação especial, oferecendo não apenas ensino adaptado, mas também suporte terapêutico, atividades culturais e programas de formação profissional, contribuindo para uma vida mais autônoma e digna para seus alunos."} type={'indent'}/>

                <Video />

                <h2 className={styles.title}>Missão, Visão e Valores</h2>
                <Paragraph  text={"Missão: Promover a inclusão e melhorar a qualidade de vida dos alunos com deficiência intelectual por meio de um atendimento especializado e adaptado às necessidades de cada estudante."} />
                <Paragraph  text={"Visão: Tornar-se referência em educação especial e inclusão social, oferecendo condições de aprendizado que preparem os alunos para uma vida autônoma e digna."} />
                <Paragraph  text={"Valores:"} type={'bold'}/>
                <ul className={styles.lista}>
                    <li className={styles.item}><strong className={styles.bold}>Inclusão:</strong> Compromisso com a integração dos alunos à sociedade.</li>
                    <li className={styles.item}><strong className={styles.bold}>Respeito à diversidade:</strong> Valorização das diferenças individuais.</li>
                    <li className={styles.item}><strong className={styles.bold}>Autonomia:</strong> Incentivo ao desenvolvimento de uma vida independente.</li>
                    <li className={styles.item}><strong className={styles.bold}>Solidariedade:</strong> Atuação com base na empatia e colaboração comunitária.</li>
                    <li className={styles.item}><strong className={styles.bold}>Educação com propósito:</strong> Foco no ensino adaptado e significativo.</li>
                    <li className={styles.item}><strong className={styles.bold}>Transparência e filantropia:</strong> Gestão ética, sustentada por doações e parcerias públicas.</li>
                </ul>
            </article>
        </div>
    )
}