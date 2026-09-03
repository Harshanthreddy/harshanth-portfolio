'use client';

import React from 'react';
import { ChevronUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Back to top button */}
        <div className={styles.topActionRow}>
          <button
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
            <span>BACK TO TOP</span>
          </button>
        </div>

        {/* Footer Main */}
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <a href="#hero" className={styles.footerLogo} aria-label="Duvvuru Harshanth Reddy Home">
              <span className={styles.logoText}>DUVVURU HARSHANTH</span>
              <span className={styles.logoAccent}> REDDY</span>
            </a>
            <p className={styles.footerTagline}>
              AI &amp; Data Science Undergraduate &bull; Full-Stack Developer &bull; Cybersecurity Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerNav}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#experience" className={styles.navLink}>Experience</a>
            <a href="#education" className={styles.navLink}>Education</a>
            <a href="#skills" className={styles.navLink}>Skills</a>
            <a href="#projects" className={styles.navLink}>Portfolio</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>

          {/* Social Links */}
          <div className={styles.socialGroup}>
            <a
              href="mailto:duvvuruharshanthreddy@gmail.com"
              className={styles.socialBtn}
              aria-label="Direct Email"
              title="duvvuruharshanthreddy@gmail.com"
            >
              <Mail size={17} />
            </a>
            <a
              href="https://github.com/Harshanthreddy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub Profile"
              title="GitHub: Harshanthreddy"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com/in/harshanth-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn Profile"
              title="LinkedIn: harshanth-reddy"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="tel:+917801038604"
              className={styles.socialBtn}
              aria-label="Call +91 7801038604"
              title="+91 7801038604"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} <strong>Duvvuru Harshanth Reddy</strong>. All rights reserved.
          </p>
          <p className={styles.builtWith}>
            Designed &amp; Developed by <strong>Harshanth Reddy</strong> &bull; Powered by <strong>Next.js 14 &amp; TypeScript</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
