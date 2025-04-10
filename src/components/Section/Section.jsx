import React from 'react';
import styles from './Section.module.css';

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
          <div className={styles.dataItem}>
            <span className={styles.label}>VOLUNTÁRIOS</span>
            <span className={styles.number}>108.071</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.label}>ENTIDADES</span>
            <span className={styles.number}>4.763</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.label}>INSERÇÃO NO MERCADO</span>
            <span className={styles.number}>+30</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.label}>ATIVIDADES CULTURAIS</span>
            <span className={styles.number}>11</span>
          </div>
        </div>
      </div>

      <p className={styles.impactPhrase}>
        Transformar vidas por meio da educação, da inclusão e da solidariedade.
      </p>
    </section>
  );
};

export default Section;