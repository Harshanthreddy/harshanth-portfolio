'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldAlert, Code2, Trophy, Calendar, CheckCircle2, MapPin, ArrowUpRight } from 'lucide-react';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Cybersecurity Intern',
      company: 'Supraja Technologies',
      type: 'Industrial Internship',
      period: 'Internship Duration',
      icon: ShieldAlert,
      tag: 'Cybersecurity & Vulnerability Assessment',
      highlights: [
        'Gained hands-on exposure to practical cybersecurity methodologies, ethical hacking fundamentals, and vulnerability assessment.',
        'Worked with industry-standard security tools and defensive techniques to identify potential vulnerabilities in networks and systems.',
        'Analyzed system attack surfaces, security policy compliance, and threat mitigation practices.',
      ],
      skillsLearned: ['Ethical Hacking', 'Vulnerability Assessment', 'Network Security', 'Security Tools', 'Threat Mitigation'],
    },
    {
      role: 'Python Full-Stack Intern',
      company: 'Pentagon Space',
      type: 'Industrial Internship',
      period: 'Internship Duration',
      icon: Code2,
      tag: 'Python & Web Development',
      highlights: [
        'Gained end-to-end practical experience with Python programming and full-stack web architecture.',
        'Built structured frontend interfaces and connected backend databases for real-world software workflows.',
        'Implemented database logic, REST API integration principles, and clean software modularity.',
      ],
      skillsLearned: ['Python', 'Full-Stack Architecture', 'Frontend Principles', 'Backend Logic', 'Database Normalization'],
    },
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
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
            <Briefcase size={13} />
            <span>02 // INDUSTRY EXPOSURE</span>
          </div>
          <h2 className="section-title">WORK EXPERIENCE</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Hands-on internships and industrial training in Cybersecurity and Python Full-Stack Development.
          </p>
        </motion.div>

        {/* Timeline Roadmap */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine} />

          <div className={styles.timelineList}>
            {experiences.map((exp, idx) => {
              const IconComp = exp.icon;
              return (
                <motion.div
                  key={idx}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  {/* Glowing Node */}
                  <div className={styles.timelineNode}>
                    <IconComp size={16} />
                  </div>

                  {/* Card Content */}
                  <div className={styles.expCard}>
                    <div className={styles.cardHeader}>
                      <div>
                        <div className={styles.badgeRow}>
                          <span className={styles.tagBadge}>{exp.tag}</span>
                          <span className={styles.typeBadge}>{exp.type}</span>
                        </div>
                        <h3 className={styles.roleTitle}>{exp.role}</h3>
                        <div className={styles.companyName}>
                          <strong>{exp.company}</strong>
                        </div>
                      </div>

                      <div className={styles.periodBadge}>
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <ul className={styles.bulletList}>
                        {exp.highlights.map((point, pIdx) => (
                          <li key={pIdx} className={styles.bulletItem}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={styles.skillsFooter}>
                        <span className={styles.skillsLabel}>Key Focus Areas:</span>
                        <div className={styles.skillPills}>
                          {exp.skillsLearned.map((s, sIdx) => (
                            <span key={sIdx} className={styles.skillPill}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Hackathons & Achievements Banner */}
        <motion.div
          className={styles.hackathonBanner}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -3 }}
        >
          <div className={styles.hackathonContent}>
            <div className={styles.trophyWrap}>
              <Trophy size={28} />
            </div>
            <div>
              <div className={styles.hackathonTag}>RAPID PROBLEM SOLVING // 24-HOUR HACKATHON</div>
              <h4 className={styles.hackathonTitle}>Narayana 24-Hour Hackathon</h4>
              <p className={styles.hackathonDesc}>
                Participated in the intense Narayana 24-Hour Hackathon, applying rapid problem-solving, high-velocity coding, algorithm design, and team collaboration under continuous deadline pressure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
