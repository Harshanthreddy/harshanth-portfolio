'use client';

import React from 'react';
import { useTheme, THEME_OPTIONS, Theme } from './ThemeProvider';
import { Palette } from 'lucide-react';
import styles from './FloatingThemeBar.module.css';

export const FloatingThemeBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <aside className={styles.floatingBar} aria-label="Theme selector">
      <div className={styles.barLabel}>
        <Palette size={14} />
        <span>THEME</span>
      </div>
      <div className={styles.swatches}>
        {THEME_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setTheme(opt.id)}
            className={`${styles.swatchBtn} ${theme === opt.id ? styles.swatchActive : ''}`}
            title={`Switch to ${opt.name}`}
            aria-label={`Switch to ${opt.name}`}
          >
            <span
              className={styles.swatchCircle}
              style={{ backgroundColor: opt.color, borderColor: opt.accent }}
            >
              <span
                className={styles.swatchDot}
                style={{ backgroundColor: opt.accent }}
              />
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};
