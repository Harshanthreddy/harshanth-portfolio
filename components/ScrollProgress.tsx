'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

export const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollWidth(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${scrollWidth}%` }} />
    </div>
  );
};
