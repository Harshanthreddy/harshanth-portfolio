'use client';

import React, { useState } from 'react';
import { Terminal, Shield, Film, User, Play, Copy, Check } from 'lucide-react';
import styles from './InteractiveTerminal.module.css';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'usb' | 'movie' | 'cli'>('usb');
  const [copied, setCopied] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliLogs, setCliLogs] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'harshanth --status',
      output: 'Duvvuru Harshanth Reddy | B.Tech AI & Data Science (NBKRIST) | Status: Ready for Opportunities',
    },
  ]);

  const usbCode = `import os
import sys
import hashlib
from dataclasses import dataclass

# Duvvuru Harshanth Reddy - USB Storage Security System
@dataclass
class USBDevice:
    device_id: str
    serial_number: str
    is_whitelisted: bool
    read_only_mode: bool

class USBSecurityController:
    def __init__(self, whitelist: list[str]):
        self.whitelist = set(whitelist)
        self.audit_log = []

    def inspect_device(self, device: USBDevice) -> dict:
        print(f"[AUDIT] Inspecting USB: {device.serial_number}")
        if device.serial_number not in self.whitelist:
            return {
                "status": "BLOCKED",
                "action": "Unmounted unauthorized mass storage device.",
                "threat_level": "HIGH"
            }
        return {
            "status": "AUTHORIZED",
            "action": "Mounted device in Read-Only Sandbox.",
            "threat_level": "CLEAN"
        }

controller = USBSecurityController(["SEC-USB-091A", "HARSHANTH-SEC-01"])
res = controller.inspect_device(USBDevice("DEV-04", "HARSHANTH-SEC-01", True, True))
print(f"Result: {res['status']} -> {res['action']}")`;

  const movieCode = `import sqlite3
from datetime import datetime

# Duvvuru Harshanth Reddy - Movie Ticket Booking System
class CineReserveSystem:
    def __init__(self, db_name="cine_booking.db"):
        self.conn = sqlite3.connect(":memory:")
        self.setup_tables()

    def setup_tables(self):
        cur = self.conn.cursor()
        cur.execute("""
            CREATE TABLE bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_name TEXT,
                movie_title TEXT,
                seat_number TEXT,
                timestamp DATETIME
            )
        """)

    def book_seat(self, name: str, movie: str, seat: str) -> bool:
        cur = self.conn.cursor()
        cur.execute("SELECT id FROM bookings WHERE movie_title=? AND seat_number=?", (movie, seat))
        if cur.fetchone():
            print(f"[ERROR] Seat {seat} already booked for '{movie}'!")
            return False
        cur.execute("INSERT INTO bookings (customer_name, movie_title, seat_number, timestamp) VALUES (?, ?, ?, ?)",
                    (name, movie, seat, datetime.now()))
        print(f"[SUCCESS] Confirmed seat {seat} for {name} ({movie})")
        return True

cine = CineReserveSystem()
cine.book_seat("Harshanth", "Stellar Odyssey 4K", "F12")`;

  const handleCopy = () => {
    const code = activeTab === 'usb' ? usbCode : activeTab === 'movie' ? movieCode : cliLogs.map(l => `$ ${l.cmd}\n${l.output}`).join('\n');
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = cliInput.trim().toLowerCase();
    if (!input) return;

    let output = '';
    switch (input) {
      case 'help':
        output = 'Available commands: whoami, skills, projects, education, experience, clear, contact';
        break;
      case 'whoami':
        output = 'Duvvuru Harshanth Reddy — AI & Data Science Student at NBKRIST, Full-Stack Developer, Cybersecurity Enthusiast.';
        break;
      case 'skills':
        output = 'Programming: Python, Java, C | Web: Full-Stack, HTML/CSS/JS, React | AI/DS: Prompt Engineering, Data Science | Security: USB Security';
        break;
      case 'projects':
        output = '1. USB Security Project (Storage Protection & Monitoring) | 2. Movie Ticket Booking System (Workflow Engine)';
        break;
      case 'experience':
        output = '1. Cybersecurity Intern @ Supraja Technologies | 2. Python Full-Stack Intern @ Pentagon Space | 3. Narayana 24H Hackathon';
        break;
      case 'education':
        output = 'B.Tech AI & Data Science @ NBKRIST (2023-2027) CGPA: 6.5 | Intermediate @ SR Junior College (2021-2023) 60%';
        break;
      case 'contact':
        output = 'Email: duvvuruharshanthreddy@gmail.com | Phone: +91 7801038604 | GitHub: Harshanthreddy | LinkedIn: harshanth-reddy';
        break;
      case 'clear':
        setCliLogs([]);
        setCliInput('');
        return;
      default:
        output = `Command not recognized: "${input}". Type "help" for a list of valid commands.`;
    }

    setCliLogs([...cliLogs, { cmd: cliInput, output }]);
    setCliInput('');
  };

  return (
    <div className={`${styles.terminalWrapper} corner-accent-box`}>
      {/* Terminal Title Bar */}
      <div className={styles.terminalHeader}>
        <div className={styles.windowControls}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabGroup}>
          <button
            onClick={() => setActiveTab('usb')}
            className={`${styles.tabBtn} ${activeTab === 'usb' ? styles.tabActive : ''}`}
          >
            <Shield size={14} />
            <span>usb_defender.py</span>
          </button>
          <button
            onClick={() => setActiveTab('movie')}
            className={`${styles.tabBtn} ${activeTab === 'movie' ? styles.tabActive : ''}`}
          >
            <Film size={14} />
            <span>movie_booking.py</span>
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`${styles.tabBtn} ${activeTab === 'cli' ? styles.tabActive : ''}`}
          >
            <Terminal size={14} />
            <span>interactive_cli.sh</span>
          </button>
        </div>

        <button onClick={handleCopy} className={styles.copyCodeBtn} title="Copy code">
          {copied ? <Check size={14} className={styles.checkIcon} /> : <Copy size={14} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Terminal Content */}
      <div className={styles.terminalBody}>
        {activeTab === 'usb' && (
          <pre className={styles.codeBlock}>
            <code>{usbCode}</code>
          </pre>
        )}

        {activeTab === 'movie' && (
          <pre className={styles.codeBlock}>
            <code>{movieCode}</code>
          </pre>
        )}

        {activeTab === 'cli' && (
          <div className={styles.cliContainer}>
            <div className={styles.cliHistory}>
              {cliLogs.map((item, idx) => (
                <div key={idx} className={styles.cliItem}>
                  <div className={styles.cliPromptLine}>
                    <span className={styles.cliUser}>harshanth@nbkrist</span>
                    <span className={styles.cliSep}>:</span>
                    <span className={styles.cliDir}>~</span>
                    <span className={styles.cliDollar}>$</span>
                    <span className={styles.cliCmdText}>{item.cmd}</span>
                  </div>
                  <div className={styles.cliOutputText}>{item.output}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleCliSubmit} className={styles.cliInputLine}>
              <span className={styles.cliUser}>harshanth@nbkrist</span>
              <span className={styles.cliSep}>:</span>
              <span className={styles.cliDir}>~</span>
              <span className={styles.cliDollar}>$</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Type 'help', 'skills', 'projects', 'experience'..."
                className={styles.cliInput}
                autoFocus
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
