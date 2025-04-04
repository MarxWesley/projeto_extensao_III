import React from 'react';
import styles from './Notice.module.css';

const Notice = () => {
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
            <span className={styles.label}>FORMAÇÃO INCLUSIVA</span>
            <span className={styles.number}>10+</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.label}>ATUAÇÃO SOCIAL</span>
            <span className={styles.number}>20k</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.label}>INSERÇÃO NO MERCADO</span>
            <span className={styles.number}>110</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.label}>ATIVIDADES CULTURAIS</span>
            <span className={styles.number}>10</span>
          </div>
        </div>
      </div>

      <p className={styles.impactPhrase}>
        Transformar vidas por meio da educação, da inclusão e da solidariedade.
      </p>
    </section>
  );
};

export default Notice;