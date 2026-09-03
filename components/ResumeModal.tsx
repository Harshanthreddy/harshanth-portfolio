'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Briefcase, GraduationCap, Award, CheckCircle2, Trophy, Shield, Code, Phone, Mail, Github, Linkedin } from 'lucide-react';
import styles from './ResumeModal.module.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
          >
            {/* Top Control Bar */}
            <div className={styles.topBar}>
              <div className={styles.topTitle}>
                <span>CURRICULUM VITAE // DUVVURU HARSHANTH REDDY</span>
              </div>
              <div className={styles.topActions}>
                <button onClick={handlePrint} className={styles.controlBtn} title="Print Resume">
                  <Printer size={15} />
                  <span>Print</span>
                </button>
                <a
                  href="/Duvvuru_Harshanth_Reddy_Resume.pdf"
                  download="Duvvuru_Harshanth_Reddy_Resume.pdf"
                  onClick={() => {
                    import('canvas-confetti').then((confetti) => {
                      confetti.default({
                        particleCount: 85,
                        spread: 75,
                        origin: { y: 0.5 },
                      });
                    });
                  }}
                  className={styles.controlBtnPrimary}
                >
                  <Download size={15} />
                  <span>Download PDF</span>
                </a>
                <button onClick={onClose} className={styles.closeBtn} aria-label="Close modal">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Paper Content */}
            <div className={styles.resumePaper}>
              {/* Header */}
              <div className={styles.resumeHeader}>
                <div>
                  <h1 className={styles.name}>DUVVURU HARSHANTH REDDY</h1>
                  <h2 className={styles.title}>AI &amp; Data Science Student &bull; Full-Stack Developer &bull; Cybersecurity Enthusiast</h2>
                </div>
                <div className={styles.contactDetails}>
                  <div>duvvuruharshanthreddy@gmail.com &bull; +91 7801038604</div>
                  <div>github.com/Harshanthreddy &bull; linkedin.com/in/harshanth-reddy</div>
                  <div>NBKRIST &bull; Andhra Pradesh, India</div>
                </div>
              </div>

              <hr className={styles.divider} />

              {/* Professional Summary */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <Award size={15} />
                  <span>PROFESSIONAL SUMMARY</span>
                </h3>
                <p className={styles.summaryText}>
                  Undergraduate student in Artificial Intelligence and Data Science at NBKRIST (2023 &ndash; 2027) with hands-on experience in <strong>Python, Java, C, Full-Stack Development, AI, Data Science, and Cybersecurity</strong>. Experienced through industrial internships at Supraja Technologies (Cybersecurity) and Pentagon Space (Python Full-Stack), and dedicated to building practical, secure software solutions.
                </p>
              </div>

              {/* Experience */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <Briefcase size={15} />
                  <span>WORK EXPERIENCE</span>
                </h3>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.jobHeader}>
                      <div>
                        <h4 className={styles.role}>Cybersecurity Intern</h4>
                        <div className={styles.company}>Supraja Technologies &bull; Industrial Internship</div>
                      </div>
                      <div className={styles.period}>RECENT</div>
                    </div>
                    <ul className={styles.bulletList}>
                      <li>Gained practical exposure to cybersecurity concepts, ethical hacking methodologies, and vulnerability assessment.</li>
                      <li>Worked directly with industry-standard security tools to identify and understand system vulnerabilities.</li>
                    </ul>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.jobHeader}>
                      <div>
                        <h4 className={styles.role}>Python Full-Stack Intern</h4>
                        <div className={styles.company}>Pentagon Space &bull; Industrial Internship</div>
                      </div>
                      <div className={styles.period}>RECENT</div>
                    </div>
                    <ul className={styles.bulletList}>
                      <li>Gained hands-on experience with Python programming and full-stack web development principles.</li>
                      <li>Worked with frontend and backend architectures while building practical software applications.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <Code size={15} />
                  <span>PROJECTS</span>
                </h3>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.jobHeader}>
                      <h4 className={styles.role}>USB Security Project</h4>
                      <div className={styles.period}>CYBERSECURITY</div>
                    </div>
                    <ul className={styles.bulletList}>
                      <li>Developed a security-focused project designed to improve the protection and controlled usage of USB storage devices.</li>
                      <li>Applied programming and cybersecurity concepts to identify and manage potential USB security risks.</li>
                    </ul>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.jobHeader}>
                      <h4 className={styles.role}>Movie Ticket Booking System</h4>
                      <div className={styles.period}>FULL-STACK</div>
                    </div>
                    <ul className={styles.bulletList}>
                      <li>Developed a movie ticket booking application for browsing movies and managing ticket booking workflows.</li>
                      <li>Applied programming and database concepts to create a structured and user-friendly booking system.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <CheckCircle2 size={15} />
                  <span>TECHNICAL SKILLS</span>
                </h3>
                <div className={styles.skillsTable}>
                  <div><strong>Programming:</strong> C, Python, Java</div>
                  <div><strong>Web Development:</strong> Full-Stack Development, HTML5, CSS3, JavaScript, React</div>
                  <div><strong>AI / Data Science:</strong> Artificial Intelligence, Data Science, Prompt Engineering</div>
                  <div><strong>Cybersecurity:</strong> USB Security, Cybersecurity Fundamentals, Threat Mitigation</div>
                  <div><strong>Tools &amp; VCS:</strong> GitHub, VS Code, Git</div>
                </div>
              </div>

              {/* Hackathons & Achievements */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <Trophy size={15} />
                  <span>HACKATHONS &amp; ACHIEVEMENTS</span>
                </h3>
                <ul className={styles.bulletList}>
                  <li>
                    <strong>Narayana 24-Hour Hackathon:</strong> Participated in the Narayana 24-Hour Hackathon, gaining practical experience in rapid problem-solving, collaborative teamwork, and software development under pressure.
                  </li>
                </ul>
              </div>

              {/* Education */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  <GraduationCap size={15} />
                  <span>EDUCATION</span>
                </h3>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.jobHeader}>
                      <div>
                        <h4 className={styles.role}>B.Tech in Artificial Intelligence &amp; Data Science</h4>
                        <div className={styles.company}>NBKR Institute of Science &amp; Technology (NBKRIST) &bull; CGPA: 6.5 / 10</div>
                      </div>
                      <div className={styles.period}>2023 &ndash; 2027</div>
                    </div>
                  </div>

                  <div className={styles.timelineItem}>
                    <div className={styles.jobHeader}>
                      <div>
                        <h4 className={styles.role}>Intermediate (MPC)</h4>
                        <div className={styles.company}>SR Junior College &bull; Score: 60%</div>
                      </div>
                      <div className={styles.period}>2021 &ndash; 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
