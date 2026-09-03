'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Phone, Download } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { Typewriter } from './Typewriter';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    'AI & Data Science Student',
    'Full-Stack Web Developer',
    'Cybersecurity Enthusiast',
    'Python & Java Programmer',
  ];

  const quickMetrics = [
    { label: 'Academic Focus', val: 'B.Tech AI & DS' },
    { label: 'Internships', val: '2 Completed' },
    { label: 'Hackathons', val: '24-Hour Finalist' },
  ];

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Particle Network Canvas */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />
      <div className="bg-mesh-grid" />

      <div className={`container ${styles.heroContainer}`}>
        {/* Left Column: Intro & Content */}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <motion.div
            className={styles.statusBadge}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Open to Internships &amp; Technical Opportunities</span>
          </motion.div>

          <div className={styles.headingGroup}>
            <span className={styles.greetingText}>HELLO, WORLD! I AM</span>
            <h1 className={styles.mainTitle}>
              HARSHANTH <span className={styles.titleSurname}>REDDY</span>
              <span className={styles.titleAccent}>.</span>
            </h1>
          </div>

          <div className={styles.roleWrapper}>
            <span className={styles.rolePrefix}>&gt;</span>
            <div className={styles.roleTitle}>
              <Typewriter words={roles} />
            </div>
          </div>

          <p className={styles.heroDescription}>
            Undergraduate in <strong>Artificial Intelligence &amp; Data Science at NBKRIST</strong> (2023 &ndash; 2027).
            Experienced through industrial internships at <strong>Supraja Technologies</strong> (Cybersecurity) and <strong>Pentagon Space</strong> (Python Full-Stack). Passionate about building robust software, secure systems, and AI-powered solutions.
          </p>

          {/* Quick Metrics Bar */}
          <div className={styles.metricsBar}>
            {quickMetrics.map((item, idx) => (
              <div key={idx} className={styles.metricItem}>
                <span className={styles.metricVal}>{item.val}</span>
                <span className={styles.metricLabel}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className={styles.ctaGroup}>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={15} />
            </motion.a>

            <motion.button
              onClick={onOpenResume}
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={15} />
              <span>Curriculum Vitae</span>
            </motion.button>
          </div>

          {/* Quick Direct Email Banner */}
          <div className={styles.connectStrip}>
            <div className={styles.connectLeft}>
              <div className={styles.mailIconCircle}>
                <Mail size={14} />
              </div>
              <div className={styles.mailDetails}>
                <span className={styles.mailHint}>Direct Inbox:</span>
                <a href="mailto:duvvuruharshanthreddy@gmail.com" className={styles.mailLink}>
                  duvvuruharshanthreddy@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons Dock */}
            <div className={styles.socialDock}>
              <a
                href="https://github.com/Harshanthreddy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                title="GitHub: Harshanthreddy"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/harshanth-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                title="LinkedIn: harshanth-reddy"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="tel:+917801038604"
                className={styles.socialIconBtn}
                title="Phone: +91 7801038604"
                aria-label="Phone Number"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Portrait */}
        <motion.div
          className={styles.heroVisualCol}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.portraitWrapper}>
            {/* Ambient Profile Frame */}
            <div className={styles.avatarCard}>
              <div className={styles.imageInnerContainer}>
                <Image
                  src="/images/avatar.jpg"
                  alt="Duvvuru Harshanth Reddy"
                  width={340}
                  height={400}
                  priority
                  className={styles.avatarImage}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
