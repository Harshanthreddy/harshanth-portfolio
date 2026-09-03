'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, Bookmark } from 'lucide-react';
import styles from './Education.module.css';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'NBKR Institute of Science & Technology (NBKRIST)',
      period: '2023 – 2027',
      status: 'Currently Pursuing (Undergraduate)',
      grade: 'CGPA: 6.5 / 10',
      location: 'Vidyanagar, Andhra Pradesh',
      coursework: [
        'Artificial Intelligence & Machine Learning',
        'Data Science & Analytics',
        'Prompt Engineering & LLMs',
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java & Python)',
        'Database Management Systems (SQL)',
        'Cybersecurity Fundamentals',
      ],
    },
    {
      degree: 'Intermediate (MPC — Maths, Physics, Chemistry)',
      institution: 'SR Junior College',
      period: '2021 – 2023',
      status: 'Completed Higher Secondary',
      grade: 'Score: 60%',
      location: 'Andhra Pradesh',
      coursework: [
        'Higher Mathematics & Calculus',
        'Physics & Electronics',
        'Chemistry',
        'Analytical Reasoning',
      ],
    },
  ];

  return (
    <section id="education" className={styles.educationSection}>
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
            <GraduationCap size={14} />
            <span>03 // ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="section-title">EDUCATION &amp; QUALIFICATIONS</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Formal education in Artificial Intelligence &amp; Data Science at NBKRIST and foundational pre-engineering studies.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className={styles.educationGrid}>
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              className={styles.eduCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.eduCardHeader}>
                <div className={styles.eduIconWrap}>
                  <GraduationCap size={24} />
                </div>
                <div className={styles.eduTitleGroup}>
                  <div className={styles.eduPeriodRow}>
                    <span className={styles.periodBadge}>
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </span>
                    <span className={styles.gradeBadge}>{edu.grade}</span>
                  </div>
                  <h3 className={styles.degreeTitle}>{edu.degree}</h3>
                  <div className={styles.institutionName}>{edu.institution}</div>
                </div>
              </div>

              <div className={styles.eduBody}>
                <div className={styles.locationRow}>
                  <MapPin size={14} className={styles.locIcon} />
                  <span>{edu.location} &bull; {edu.status}</span>
                </div>

                <div className={styles.courseworkSection}>
                  <span className={styles.courseworkLabel}>Core Coursework &amp; Topics:</span>
                  <div className={styles.courseworkPills}>
                    {edu.coursework.map((course, cIdx) => (
                      <span key={cIdx} className={styles.coursePill}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
