<p align="center">
  <h1 align="center">OpenAgenticGame Studios - Universal Agent First Game Dev AI Game Studios</h1>
  <p align="center">
    Any AI IDE. Complete game studio. Instantly.
    <br />
    85 agents. 72 skills. 9 teams. Universal agent coordination system.
    <br />
    Now including the full Claude Code Game Studios v1.2.0 core (49 agents · 74 skills · 15 hooks).
  </p>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="LICENSE_OPENAGENTICGAME.md"><img src="https://img.shields.io/badge/enhanced%20license-MIT-green" alt="Enhanced MIT License"></a>
  <a href="COPYRIGHT.md"><img src="https://img.shields.io/badge/attribution-required-orange" alt="Attribution Required"></a>
  <a href="refenrece/agents"><img src="https://img.shields.io/badge/agents-85-blueviolet" alt="85 Agents"></a>
  <a href="refenrece/skills"><img src="https://img.shields.io/badge/skills-72-green" alt="72 Skills"></a>
  <a href="refenrece/rules"><img src="https://img.shields.io/badge/rules-12-red" alt="12 Rules"></a>
  <a href=".claude/hooks"><img src="https://img.shields.io/badge/hooks-15-orange" alt="15 Hooks"></a>
  <a href="docs/qulification"><img src="https://img.shields.io/badge/platforms-6-orange" alt="6 Platforms"></a>
  <a href="https://developers.openai.com/codex/"><img src="https://img.shields.io/badge/built%20for-OpenAI%20Codex-111827?logo=openai" alt="Built for OpenAI Codex"></a>
  <a href="https://code.claude.com/docs"><img src="https://img.shields.io/badge/built%20for-Claude%20Code-f5f5f5?logo=anthropic" alt="Built for Claude Code"></a>
  <a href="https://www.buymeacoffee.com/donchitos3"><img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee"></a>
  <a href="https://github.com/sponsors/Donchitos"><img src="https://img.shields.io/badge/GitHub%20Sponsors-ea4aaa?logo=githubsponsors&logoColor=white" alt="GitHub Sponsors"></a>
</p>

---

## Why This Exists

Building a game solo with AI is powerful — but a single AI session has no structure. No one stops you from hardcoding magic numbers, skipping design docs, or writing spaghetti code. There's no QA pass, no design review, no one asking "does this actually fit the game's vision?"

**OpenAgenticGame Studios** revolutionizes AI-assisted game development with three groundbreaking innovations:

### 🌐 **Universal Architecture**
We broke free from single-AI limitations. Our **universal reference system** (`refenrece/`) creates an AI-agnostic framework where ANY coding environment — OpenAI Codex, Cursor, Windsurf, or future AI agents — can access the same complete studio infrastructure. You're never locked into one platform.

**Advanced Development Layer**: We've integrated **BMAD + OpenSpec + Harness** methodologies into our `.codex/` folder, creating a sophisticated development framework that brings enterprise-grade workflow management to ANY AI IDE. This includes Quick/BMM modes, task decomposition, milestone validation, and automated quality gates — all portable across AI platforms.

### 🏗️ **Enterprise-Grade Coordination**
We scaled from basic agent assistance to a full studio architecture. While others offer simple chatbots, we provide **85 specialized agents** organized into **9 professional teams** with real studio hierarchies: executive leadership, department heads, specialists, and quality gates. This isn't just assistance — this is a complete production pipeline.

### ⚡ **Instant Studio Transformation**
Our reference-based approach means **zero setup time**. Any AI IDE that can read files instantly becomes a full game development studio with all agents, skills, and quality standards. No configuration, no integration headaches — instant professional-grade game development capability.

The result: you choose your preferred AI environment, we provide the complete studio structure that transforms chaotic solo development into organized, professional game production — from first brainstorm to global launch.

This repository also embeds the complete **[Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios)** v1.2.0 core — the upstream this project is built on — so you get its production-ready Claude Code runtime (hooks, `project.yaml` rigor modes, skill testing) alongside the universal reference system.

---

## Table of Contents

- [What's Included](#whats-included)
- [Universal Reference System](#universal-reference-system)
- [Studio Hierarchy](#studio-hierarchy)
- [Slash Commands](#slash-commands)
- [Does it produce games, or documents?](#does-it-produce-games-or-documents)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Upgrading](#upgrading)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Design Philosophy](#design-philosophy)
- [Customization](#customization)
- [Platform Support](#platform-support)
- [Community](#community)
- [Supporting This Project](#supporting-this-project)
- [License](#license)

---

## What's Included

| Category | Count | Description |
|----------|-------|-------------|
| **Agents** | 85 | Universal specialized agents across 9 teams (`refenrece/agents/`): Leadership(8), Programming(29), Design(13), Art(11), QA(7), Production(13), Publish(7), Support(2), Enhanced(4) |
| **Skills** | 72 | Universal slash commands for common workflows (`/start`, `/sprint-plan`, `/code-review`, `/brainstorm`, etc.) in `refenrece/skills/` |
| **Rules** | 12 | Path-scoped coding standards enforced when editing gameplay, engine, AI, UI, network code, and more |
| **Templates** | 28 | Document templates for GDDs, ADRs, sprint plans, economy models, faction design, and more |
| **Platforms** | 6 | Quality standards and certification for Steam, Mobile, Console, Epic Games Store, CrazyGames, and GameDistribution |
| **Claude Code Agents** | 49 | Native Claude Code subagents across design, programming, art, audio, narrative, QA, and production (`.claude/agents/`) |
| **Claude Code Skills** | 74 | Slash commands for every workflow phase (`/start`, `/design-system`, `/create-epics`, `/create-stories`, `/dev-story`, `/story-done`, etc.) in `.claude/skills/` |
| **Hooks** | 15 | Automated validation on commits, pushes, asset changes, design-doc reads, writes and registries, session lifecycle, agent audit trail, and gap detection (`.claude/hooks/`) |
| **Claude Code Rules** | 14 | Path-scoped coding standards enforced when editing gameplay, engine, AI, UI, network code, scene and asset files, and more (`.claude/rules/`) |
| **Claude Code Templates** | 62 | Document templates for GDDs, UX specs, ADRs, sprint plans, HUD design, accessibility, and more (`.claude/docs/templates/`) |
| **Universal Reference System** | 1 | Core architecture that enables ANY AI IDE/agent to become a full game studio |
| **Advanced Development Layer** | 1 | BMAD + OpenSpec + Harness integration for enterprise-grade workflow management across all AI platforms |

## Universal Reference System

The core innovation of OpenAgenticGame Studios is our **universal reference system** located in the `refenrece/` directory. This architecture enables any AI coding IDE or agent to become a full-featured game development studio:

### How It Works
- **Reference-Based Architecture**: All agents, skills, rules, and quality standards are stored as accessible reference files
- **AI-Agnostic Design**: Any AI system that can read files can access the complete studio framework
- **Unified Knowledge Base**: Consistent agent behavior and quality standards across all AI platforms
- **Extensible Framework**: Easy to add new agents, skills, or integrate with new AI systems

### Supported AI Environments
- **OpenAI Codex** (native support: `AGENTS.md` + `.codex/` workflows)
- **Claude Code** (native support: `CLAUDE.md` + `.claude/` runtime, plus the universal reference system)
- **Cursor** (via the reference system)
- **Windsurf** (via the reference system)
- **Any future AI coding IDE** (via the universal reference architecture)

### Reference Structure
```
refenrece/
├── agents/     # 85 specialized agent definitions
├── skills/     # 72 universal skill implementations
├── rules/      # 12 coding standards and quality rules
└── docs/       # Comprehensive documentation
```

This means you're not locked into a specific AI platform — your studio structure and expertise travels with you, regardless of which AI coding environment you prefer.

## Studio Hierarchy

Universal agents are organized into 9 teams, matching how real studios operate:

```
Leadership Team (8 agents)
  creative-director    technical-director    producer
  art-director         audio-director         narrative-director
  game-vision-architect  [additional leadership agents]

Programming Team (29 agents)
  lead-programmer      gameplay-programmer    engine-programmer
  ai-programmer        network-programmer     ui-programmer
  tools-programmer     [24 additional programming specialists]

Design Team (13 agents)
  game-designer        systems-designer       level-designer
  economy-designer     world-builder          writer
  [7 additional design specialists]

Art Team (11 agents)
  technical-artist     ux-designer            accessibility-specialist
  sound-designer       [7 additional art specialists]

Quality Assurance Team (7 agents)
  qa-lead              qa-tester              performance-analyst
  [4 additional QA specialists]

Production Team (13 agents)
  release-manager      localization-lead      community-manager
  analytics-engineer   devops-engineer        security-engineer
  [7 additional production specialists]

Publish Team (7 agents)
  store-submission-specialist  platform-certification-specialist
  release-coordinator  publish-quality-gates  store-page-optimizer
  platform-relationship-manager

Support Team (2 agents)
  enhanced-analytics-engineer  enhanced-network-engineer

Enhanced Team (4 agents)
  enhanced-game-designer  enhanced-tool-developer
  enhanced-art-director  enhanced-network-engineer
```

### Engine Specialists

The template includes agent sets for all four major engines. Use the set that matches your project:

| Engine | Lead Agent | Sub-Specialists |
|--------|-----------|-----------------|
| **Godot 4** | `godot-specialist` | GDScript, Shaders, GDExtension, Full-Stack |
| **Unity** | `unity-specialist` | DOTS/ECS, Shaders/VFX, Addressables, UI Toolkit, Asset Guidelines |
| **Unreal Engine 5** | `unreal-specialist` | GAS, Blueprints, Replication, UMG/CommonUI |
| **Cocos Creator** | `cocos-creator-specialist` | Development, Automation |

### Claude Code Studio (`.claude/agents/`)

The embedded Claude Code runtime organizes its 49 agents into three tiers:

```
Tier 1 — Directors
  creative-director    technical-director    producer

Tier 2 — Department Leads
  game-designer        lead-programmer       art-director
  audio-director       narrative-director    qa-lead
  release-manager      localization-lead

Tier 3 — Specialists
  gameplay-programmer  engine-programmer     ai-programmer
  network-programmer   tools-programmer      ui-programmer
  systems-designer     level-designer        economy-designer
  technical-artist     sound-designer        writer
  world-builder        ux-designer           prototyper
  performance-analyst  devops-engineer       analytics-engineer
  security-engineer    qa-tester             accessibility-specialist
  live-ops-designer    community-manager
```

Each agent declares a model in its frontmatter: the three directors ask for Opus, `lead-programmer` and fifteen specialists name Sonnet, and the remaining thirty **inherit your session's model**. Treat the tiers as seniority of role, not as a billing plan — most of the studio runs on whatever model you are already using.

## Slash Commands

Use Codex prompts or slash-style task names to invoke the 72 universal reference skills:

**Reviews & Analysis**
`/design-review` `/code-review` `/balance-check` `/asset-audit` `/scope-check` `/perf-profile` `/tech-debt`

**Production**
`/sprint-plan` `/milestone-review` `/estimate` `/retrospective` `/bug-report`

**Project Management**
`/start` `/project-stage-detect` `/reverse-document` `/gate-check` `/design-systems`

**Release**
`/release-checklist` `/launch-checklist` `/changelog` `/patch-notes` `/hotfix`

**Creative**
`/brainstorm` `/playtest-report` `/prototype` `/onboard` `/localize`

**Team Orchestration** (coordinate multiple agents on a single feature)
`/team-combat` `/team-narrative` `/team-ui` `/team-release` `/team-polish` `/team-audio` `/team-level`

### Claude Code Skills (`.claude/skills/`)

The embedded runtime ships the full 74-skill catalog. Type `/` in Claude Code to access them:

**Onboarding & Navigation**
`/start` `/help` `/project-stage-detect` `/setup-engine` `/adopt` `/settings`

**Game Design**
`/brainstorm` `/map-systems` `/design-system` `/quick-design` `/review-all-gdds` `/propagate-design-change`

**Art & Assets**
`/art-bible` `/asset-spec` `/asset-audit`

**UX & Interface Design**
`/ux-design` `/ux-review`

**Architecture**
`/create-architecture` `/architecture-decision` `/architecture-review` `/create-control-manifest`

**Stories & Sprints**
`/create-epics` `/create-stories` `/dev-story` `/sprint-plan` `/sprint-status` `/story-readiness` `/story-done` `/estimate`

**Reviews & Analysis**
`/design-review` `/code-review` `/balance-check` `/content-audit` `/scope-check` `/perf-profile` `/tech-debt` `/gate-check` `/consistency-check` `/security-audit`

**QA & Testing**
`/qa-plan` `/smoke-check` `/soak-test` `/regression-suite` `/test-setup` `/test-helpers` `/test-evidence-review` `/test-flakiness` `/skill-test` `/skill-improve`

**Production**
`/milestone-review` `/retrospective` `/bug-report` `/bug-triage` `/reverse-document` `/playtest-report`

**Release**
`/release-checklist` `/launch-checklist` `/changelog` `/patch-notes` `/hotfix` `/day-one-patch`

**Creative & Content**
`/prototype` `/vertical-slice` `/onboard` `/localize`

**Team Orchestration** (coordinate multiple agents on a single feature)
`/team-combat` `/team-narrative` `/team-ui` `/team-release` `/team-polish` `/team-audio` `/team-level` `/team-live-ops` `/team-qa`

## Does it produce games, or documents?

A fair question, and the answer is a measurement rather than a sample project.
Four games were built from one brief at different `modes.rigor` levels and the
documents each wrote **before its first line of game code** were counted:

| `modes.rigor` | Docs before first line of game code | Time |
|---|---:|---:|
| `minimal` | **1** (the one-page brief) | 0 min |
| `standard` | 30 | 58 min |

All of them produced a running, tested game. Two blind reviewers and a human
playtest then ranked the `standard` build **last** — the extra 29 documents
bought traceability, not a better game.

### It runs the game and looks at it

The measurement above is about cost. The other half is whether the thing works,
and for a game that means someone has to *look* at it — a passing test says
nothing about a menu drawn off-screen. So a story that changes anything the
player sees is not closed until the game has been launched, observed, and a
screenshot retained in `production/qa/evidence/`. A parse check is not a run.
This holds at every rigor level, including `minimal`, where automated tests are
waived but the look is not.

The games themselves are deliberately **not** shipped here: this is a template
you clone to start your own project, and somebody else's game in your repo is
clutter, not evidence.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- An AI runtime — either or both:
  - [OpenAI Codex](https://developers.openai.com/codex/) (`npm install -g @openai/codex`) — the native runtime via `AGENTS.md` + `.codex/`
  - [Claude Code](https://code.claude.com/docs/en/setup) — the native installer is recommended (`npm install -g @anthropic-ai/claude-code` also works, on Node.js 22+), the native runtime via `CLAUDE.md` + `.claude/` + `project.yaml`
- [Python 3](https://www.python.org/) — reads `project.yaml` for every skill and hook; without it every setting silently falls back to its default
- Bash — runs every hook; built into macOS and Linux, and on Windows it comes with [Git for Windows](https://git-scm.com/downloads/win)
- **Recommended**: [jq](https://jqlang.github.io/jq/) (for hook validation), and Python 3 for JSON-aware validation checks selected by `.codex/workflows/validate.md`

Hooks fail gracefully if optional tools are missing — you just lose validation — with one deliberate exception: a commit that stages data JSON is blocked when there is no Python to validate it.

### Setup

1. **Clone or use as template**:
   ```bash
   git clone https://github.com/lannguyen2903/OpenAgenticGame-Studios.git my-game
   cd my-game
   ```

2. **Open your AI runtime in the project's root folder** and start a session:

   **Claude Code** (the folder holding `CLAUDE.md` and `project.yaml`):
   ```bash
   claude
   ```
   Starting it in a subfolder such as `src/` skips the project's hooks, deny
   rules and ask-first permission mode.

   **OpenAI Codex**:
   ```bash
   codex
   ```

3. **Run `/start`** — the system asks where you are (no idea, vague concept,
   clear design, existing work) and guides you to the right workflow. No assumptions.

   Or jump directly to a specific skill if you already know what you need:
   - `/brainstorm` — explore game ideas from a one-page brief upward
   - `/setup-engine godot 4.7` — configure your engine if you already know it
   - `/project-stage-detect` — analyze an existing project

## Configuration

`project.yaml` at the repo root is the single source of truth for how the
studio behaves on your project — engine, naming conventions, and a `modes`
block that controls how much process every skill enforces. `/start` writes it
for you; you rarely need to hand-edit it.

The one question that matters most is **`modes.rigor`** — `minimal`, `standard`,
or `full`. It's a single front door over six separate knobs (`workflow` —
which GDD sections are required, `docs.density`, `qa.level`,
`story_granularity`, `review_mode` — how many director agents review your work,
and `team.size`), so `/start` asks it once instead of six times:

- **`minimal`** (default) — jam-game speed. No GDDs required, terse docs, minimal QA evidence, solo review. `/start` → `/setup-engine` → `/brainstorm` (a one-page brief) → `/create-stories` → `/dev-story` ↔ `/story-done`.
- **`standard`** — 5 required GDD sections, balanced doc depth, standard QA evidence, lean review.
- **`full`** — all 8 GDD sections, thorough docs, full QA evidence on every story type, full director review.

`minimal` is the default because the heavier tier costs more to reach working
code without producing a better result, and gives nothing back when someone new
picks the project up. Raise it in one `/settings` call when your project grows
— `/help` and `/gate-check` will suggest it when they see the signs.

Two escape hatches keep one setting from being a blunt instrument.
**`system_overrides`** holds a single system to a higher standard than the rest
of the project — your combat system gets the full treatment while everything
else stays light. **`testing.strict`** sets, per test type (logic, integration,
visual, UI, config), whether missing evidence blocks a story or merely warns.

Any of the six underlying knobs can still be set individually if you want a mix
(e.g. `workflow: full` with `docs.density: terse` — comprehensive but compact).
Two of them — `review_mode` (`full` / `lean` / `solo`) and `team.size` — are
also **personal**: rigor sets the team-wide default, but you can override them
per-developer in a gitignored `project.local.yaml` without touching the shared
config. `modes.automation` (how often the AI pauses to ask before it acts) sits
outside rigor and is likewise personally overridable.

View or change any setting with the `/settings` skill:

```
/settings                              # view effective config
/settings modes.review_mode            # view one setting
/settings modes.rigor=full             # write to project.yaml (team-wide)
/settings --local modes.review_mode=solo   # write to project.local.yaml (just you)
```

Full schema and per-setting behavior: `.claude/docs/effects-map.md`.

## Upgrading

Already using an older version of this template? See [UPGRADING.md](UPGRADING.md)
for step-by-step migration instructions, a breakdown of what changed between
versions, and which files are safe to overwrite vs. which need a manual merge.

## Project Structure

```
🌟 Universal Architecture (AI-Platform Agnostic)
│
├── refenrece/                          # UNIVERSAL REFERENCE SYSTEM - Core Architecture
│   ├── agents/                        # 85 specialized agent definitions
│   ├── skills/                        # 72 universal skill implementations
│   ├── rules/                         # 12 coding standards and quality rules
│   └── docs/                          # Comprehensive documentation for all AI platforms
│
├── .codex/                            # ADVANCED DEVELOPMENT LAYER - BMAD+OpenSpec+Harness
│   ├── workflows/                      # Quick/BMM modes, review, validation workflows
│   ├── core/                          # Task decomposition, milestone design, quality gates
│   ├── templates/                     # Reusable scaffolds for consistent development
│   ├── reference/                     # BMAD/OpenSpec methodology references
│   ├── PROJECT-RULES.md               # Cross-platform development conventions
│   └── LESSONS-LEARNED.md             # Project-specific insights and patterns
│
├── AGENTS.md                          # Codex project instructions and feature mapping
├── docs/CODEX-MIGRATION.md            # Migration guide from Claude Code to Codex
│
🤖 Claude Code Studio Core (v1.2.0)
│
├── CLAUDE.md                          # Master configuration
├── project.yaml                       # Single source of truth (engine, modes.rigor, naming)
├── .claude/
│   ├── settings.json                  # Hooks, permissions, safety rules
│   ├── agents/                        # 49 agent definitions (markdown + YAML frontmatter)
│   ├── skills/                        # 74 slash commands (subdirectory per skill)
│   ├── hooks/                         # 18 scripts — 15 event hooks + 2 helpers + 1 opt-in diagnostic
│   ├── rules/                         # 14 path-scoped coding standards
│   ├── statusline.sh                  # Status line script (context%, model, stage, epic breadcrumb)
│   └── docs/
│       ├── workflow-catalog.yaml      # 7-phase pipeline definition (read by /help)
│       ├── templates/                 # 62 document templates (+ per-section guidance)
│       └── effects-map.md             # Full configuration schema
├── studio-tests/                      # QA for the skills and agents themselves (/skill-test)
├── UPGRADING.md                       # Version migration guide
├── CHANGELOG.md / CONTRIBUTING.md / SECURITY.md
│
🔌 Optional Platform Adapters
│
├── .cursor/                           # Cursor specific configurations (if present)
├── .windsurf/                         # Windsurf specific configurations (if present)
│
🌐 Landing Page
│
└── site/                              # Static marketing site (deployed on Vercel)
│
🎮 Game Development Workspace
│
├── src/                               # Game source code (Godot; Unity = Assets/, Unreal = Source/<Module>/)
├── assets/                            # Art, audio, VFX, shaders, data files
├── design/                            # GDDs, narrative docs, level designs
├── docs/                              # Technical documentation and ADRs
├── tests/                             # Test suites (unit, integration, performance, playtest)
├── tools/                             # Build and pipeline tools
├── prototypes/                        # Throwaway prototypes (isolated from src/)
└── production/                        # Sprint plans, milestones, release tracking
```

### Testing your customizations

This is a template you are meant to edit. `studio-tests/` is how
you check that an edited or newly written skill still holds up — a catalog of all
74 skills and 49 agents, per-category quality rubrics, behavioral specs, and
templates for writing specs of your own.

```
/skill-test static [name]     # structural linter — 7 compliance checks
/skill-test category [name]   # category-specific quality rubric
/skill-test spec [name]       # behavioral spec assertions
/skill-test audit             # coverage report across skills and agents
/skill-improve [name]         # test-fix-retest loop; keeps or reverts on score change
```

It tests the *framework*, never your game — game tests live in `tests/`.

## How It Works

### Agent Coordination

Agents follow a structured delegation model:

1. **Vertical delegation** — directors delegate to leads, leads delegate to specialists
2. **Horizontal consultation** — same-tier agents can consult each other but can't make binding cross-domain decisions
3. **Conflict resolution** — disagreements escalate up to the shared parent (`creative-director` for design, `technical-director` for technical)
4. **Change propagation** — cross-department changes are coordinated by `producer`
5. **Domain boundaries** — agents don't modify files outside their domain without explicit delegation

### Collaborative, Not Autonomous

This is **not** an auto-pilot system. Every agent follows a strict collaboration protocol:

1. **Ask** — agents ask questions before proposing solutions
2. **Present options** — agents show 2-4 options with pros/cons
3. **You decide** — the user always makes the call
4. **Draft** — agents show work before finalizing
5. **Approve** — nothing gets written without your sign-off

You stay in control. The agents provide structure and expertise, not autonomy.

That is how a terminal session started at the project root behaves out of the
box. The `guided` and `autonomous` automation settings, and Claude Code's own
auto mode, trade some of these prompts for speed; see
[setup-requirements.md](.claude/docs/setup-requirements.md) for the routes into
auto mode.

### Codex Native Features

Codex is a first-class execution environment. The repo uses `AGENTS.md` plus `.codex/` to expose agentic coding workflows, review loops, validation gates, and reusable templates:

| Codex capability | Repository mapping |
|------------------|--------------------|
| Local code editing | Use `AGENTS.md` plus `.codex/workflows/quick.md` for scoped implementation and refactors |
| Agentic task planning | Use `.codex/workflows/bmm.md` with `.codex/core/work-breakdown.md` and `.codex/core/milestone-design.md` for larger changes |
| Shell-based validation | Use `.codex/workflows/validate.md` and `.codex/core/validation-matrix.md` to capture evidence before closeout |
| Multimodal UI/game review | Feed screenshots, mockups, and diagrams to Codex, then route through `.codex/workflows/review.md` |
| Portable reference loading | Pull agents, skills, rules, and templates from `refenrece/` only when the current task needs them |

See `docs/CODEX-MIGRATION.md` for the migration from Claude Code-specific hooks/settings to Codex-native instructions and workflow gates.

### Automated Safety

**Hooks** run automatically on every Claude Code session:

| Hook | Trigger | What It Does |
|------|---------|--------------|
| `validate-commit.sh` | PreToolUse (Bash, PowerShell) | Checks for hardcoded values, TODO format, JSON validity, design doc sections — exits early if the command is not `git commit` |
| `validate-push.sh` | PreToolUse (Bash, PowerShell) | Warns on pushes to protected branches, and on `git tag`, `git merge`, `gh release`, `butler push` and `steamcmd +run_app_build` — exits early for any other command |
| `validate-read.sh` | PreToolUse (Read) | Refuses a whole-file read of a design doc over 40 KB and answers with its headings, so the retry reads one section (`features.read_guard`) |
| `validate-write.sh` | PreToolUse (Write/Edit) | Warns, never blocks, when a write would break a rule the skills state: a file they never overwrite, the config guard, the prototype boundary, a localization freeze |
| `validate-registry.sh` | PreToolUse (Write/Edit) | Warns when a write to the entity or TR-ID registry would delete or renumber an entry, or set a status its header does not list |
| `validate-assets.sh` | PostToolUse (Write/Edit) | Checks data-file JSON under `assets/`, `Assets/` or `Content/`, and asset naming in Godot's `assets/` only — exits early if the file is under none of them |
| `session-start.sh` | Session open | Shows current branch and recent commits for orientation |
| `detect-gaps.sh` | Session open | Detects fresh projects (suggests `/start`) and missing design docs when code or prototypes exist |
| `pre-compact.sh` | Before compaction | Logs the compaction (its output does not reach Claude — `session-start.sh` restores context afterwards) |
| `notify.sh` | Permission prompt, or idle about a minute | Shows Windows toast notification via PowerShell |
| `session-stop.sh` | Every response end, in the background | Archives `active.md` to session log and records git activity |
| `log-agent.sh` | Agent spawned | Audit trail start — logs subagent invocation |
| `log-agent-stop.sh` | Agent stops | Audit trail stop — completes subagent record |
| `validate-agent-artifact.sh` | Agent stops | Warns when a subagent stops without writing the file its brief named |
| `validate-skill-change.sh` | PostToolUse (Write/Edit) | Advises running `/skill-test` after any `.claude/skills/` change |

> **Note**: `validate-commit.sh`, `validate-push.sh`, `validate-read.sh`, `validate-write.sh`, `validate-registry.sh`, `validate-assets.sh` and `validate-skill-change.sh` fire on every Bash, PowerShell, Read, Write or Edit tool call and exit immediately (exit 0) when the command or file path is not relevant. This is normal hook behavior — not a performance concern.

**Permission rules** in `settings.json` auto-allow test runs and block dangerous operations (force push, `rm -rf`, reading `.env` files) in both the Bash and PowerShell tools. Read-only commands such as `git status`, `git log` and `ls` need no rule: Claude Code runs them without asking. The `git` rules match anywhere after `git`, so a git command whose text only mentions `push` followed later by ` +` or ` -f`, `clean` followed by ` -f`, or `reset` followed by `--hard` — a commit message such as `git commit -m "push + pull"` included — is denied too: reword the message.

### Path-Scoped Rules

Coding standards are automatically enforced based on file location. The paths
below are Godot's. Each rule also matches the Unity and Unreal layouts: the code
rules match C# under `Assets/**/Gameplay/` and C++ under `Source/**/Gameplay/` (and `Core`,
`AI`, `Networking`, `UI`), data matches JSON under `Assets/**/Data/` and
`Content/**/Data/`, shaders match by file type, and tests match
C# under `Assets/Tests/` and C++ under `Source/**/Tests/`.

| Path | Enforces |
|------|----------|
| `src/gameplay/**` | Data-driven values, delta time usage, no UI references |
| `src/core/**` | Zero allocations in hot paths, thread safety, API stability |
| `src/ai/**` | Performance budgets, debuggability, data-driven parameters |
| `src/networking/**` | Server-authoritative, versioned messages, security |
| `src/ui/**` | No game state ownership, localization-ready, accessibility |
| `design/gdd/**` | Required sections per `modes.workflow`, formula format, edge cases |
| `design/narrative/**` | Lore consistency, character voice, canon levels |
| `assets/data/**/*.json` | JSON validity, naming conventions, schema rules |
| `assets/shaders/**` | Naming conventions, performance targets, cross-platform rules |
| `**/*.tscn`, `**/*.tres` | Scene and resource files changed in the editor where possible; safe hand-edit rules |
| `tests/**` | Test naming, coverage requirements, fixture patterns |
| `prototypes/**` | Relaxed standards, README required, hypothesis documented |

> **Note**: These quality standards are also available through the universal reference system (`refenrece/`) and work with ANY AI IDE, while Codex and Claude Code are the native defaults.

## Design Philosophy

This template is grounded in professional game development practices:

- **MDA Framework** — Mechanics, Dynamics, Aesthetics analysis for game design
- **Self-Determination Theory** — Autonomy, Competence, Relatedness for player motivation
- **Flow State Design** — Challenge-skill balance for player engagement
- **Bartle Player Types** — Audience targeting and validation
- **Verification-Driven Development** — Tests first, then implementation

## Customization

This is a **template**, not a locked framework. Everything is meant to be customized:

- **Add/remove agents** — delete agent files you don't need, add new ones for your domains
- **Edit agent prompts** — tune agent behavior, add project-specific knowledge
- **Modify skills** — adjust workflows to match your team's process
- **Add rules** — create new path-scoped rules for your project's directory structure
- **Tune Codex gates** — adjust validation strictness, add new checks under `.codex/core/`
- **Tune hooks** — adjust validation strictness, add new checks
- **Pick your engine** — use the Godot, Unity, or Unreal agent set (or none)
- **Tune process weight** — `modes.rigor` and its underlying knobs in `project.yaml` (see [Configuration](#configuration)). Override per-run with `--review solo` on any skill.

## Platform Support

Codex and the repository workflow docs are intended for macOS, Linux, and Windows via WSL or Git Bash. Keep validation commands POSIX-friendly where possible.

For the Claude Code runtime, primary development is on **Windows 10** with Git Bash. The hooks and scripts are also tested on **macOS** — its stock bash 3.2 and BSD tools, with and without `jq` — and on **Linux**. All hooks use POSIX-compatible patterns (`grep -E`, not `grep -P`) and include fallbacks for missing tools. The `notify.sh` hook uses PowerShell for Windows toast notifications and is a no-op elsewhere — desktop notifications on macOS/Linux are not yet wired. Please file issues for any platform-specific breakage.

## Community

- **Discussions** — [GitHub Discussions](https://github.com/lannguyen2903/OpenAgenticGame-Studios/discussions) for questions, ideas, and showcasing what you've built
- **Issues** — [Bug reports and feature requests](https://github.com/lannguyen2903/OpenAgenticGame-Studios/issues)
- **Upstream project** — [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) discussions and issues

---

## Supporting This Project

OpenAgenticGame Studios and the upstream Claude Code Game Studios it builds on are free and open source. If they save you time or help you ship your game, consider supporting continued development:

<p>
  <a href="https://www.buymeacoffee.com/donchitos3"><img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee"></a>
  &nbsp;
  <a href="https://github.com/sponsors/Donchitos"><img src="https://img.shields.io/badge/GitHub%20Sponsors-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="GitHub Sponsors"></a>
</p>

- **[Buy Me a Coffee](https://www.buymeacoffee.com/donchitos3)** — one-time support
- **[GitHub Sponsors](https://github.com/sponsors/Donchitos)** — recurring support through GitHub

Sponsorships help fund time spent maintaining skills, adding new agents, keeping up with Claude Code and engine API changes, and responding to community issues.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Enhanced Version

This enhanced version by OpenAgenticGame maintains the same MIT license while providing additional attribution and documentation:

- **Original License**: [LICENSE](LICENSE) (Original by Donchitos)
- **Enhanced License**: [LICENSE_OPENAGENTICGAME.md](LICENSE_OPENAGENTICGAME.md) (Enhanced by OpenAgenticGame)
- **Copyright Details**: [COPYRIGHT.md](COPYRIGHT.md) (Full attribution and modifications)
- **License Comparison**: [LICENSE_COMPARISON.md](LICENSE_COMPARISON.md) (Detailed comparison)

### Attribution

When using this enhanced version, please provide attribution to both the original author and the enhanced contributors:

```text
Based on ["Claude Code Game Studios"](https://github.com/Donchitos/Claude-Code-Game-Studios) by Donchitos (MIT License)
Enhanced by "OpenAgenticGame" (MIT License)
```

---

*This project is under active development. The agent architecture, skills, and coordination system are solid and usable today — but there's more coming.*
