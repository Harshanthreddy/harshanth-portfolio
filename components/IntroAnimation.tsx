'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './IntroAnimation.module.css';

/**
 * CONFIGURATION
 * Easily toggle or customize the intro animation behavior.
 */
export const SHOW_INTRO = true;

interface IntroAnimationProps {
  name?: string;
  onComplete: () => void;
}

// Refined custom easing curves for silky smooth editorial fades
const EASE_SMOOTH_IN = [0.16, 1, 0.3, 1] as const;
const EASE_SMOOTH_FADE = [0.25, 0.1, 0.25, 1] as const;

export const IntroAnimation: React.FC<IntroAnimationProps> = ({
  name = 'DUVVURU HARSHANTH REDDY',
  onComplete,
}) => {
  // Phases:
  // 1: 'clean'      (0–350ms)   - Gentle ambient ivory fade-in
  // 2: 'brackets'   (350–900ms) - Brackets glide in with delicate opacity fade
  // 3: 'name'       (900–1800ms) - Name emerges with soft vertical rise & refined tracking
  // 4: 'hold'       (1800–2600ms) - Peaceful balanced state
  // 5: 'transition' (2600–3500ms) - Silky soft cinematic fade out into page
  const [phase, setPhase] = useState<'clean' | 'brackets' | 'name' | 'hold' | 'transition'>('clean');
  const completedRef = useRef(false);

  const startTransitionToHero = () => {
    if (completedRef.current) return;
    setPhase('transition');
    setTimeout(() => {
      completedRef.current = true;
      onComplete();
    }, 850);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        completedRef.current = true;
        onComplete();
        return;
      }
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const tBrackets = setTimeout(() => {
      setPhase('brackets');
    }, 350);

    const tName = setTimeout(() => {
      setPhase('name');
    }, 900);

    const tHold = setTimeout(() => {
      setPhase('hold');
    }, 1800);

    const tTransition = setTimeout(() => {
      startTransitionToHero();
    }, 2650);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        startTransitionToHero();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(tBrackets);
      clearTimeout(tName);
      clearTimeout(tHold);
      clearTimeout(tTransition);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const showBrackets = phase !== 'clean';
  const showName = phase === 'name' || phase === 'hold' || phase === 'transition';
  const isTransitioning = phase === 'transition';

  return (
    <motion.div
      className={styles.introOverlay}
      initial={{ opacity: 1 }}
      animate={{
        opacity: isTransitioning ? 0 : 1,
      }}
      transition={{ duration: 0.85, ease: EASE_SMOOTH_FADE }}
      role="dialog"
      aria-modal="true"
      aria-label="Introduction"
      onClick={startTransitionToHero}
    >
      {/* Soft Ambient Center Glow */}
      <motion.div
        className={styles.ambientLight}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showName && !isTransitioning ? 0.8 : 0,
          scale: showName && !isTransitioning ? 1 : 0.8,
        }}
        transition={{ duration: 1.2, ease: EASE_SMOOTH_IN }}
      />

      {/* Quiet Minimalist Skip Control */}
      <motion.button
        className={styles.skipButton}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBrackets && !isTransitioning ? 0.75 : 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => {
          e.stopPropagation();
          startTransitionToHero();
        }}
        aria-label="Skip intro"
      >
        Skip
      </motion.button>

      {/* Central Composition Stage */}
      <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
        <div className={styles.composition}>
          {/* Opening Code Bracket: < */}
          <motion.span
            className={`${styles.bracket} ${styles.bracketLeft}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{
              opacity: showBrackets ? (isTransitioning ? 0 : 0.88) : 0,
              x: isTransitioning ? -18 : showBrackets ? 0 : -12,
            }}
            transition={{
              duration: isTransitioning ? 0.7 : 0.85,
              ease: isTransitioning ? EASE_SMOOTH_FADE : EASE_SMOOTH_IN,
            }}
          >
            &lt;
          </motion.span>

          {/* Centered Name: HARSHANTH REDDY in Instrument Serif */}
          <div className={styles.nameWrapper}>
            <motion.span
              className={styles.nameText}
              initial={{
                opacity: 0,
                y: 6,
                letterSpacing: '0.03em',
              }}
              animate={{
                opacity: showName ? (isTransitioning ? 0 : 1) : 0,
                y: isTransitioning ? -4 : showName ? 0 : 6,
                letterSpacing: showName ? '0.08em' : '0.03em',
              }}
              transition={{
                duration: isTransitioning ? 0.65 : 0.95,
                ease: isTransitioning ? EASE_SMOOTH_FADE : EASE_SMOOTH_IN,
              }}
            >
              {name}
            </motion.span>
          </div>

          {/* Closing Code Bracket: /> */}
          <motion.span
            className={`${styles.bracket} ${styles.bracketRight}`}
            initial={{ opacity: 0, x: 12 }}
            animate={{
              opacity: showBrackets ? (isTransitioning ? 0 : 0.88) : 0,
              x: isTransitioning ? 18 : showBrackets ? 0 : 12,
            }}
            transition={{
              duration: isTransitioning ? 0.7 : 0.85,
              ease: isTransitioning ? EASE_SMOOTH_FADE : EASE_SMOOTH_IN,
            }}
          >
            /&gt;
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};
