import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function News() {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: 'var(--color-gray-50)', minHeight: '100vh', paddingBottom: 'var(--spacing-xl)' }}>
      <div style={{ background: 'var(--color-blue)', color: 'white', padding: 'var(--spacing-xl) 0', textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white' }}
          >
            {t('nav.news')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.25rem', opacity: 0.9 }}
          >
            Stay updated with the latest articles, posts, and upcoming events from the Cyprus Children's Parliament.
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Main Articles Area (Mock structure) */}
          <div style={{ gridColumn: '1 / -1' }}>
            <h2 style={{ color: 'var(--color-orange)', borderBottom: '2px solid var(--color-gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Latest News</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[1, 2, 3].map((item) => (
                <div key={item} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ width: '100%', height: '150px', backgroundColor: 'var(--color-gray-100)', borderRadius: '0.5rem', marginBottom: '1rem' }}></div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-blue)', fontWeight: 600 }}>May 2026</span>
                  <h3 style={{ margin: '0.5rem 0', color: 'var(--color-gray-900)' }}>Mock Article Title {item}</h3>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem' }}>This is a placeholder for content that will be pulled from the WordPress REST API later.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events Sidebar (Mock structure) */}
          <div style={{ gridColumn: '1 / -1', marginTop: '2rem' }}>
            <h2 style={{ color: 'var(--color-purple)', borderBottom: '2px solid var(--color-gray-200)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Upcoming Events</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div style={{ background: 'white', borderRadius: '1rem', padding: '1rem', display: 'flex', gap: '1.5rem', alignItems: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ textAlign: 'center', minWidth: '80px' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-purple)' }}>15</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-gray-600)', textTransform: 'uppercase' }}>June</div>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--color-gray-900)' }}>Pancyprian Meeting</h4>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.9rem' }}>Nicosia, House of Representatives</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
