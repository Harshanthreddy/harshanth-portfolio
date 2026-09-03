'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSelector } from './ThemeSelector';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenResume: () => void;
  onReplayIntro?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.islandBar}>
        {/* Brand Logo */}
        <a href="#hero" className={styles.logo} aria-label="Harshanth Reddy Home">
          <div className={styles.logoIconWrapper}>
            <Image
              src="/images/logo.png"
              alt="HR Monogram"
              width={30}
              height={30}
              priority
              className={styles.logoImg}
            />
          </div>
          <span className={styles.logoText}>HARSHANTH</span>
          <span className={styles.logoAccent}>REDDY</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name} className={styles.navItem}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.activeText : ''}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={styles.activePill}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={styles.linkText}>{link.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className={styles.headerActions}>
            <ThemeSelector />

            {onReplayIntro && (
              <motion.button
                onClick={onReplayIntro}
                className={styles.introBtn}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                title="Replay Signature Intro Animation"
                aria-label="Replay intro animation"
              >
                <Sparkles size={13} />
                <span>Intro</span>
              </motion.button>
            )}

            <motion.button
              onClick={onOpenResume}
              className={styles.resumeBtn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Open Curriculum Vitae Modal"
            >
              <FileText size={14} />
              <span>Resume</span>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className={styles.mobileControls}>
          <ThemeSelector />
          
          <button
            className={styles.burgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className={styles.mobileDrawer}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
            <ul className={styles.mobileNavList}>
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <a
                    href={link.href}
                    className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.mobileActive : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className={styles.mobileDrawerActions}>
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '10px 18px', fontSize: '0.84rem', marginBottom: '8px' }}
                >
                  <Sparkles size={14} />
                  <span>Replay Handwritten Intro</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '12px 20px', fontSize: '0.86rem' }}
              >
                <FileText size={15} />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </header>
  );
};
