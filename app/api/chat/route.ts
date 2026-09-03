import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

interface ChatRequest {
  message: string;
  history?: Array<{ sender: 'user' | 'bot'; text: string }>;
}

const HARSHANTH_KNOWLEDGE = {
  name: 'Duvvuru Harshanth Reddy',
  role: 'AI & Data Science Student, Full-Stack Developer, and Cybersecurity Enthusiast',
  education: {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'NBKR Institute of Science & Technology (NBKRIST)',
    period: '2023 – 2027',
    cgpa: '6.5 / 10',
    location: 'Vidyanagar, Andhra Pradesh, India',
    intermediate: 'Intermediate (MPC - Maths, Physics, Chemistry) at SR Junior College (2021–2023), 60%',
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
  internships: [
    {
      company: 'Supraja Technologies',
      role: 'Cybersecurity Intern',
      type: 'Industrial Internship',
      details:
        'Gained hands-on exposure to cybersecurity fundamentals, ethical hacking techniques, vulnerability assessment, and network defense tools to identify and mitigate system security flaws.',
      skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Network Security', 'Security Tools', 'Threat Mitigation'],
    },
    {
      company: 'Pentagon Space',
      role: 'Python Full-Stack Intern',
      type: 'Industrial Internship',
      details:
        'Gained practical experience in Python programming and full-stack web architecture, implementing database logic, REST APIs, and structured web interfaces for real-world software workflows.',
      skills: ['Python', 'Full-Stack Development', 'Frontend Principles', 'Backend Architecture', 'Database Normalization'],
    },
  ],
  projects: [
    {
      name: 'USB Storage Security Project',
      category: 'Cybersecurity & Hardware Defense',
      description:
        'A security-focused project designed to improve the protection and controlled usage of connected USB storage hardware. It validates device serial signatures against an access whitelist, blocks or sandboxes unauthorized mass storage devices in read-only mode, mitigates autorun malware risks, and maintains audit logs.',
      technologies: ['Python', 'System Programming', 'Access Control', 'Threat Mitigation', 'VS Code'],
    },
    {
      name: 'Movie Ticket Booking System',
      category: 'Full-Stack Web & Database',
      description:
        'A full-stack cinema ticket reservation application with movie discovery, interactive real-time seat layout selection, atomic booking transactions, and a normalized relational database schema to prevent double-booking collisions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python / SQLite Database', 'VS Code'],
    },
  ],
  skills: {
    programming: ['Python (Advanced - Core Focus)', 'Java (Proficient - OOP)', 'C Language (Foundations & Memory)'],
    webDevelopment: ['Full-Stack Development', 'HTML5 & Semantic Web', 'CSS3 & Responsive Styling', 'JavaScript (ES6+)', 'React', 'Next.js'],
    aiDataScience: ['Artificial Intelligence', 'Data Science & Analytics', 'Prompt Engineering & LLM Systems'],
    cybersecurity: ['USB Storage Security', 'Cybersecurity Fundamentals', 'Vulnerability Assessment', 'Threat Mitigation'],
    tools: ['Git & GitHub (Version Control)', 'VS Code (Primary IDE)', 'SQL & SQLite (Relational DBs)'],
  },
  hackathons: [
    {
      title: 'Narayana 24-Hour Hackathon',
      details: 'Participated in the intense Narayana 24-Hour Hackathon, applying rapid problem-solving, collaborative teamwork, high-velocity coding, and software development under pressure.',
    },
  ],
  contact: {
    email: 'duvvuruharshanthreddy@gmail.com',
    phone: '+91 7801038604',
    github: 'https://github.com/Harshanthreddy',
    linkedin: 'https://linkedin.com/in/harshanth-reddy',
    location: 'Andhra Pradesh, India (Open to Relocate / Remote)',
  },
  availability: 'Currently open to Technical Internships, Full-Stack Developer opportunities, and Cybersecurity roles for 2024–2027.',
};

function generateLocalAnswer(rawQuery: string): { reply: string; action?: string } {
  const query = rawQuery.toLowerCase().trim();

  // 1. Resume / CV query
  if (
    query.includes('resume') ||
    query.includes('cv') ||
    query.includes('curriculum vitae') ||
    query.includes('download pdf')
  ) {
    return {
      reply: `You can view or download Harshanth's **Curriculum Vitae** right here! I have triggered the Resume modal for you.\n\n**Quick Highlights from his CV:**\n- **Education:** B.Tech AI & Data Science at NBKRIST (2023–2027)\n- **Internships:** Supraja Technologies (Cybersecurity) & Pentagon Space (Python Full-Stack)\n- **Key Projects:** USB Storage Security & Movie Ticket Booking System\n- **Contact:** duvvuruharshanthreddy@gmail.com | +91 7801038604`,
      action: 'OPEN_RESUME',
    };
  }

  // 2. Who is Harshanth / About / Bio
  if (
    query.includes('who is') ||
    query.includes('about harshanth') ||
    query.includes('introduce') ||
    query.includes('tell me about yourself') ||
    query.includes('background') ||
    query.includes('overview')
  ) {
    return {
      reply: `**Duvvuru Harshanth Reddy** is an undergraduate student pursuing his **B.Tech in Artificial Intelligence & Data Science at NBKRIST (2023–2027)**.\n\nHe is an aspiring software engineer with hands-on experience in **Python, Java, C, Full-Stack Web Development, and Cybersecurity**.\n\nKey highlights:\n- 🛡️ **Cybersecurity Intern** at Supraja Technologies\n- ⚡ **Python Full-Stack Intern** at Pentagon Space\n- 🏆 **24-Hour Hackathon Finalist** at Narayana\n- 🚀 Built projects like **USB Storage Security** and a **Movie Ticket Booking System**\n\nYou can explore more in the [About Me section](#about)!`,
    };
  }

  // 3. Projects query
  if (
    query.includes('project') ||
    query.includes('portfolio work') ||
    query.includes('usb') ||
    query.includes('movie') ||
    query.includes('what has he built') ||
    query.includes('code')
  ) {
    if (query.includes('usb') || query.includes('security')) {
      return {
        reply: `### 🛡️ USB Storage Security Project\n- **Focus:** System-level protection against unauthorized USB storage devices and mass storage attack vectors.\n- **How it works:** Inspects device hardware signatures and serial numbers against a whitelist database. Untrusted devices are mounted in an isolated **Read-Only Sandbox** or blocked entirely.\n- **Tech Stack:** Python, System Programming, Access Control, VS Code.\n\nCheck out the interactive case study in the [Projects section](#projects)!`,
      };
    }

    if (query.includes('movie') || query.includes('ticket') || query.includes('booking')) {
      return {
        reply: `### 🎬 Movie Ticket Booking System\n- **Focus:** Full-stack cinema seat reservation application.\n- **Key Features:** Movie discovery catalog, interactive seat matrix selection, transactional checkout, and relational database normalization to prevent double-booking collisions.\n- **Tech Stack:** HTML5, CSS3, JavaScript, Python / SQLite Database.\n\nCheck out the interactive case study in the [Projects section](#projects)!`,
      };
    }

    return {
      reply: `Harshanth has developed two key engineering projects:\n\n1. **USB Storage Security Project (Cybersecurity):**\nA Python system programming project designed to mitigate physical USB attack vectors by enforcing access control rules, serial signature whitelisting, and read-only isolation.\n\n2. **Movie Ticket Booking System (Full-Stack Web):**\nA complete web reservation platform with real-time seat selection, transactional booking workflows, and normalized database architecture.\n\nTake a look at both in the [Projects section](#projects)!`,
    };
  }

  // 4. Skills / Tech Stack query
  if (
    query.includes('skill') ||
    query.includes('tech stack') ||
    query.includes('technolog') ||
    query.includes('language') ||
    query.includes('python') ||
    query.includes('java') ||
    query.includes('react')
  ) {
    return {
      reply: `Harshanth's core technical arsenal includes:\n\n- **Programming Languages:** Python (Core Focus & Scripting), Java (Object-Oriented Academic), C Language (Systems Logic)\n- **Web Development:** Full-Stack Web Development, HTML5, CSS3, JavaScript (ES6+), React, Next.js\n- **AI & Analytics:** Artificial Intelligence, Data Science, Prompt Engineering & LLMs\n- **Cybersecurity:** USB Storage Security, Vulnerability Assessment, Network Security Fundamentals\n- **Developer Tools:** Git & GitHub, VS Code, SQLite/SQL\n\nYou can search and filter his skills in the [Skills Matrix section](#skills)!`,
    };
  }

  // 5. Internships & Experience query
  if (
    query.includes('intern') ||
    query.includes('experience') ||
    query.includes('work') ||
    query.includes('supraja') ||
    query.includes('pentagon') ||
    query.includes('job')
  ) {
    return {
      reply: `Harshanth has completed two industry internships:\n\n1. **Cybersecurity Intern @ Supraja Technologies:**\n- Practical exposure to ethical hacking, system attack surfaces, network security principles, and vulnerability assessment tools.\n\n2. **Python Full-Stack Intern @ Pentagon Space:**\n- Hands-on software development with Python, frontend and backend architectures, REST API concepts, and database logic.\n\nCheck out the interactive timeline in the [Experience section](#experience)!`,
    };
  }

  // 6. Education / Academics query
  if (
    query.includes('education') ||
    query.includes('college') ||
    query.includes('degree') ||
    query.includes('nbkrist') ||
    query.includes('cgpa') ||
    query.includes('btech') ||
    query.includes('study')
  ) {
    return {
      reply: `### 🎓 Academic Qualifications\n- **B.Tech in Artificial Intelligence & Data Science (2023 – 2027)**\n  - **Institution:** NBKR Institute of Science & Technology (NBKRIST), Vidyanagar, Andhra Pradesh\n  - **CGPA:** 6.5 / 10 (Currently Pursuing)\n  - **Key Coursework:** AI & ML, Data Science, Data Structures, OOP (Java & Python), DBMS (SQL), Cybersecurity Fundamentals\n\n- **Intermediate (MPC — Maths, Physics, Chemistry)**\n  - **Institution:** SR Junior College (2021 – 2023)\n  - **Score:** 60%\n\nView details in the [Education section](#education)!`,
    };
  }

  // 7. Contact / Hire / Phone / Email query
  if (
    query.includes('contact') ||
    query.includes('email') ||
    query.includes('phone') ||
    query.includes('hire') ||
    query.includes('call') ||
    query.includes('reach') ||
    query.includes('message') ||
    query.includes('opportunity')
  ) {
    return {
      reply: `Harshanth is actively open to **internships**, **software engineering roles**, and **technical collaborations**! You can connect with him directly:\n\n- 📧 **Email:** [duvvuruharshanthreddy@gmail.com](mailto:duvvuruharshanthreddy@gmail.com)\n- 📱 **Phone:** [+91 7801038604](tel:+917801038604)\n- 🐙 **GitHub:** [github.com/Harshanthreddy](https://github.com/Harshanthreddy)\n- 💼 **LinkedIn:** [linkedin.com/in/harshanth-reddy](https://linkedin.com/in/harshanth-reddy)\n\nYou can also send a direct inquiry through the [Contact Form](#contact)!`,
    };
  }

  // 8. Hackathon query
  if (
    query.includes('hackathon') ||
    query.includes('competition') ||
    query.includes('narayana') ||
    query.includes('achievement')
  ) {
    return {
      reply: `### 🏆 Narayana 24-Hour Hackathon\nHarshanth participated in the intense **Narayana 24-Hour Hackathon**, gaining invaluable experience in rapid problem formulation, continuous high-velocity software engineering, and agile team collaboration under strict 24-hour time constraints.\n\nSee more in the [Experience section](#experience)!`,
    };
  }

  // 9. Greetings
  if (
    query.includes('hello') ||
    query.includes('hi') ||
    query.includes('hey') ||
    query.includes('namaste') ||
    query.includes('good morning') ||
    query.includes('good evening')
  ) {
    return {
      reply: `Hello! 👋 I'm **Harshanth's AI Portfolio Assistant**.\n\nI can answer questions about Harshanth's **skills**, **projects** (like USB Security & Movie Booking), **internships** at Supraja Tech & Pentagon Space, **academics** at NBKRIST, or how to **contact and hire** him.\n\nWhat would you like to know?`,
    };
  }

  // 10. Default contextual answer
  return {
    reply: `Harshanth is a **B.Tech student in AI & Data Science at NBKRIST**, Full-Stack Developer, and Cybersecurity Enthusiast with hands-on experience at **Supraja Technologies** and **Pentagon Space**.\n\nYou can ask me specifically about:\n- 🛡️ His **USB Security Project** or **Movie Ticket Booking System**\n- 💻 His **Programming & Full-Stack Skills** (Python, Java, C, React)\n- 🏢 His **Internships** at Supraja Tech & Pentagon Space\n- 🎓 His **Education** at NBKRIST\n- 📄 Viewing or downloading his **Curriculum Vitae**\n- 📬 How to **contact or hire** him\n\nHow can I help you today?`,
  };
}

export async function POST(request: Request) {
  try {
    const body: ChatRequest = await request.json();
    const { message } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message cannot be empty.' }, { status: 400 });
    }

    // Optional: If GEMINI_API_KEY is available in environment variables, we can query Gemini.
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const systemPrompt = `You are Harshanth's official AI Portfolio Assistant. You represent Duvvuru Harshanth Reddy, an undergraduate in AI & Data Science at NBKRIST (2023-2027), Full-Stack Developer, and Cybersecurity enthusiast.
Use the following facts to accurately answer user questions:
${JSON.stringify(HARSHANTH_KNOWLEDGE, null, 2)}
Keep responses concise, polite, structured with bullet points where appropriate, and enthusiastic about opportunities. If asked about his resume, mention it can be downloaded on the site.`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question: ${message}` }] },
              ],
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const answer =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (answer) {
            const hasResumeIntent =
              message.toLowerCase().includes('resume') ||
              message.toLowerCase().includes('cv');
            return NextResponse.json({
              reply: answer,
              action: hasResumeIntent ? 'OPEN_RESUME' : undefined,
            });
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to local knowledge engine:', err);
      }
    }

    // High-precision local knowledge retrieval engine
    const localResult = generateLocalAnswer(message);
    return NextResponse.json(localResult);
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      {
        reply:
          "I'm experiencing a brief network hiccup, but you can explore Harshanth's projects, skills, and contact details directly on the page or email him at duvvuruharshanthreddy@gmail.com!",
      },
      { status: 200 }
    );
  }
}
