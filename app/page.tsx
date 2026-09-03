'use client';

import React, { useState } from 'react';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';
import { ChatBot } from '@/components/ChatBot';
import { IntroAnimation, SHOW_INTRO } from '@/components/IntroAnimation';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(SHOW_INTRO);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showIntro && <IntroAnimation name="DUVVURU HARSHANTH REDDY" onComplete={handleIntroComplete} />}
      <ScrollProgress />
      <Header
        onOpenResume={() => setIsResumeOpen(true)}
        onReplayIntro={() => setShowIntro(true)}
      />
      <Hero onOpenResume={() => setIsResumeOpen(true)} />
      <About onOpenResume={() => setIsResumeOpen(true)} />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ChatBot onOpenResume={() => setIsResumeOpen(true)} />
    </main>
  );
}
