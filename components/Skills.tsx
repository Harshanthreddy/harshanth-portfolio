'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Sparkles,
  Flame,
  Brain,
  Shield,
  Wrench,
  Search,
  X,
  CheckCircle,
  Terminal,
  Cpu
} from 'lucide-react';
import styles from './Skills.module.css';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'web' | 'ai' | 'cybersecurity' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillCategories = [
    {
      id: 'programming',
      title: 'PROGRAMMING LANGUAGES',
      icon: Flame,
      description: 'Foundational languages practiced for algorithmic problem-solving, systems logic, and backend architecture.',
      skills: [
        { name: 'Python', level: 'Advanced', context: 'Core Focus & Scripting', tag: 'AI & Backend' },
        { name: 'Java', level: 'Proficient', context: 'Academic & OOP Foundations', tag: 'Object-Oriented' },
        { name: 'C Language', level: 'Proficient', context: 'Memory & Systems Logic', tag: 'Foundations' },
      ],
    },
    {
      id: 'web',
      title: 'WEB DEVELOPMENT',
      icon: Code,
      description: 'Full-stack technologies for building structured, dynamic, and responsive web applications.',
      skills: [
        { name: 'Full-Stack Development', level: 'Advanced', context: 'Pentagon Space Internship', tag: 'Full Stack' },
        { name: 'HTML5 & Semantic Web', level: 'Advanced', context: 'Accessible Markup', tag: 'Frontend' },
        { name: 'CSS3 & Responsive Design', level: 'Advanced', context: 'Modern Layouts & Modules', tag: 'Frontend' },
        { name: 'JavaScript (ES6+)', level: 'Proficient', context: 'Interactive Web Logic', tag: 'Frontend' },
      ],
    },
    {
      id: 'ai',
      title: 'AI & DATA SCIENCE',
      icon: Brain,
      description: 'B.Tech specialization curriculum at NBKRIST covering intelligent systems and data workflows.',
      skills: [
        { name: 'Artificial Intelligence', level: 'Specialization', context: 'B.Tech Specialization', tag: 'Core AI' },
        { name: 'Data Science & Analytics', level: 'Proficient', context: 'Statistical Analysis', tag: 'Data Science' },
        { name: 'Prompt Engineering', level: 'Advanced', context: 'LLM Prompt Systems', tag: 'Generative AI' },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'CYBERSECURITY',
      icon: Shield,
      description: 'Applied defensive knowledge and security analysis practiced during industrial internship.',
      skills: [
        { name: 'USB Storage Security', level: 'Specialization', context: 'Hardware Protection Project', tag: 'Hardware / OS' },
        { name: 'Cybersecurity Fundamentals', level: 'Proficient', context: 'Supraja Technologies', tag: 'Security' },
        { name: 'Vulnerability Assessment', level: 'Proficient', context: 'System Analysis & Mitigation', tag: 'SecOps' },
      ],
    },
    {
      id: 'tools',
      title: 'TOOLS & ENVIRONMENTS',
      icon: Wrench,
      description: 'Standard version control, developer tools, and workflow utilities.',
      skills: [
        { name: 'Git & GitHub', level: 'Proficient', context: 'Version Control & Repos', tag: 'VCS' },
        { name: 'VS Code', level: 'Advanced', context: 'Primary IDE & Extensions', tag: 'Environment' },
        { name: 'SQL / SQLite', level: 'Proficient', context: 'Relational Database Logic', tag: 'Database' },
      ],
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'ALL SKILLS', icon: Layers },
    { id: 'programming', label: 'PROGRAMMING', icon: Flame },
    { id: 'web', label: 'WEB DEV', icon: Code },
    { id: 'ai', label: 'AI & DATA', icon: Brain },
    { id: 'cybersecurity', label: 'SECURITY', icon: Shield },
    { id: 'tools', label: 'TOOLS', icon: Wrench },
  ];

  // Filtering based on tab and live search query
  const filteredCategories = useMemo(() => {
    let list = activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list
        .map((cat) => ({
          ...cat,
          skills: cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.tag.toLowerCase().includes(q) ||
              s.context.toLowerCase().includes(q) ||
              s.level.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.skills.length > 0);
    }

    return list;
  }, [activeTab, searchQuery]);

  return (
    <section id="skills" className={styles.skillsSection}>
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
            <Cpu size={13} />
            <span>04 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Core programming languages, full-stack frameworks, AI concepts, and cybersecurity principles.
          </p>
        </motion.div>

        {/* Controls Bar: Tabs & Search */}
        <div className={styles.controlsBar}>
          <div className={styles.tabsWrapper}>
            {filterTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`${styles.tabBtn} ${isActive ? styles.tabActive : ''}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className={styles.tabActivePill}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <TabIcon size={14} className={styles.tabIcon} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className={styles.searchBox}>
            <Search size={15} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search skill, tag, or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={styles.clearSearchBtn}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Categories & Skills Matrix */}
        <div className={styles.categoriesGrid}>
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const CatIcon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className={styles.categoryCard}
                >
                  <div className={styles.catHeader}>
                    <div className={styles.catIconWrap}>
                      <CatIcon size={18} />
                    </div>
                    <div>
                      <h3 className={styles.catTitle}>{category.title}</h3>
                      <p className={styles.catDesc}>{category.description}</p>
                    </div>
                  </div>

                  <div className={styles.skillsMatrix}>
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className={styles.skillItemCard}>
                        <div className={styles.skillMain}>
                          <div className={styles.skillNameRow}>
                            <h4 className={styles.skillName}>{skill.name}</h4>
                            <span className={styles.levelBadge}>{skill.level}</span>
                          </div>
                          <div className={styles.skillMetaRow}>
                            <span className={styles.skillTag}>{skill.tag}</span>
                            <span className={styles.skillContext}>&bull; {skill.context}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <div className={styles.noResultsBox}>
              <Search size={32} className={styles.noResultsIcon} />
              <p>No skills matched your search &ldquo;{searchQuery}&rdquo;</p>
              <button onClick={() => setSearchQuery('')} className="btn-secondary" style={{ marginTop: '12px' }}>
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
