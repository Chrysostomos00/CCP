import { Play, Trophy, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './ChallengeZone.module.css';

export default function ChallengeZone() {
  const { t } = useTranslation();

  return (
    <div className={styles.zoneContainer}>
      <div className={styles.zoneHeader}>
        <div className={styles.iconWrapper}>
          <Trophy className={styles.headerIcon} />
        </div>
        <h2>Challenge Zone</h2>
      </div>
      
      <div className={styles.cardList}>
        <div className={`${styles.challengeCard} ${styles.bgOrange}`}>
          <div className={styles.cardContent}>
            <h3>{t('rights.playGame')}</h3>
            <p>Ready to test your knowledge about the UNCRC?</p>
            <button className={styles.playBtn}>
              <Play size={18} fill="currentColor" /> Play Now
            </button>
          </div>
          <div className={styles.cardGraphic}>🎮</div>
        </div>

        <div className={`${styles.challengeCard} ${styles.bgPurple}`}>
          <div className={styles.cardContent}>
            <h3>Daily Quiz</h3>
            <p>Answer 3 quick questions to earn a badge!</p>
            <button className={styles.playBtn}>
              <Star size={18} fill="currentColor" /> Start Quiz
            </button>
          </div>
          <div className={styles.cardGraphic}>⭐</div>
        </div>
      </div>
    </div>
  );
}
