import React from 'react';
import styles from './Section.module.css';
import DataSection from '../DataSection/DataSection';

const Section = () => {
  return (
    <section className={styles.notice}>
      <div className={styles.container}>

        <div className={styles.textSection}>
          <h2 className={styles.title}>INSTITUTO DIOMÍCIO FREITAS</h2>
          <p>
            O Instituto Diomício Freitas é uma organização da sociedade civil sem fins lucrativos,
            que atua na formação e desenvolvimento de pessoas com deficiência intelectual.
          </p>
          <p>
            Com sede em Criciúma (SC), oferece oficinas pedagógicas, atividades socioculturais,
            cursos profissionalizantes e projetos que visam à inclusão social e laboral.
          </p>
        </div>

        <div className={styles.dataSection}>
          <DataSection label='VOLUNTÁRIOS' number='108.071'/>
          <DataSection label='ENTIDADES' number='4.763'/>
          <DataSection label='VOLUNTÁRIOS' number='108.071'/>
          <DataSection label='VOLUNTÁRIOS' number='108.071'/>
        </div>
      </div>

      <p className={styles.impactPhrase}>
        Transformar vidas por meio da educação, da inclusão e da solidariedade.
      </p>
    </section>
  );
};

export default Section;