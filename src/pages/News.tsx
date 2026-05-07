import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import styles from './News.module.css';

interface Post {
  path: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  body: string;
}

export default function News() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Vite's import.meta.glob to dynamically load all JSON files from the news content folder
    const jsonModules = import.meta.glob('../content/news/*.json', { eager: true });
    
    const loadedPosts = Object.keys(jsonModules).map((path) => {
      const data = jsonModules[path] as Omit<Post, 'path'>;
      return {
        path,
        ...data,
      };
    });

    // Sort by date descending
    loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setPosts(loadedPosts);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            {t('nav.news')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            Stay updated with the latest articles, posts, and upcoming events from the Cyprus Children's Parliament.
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className={styles.newsGrid}>
          {posts.map((post) => (
            <motion.article 
              key={post.path}
              className={styles.postCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {post.thumbnail && (
                <div className={styles.thumbnailWrapper}>
                  <img src={post.thumbnail} alt={post.title} className={styles.thumbnail} />
                </div>
              )}
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.categoryBadge}>{post.category}</span>
                  <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <div className={styles.markdownBody}>
                  <ReactMarkdown>{post.body}</ReactMarkdown>
                </div>
              </div>
            </motion.article>
          ))}

          {posts.length === 0 && (
            <div className={styles.emptyState}>
              <p>No news articles found. Head over to the admin portal to write your first post!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
