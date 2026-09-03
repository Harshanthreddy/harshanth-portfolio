'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  User, 
  ArrowUpRight, 
  FileText, 
  ChevronDown,
  MessageSquareCode
} from 'lucide-react';
import styles from './ChatBot.module.css';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

interface ChatBotProps {
  onOpenResume?: () => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! 👋 I'm **Harshanth's AI Assistant**. Ask me anything about his B.Tech at NBKRIST, internships at Supraja & Pentagon Space, engineering projects, skills, or how to contact him!",
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const quickPrompts = [
    'Who is Harshanth?',
    'What are his key skills?',
    'Tell me about his internships',
    'What projects has he built?',
    'Show me his Resume / CV',
    'How do I contact him?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, loading]);

  const sendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await res.json();
      const botReply =
        data.reply ||
        "I'm here to answer questions about Harshanth's skills, projects, and contact info!";

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // If backend triggered OPEN_RESUME action
      if (data.action === 'OPEN_RESUME' && onOpenResume) {
        setTimeout(() => {
          onOpenResume();
        }, 600);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "I had a brief connection delay. Please feel free to email Harshanth directly at duvvuruharshanthreddy@gmail.com!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: "Chat cleared! How else can I assist you with Harshanth's portfolio today?",
        timestamp: 'Just now',
      },
    ]);
  };

  // Helper to format basic markdown (bold, lists, section links)
  const formatBotText = (text: string) => {
    return text.split('\n').map((line, lineIdx) => {
      // Heading lines
      if (line.startsWith('### ')) {
        return (
          <h5 key={lineIdx} className={styles.msgHeading}>
            {line.replace('### ', '')}
          </h5>
        );
      }

      // Process bold **text** and markdown links [label](#target)
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const label = match[1];
            const href = match[2];
            const isResumeLink = href.includes('#resume');
            return (
              <a
                key={pIdx}
                href={href}
                className={styles.msgLink}
                onClick={(e) => {
                  if (isResumeLink && onOpenResume) {
                    e.preventDefault();
                    onOpenResume();
                  }
                }}
              >
                {label} <ArrowUpRight size={11} />
              </a>
            );
          }
        }
        return part;
      });

      return (
        <p key={lineIdx} className={styles.msgParagraph}>
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Widget Trigger Button */}
      <div className={styles.widgetWrapper}>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.launcherBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Harshanth AI Chatbot"
        >
          <div className={styles.launcherIconWrap}>
            <Bot size={22} className={styles.botIcon} />
            <span className={styles.launcherDot} />
          </div>
          <span className={styles.launcherText}>Ask Harshanth AI</span>
          <Sparkles size={14} className={styles.sparkleIcon} />
        </motion.button>
      </div>

      {/* Floating Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            {/* Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerTitleWrap}>
                <div className={styles.headerAvatar}>
                  <Bot size={18} />
                  <span className={styles.headerAvatarDot} />
                </div>
                <div>
                  <div className={styles.headerNameRow}>
                    <h4 className={styles.headerName}>Harshanth AI</h4>
                    <span className={styles.headerBadge}>ONLINE</span>
                  </div>
                  <p className={styles.headerSub}>Portfolio Knowledge Assistant</p>
                </div>
              </div>

              <div className={styles.headerActions}>
                <button
                  onClick={handleResetChat}
                  className={styles.headerIconBtn}
                  title="Reset conversation"
                  aria-label="Reset chat"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={styles.headerIconBtn}
                  title="Minimize chat"
                  aria-label="Close chat"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Quick Starter Prompts */}
            <div className={styles.promptsContainer}>
              <span className={styles.promptsHint}>Suggested questions:</span>
              <div className={styles.promptsScroll}>
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => sendMessage(prompt)}
                    className={styles.promptChip}
                    disabled={loading}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages Stream */}
            <div className={styles.messagesStream}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${
                    msg.sender === 'user' ? styles.userRow : styles.botRow
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className={styles.msgAvatar}>
                      <Bot size={15} />
                    </div>
                  )}

                  <div
                    className={`${styles.messageBubble} ${
                      msg.sender === 'user' ? styles.userBubble : styles.botBubble
                    }`}
                  >
                    {msg.sender === 'bot' ? formatBotText(msg.text) : <p>{msg.text}</p>}
                    <span className={styles.msgTime}>{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {loading && (
                <div className={`${styles.messageRow} ${styles.botRow}`}>
                  <div className={styles.msgAvatar}>
                    <Bot size={15} />
                  </div>
                  <div className={`${styles.messageBubble} ${styles.botBubble} ${styles.typingBubble}`}>
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className={styles.inputContainer}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className={styles.inputForm}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, education, or internships..."
                  className={styles.chatInput}
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className={styles.sendBtn}
                  aria-label="Send message"
                >
                  <Send size={15} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
