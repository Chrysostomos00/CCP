import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import foniLogo from '../../assets/foni_logo.png';
import styles from './FoniAmbassadors.module.css';

export default function FoniAmbassadors() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // We map the translations manually since it's an object in JSON
  const ambassadors = [
    { id: 1, name: t('foni.ambassadors.1.name'), quote: t('foni.ambassadors.1.quote'), district: t('foni.ambassadors.1.district') },
    { id: 2, name: t('foni.ambassadors.2.name'), quote: t('foni.ambassadors.2.quote'), district: t('foni.ambassadors.2.district') },
    { id: 3, name: t('foni.ambassadors.3.name'), quote: t('foni.ambassadors.3.quote'), district: t('foni.ambassadors.3.district') },
    { id: 4, name: t('foni.ambassadors.4.name'), quote: t('foni.ambassadors.4.quote'), district: t('foni.ambassadors.4.district') },
    { id: 5, name: t('foni.ambassadors.5.name'), quote: t('foni.ambassadors.5.quote'), district: t('foni.ambassadors.5.district') },
  ];

  return (
    <section id="foni" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <motion.div 
            className={styles.titleArea}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <img src={foniLogo} alt="FONI Logo" className={styles.foniLogo} />
            <h2>{t('foni.title').split(',')[0]},<br/>{t('foni.title').split(',')[1]}</h2>
            <p>{t('foni.desc')}</p>
          </motion.div>
          <div className={styles.controls}>
            <button className={styles.controlBtn} onClick={() => scroll('left')} aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.controlBtn} onClick={() => scroll('right')} aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <motion.div 
          className={styles.carouselContainer} 
          ref={scrollRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {ambassadors.map((ambassador) => (
            <motion.div 
              key={ambassador.id} 
              className={styles.ambassadorCard}
              whileHover={{ y: -10 }}
            >
              <div className={styles.avatarPlaceholder}>
                <span className={styles.initials}>{ambassador.name.charAt(0)}</span>
              </div>
              <blockquote className={styles.quote}>"{ambassador.quote}"</blockquote>
              <div className={styles.info}>
                <span className={styles.name}>{ambassador.name}</span>
                <span className={styles.district}>{ambassador.district}</span>
              </div>
            </motion.div>
          ))}
          {/* Add a view all card */}
          <Link to="/about" style={{textDecoration: 'none'}}>
            <motion.div 
              className={`${styles.ambassadorCard} ${styles.viewAllCard}`}
              whileHover={{ y: -10 }}
            >
              <h3>{t('foni.viewAll')}</h3>
              <ChevronRight size={32} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
