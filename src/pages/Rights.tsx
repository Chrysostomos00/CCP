import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import RightsExplorer from '../components/sections/RightsExplorer';
import ChallengeZone from '../components/sections/ChallengeZone';
import styles from './Rights.module.css';

export default function Rights() {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            {t('rights.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            {t('rights.desc')}
          </motion.p>
        </div>
      </div>

      <div className={`container ${styles.dashboardLayout}`}>
        <div className={styles.mainContent}>
          <RightsExplorer />
        </div>
        <aside className={styles.sidebar}>
          <ChallengeZone />
        </aside>
      </div>
    </div>
  );
}
