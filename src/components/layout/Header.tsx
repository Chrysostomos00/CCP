import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ccpLogo from '../../assets/ccp_logo.png';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY <= 50) {
        setIsMenuOpen(false); // Close menu if we scroll back to top
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.headerInner}`}>
        <Link to="/" className={styles.logoContainer} onClick={() => isScrolled && setIsMenuOpen(false)}>
          <div className={styles.logoIcon}>
            <img src={ccpLogo} alt="CCP Logo" className={styles.logoImage} />
          </div>
          <div className={styles.logoText}>
            <h1>{t('header.logoTitle1')}</h1>
            <h2>{t('header.logoTitle2')}</h2>
          </div>
        </Link>

        {/* Desktop Nav (hidden when scrolled) */}
        <nav className={styles.desktopNav}>
          <Link to="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>{t('nav.about')}</Link>
          <Link to="/rights" className={`${styles.navLink} ${isActive('/rights') ? styles.active : ''}`}>{t('nav.rights')}</Link>
          <Link to="/news" className={`${styles.navLink} ${isActive('/news') ? styles.active : ''}`}>{t('nav.news')}</Link>
          <Link to="/#foni" className={styles.navLink}>{t('nav.foni')}</Link>
          
          <div className={styles.langSwitcher}>
            <Globe size={18} />
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? styles.activeLang : ''}>EN</button>
            <button onClick={() => changeLanguage('el')} className={i18n.language === 'el' ? styles.activeLang : ''}>EL</button>
            <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? styles.activeLang : ''}>TR</button>
          </div>

          <Link to="/#contact" className={`${styles.navLink} ${styles.ctaButton}`}>{t('nav.getInvolved')}</Link>
        </nav>

        {/* Mobile / Scrolled Menu Toggle */}
        <div className={styles.mobileControls}>
          <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Dropdown Nav (for mobile AND scrolled state) */}
      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <div className={styles.mobileLangSwitcher}>
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? styles.activeLang : ''}>English</button>
            <button onClick={() => changeLanguage('el')} className={i18n.language === 'el' ? styles.activeLang : ''}>Ελληνικά</button>
            <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? styles.activeLang : ''}>Türkçe</button>
          </div>
          <Link to="/about" onClick={toggleMenu}>{t('nav.about')}</Link>
          <Link to="/rights" onClick={toggleMenu}>{t('nav.rights')}</Link>
          <Link to="/news" onClick={toggleMenu}>{t('nav.news')}</Link>
          <Link to="/#foni" onClick={toggleMenu}>{t('nav.foni')}</Link>
          <Link to="/#contact" className={styles.mobileCta} onClick={toggleMenu}>{t('nav.getInvolved')}</Link>
        </div>
      )}
    </header>
  );
}
