'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Shield, Code2, FileText, ArrowUpRight, Flame, CheckCircle2, Terminal, Sparkles, UserCheck } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';
import styles from './About.module.css';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const stats = [
    { number: '2027', label: 'B.Tech AI & DS (NBKRIST)', icon: GraduationCap, detail: 'Specializing in AI & Analytics' },
    { number: '02', label: 'Internships Completed', icon: Award, detail: 'Supraja Tech & Pentagon Space' },
    { number: '24H', label: 'Hackathon Finalist', icon: Flame, detail: 'Narayana 24-Hour Hackathon' },
    { number: '100%', label: 'Engineering Dedication', icon: Shield, detail: 'Continuous learning & delivery' },
  ];

  const highlights = [
    'Python, Java & C Algorithmic Foundations',
    'Full-Stack Web (HTML5, CSS3, JavaScript, React)',
    'Cybersecurity & Hardware Threat Mitigation',
    'Vulnerability Assessment & Network Defense',
    'AI, Data Science & Prompt Engineering',
    'Agile Problem Solving Under Pressure',
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-tag">
            <span>01 // PROFILE &amp; ACADEMICS</span>
          </div>
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Get to know my academic journey at NBKRIST, technical focus areas, and industrial internship background.
          </p>
        </motion.div>

        {/* Modern Bento Grid Layout */}
        <div className={styles.bentoGrid}>
          {/* Bento Tile 1: Main Bio & Narrative */}
          <motion.div
            className={`${styles.bentoTile} ${styles.tileBio}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.tileHeader}>
              <div className={styles.tileIconWrap}>
                <UserCheck size={20} />
              </div>
              <span className={styles.tileTag}>BACKGROUND &amp; ASPIRATIONS</span>
            </div>

            <h3 className={styles.bioHeading}>
              Engineering intelligent systems, secure software, and modern web applications.
            </h3>

            <p className={styles.bioText}>
              I am <strong>Duvvuru Harshanth Reddy</strong>, currently pursuing my <strong>B.Tech in Artificial Intelligence &amp; Data Science at NBKRIST (2023 &ndash; 2027)</strong>. My passion lies in combining core computer science foundations with modern development architectures to solve real-world problems.
            </p>

            <p className={styles.bioText}>
              Through hands-on internships at <strong>Supraja Technologies</strong> (Cybersecurity &amp; Vulnerability Assessment) and <strong>Pentagon Space</strong> (Python Full-Stack Development), I developed practical solutions including a <strong>USB Storage Security System</strong> and a <strong>Movie Ticket Booking Application</strong>.
            </p>

            <div className={styles.bioActionRow}>
              <button onClick={onOpenResume} className="btn-primary">
                <FileText size={15} />
                <span>View Full Curriculum Vitae</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Bento Tile 2: Key Milestones (4 Stat Cards) */}
          <motion.div
            className={`${styles.bentoTile} ${styles.tileStats}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.statsInnerGrid}>
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className={styles.statMiniCard}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div className={styles.statTop}>
                      <div className={styles.statIconBadge}>
                        <IconComp size={18} />
                      </div>
                      <span className={styles.statNumber}>{stat.number}</span>
                    </div>
                    <span className={styles.statLabel}>{stat.label}</span>
                    <span className={styles.statDetail}>{stat.detail}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Bento Tile 3: Core Competencies */}
          <motion.div
            className={`${styles.bentoTile} ${styles.tileHighlights}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.tileHeader}>
              <div className={styles.tileIconWrap}>
                <Code2 size={20} />
              </div>
              <span className={styles.tileTag}>CORE COMPETENCIES</span>
            </div>

            <ul className={styles.highlightList}>
              {highlights.map((item, idx) => (
                <li key={idx} className={styles.highlightItem}>
                  <CheckCircle2 size={16} className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.missionQuote}>
              <p>&ldquo;Committed to writing secure, efficient, and maintainable software that creates measurable value.&rdquo;</p>
            </div>
          </motion.div>
        </div>

        {/* Live Interactive Terminal Inspector */}
        <motion.div
          className={styles.terminalSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.terminalHeaderWrap}>
            <div className="section-tag">
              <Terminal size={13} />
              <span>LIVE CODE &amp; CLI INSPECTOR</span>
            </div>
            <h3 className={styles.terminalTitle}>
              INTERACTIVE REPOSITORY &amp; TERMINAL
            </h3>
            <p className={styles.terminalSub}>
              Inspect the core Python algorithms from my USB Security and Movie Booking projects, or execute commands in the live interactive shell.
            </p>
          </div>

          <InteractiveTerminal />
        </motion.div>
      </div>
    </section>
  );
};
