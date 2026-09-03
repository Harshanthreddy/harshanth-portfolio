'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, Copy, AlertCircle, MessageSquare, User, AtSign, Tag, ExternalLink, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'duvvuruharshanthreddy@gmail.com';
  const phoneNumber = '+91 7801038604';

  const quickSubjects = [
    '💼 Internship Opportunity',
    '🚀 Full-Stack Web Project',
    '🛡️ Cybersecurity Inquiry',
    '🤝 General Networking',
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const selectSubject = (subj: string) => {
    setFormData({ ...formData, subject: subj });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#00e59b', '#6366f1', '#f59e0b', '#00a6ff', '#ff2a85'],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill out all required fields.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        triggerConfetti();
        setStatus({
          type: 'success',
          message: 'Message sent successfully! Harshanth will reply to your email within 24 hours.',
        });
        setFormData({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again or email directly.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error. Please try again or email directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
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
            <Mail size={13} />
            <span>06 // DIRECT INQUIRIES</span>
          </div>
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <div className="section-divider-diamond" />
            <div className="section-divider-line" />
          </div>
          <p className="section-subtitle">
            Have an internship opening, a project idea, or a technical inquiry? Drop a message or reach out directly.
          </p>
        </motion.div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info & Quick Mail Card */}
          <motion.div
            className={styles.infoColumn}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoTopHeader}>
                <h3 className={styles.infoTitle}>Let&apos;s Build Together</h3>
                <div className={styles.responseTimeBadge}>
                  <Clock size={13} />
                  <span>Replies within 24h</span>
                </div>
              </div>

              <p className={styles.infoDescription}>
                I am actively seeking <strong>internships</strong> and <strong>software engineering opportunities</strong>.
                Drop an email directly or send a message using the form.
              </p>

              {/* Direct Mail Primary Action Box */}
              <div className={styles.highlightMailCard}>
                <div className={styles.highlightHeader}>
                  <span className={styles.highlightLabel}>PRIMARY EMAIL</span>
                  <a
                    href={`mailto:${emailAddress}?subject=Connecting%20with%20Harshanth`}
                    className={styles.openMailBtn}
                    title="Open in your default email application"
                  >
                    <span>Open Mail App</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div className={styles.highlightBody}>
                  <span className={styles.highlightEmail}>{emailAddress}</span>
                  <button
                    onClick={copyEmail}
                    className={styles.highlightCopyBtn}
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} className={styles.checkIcon} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Phone box */}
              <div className={styles.directBox}>
                <div className={styles.boxIconWrap}>
                  <Phone size={17} />
                </div>
                <div className={styles.boxContent}>
                  <span className={styles.boxLabel}>PHONE NUMBER</span>
                  <span className={styles.boxValue}>{phoneNumber}</span>
                </div>
                <button
                  onClick={copyPhone}
                  className={styles.copyBtn}
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check size={15} className={styles.checkIcon} /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location Box */}
              <div className={styles.directBox}>
                <div className={styles.boxIconWrap}>
                  <MapPin size={17} />
                </div>
                <div className={styles.boxContent}>
                  <span className={styles.boxLabel}>LOCATION</span>
                  <span className={styles.boxValue}>NBKRIST, Andhra Pradesh &bull; Open to Remote</span>
                </div>
              </div>

              {/* Status Box */}
              <div className={styles.availabilityBox}>
                <div className={styles.statusDot} />
                <div>
                  <div className={styles.statusTitle}>Current Status: Open for Opportunities</div>
                  <div className={styles.statusSub}>Technical Internships &amp; Full-Stack Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            className={styles.formColumn}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formTopIntro}>
                <h4 className={styles.formHeading}>Send an Instant Message</h4>
                <p className={styles.formSub}>Select a topic or type custom details below:</p>
              </div>

              {/* Quick Subject Chips */}
              <div className={styles.quickChipsGroup}>
                {quickSubjects.map((subj, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => selectSubject(subj)}
                    className={`${styles.chipBtn} ${formData.subject === subj ? styles.chipActive : ''}`}
                  >
                    {subj}
                  </button>
                ))}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  <User size={13} />
                  <span>YOUR NAME *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  <AtSign size={13} />
                  <span>YOUR EMAIL *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  <Tag size={13} />
                  <span>SUBJECT</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Software Project"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  <MessageSquare size={13} />
                  <span>MESSAGE *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hello Harshanth, we would love to connect with you regarding..."
                  required
                  className={styles.formTextarea}
                />
              </div>

              {/* Status Alert */}
              {status.message && (
                <div
                  className={`${styles.statusAlert} ${
                    status.type === 'success' ? styles.alertSuccess : styles.alertError
                  }`}
                >
                  {status.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '6px' }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message to Harshanth</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
