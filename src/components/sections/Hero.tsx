import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.headline}>
            {t('hero.headline_pt1')} <span className="gradient-text">{t('hero.headline_pt1_hl')}</span><br/>
            {t('hero.headline_pt2')} <span className="gradient-text">{t('hero.headline_pt2_hl')}</span>
          </h1>
          <p className={styles.subheadline}>
            {t('hero.subheadline')}
          </p>
          <div className={styles.actions}>
            <Link to="/rights" className={styles.primaryBtn}>{t('hero.btnRights')}</Link>
            <Link to="/about" className={styles.secondaryBtn}>{t('hero.btnMeet')}</Link>
          </div>
        </motion.div>

        <motion.div 
          className={styles.heroImageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.mainImagePlaceholder}>
            <img src="/src/assets/avatar-waving.png" alt="Waving Avatar" className={styles.avatarWaving} />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <p>{t('hero.scroll')}</p>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
