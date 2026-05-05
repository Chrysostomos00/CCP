import UNCRCCards from '../components/sections/UNCRCCards';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

      <UNCRCCards />
    </div>
  );
}
