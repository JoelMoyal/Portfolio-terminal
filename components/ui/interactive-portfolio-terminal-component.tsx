'use client'

import { useState, useRef, useEffect } from 'react'

export default function PortfolioTerminal() {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: '/welcome',
      output: `
     ██╗ ██████╗ ███████╗██╗         ███╗   ███╗ ██████╗ ██╗   ██╗ █████╗ ██╗
     ██║██╔═══██╗██╔════╝██║         ████╗ ████║██╔═══██╗╚██╗ ██╔╝██╔══██╗██║
     ██║██║   ██║█████╗  ██║         ██╔████╔██║██║   ██║ ╚████╔╝ ███████║██║
██   ██║██║   ██║██╔══╝  ██║         ██║╚██╔╝██║██║   ██║  ╚██╔╝  ██╔══██║██║
╚█████╔╝╚██████╔╝███████╗███████╗    ██║ ╚═╝ ██║╚██████╔╝   ██║   ██║  ██║███████╗
 ╚════╝  ╚═════╝ ╚══════╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚══════╝

[SYSTEM INITIALIZED] - Interactive Portfolio Terminal v1.0

Welcome! I'm Joël Moyal — Full-Stack Developer, AI Founder, and builder of things.
Type help to see available commands.`,
    },
  ])
  const [currentCommand, setCurrentCommand] = useState('')
  const historyIndexRef = useRef(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = {
    help: () => `
[AVAILABLE_COMMANDS]

about       Personal info & bio
projects    Project portfolio
skills      Technical skills matrix
experience  Work history
education   Education & certifications
contact     Contact information
clear       Clear terminal screen
help        Show this help message
`,
    about: () => `
[ABOUT]

Name:      Joël Moyal
Role:      Full-Stack Developer & Media Designer | AI Founder @ ScribeSnap.ai
Location:  San Jose, CA (originally from Germany)
Status:    Open to internships — actively looking

Bio:
Full-Stack Developer with a certified media design background. I build across
the entire stack — React frontends, Python backends, SQL databases, and LLM
integrations. I thrive in startup environments where you ship fast and figure
things out as you go.

I founded ScribeSnap.ai — an AI-powered EdTech tool that extracts transcripts
from YouTube, Vimeo, and uploaded videos and transforms them into summaries,
flashcards, chapter breakdowns, and study guides. Live with 6,000+ unique users
and 50–80 daily actives.

I'm studying Software Engineering at SJSU in the heart of Silicon Valley.
I also founded and lead NextGen | German Connect at SJSU — connecting students
with German-speaking companies and professionals across the Bay Area.

Outside code: I represented Germany on the U18 national chess team, I compete
as a semi-professional boxer, and I've traveled to 64 countries. That curiosity
shapes everything about how I build and think.

Languages: English (fluent), German (native)
`,
    projects: () => `
[PROJECT PORTFOLIO]

1. ScribeSnap.ai — https://scribesnap.ai
   AI-powered EdTech tool for video-to-knowledge transformation
   • Stack: React 18, Framer Motion, Node.js, Express, Supabase,
     Groq API (LLaMA 3.1), OpenRouter, Groq Whisper, yt-dlp, SSE
   • Extracts transcripts from YouTube, Vimeo & uploaded videos
   • AI features: summaries, flashcards, chapters, study guides
   • 6,000+ unique users · 50–80 daily actives · weeks after launch

2. SpotGrove — Remote Work Discovery App (In Development)
   Find cafes, libraries & coworking spaces — with an AI trust layer
   • Stack: Next.js, React Native, TypeScript, Supabase, PostgreSQL,
     Claude AI, Google Places API
   • AI (Claude) moderates every submission & cross-checks Google Places
   • Born from working remotely across 64 countries

3. Genomic Cancer Analysis Agent — https://genom-three.vercel.app/
   NVIDIA GTC Hackathon · Built in 2 hours
   • Stack: NVIDIA NIM API, Nemotron-70B, OpenRouter, Next.js, TypeScript
   • AI clinical assistant for oncologists — upload a genomic report,
     get evidence-based mutation analysis
   • Live PubMed & ClinVar retrieval · 30+ cancer gene auto-annotation
   • Received strong judge feedback at NVIDIA GTC

4. ConCoin — Concept Cryptocurrency Website
   Every logo, icon, and UI element hand-illustrated in Adobe Illustrator
   • Stack: Adobe Illustrator, HTML, CSS
   • Design-led from brand identity to final layout — fully responsive
`,
    skills: () => `
[TECHNICAL SKILLS MATRIX]

Languages:
  JavaScript / TypeScript  ████████████████████ 100%
  Python                   ██████████████████░░  90%
  Java                     █████████████░░░░░░░  65%
  C / C#                   ████████████░░░░░░░░  60%
  PHP / Shopify Liquid     ████████████░░░░░░░░  60%
  Swift                    ████████░░░░░░░░░░░░  40%

Frontend:
  React / Next.js          ████████████████████ 100%
  React Native             ████████████████░░░░  80%
  HTML / CSS / SASS        ████████████████████ 100%
  Tailwind CSS             ████████████████████ 100%
  Framer Motion            ██████████████████░░  90%
  UI/UX Design             ██████████████████░░  90%

Backend:
  Node.js / Express        ████████████████████ 100%
  Supabase                 ██████████████████░░  90%
  PostgreSQL / MySQL       ██████████████████░░  90%
  REST APIs / SSE          ████████████████████ 100%
  Docker                   █████████████░░░░░░░  65%

AI / ML:
  LLM Integration          ██████████████████░░  90%
  Groq / OpenRouter        ██████████████████░░  90%
  NVIDIA NIM               ████████████░░░░░░░░  60%
  Groq Whisper / yt-dlp    ██████████████████░░  90%
  Prompt Engineering       ████████████████████ 100%
  LangChain                ████████████░░░░░░░░  60%

Design:
  Adobe Creative Suite     ███████████��██████░░  90%
  Brand Identity           ██████████████████░░  90%
  Responsive Web Design    ████████████████████ 100%
`,
    experience: () => `
[WORK EXPERIENCE]

2026 – Present | Founder & Full-Stack Developer
ScribeSnap.ai · Self-Employed · Remote
• Launched AI EdTech tool — 6,000+ unique users, 50–80 DAUs within weeks
• Built full stack: React 18 + Framer Motion, Node.js/Express REST + SSE,
  Supabase (PostgreSQL + Auth + Google OAuth)
• Engineered fault-tolerant LLM pipeline — Groq (LLaMA 3.1) + OpenRouter
  fallback; Groq Whisper transcription via yt-dlp; real-time SSE streaming
• AI features: auto-chaptering, flashcard generation, study guide synthesis

2025 – Present | ISSS Global Leader
San José State University · Part-Time · San Jose, CA
• Selected as one of 6 Global Leaders at SJSU
• Hosts campus-wide events: Global Leader Chats, Welcome Sessions, workshops
• Core member of ISucceed Global Connect — 60+ mentors and mentees program
• Personally mentors students and organizes monthly events

2019 – 2022 | Full-Stack Developer
Rocketz Verleih · Trier, Germany
• Modernized Shopify storefront for nationwide sound system & karaoke rental
  serving 2,000+ events per year across Germany
• Custom Shopify Liquid, JavaScript, HTML/CSS — reduced admin time by 20%
• Refactored codebase, cut 100+ lines of dead code; integrated third-party
  plugins, chatbots, and automation tools
• Optimized SEO and built free SEA features for 10+ key products

2015 – 2020 | Founder
GlobalCityGames · Remote
• Founded multigaming network at 15 — peaking at 2,000+ concurrent users
  across Minecraft, CS:GO, and Arma 3
• Designed multi-cloud infrastructure distributing server workloads for
  performance and reliability
• Built custom game plugins in Java and JavaScript on live servers
• Managed MySQL/PostgreSQL databases with 100k+ rows of player data
• Led staff of 25+ across development, moderation, and community management
`,
    education: () => `
[EDUCATION & CERTIFICATIONS]

Bachelor of Science in Software Engineering
San José State University · San Jose, CA (Jan 2025 – Jan 2028)
• GPA: 3.8/4.0
• Mesa Engineering Club · AI & ML Club · Jewish Student Union
• iSucceed Peer Mentor · SpartUp Entrepreneurship Community
• Student Representative, Executive Director Search Committee

Certified Media Designer
BBS GUT Trier · Trier, Germany (Aug 2020 – Jul 2022)
• UX/UI design psychology, Gestalt principles, visual hierarchy
• Color theory, cognitive load, typography, branding
• Adobe Creative Suite, HTML/CSS web development

International Software Engineering
Fontys University of Applied Sciences · Venlo, Netherlands (Aug 2022 – May 2023)
• Database architecture, SQL, entity-relationship modeling
• Software project delivery
• Tutored 40+ peers across the program

Certifications:
• Building with the Claude API — Anthropic (Mar 2026)
  Verify: https://verify.skilljar.com/c/96uifv2q7my6
• Cybersecurity Professional — W3Schools (Oct 2024)
• C Professional — W3Schools
• HTML Professional — W3Schools
• Game Programming with Unity3D — University of Trier
`,
    contact: () => `
[CONTACT INFORMATION]

📧 Email:     joelmoyal123@gmail.com
🌐 Portfolio: https://joelmoyal.com
🐙 GitHub:    https://github.com/JoelMoyal
💼 LinkedIn:  https://linkedin.com/in/joel-moyal
📱 Phone:     +1 202 845 6118
📍 Location:  San Jose, CA

I'm actively looking for internships — don't hesitate to reach out!

Response time: Usually within 24 hours
Best method:  Email or LinkedIn
`,
    clear: () => {
      setHistory([])
      return ''
    },
  }

  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase()
    const commandFn = commands[cmd as keyof typeof commands]
    const output = commandFn
      ? commandFn()
      : `Command not found: ${cmd}\nType help to see available commands.`

    if (cmd !== 'clear') {
      setHistory(prev => [...prev, { command: currentCommand, output }])
    }

    setCurrentCommand('')
    historyIndexRef.current = -1
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.min(historyIndexRef.current + 1, history.length - 1)
      if (history.length > 0) {
        setCurrentCommand(history[history.length - 1 - newIndex]?.command || '')
      }
      historyIndexRef.current = newIndex
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = Math.max(historyIndexRef.current - 1, -1)
      setCurrentCommand(
        newIndex === -1 ? '' : history[history.length - 1 - newIndex]?.command || ''
      )
      historyIndexRef.current = newIndex
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus()
    }
    const el = terminalRef.current
    if (el) el.addEventListener('click', handleClick)
    return () => {
      if (el) el.removeEventListener('click', handleClick)
    }
  }, [])

  const renderOutput = (output: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g

    let parts = output.split(urlRegex)
    parts = parts.flatMap(part =>
      urlRegex.test(part) ? [part] : part.split(emailRegex)
    )

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
          >
            {part}
          </a>
        )
      } else if (emailRegex.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
          >
            {part}
          </a>
        )
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-green-400 p-4 font-mono">
      <div className="w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl border border-green-400">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-3 bg-gray-800 text-xs text-gray-400">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded22-full bg-green-600 hover:bg-green-500 transition-colors cursor-pointer" />
          </div>
          <div className="flex-1 text-center font-semibold">
            joel
          </div>
          <div className="text-xs">
            <span className="text-green-400">●</span> ONLINE
          </div>
        </div>

        {/* Terminal Output */}
        <div
          ref={terminalRef}
          className="h-[75vh] overflow-y-auto p-4 space-y-3 bg-black cursor-text"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#10b981 #1f2937' }}
        >
          {history.map((entry, i) => (
            <div key={i} className="space-y-2">
              <div className="flex gap-2">
                <span className="text-cyan-400 font-semibold">joel@portfolio:~$</span>
                <span className="text-white">{entry.command}</span>
              </div>
              <div className="whitespace-pre-wrap text-gray-300 pl-6 leading-relaxed">
                {renderOutput(entry.output)}
              </div>
            </div>
          ))}

          {/* Input line */}
          <div className="flex gap-2 items-center">
            <span className="text-cyan-400 font-semibold">joel@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={e => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white caret-green-400"
              autoFocus
              spellCheck="false"
            />
            <span className="text-green-400 animate-pulse">█</span>
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="bg-gray-800 px-4 py-2 text-xs text-gray-500 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <span>Type help for available commands · ↑/↓ arrows for history</span>
            <span>clear to reset · joelmoyal.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
