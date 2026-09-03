'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Sparkles, Layers } from 'lucide-react';
import styles from './ProjectModal.module.css';

export interface ProjectData {
  id: string;
  title: string;
  category: 'cybersecurity' | 'web' | 'all';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullOverview: string;
  image: string;
  tags: string[];
  features: string[];
  architecture: string[];
  demoUrl: string;
  githubUrl: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className={styles.modalBackdrop} onClick={onClose}>
          <motion.div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
          >
            {/* Modal Top Bar */}
            <div className={styles.modalHeader}>
              <div className={styles.headerInfo}>
                <span className={styles.modalTag}>{project.categoryLabel}</span>
                <h2 className={styles.modalTitle}>{project.title}</h2>
              </div>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className={styles.modalBody}>
              <div className={styles.imageBanner}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={440}
                  className={styles.bannerImg}
                />
              </div>

              <div className={styles.detailsBlock}>
                <p className={styles.modalTagline}>{project.tagline}</p>
              </div>

              <div className={styles.modalSection}>
                <h3 className={styles.sectionHeading}>DETAILED OVERVIEW</h3>
                <p className={styles.overviewText}>{project.fullOverview}</p>
              </div>

              <div className={styles.modalSection}>
                <h3 className={styles.sectionHeading}>CORE FEATURES &amp; CAPABILITIES</h3>
                <ul className={styles.featureList}>
                  {project.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={16} className={styles.featureIcon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3 className={styles.sectionHeading}>ENGINEERING ARCHITECTURE</h3>
                <ul className={styles.featureList}>
                  {project.architecture.map((arch, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <Cpu size={16} className={styles.featureIcon} />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3 className={styles.sectionHeading}>TECHNOLOGIES &amp; TOOLS</h3>
                <div className={styles.tagsWrap}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagPill}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className={styles.modalFooter}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLinkBtn}
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalLinkBtnPrimary}
              >
                <span>Live Project Demo</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
