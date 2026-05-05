import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            {t('about.headerTitle')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            {t('about.headerDesc')}
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className={styles.contentGrid}>
          {/* Main Content Area */}
          <div className={styles.mainArticle}>
            <section className={styles.section}>
              <h2>{t('about.historyTitle')}</h2>
              <p>{t('about.historyP1')}</p>
              <p>{t('about.historyP2')}</p>
            </section>

            <section className={styles.section}>
              <h2>{t('about.whatIsTitle')}</h2>
              <p>{t('about.whatIsP1')}</p>
              <p>{t('about.whatIsP2')}</p>
              <p>{t('about.whatIsP3')}</p>
            </section>

            <section className={styles.section}>
              <h2>{t('about.missionTitle')}</h2>
              <ul>
                <li>{t('about.mission1')}</li>
                <li>{t('about.mission2')}</li>
                <li>{t('about.mission3')}</li>
                <li>{t('about.mission4')}</li>
                <li>{t('about.mission5')}</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>{t('about.accTitle')}</h2>
              <ul className={styles.timeline}>
                <li>{t('about.acc1')}</li>
                <li>{t('about.acc2')}</li>
                <li>{t('about.acc3')}</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>{t('about.impactTitle')}</h2>
              <blockquote className={styles.quote}>
                {t('about.impactQuote')}
              </blockquote>
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>{t('about.sidebarTitle')}</h3>
              <p>{t('about.sidebarDesc')}</p>
              <a href="https://pccpwc.org" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>{t('about.sidebarBtn')}</a>
            </div>
            
            <div className={styles.sidebarGraphic}>
               <span className={styles.emoji}>👫</span>
               <p>{t('about.sidebarGraphic')}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
