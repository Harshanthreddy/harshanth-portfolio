'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Shield, Film, ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectModal, ProjectData } from './ProjectModal';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cybersecurity' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projectsData: ProjectData[] = [
    {
      id: 'usb-security-project',
      title: 'USB Storage Security Project',
      category: 'cybersecurity',
      categoryLabel: 'ACADEMIC PROJECT // CYBERSECURITY',
      tagline: 'Security-focused system designed to mitigate physical USB mass storage risks and prevent malware execution.',
      description: 'Applied system programming and cybersecurity fundamentals to inspect connected USB devices, enforce access control policies, flag autorun threats, and protect systems against unauthorized data exfiltration.',
      fullOverview: 'The USB Storage Security Project addresses one of the most persistent physical threat vectors in operating systems: unmonitored mass storage devices. By combining OS-level device detection and Python-driven policy enforcement, the application ensures only whitelisted devices with verified serial signatures are mounted, providing an isolated sandbox and continuous event auditing.',
      image: '/images/usb_security.jpg',
      tags: ['Cybersecurity', 'USB Security', 'Python', 'System Programming', 'Access Control', 'Threat Mitigation', 'VS Code'],
      features: [
        'Protection and controlled policy-based mounting of connected USB hardware',
        'Whitelist inspection engine validating serial signatures against security database',
        'Application of cybersecurity concepts to prevent unauthorized data exfiltration',
        'Automatic read-only sandboxing for unknown or untrusted devices',
        'Real-time event logging and compliance auditing',
      ],
      architecture: [
        'Device Detection Layer: Listens to OS hardware bus events',
        'Verification Engine: Computes hardware hashes and checks against authorization lists',
        'Access Control Controller: Automatically enforces read-only mode or complete dismount',
      ],
      demoUrl: 'https://github.com/Harshanthreddy',
      githubUrl: 'https://github.com/Harshanthreddy',
    },
    {
      id: 'movie-ticket-booking-system',
      title: 'Movie Ticket Booking System',
      category: 'web',
      categoryLabel: 'ACADEMIC PROJECT // FULL-STACK WEB & DATABASE',
      tagline: 'Full-Stack web application providing cinema showtime discovery, interactive seat selection, and booking management.',
      description: 'Developed an end-to-end movie ticket reservation application with structured frontend visualization and relational database integration to eliminate double-booking anomalies and deliver an intuitive user experience.',
      fullOverview: 'The Movie Ticket Booking System is an end-to-end full-stack web application that simplifies cinema reservation workflows. It provides an intuitive catalog for browsing movies, dynamic seat grid visualization, instant booking confirmation, and relational database normalization to guarantee transaction consistency.',
      image: '/images/movie_booking.jpg',
      tags: ['Full-Stack Web', 'HTML5', 'CSS3', 'JavaScript', 'Python / Database', 'SQL', 'VS Code'],
      features: [
        'Structured movie catalog with showtime management and poster showcase',
        'Interactive real-time seat selection map with availability status indicators',
        'Transactional checkout workflow and automated booking confirmation receipt',
        'Database normalization ensuring concurrency safety and preventing double-booking',
        'Fully responsive design optimized across mobile, tablet, and desktop screens',
      ],
      architecture: [
        'Frontend Presentation: Modular HTML5, CSS3, and modern JavaScript for UI responsiveness',
        'Backend Data Layer: Relational SQLite schema storing movies, schedules, seats, and customer tickets',
        'Transaction Manager: Atomic seat locking to ensure zero booking collision',
      ],
      demoUrl: 'https://github.com/Harshanthreddy',
      githubUrl: 'https://github.com/Harshanthreddy',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'ALL PROJECTS', count: projectsData.length, icon: Layers },
    { id: 'cybersecurity', label: 'CYBERSECURITY', count: projectsData.filter((p) => p.category === 'cybersecurity').length, icon: Shield },
    { id: 'web', label: 'FULL-STACK WEB', count: projectsData.filter((p) => p.category === 'web').length, icon: Film },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className={styles.projectsSection}>
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
            <Sparkles size={13} />
            <span>05 // FEATURED WORK</span>
          </div>
          <h2 className="section-title">ENGINEERING PROJECTS</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Hands-on software and cybersecurity systems built by Duvvuru Harshanth Reddy.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className={styles.filterBar}>
          <div className={styles.filterGroup}>
            {filterTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`${styles.filterBtn} ${isActive ? styles.filterActive : ''}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className={styles.filterActivePill}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <TabIcon size={14} className={styles.filterIcon} />
                  <span>{tab.label} ({tab.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Showcase Grid */}
        <div className={styles.projectsGrid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, pIdx) => (
              <motion.div
                key={project.id}
                layout
                className={styles.projectCard}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: pIdx * 0.1 }}
              >
                {/* Visual Image Showcase */}
                <div 
                  className={styles.imageContainer}
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className={styles.projectImg}
                  />
                  <div className={styles.imageOverlay}>
                    <button className={styles.previewActionBtn}>
                      <Eye size={15} />
                      <span>Deep Dive Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryLabel}>{project.categoryLabel}</span>
                  </div>

                  <h3 
                    className={styles.projectTitle}
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className={styles.projectDesc}>{project.tagline}</p>

                  {/* Tech Pills */}
                  <div className={styles.pillsList}>
                    {project.tags.slice(0, 5).map((tag, idx) => (
                      <span key={idx} className={styles.pill}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className={styles.pillMore}>+{project.tags.length - 5}</span>
                    )}
                  </div>

                  {/* Bottom Actions */}
                  <div className={styles.cardActions}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={styles.detailBtn}
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowRight size={14} />
                    </button>

                    <div className={styles.linkGroup}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="View Source Code on GitHub"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconBtn}
                        aria-label="Launch Project Demo"
                        title="External Link"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
