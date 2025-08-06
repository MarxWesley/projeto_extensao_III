import React from 'react';
import styles from './Section.module.css';
import DataSection from '../DataSection/DataSection';

const Section = ({impactPhrase}) => {

  const paragraphs = [
    {
      id: 1,
      p: " O Instituto Diomício Freitas é uma organização da sociedade civil sem fins lucrativos, que atua na formação e desenvolvimento de pessoas com deficiência intelectual."
    },
    {
      id: 2,
      p: "Com sede em Criciúma (SC), oferece oficinas pedagógicas, atividades socioculturais, cursos profissionalizantes e projetos que visam à inclusão social e laboral."
    },
    {
      id: 3,
      p: "Com sede em Criciúma (SC), oferece oficinas pedagógicas, atividades socioculturais, cursos profissionalizantes e projetos que visam à inclusão social e laboral. Com sede em Criciúma (SC), oferece oficinas pedagógicas, atividades socioculturais, cursos profissionalizantes e projetos que visam à inclusão social e laboral."
    },
  ]

  return (
    <section className={styles.notice}>
      <div className={styles.container}>

        <div className={styles.textSection}>
          <h2 className={styles.title}>INSTITUTO DIOMÍCIO FREITAS</h2>
          {paragraphs.length > 0 && paragraphs.map((paragraph) => 
              <p key={paragraph.id}>
                {paragraph.p}
              </p>
          )}
        </div>

        <div className={styles.dataSection}>
          <DataSection label='VOLUNTÁRIOS' number='108.071'/>
          <DataSection label='ENTIDADES' number='4.763'/>
          <DataSection label='VOLUNTÁRIOS' number='108.071'/>
          <DataSection label='VOLUNTÁRIOS' number='108.071'/>
        </div>
      </div>

      <p className={styles.impactPhrase}>
        {impactPhrase}
      </p>
    </section>
  );
};

export default Section;