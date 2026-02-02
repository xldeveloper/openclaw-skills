---
name: ai-persona-os
version: 1.1.0
description: "The complete operating system for OpenClaw agents that actually work. 4-tier workspace architecture, 8 operating rules, context protection (never-forget), learning capture, growth loops, session management. One install. Complete system. Built by Jeff J Hunter, creator of AI Persona Method."
author: Jeff J Hunter
homepage: https://jeffjhunter.com
tags: [ai-persona, framework, workspace, memory, reliable-agent, production, context-protection, never-forget]
---

# 🤖 AI Persona OS

**The complete operating system for OpenClaw agents that actually work.**

Most agents are held together with duct tape and hope. They forget everything, make the same mistakes, and burn API credits with nothing to show for it.

AI Persona OS fixes this. One install. Complete system. Production-ready.

---

## Why This Exists

I've trained thousands of people to build AI Personas through the AI Persona Method. The #1 problem I see:

> "My agent is unreliable. It forgets context, repeats mistakes, and I spend more time fixing it than using it."

The issue isn't the model. It's the lack of systems.

AI Persona OS is the exact system I use to run production agents that generate real business value. Now it's yours.

---

## What's Included

| Component | What It Does |
|-----------|--------------|
| **4-Tier Workspace** | Organized structure for identity, operations, sessions, and work |
| **8 Operating Rules** | Battle-tested discipline for reliable behavior |
| **Never-Forget Protocol** | Context protection that survives truncation (threshold-based checkpointing) |
| **Learning System** | Turn every mistake into a permanent asset |
| **4 Growth Loops** | Continuous improvement patterns that compound over time |
| **Session Management** | Start every session ready, miss nothing |
| **Setup Wizard** | Interactive setup that builds your workspace in 5 minutes |
| **Status Dashboard** | See your entire system health at a glance |

---

## Quick Start

### Option 1: Interactive Setup (Recommended)

```bash
# After installing, run the setup wizard
./scripts/setup-wizard.sh
```

The wizard asks about your AI Persona and generates customized files.

### Option 2: Manual Setup

```bash
# Copy assets to your workspace
cp -r assets/* ~/workspace/

# Create directories
mkdir -p ~/workspace/{memory/archive,projects,notes/areas,backups,.learnings}

# Customize the templates
# Start with SOUL.md and USER.md
```

---

## The 4-Tier Architecture

```
Your Workspace
│
├── 🪪 TIER 1: IDENTITY (Who your agent is)
│   ├── SOUL.md          → Personality, values, boundaries
│   ├── USER.md          → Your context, goals, preferences
│   └── KNOWLEDGE.md     → Domain expertise
│
├── ⚙️ TIER 2: OPERATIONS (How your agent works)
│   ├── MEMORY.md        → Permanent facts (keep < 4KB)
│   ├── AGENTS.md        → The 8 Rules + learned lessons
│   ├── WORKFLOWS.md     → Repeatable processes
│   └── HEARTBEAT.md     → Daily startup checklist
│
├── 📅 TIER 3: SESSIONS (What happened)
│   └── memory/
│       ├── YYYY-MM-DD.md   → Daily logs
│       ├── checkpoint-*.md → Context preservation
│       └── archive/        → Old logs (90+ days)
│
├── 📈 TIER 4: GROWTH (How your agent improves)
│   └── .learnings/
│       ├── LEARNINGS.md    → Insights and corrections
│       ├── ERRORS.md       → Failures and fixes
│       └── FEATURE_REQUESTS.md → Capability gaps
│
└── 🛠️ TIER 5: WORK (What your agent builds)
    ├── projects/
    └── backups/
```

---

## The 8 Rules

Every AI Persona follows these operating rules:

| # | Rule | Why It Matters |
|---|------|----------------|
| 1 | **Check workflows first** | Don't reinvent—follow the playbook |
| 2 | **Write immediately** | If it's important, it's written NOW |
| 3 | **Diagnose before escalating** | Try 10 approaches before asking |
| 4 | **Security is non-negotiable** | No exceptions, no "just this once" |
| 5 | **Selective engagement** | Not every input deserves a response |
| 6 | **Check identity every session** | Prevent drift, stay aligned |
| 7 | **Direct communication** | Skip corporate speak |
| 8 | **Execute, don't just plan** | Action over discussion |

---

## Never-Forget Protocol

Context truncation is the silent killer of AI productivity. One moment you have full context, the next your agent is asking "what were we working on?"

**The Never-Forget Protocol prevents this.**

### Threshold-Based Protection

| Context % | Status | Action |
|-----------|--------|--------|
| < 50% | 🟢 Normal | Write decisions as they happen |
| 50-69% | 🟡 Vigilant | Increase checkpoint frequency |
| 70-84% | 🟠 Active | **STOP** — Write full checkpoint NOW |
| 85-94% | 🔴 Emergency | Emergency flush — essentials only |
| 95%+ | ⚫ Critical | Survival mode — bare minimum to resume |

### Checkpoint Triggers

Write a checkpoint when:
- Every ~10 exchanges (proactive)
- Context reaches 70%+ (mandatory)
- Before major decisions
- At natural session breaks
- Before any risky operation

### What Gets Checkpointed

```markdown
## Checkpoint [HH:MM] — Context: XX%

**Decisions Made:**
- Decision 1 (reasoning)
- Decision 2 (reasoning)

**Action Items:**
- [ ] Item (owner)

**Current Status:**
Where we are right now

**Resume Instructions:**
1. First thing to do
2. Continue from here
```

### Recovery

After context loss:
1. Read `memory/[TODAY].md` for latest checkpoint
2. Read `MEMORY.md` for permanent facts
3. Follow resume instructions
4. Tell human: "Resuming from checkpoint at [time]..."

**Result:** 95% context recovery. Max 5% loss (since last checkpoint).

---

## Learning System

Your agent will make mistakes. The question is: will it learn?

**Capture:** Log learnings, errors, and feature requests with structured entries.

**Review:** Weekly scan for patterns and promotion candidates.

**Promote:** After 3x repetition, elevate to permanent memory.

```
Mistake → Captured → Reviewed → Promoted → Never repeated
```

---

## 4 Growth Loops

These meta-patterns compound your agent's effectiveness over time.

### Loop 1: Curiosity Loop
**Goal:** Understand your human better → Generate better ideas

1. Identify knowledge gaps
2. Ask questions naturally (1-2 per session)
3. Update USER.md when patterns emerge
4. Generate more targeted ideas
5. Repeat

### Loop 2: Pattern Recognition Loop
**Goal:** Spot recurring tasks → Systematize them

1. Track what gets requested repeatedly
2. After 3rd repetition, propose automation
3. Build the system (with approval)
4. Document in WORKFLOWS.md
5. Repeat

### Loop 3: Capability Expansion Loop
**Goal:** Hit a wall → Add new capability → Solve problem

1. Research what tools/skills exist
2. Install or build the capability
3. Document in TOOLS.md
4. Apply to original problem
5. Repeat

### Loop 4: Outcome Tracking Loop
**Goal:** Move from "sounds good" to "proven to work"

1. Note significant decisions
2. Follow up on outcomes
3. Extract lessons (what worked, what didn't)
4. Update approach based on evidence
5. Repeat

---

## Session Management

Every session starts with the Daily Ops protocol:

```
Step 0: Context Check
   └── ≥70%? Checkpoint first
   
Step 1: Load Previous Context  
   └── Read memory files, find yesterday's state
   
Step 2: System Status
   └── Verify everything is healthy
   
Step 3: Priority Channel Scan
   └── P1 (critical) → P4 (background)
   
Step 4: Assessment
   └── Status + recommended actions
```

---

## Scripts & Commands

| Script | What It Does |
|--------|--------------|
| `./scripts/setup-wizard.sh` | Interactive first-time setup |
| `./scripts/status.sh` | Dashboard view of entire system |
| `./scripts/health-check.sh` | Validate workspace structure |
| `./scripts/daily-ops.sh` | Run the daily startup protocol |
| `./scripts/weekly-review.sh` | Promote learnings, archive logs |

---

## Assets Included

```
assets/
├── SOUL-template.md        → Agent identity template
├── USER-template.md        → Human context template
├── MEMORY-template.md      → Permanent facts template
├── AGENTS-template.md      → Operating rules + learned lessons
├── HEARTBEAT-template.md   → Daily checklist (role-aware)
├── WORKFLOWS-template.md   → Growth loops + process documentation
├── daily-log-template.md   → Session log template
├── LEARNINGS-template.md   → Learning capture template
├── ERRORS-template.md      → Error tracking template
└── checkpoint-template.md  → Context preservation formats
```

---

## References

See `references/` for deep-dive documentation:

- `never-forget-protocol.md` — Complete context protection system

---

## Success Metrics

After implementing AI Persona OS, users report:

| Metric | Before | After |
|--------|--------|-------|
| Context loss incidents | 8-12/month | 0-1/month |
| Time to resume after break | 15-30 min | 2-3 min |
| Repeated mistakes | Constant | Rare |
| Onboarding new persona | Hours | Minutes |

---

## Who Built This

**Jeff J Hunter** is the creator of the AI Persona Method and founder of the world's first AI Certified Consultant program.

He runs the largest AI community (3.6M+ members) and has been featured in Entrepreneur, Forbes, ABC, and CBS. As founder of VA Staffer (150+ virtual assistants), Jeff has spent a decade building systems that let humans and AI work together effectively.

AI Persona OS is the distillation of that experience.

---

## Want to Make Money with AI?

Most people burn API credits with nothing to show for it.

AI Persona OS gives you the foundation. But if you want to turn AI into actual income, you need the complete playbook.

**→ Join AI Money Group:** https://aimoneygroup.com

Learn how to build AI systems that pay for themselves.

---

## Connect

- **Website:** https://jeffjhunter.com
- **AI Persona Method:** https://aipersonamethod.com
- **AI Money Group:** https://aimoneygroup.com
- **LinkedIn:** /in/jeffjhunter

---

## License

MIT — Use freely, modify, distribute. Attribution appreciated.

---

*AI Persona OS — Build agents that work. And profit.*
