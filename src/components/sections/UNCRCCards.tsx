import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './UNCRCCards.module.css';

export default function UNCRCCards() {
  const { t } = useTranslation();

  const rightsData = [
    { id: 1, title: t('rights.articles.12.title'), short: t('rights.articles.12.short'), full: t('rights.articles.12.full'), icon: "🗣️", color: "var(--color-orange)" },
    { id: 2, title: t('rights.articles.2.title'), short: t('rights.articles.2.short'), full: t('rights.articles.2.full'), icon: "🌍", color: "var(--color-blue)" },
    { id: 3, title: t('rights.articles.3.title'), short: t('rights.articles.3.short'), full: t('rights.articles.3.full'), icon: "❤️", color: "var(--color-purple)" },
    { id: 4, title: t('rights.articles.28.title'), short: t('rights.articles.28.short'), full: t('rights.articles.28.full'), icon: "📚", color: "var(--color-teal)" },
    { id: 5, title: t('rights.articles.31.title'), short: t('rights.articles.31.short'), full: t('rights.articles.31.full'), icon: "🎨", color: "var(--color-yellow)" },
    { id: 6, title: t('rights.articles.19.title'), short: t('rights.articles.19.short'), full: t('rights.articles.19.full'), icon: "🛡️", color: "var(--color-orange)" },
  ];

  return (
    <section id="rights" className={styles.section}>
      <div className={`container`}>
        <div className={styles.grid}>
          {rightsData.map((right) => (
            <RightCard key={right.id} right={right} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RightCard({ right, t }: { right: any, t: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={styles.cardContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className={styles.cardInner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className={styles.cardFront} style={{ borderTop: `6px solid ${right.color}` }}>
          <div className={styles.icon}>{right.icon}</div>
          <h3 className={styles.articleTitle}>{right.title}</h3>
          <p className={styles.articleShort}>{right.short}</p>
          <div className={styles.flipHint}><Info size={16}/> {t('rights.hover')}</div>
        </div>

        {/* Back */}
        <div className={styles.cardBack} style={{ backgroundColor: right.color }}>
          <h3 className={styles.articleTitleBack}>{right.title}</h3>
          <p className={styles.articleFull}>{right.full}</p>
          <button className={styles.playBtn} onClick={(e) => e.stopPropagation()}>
            <Play size={14} fill="currentColor" /> {t('rights.playGame')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
