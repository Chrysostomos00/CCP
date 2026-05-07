import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './RightsExplorer.module.css';

export default function RightsExplorer() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const rightsData = [
    { id: 12, title: t('rights.articles.12.title'), short: t('rights.articles.12.short'), full: t('rights.articles.12.full'), icon: "🗣️", color: "var(--color-orange)" },
    { id: 2, title: t('rights.articles.2.title'), short: t('rights.articles.2.short'), full: t('rights.articles.2.full'), icon: "🌍", color: "var(--color-blue)" },
    { id: 3, title: t('rights.articles.3.title'), short: t('rights.articles.3.short'), full: t('rights.articles.3.full'), icon: "❤️", color: "var(--color-purple)" },
    { id: 28, title: t('rights.articles.28.title'), short: t('rights.articles.28.short'), full: t('rights.articles.28.full'), icon: "📚", color: "var(--color-teal)" },
    { id: 31, title: t('rights.articles.31.title'), short: t('rights.articles.31.short'), full: t('rights.articles.31.full'), icon: "🎨", color: "var(--color-yellow)" },
    { id: 19, title: t('rights.articles.19.title'), short: t('rights.articles.19.short'), full: t('rights.articles.19.full'), icon: "🛡️", color: "var(--color-orange)" },
  ];

  return (
    <div className={styles.explorerContainer}>
      <div className={styles.explorerHeader}>
        <div className={styles.iconWrapper}>
          <BookOpen className={styles.headerIcon} />
        </div>
        <h2>Explore the Articles</h2>
      </div>
      
      <div className={styles.accordionList}>
        {rightsData.map((right) => (
          <AccordionItem 
            key={right.id} 
            right={right} 
            isExpanded={expandedId === right.id} 
            onToggle={() => setExpandedId(expandedId === right.id ? null : right.id)} 
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ right, isExpanded, onToggle }: { right: any, isExpanded: boolean, onToggle: () => void }) {
  return (
    <div className={`${styles.accordionItem} ${isExpanded ? styles.expanded : ''}`}>
      <button 
        className={styles.accordionHeader} 
        onClick={onToggle}
        style={{ borderLeftColor: right.color }}
      >
        <div className={styles.headerLeft}>
          <span className={styles.articleIcon}>{right.icon}</span>
          <div className={styles.articleTitles}>
            <h3>{right.title}</h3>
            <h4>{right.short}</h4>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.chevronWrapper}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.accordionContentWrapper}
          >
            <div className={styles.accordionContent}>
              <p>{right.full}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
