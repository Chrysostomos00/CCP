import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ccpLogo from '../../assets/ccp_logo.png';
import pccpwcLogo from '../../assets/pccpwc_logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.orgInfo}>
          <div className={styles.logoRow}>
            <img src={ccpLogo} alt="CCP Logo" className={styles.ccpLogo} />
          </div>
          <p className={styles.footerDesc}>
            {t('footer.desc')}
          </p>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.colTitle}>Platform</h4>
          <div className={styles.links}>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/rights">{t('nav.rights')}</Link>
            <Link to="/news">{t('nav.news')}</Link>
            <Link to="/#foni">{t('nav.foni')}</Link>
          </div>
        </div>

        <div className={styles.linksColumn}>
          <h4 className={styles.colTitle}>Legal & Contact</h4>
          <div className={styles.links}>
            <Link to="/#contact">{t('footer.contact')}</Link>
            <Link to="/#privacy">{t('footer.privacy')}</Link>
          </div>
        </div>

        <div className={styles.motherOrg}>
          <p className={styles.supportedBy}>{t('footer.supportedBy')}</p>
          <img src={pccpwcLogo} alt="PCCPWC Logo" className={styles.pccpwcLogo} />
          <a href="https://pccpwc.org" target="_blank" rel="noopener noreferrer" className={styles.pccpwcLink}>
            {t('footer.pccpwcLink')}
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
