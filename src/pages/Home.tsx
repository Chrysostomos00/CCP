import Hero from '../components/sections/Hero';
import FoniAmbassadors from '../components/sections/FoniAmbassadors';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import avatarJumping from '../assets/avatar-jumping.png';
import avatarReading from '../assets/avatar-reading.png';
import styles from './Home.module.css';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      
      {/* Brief About Section */}
      <section className={styles.aboutBrief}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.aboutContent}>
            <h2>{t('home.aboutBriefTitle')}</h2>
            <p>{t('home.aboutBriefText')}</p>
            <Link to="/about" className={styles.primaryLink}>
              {t('home.btnLearnMore')} <ArrowRight size={20} />
            </Link>
          </div>
          <motion.img 
            src={avatarJumping}
            alt="Jumping Avatar" 
            className={styles.avatarJumping}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
      </section>

      {/* Enforcing Rights CTA */}
      <section className={styles.rightsCta}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.rightsCard}>
            <div className={styles.rightsGraphics}>
              <img src={avatarReading} alt="Reading Avatar" className={styles.avatarReading} />
            </div>
            <div className={styles.rightsText}>
              <h2>{t('home.rightsCtaTitle')}</h2>
              <p>{t('home.rightsCtaText')}</p>
              <Link to="/rights" className={styles.exploreBtn}>{t('home.rightsCtaBtn')}</Link>
            </div>
          </div>
        </motion.div>
      </section>

      <FoniAmbassadors />
    </>
  );
}
