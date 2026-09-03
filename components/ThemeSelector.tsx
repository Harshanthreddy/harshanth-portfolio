'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeSelector.module.css';

export const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={styles.selectorWrapper}>
      <motion.button
        onClick={toggleTheme}
        className={styles.themeToggleBtn}
        aria-label={`Switch to ${isDark ? 'Bright' : 'Dark'} mode`}
        title={`Current: ${isDark ? 'Dark Mode' : 'Bright Mode'} — Click to toggle`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={styles.iconContainer}
        >
          {isDark ? (
            <Moon size={16} className={styles.moonIcon} />
          ) : (
            <Sun size={16} className={styles.sunIcon} />
          )}
        </motion.div>
        <span className={styles.themeLabel}>{isDark ? 'Dark' : 'Bright'}</span>
      </motion.button>
    </div>
  );
};
