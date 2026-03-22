# Website Copy Generation Workflow

## Overview

This workflow automates the generation of website copy using a multi-step chain of prompts. It processes wireframe files section-by-section, maintaining a progress timeline and generating CMS-ready HTML output. Prompt templates and reference material are split into `prompts/` and `references/` directories for progressive context loading — each subagent loads only the files it needs.

---

## Project Structure

```
/project-root/
├── SKILL.md                                  # Orchestration hub (this file)
├── prompts/                                  # Prompt templates (loaded per-phase)
│   ├── writer-prompt-generator.md            # Phase 1 prompt
│   ├── context-retrieval.md                  # Stage A prompt + context file format
│   ├── section-drafting.md                   # Stage B subagent prompt template
│   ├── page-review.md                        # Stage C review subagent prompt
│   ├── coordinator.md                        # Stage A+B coordinator subagent prompt
│   └── formatting.md                         # Phase 3 formatting prompt
├── references/                               # Reference material (loaded as needed)
│   ├── semantic-seo-framework.md             # SEO rules, strategies, density limits
│   └── quality-checklist.md                  # Final validation criteria
├── positioning-and-messaging/                # Core strategy docs (always loaded)
│   ├── Positioning.md
│   └── Key Messaging.md
├── source-docs/                              # Topic-specific source material
│   ├── Co-founder Bios.md
│   ├── In-House QS.md
│   ├── The In-House Team.md
│   └── ...
├── wireframes/                               # Input wireframe files
│   ├── WIREFRAME 01_ HOMEPAGE.md
│   ├── WIREFRAME 03_ FULL HOME RENOVATIONS.md
│   └── ...
├── output/                                   # Generated content (auto-created)
│   ├── homepage-content.html
│   └── ...
├── cache/                                    # Workflow cache (auto-created)
│   ├── writer-prompt.md                      # Copywriter persona (per-section)
│   └── global-stats-registry.md              # Cross-page stats prominence tracker
└── progress.md                               # Live progress timeline
```

---

## Model Requirements Summary

| Phase | Model | Extended Thinking | Execution Mode | Rationale |
|-------|-------|-------------------|----------------|-----------|
| 0. Initialisation | `claude-sonnet-4-5` | OFF | Main Agent | Pure orchestration — mkdir, validation, no reasoning needed |
| 1. Writer Prompt Gen | `claude-opus-4-6` | ON | Main Agent | Deep synthesis — two strategy docs into one persona; cascades to all downstream output |
| 2. Batch Orchestration | `claude-sonnet-4-5` | OFF | **Batch Orchestrator Subagent** | Pure orchestration — launches coordinators + reviewers, updates registry; no creative reasoning |
| 2A. Deep Context Retrieval | `claude-opus-4-6` | ON | **Coordinator Subagent** | Deep multi-document analysis; cross-references 10+ source docs; builds stats budget + narrative plan; run-to-run consistency matters |
| 2B. Section Drafting | `claude-opus-4-6` | ON | **Subagent (Task tool, model: "opus")** | Multi-constraint creative reasoning — weaves narrative plan, stats budget, SEO, frame tone, source doc facts simultaneously; consistency ensures uniform voice across 80+ sections |
| 2C. Page Review | `claude-opus-4-6` | ON | **Review Subagent (Task tool, model: "opus")** | Holistic editorial judgment across 7 criteria + 9 SEO sub-checks; fresh context ensures maximum attention on content being judged |
| 3. Formatting | `claude-sonnet-4-5` | OFF | **Formatting Orchestrator Subagent** | Mechanical rule application (spelling, HTML cleanup); identical pass rate at ~5.5x lower cost |

**Model Routing Policy: Depth vs. Breadth**

This workflow routes each agent to the model that matches its reasoning profile:

- **Opus (`model: "opus"`)** for depth-first, multi-hop, and editorial judgment tasks:
  - Phase 1 (writer prompt synthesis), Stage 2A (deep context retrieval), Stage 2B (section drafting), Stage 2C (page review)
  - These tasks require: multi-document cross-referencing, simultaneous constraint satisfaction (stats budget + narrative plan + SEO + frame tone + source doc facts), run-to-run consistency for uniform voice, and holistic editorial judgment
  - Opus reliably extracts and weaves specific details rather than falling back on generic claims

- **Sonnet (`model: "sonnet"`)** for orchestration and mechanical tasks:
  - Phase 0 (initialisation), batch orchestration, Phase 3 (formatting)
  - Formatting and orchestration are mechanical execution with no open-ended reasoning

**DO NOT override these assignments.** Using Sonnet for section drafting or review risks inconsistent voice and shallow factual grounding. Using Opus for orchestration or formatting wastes cost on mechanical tasks.

**MANDATORY: Dedicated Tools Instead of Bash (All Subagents)**

Every subagent (batch orchestrators, coordinators, section drafters, reviewers, formatting orchestrator) MUST use dedicated tools instead of Bash for file operations. Bash commands trigger user approval prompts each time, while dedicated tools are auto-approved:
- **Read** (not cat/head/tail/less/wc), **Write** (not echo/cat <<EOF/tee), **Edit** (not sed/awk)
- **Glob** (not ls/find), **Grep** (not grep/rg)
- **TaskOutput** to wait for background tasks (not ps/pstree/lsof/polling loops)
- Only use Bash for: `mkdir -p` or system commands with no dedicated tool equivalent
- Build subagent prompts directly in the Task tool's `prompt` parameter — do NOT write to temp files via Bash

**BANNED BASH PATTERNS (apply to ALL subagents):**

These Bash patterns cause repeated user approval prompts and MUST NOT be used anywhere:

| ❌ NEVER do this | ✅ Do this instead |
|-----------------|-------------------|
| `ps aux \| grep "claude"` | `TaskOutput(task_id, block=true)` |
| `pstree -p <pid>` | `TaskOutput(task_id, block=true)` |
| `lsof -p <pid>` | `TaskOutput(task_id, block=true)` |
| `cat <file>` or `head`/`tail` | **Read** tool |
| `wc -c <file>` | **Read** tool (read the file directly) |
| `echo "..." > <file>` | **Write** tool |
| `cat <<EOF > <file>` | **Write** tool |
| `ls <dir>` or `find <dir>` | **Glob** tool |
| `grep <pattern> <file>` | **Grep** tool |
| `sed -i 's/...' <file>` | **Edit** tool |
| `echo "prompt" > /tmp/file.txt` then pass to Task | Pass prompt directly in Task tool's `prompt` parameter |

**Critical: Why Subagents for Stages 2B and 2C**

Section drafting (Stage 2B) uses subagents (Task tool) to ensure each section is drafted with **full source documents in context**. Without subagents:
- Source docs read early in the conversation fade from context as more content is generated
- Later sections may miss critical facts that were in source docs
- Subagents receive a fresh context window where source docs are loaded immediately before drafting

Page review (Stage 2C) uses subagents to ensure the reviewer has **maximum attention on the content being judged**. Without subagents:
- The main agent's context contains accumulated coordinator launch/result outputs from the current batch
- Prior page reviews from earlier wireframes can subtly bias editorial judgment — the same cross-page pollution avoided in Stages A and B
- The review subagent receives a clean context with only the relevant files loaded

**Critical: Why Batch Orchestrator for Phase 2**

Per-batch orchestration (launching coordinators, collecting results, launching reviewers, updating progress and stats) generates ~10-15KB of context per batch. Without a batch orchestrator, this accumulates unboundedly in the main agent across all batches, filling the context window after ~3 batches (~9 wireframes, ~80 sections). The batch orchestrator isolates this accumulation: each batch gets a fresh subagent that manages all coordinators and reviewers for that batch, then returns a brief ~100-word summary. The main agent sees only the summary, keeping its context footprint at ~110 lines per batch regardless of how many batches remain.

```
Main Agent (only sees batch summaries)
  └─ Batch Orchestrator (per batch, fresh context)
       ├─ Coordinator Subagents (per wireframe, Stage A+B, PARALLEL)
       │    └─ Section Subagents (per section, sequential within wireframe)
       └─ Review Subagents (per wireframe, Stage C, PARALLEL)
```

**Critical: Why Formatting Orchestrator for Phase 3**

Phase 3 processes all output files (16+), reading and rewriting each. Without a formatting orchestrator, the main agent accumulates the full content of every file in its context. A single formatting orchestrator subagent handles all files in a fresh context, returning only a brief summary.

---

## Workflow Execution

### PHASE 0: Initialisation

**EXECUTION REQUIREMENTS:**
- Model: `claude-sonnet-4-5`
- Extended thinking: OFF
- Rationale: Pure orchestration — mkdir, file validation, progress init. No reasoning needed.

**Purpose:** Set up the project structure and validate inputs.

**Steps:**
1. Create required directories if they don't exist: `output/`, `cache/`
2. Verify `positioning-and-messaging/` contains Positioning.md and Key Messaging.md
3. Verify `source-docs/` contains at least one document
4. Verify `wireframes/` contains at least one `.md` file
5. **Wireframe Discovery:** List all `.md` files in `wireframes/`, count sections in each
6. Initialise `progress.md` with the workflow timeline and wireframe progress table
7. Initialise `cache/global-stats-registry.md` with empty template

**Initialisation Script:**
```bash
mkdir -p output cache
touch progress.md
touch cache/global-stats-registry.md
```

**Initial Global Stats Registry Template:**
```markdown
# Global Stats Registry

## Purpose
Tracks which stats/claims are featured PROMINENTLY across pages to ensure
website-level variety. A stat featured prominently on one page should only
appear as a brief reference on other pages.

## Stats Prominence by Page
| Stat/Claim | Featured Prominently On | Brief Reference OK On |
|------------|------------------------|----------------------|
| (populated after each batch) | | |

## Rules
- Each major stat should be "featured prominently" on ONE page only
- Brief references (1-2 words, no explanation) are acceptable on other pages
- The coordinator for each wireframe reads this registry during Stage A
  and factors it into the stats budget
```

**Initial Progress Template:**
```markdown
# Website Copy Generation Progress

## Status: INITIALISING

### Timeline
| Phase | Status | Started | Completed |
|-------|--------|---------|-----------|
| 0. Initialisation | 🔄 In Progress | [TIMESTAMP] | - |
| 1. Writer Prompt Generation | ⏳ Pending | - | - |
| 2. Content Drafting & Review | ⏳ Pending | - | - |
| 3. Final Formatting | ⏳ Pending | - | - |

### Wireframe Progress
| File | Sections | Context Cached | Drafted | Reviewed | Formatted | Status |
|------|----------|----------------|---------|----------|-----------|--------|
| [wireframe_1.md] | [count] | ⏳ Pending | 0/[count] | ⏳ Pending | ⏳ Pending | ⏳ Pending |
| [wireframe_2.md] | [count] | ⏳ Pending | 0/[count] | ⏳ Pending | ⏳ Pending | ⏳ Pending |
...

### Current Activity
Initialising workflow...

### Log
- [TIMESTAMP] Workflow started
- [TIMESTAMP] Discovered [N] wireframes with [M] total sections
- [TIMESTAMP] Initialised global stats registry
```

**Section Counting Rules:**
- Sections are identified by `### [SECTION` headings in wireframe files
- Count all section headings to determine total sections per wireframe

---

### PHASE 1: Writer Prompt Generation

**EXECUTION REQUIREMENTS:**
- Model: `claude-opus-4-6`
- Extended thinking: ON
- Rationale: High-leverage synthesis task; writer prompt quality cascades to all downstream output. Synthesising two strategy documents into a coherent copywriter persona with extracted tone attributes, vocabulary, and narrative rules requires multi-constraint reasoning.

**Purpose:** Generate a custom system prompt for the copywriter by reading the core strategy documents directly.

**Input:**
- `positioning-and-messaging/Positioning.md` (full text)
- `positioning-and-messaging/Key Messaging.md` (full text)

**Output:** `cache/writer-prompt.md`

**Execution:** Read `prompts/writer-prompt-generator.md` and execute the prompt within.

---

### **PHASE 2: Iterative Content Drafting**

**EXECUTION REQUIREMENTS:**
- Model: Mixed — Opus for Stages A, B, C; Sonnet for batch orchestration
- Extended thinking: ON (for Stages A, B, C)
- Rationale: Context retrieval, section drafting, and page review require Opus for deep multi-document reasoning, consistent voice, and holistic editorial judgment. Batch orchestration uses Sonnet for pure orchestration.

**Purpose:** Gather specific factual context from source docs, generate website copy section-by-section, then review for cohesion.

**Input:**
- `cache/writer-prompt.md` (System Persona)
- `cache/global-stats-registry.md` (Cross-page stats tracker)
- `positioning-and-messaging/Positioning.md` (Core Strategy)
- `positioning-and-messaging/Key Messaging.md` (Core Strategy)
- `source-docs/*` (Full Source Material)
- `wireframes/` directory

**Output:**
- `cache/context-[filename].md` (Page-specific factual grounding)
- `output/[filename]-content.html` (Drafted content)

**Note:** Wireframe discovery (listing files, counting sections) is completed in Phase 0. The wireframe progress table in `progress.md` is already populated before Phase 2 begins.

---

#### **STAGE A: Deep Context Retrieval (Coordinator Subagent)**

**Purpose:** Before writing, read ALL source files and create a page-specific "Factual Brief" with stats budget, per-section narrative plan, source file priorities, page voice note, and extracted facts. Stage A is executed by the coordinator subagent (not the main agent) so each wireframe gets a fresh context window with no cross-page pollution.

The full Stage A prompt template and context file format are in `prompts/context-retrieval.md`.

---

#### **STAGE B: Iterative Section Drafting (SUBAGENT REQUIRED)**

**CRITICAL: Fresh Context via Subagent**

Each section MUST be drafted using the **Task tool** to spawn a subagent. This ensures:
1. Fresh context window for each section
2. Relevant source documents loaded directly (not summaries)
3. No context degradation across sections

The section subagent prompt template is in `prompts/section-drafting.md`. The coordinator reads this and populates it per-section.

**Subagent Invocation (Per Section):**

```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "opus"
- description: "Draft [SECTION_NAME] for [WIREFRAME_FILE]"
- prompt: [Populated from prompts/section-drafting.md template]
```

**Coordinator Responsibilities (Coordinator Subagent):**

The coordinator subagent manages the section subagents and:

1. **Before each subagent call:**
   - Consult the context file's Section Narrative Plan and Source File Relevance table
   - Determine primary and secondary source files for this section
   - List stats already used in previous sections
   - Extract the specific wireframe section content
   - Include the Page Voice Note

2. **After each subagent returns:**
   - Append the returned HTML to `output/[filename]-content.html`
   - Update progress.md with drafted section count
   - Add the stats used to the "Stats Already Used" list for subsequent sections

3. **Tracking stats across sections:**
   Maintain a running list in the conversation:
   ```
   ## Stats Used So Far (HOMEPAGE)
   - Hero: "30 years" (trust bar)
   - Core Conflict: "600-800 projects", "20-year pricing template", "in-house QS"
   - Service Pillars: [none major]
   ...
   ```

---

#### **STAGE C: Page-Level Review (SUBAGENT REQUIRED)**

**CRITICAL: Fresh Context via Subagent**

Page review MUST be executed using the **Task tool** to spawn a review subagent. This ensures:
1. Fresh context window — maximum attention on the content being judged
2. No accumulated coordinator outputs or prior page reviews polluting judgment
3. No cross-page editorial bias from reviewing other wireframes in the same batch

**Trigger:** Execute AFTER all sections are drafted for a wireframe, BEFORE moving to next wireframe.

The review subagent prompt template is in `prompts/page-review.md`.

**Subagent Invocation (Per Wireframe):**

```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "opus"
- description: "Page review for [WIREFRAME_FILE]"
- prompt: [Populated from prompts/page-review.md template]
```

**Batch Orchestrator Responsibilities After Review Subagent Returns:**

1. Verify the edited output file has been saved correctly
2. Update progress.md:
   - Set "Reviewed" to "Yes" for this wireframe
   - Mark wireframe Status as ✅ Drafted & Reviewed
   - Add log entry: "[TIMESTAMP] Page review complete for [WIREFRAME_FILE]"

---

#### **Phase 2 Iteration Logic (Batch Orchestrator Pattern)**

```
# Each batch of 2-3 wireframes is managed by a BATCH ORCHESTRATOR SUBAGENT.
# The main agent launches one batch orchestrator at a time (blocking),
# receives a brief summary (~100 words), and proceeds to the next batch.
# This prevents context accumulation in the main agent.
#
# Inside each batch orchestrator (fresh context):
#   - Coordinators run in PARALLEL (one per wireframe, Stage A+B)
#   - Reviews run in PARALLEL (one per wireframe, Stage C)
#   - Global stats registry updated before returning

wireframes = list(wireframes/)
batches = chunk(wireframes, batch_size=3)  # Max 3 concurrent wireframes

FOR each batch in batches:

    # ─── LAUNCH BATCH ORCHESTRATOR (BLOCKING) ───
    # One subagent per batch. Fresh context. Manages everything.
    batch_result = Task(
        subagent_type="general-purpose",
        model="sonnet",
        run_in_background=false,  # BLOCKING — batches are sequential
        description="Batch orchestrator: [batch wireframe names]",
        prompt=build_batch_orchestrator_prompt(batch_wireframes)
        # See "Batch Orchestrator Subagent Prompt" section below
    )

    # ─── VERIFY BATCH STATE ───
    # Quick-read progress.md to confirm batch completed correctly
    READ progress.md
    VERIFY all wireframes in batch show "Drafted & Reviewed"

UPDATE progress.md: Phase 2 complete
```

**Main Agent Responsibilities During Phase 2:**

The main agent's role is minimal:
1. Group wireframes into batches of 3 (or fewer for the final batch)
2. Launch ONE batch orchestrator Task per batch (blocking)
3. Receive brief summary (~100 words) from each batch orchestrator
4. Quick-read progress.md to verify batch state
5. Proceed to next batch
6. After all batches: mark Phase 2 complete in progress.md

The main agent does NOT:
- Read or update the global stats registry (the batch orchestrator handles this)
- Launch coordinators or review subagents directly (the batch orchestrator handles this)
- Track per-section or per-wireframe progress (the batch orchestrator handles this)

---

#### **Coordinator Subagent**

Each coordinator subagent manages **Stage A + Stage B** for a single wireframe in a fresh context window. It first creates the context file (stats budget, fact extraction, narrative plan, source priorities, page voice note), then drafts sections **sequentially**, spawning one section subagent at a time to maintain stats tracking.

The coordinator prompt template is in `prompts/coordinator.md`. It references `prompts/context-retrieval.md` for the context file format and `prompts/section-drafting.md` for section subagent prompts.

**Coordinator Invocation:**
```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "opus"
- run_in_background: true
- description: "Stage A+B for [WIREFRAME_FILE]"
- prompt: [Populated from prompts/coordinator.md template]
```

---

#### **Batch Orchestrator Subagent Prompt**

Each batch orchestrator manages **all phases (Stages A, B, C + stats registry update)** for a batch of 2-3 wireframes in a fresh context window. It reads the prompt template files to construct coordinator and review subagent prompts, then manages all subagents for its batch.

**Batch Orchestrator Invocation:**
```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "sonnet"
- run_in_background: false  # BLOCKING — batches are sequential for stats registry consistency
- description: "Batch orchestrator: [wireframe1], [wireframe2], [wireframe3]"
- prompt: [See template below]
```

**Batch Orchestrator Prompt Template:**
```
# BATCH ORCHESTRATOR: [WIREFRAME_1], [WIREFRAME_2], [WIREFRAME_3]

## YOUR ROLE
You are a Batch Orchestrator. You manage the complete content drafting pipeline
for a batch of wireframes. You launch coordinator subagents (Stage A+B) and
review subagents (Stage C), track progress, update the global stats registry,
and return a brief summary to the main agent.

## WIREFRAMES IN THIS BATCH
1. [WIREFRAME_FILE_1]
2. [WIREFRAME_FILE_2]
3. [WIREFRAME_FILE_3]

## STEP 1: READ CURRENT STATE
- Read `progress.md` to understand current workflow state
- Read `cache/global-stats-registry.md` for cross-page stats state

## STEP 2: READ PROMPT TEMPLATES
- Read `prompts/coordinator.md` for the coordinator subagent prompt template
- Read `prompts/page-review.md` for the review subagent prompt template
- Read `prompts/context-retrieval.md` for the context file format (referenced by coordinator)
- Read `prompts/section-drafting.md` for the section drafting template (referenced by coordinator)
- You will fill in wireframe-specific placeholders ([WIREFRAME_FILE], [filename])
  when building each subagent's prompt

## STEP 3: LAUNCH COORDINATOR SUBAGENTS (PARALLEL)
For each wireframe in this batch, launch a coordinator subagent:
- subagent_type: "general-purpose"
- model: "opus"
- run_in_background: true  # All coordinators run in PARALLEL
- description: "Stage A+B for [WIREFRAME_FILE]"
- prompt: The Coordinator Prompt Template from prompts/coordinator.md, with
  [WIREFRAME_FILE] replaced for this specific wireframe

Launch ALL coordinators simultaneously (in a single message with multiple
Task tool calls), then wait for each to complete using TaskOutput(task_id, block=true).

## STEP 4: PROCESS COORDINATOR RESULTS
For each completed coordinator:
- Verify the context file was created: `cache/context-[filename].md` (use **Read** tool)
- Verify the output file was created: `output/[filename]-content.html` (use **Read** tool)
- Update progress.md (use **Edit** tool): mark "Context Cached" as ✅ and drafted sections count
- Log completion

## STEP 5: LAUNCH REVIEW SUBAGENTS (PARALLEL)
For each wireframe in this batch, launch a review subagent:
- subagent_type: "general-purpose"
- model: "opus"
- run_in_background: true  # All reviews run in PARALLEL
- description: "Page review for [WIREFRAME_FILE]"
- prompt: The Review Subagent Prompt Template from prompts/page-review.md, with
  [WIREFRAME_FILE] and [filename] replaced for this specific wireframe

Launch ALL review subagents simultaneously, then wait for each to complete
using TaskOutput(task_id, block=true).

## STEP 6: PROCESS REVIEW RESULTS
For each completed review:
- Verify the output file has been updated (use **Read** tool)
- Update progress.md (use **Edit** tool): mark "Reviewed" as ✅ Yes, status as "✅ Drafted & Reviewed"
- Log completion

## STEP 7: UPDATE GLOBAL STATS REGISTRY
After all wireframes in this batch are drafted and reviewed:
- Read each context file's Stats Budget table (use **Read** tool)
- Extract stats marked "Prominent"
- Read `cache/global-stats-registry.md` (use **Read** tool)
- Append the prominent stats from this batch (use **Edit** tool):
  | [stat] | [wireframe page name] | [other pages where brief ref OK] |
- Save the updated registry

## STEP 8: RETURN BRIEF SUMMARY
Return a structured summary in this exact format (keep it under 150 words):

```
BATCH COMPLETE: [wireframe1], [wireframe2], [wireframe3]
- Wireframes processed: [count]
- Total sections drafted: [count]
- Review edits applied: [count per wireframe]
- Stats registered: [list new prominent stats added to global registry]
- Errors: [none / description]
```

## CRITICAL RULES
- **Coordinators before reviews:** ALL coordinator subagents must complete before
  ANY review subagent is launched. Reviews need the drafted content to exist.
- **All state to files:** Write all progress to progress.md and stats to
  global-stats-registry.md. The main agent and future batch orchestrators
  depend on file state, not return values.
- **Brief return only:** Your return message must be under 150 words. The main
  agent's context must stay small. All detail goes into files.
- **Parallel coordinators:** Launch all coordinators in a single message with
  multiple Task tool calls (run_in_background: true for each).
- **Parallel reviews:** Launch all reviews in a single message with multiple
  Task tool calls (run_in_background: true for each).
- **Sequential batches:** You handle ONE batch only. The main agent handles
  batch sequencing to ensure global stats registry consistency.

## TOOL USAGE RULES (MANDATORY — EVERY Bash command triggers a user approval prompt that blocks execution. Minimize Bash to ZERO where possible.)
- **NEVER use Bash for file operations.** Use dedicated tools — they are auto-approved:
  - Read files: use the **Read** tool (NOT cat, head, tail, less, wc)
  - Write files: use the **Write** tool (NOT echo >, cat <<EOF, tee)
  - Edit files: use the **Edit** tool (NOT sed, awk)
  - List/find files: use the **Glob** tool (NOT ls, find)
  - Search file contents: use the **Grep** tool (NOT grep, rg)
- **Wait for background tasks: use TaskOutput** (NOT ps, pstree, lsof, or
  polling loops). Call TaskOutput(task_id, block=true) to wait for each
  background task to complete. Do NOT poll or monitor processes via Bash.
- **Only use Bash for:** `mkdir -p` (to create directories). Nothing else.
- **Build subagent prompts directly in the Task tool's prompt parameter.**
  Do NOT write prompts to temp files via Bash. Construct the prompt as a
  string and pass it directly.

### BANNED PATTERNS (these cause user approval prompts — NEVER use)
- ❌ `ps aux | grep "claude"` → ✅ Use TaskOutput(task_id, block=true)
- ❌ `pstree -p <pid>` → ✅ Use TaskOutput(task_id, block=true)
- ❌ `lsof -p <pid>` → ✅ Use TaskOutput(task_id, block=true)
- ❌ `ls /private/tmp/claude-501/...` → ✅ Use TaskOutput to wait, then Read tool
- ❌ `wc -c <file>` → ✅ Use Read tool (read the file directly)
- ❌ `tail -5 <file>` → ✅ Use Read tool
- ❌ `cat <file>` → ✅ Use Read tool
- ❌ `echo "..." > /tmp/prompt.txt` → ✅ Pass prompt directly in Task tool parameter
- ❌ `echo "..." > <file>` → ✅ Use Write tool
- ❌ `ls <dir>` → ✅ Use Glob tool
```

---

### PHASE 3: Technical Formatting

**EXECUTION REQUIREMENTS:**
- Model: `claude-sonnet-4-5`
- Extended thinking: OFF
- Rationale: Mechanical rule application (spelling, HTML cleanup); identical pass rate at ~5.5x lower cost than Opus

**Purpose:** Convert drafted content to clean, CMS-ready HTML with NZ spelling.

**Input:** Files in `output/` directory (draft HTML)

**Output:** Formatted files overwrite originals in `output/`

Read `prompts/formatting.md` and execute per output file. SEO strategy rules and density limits are in `references/semantic-seo-framework.md`.

**Formatting Orchestrator Invocation:**

The main agent launches a single Formatting Orchestrator subagent to process all output files. This prevents context accumulation from reading and rewriting 16+ files in the main agent.

```
Task tool parameters:
- subagent_type: "general-purpose"
- model: "sonnet"
- run_in_background: false  # BLOCKING — main agent waits for formatting to complete
- description: "Phase 3 formatting orchestrator"
- prompt: |
    # FORMATTING ORCHESTRATOR

    ## YOUR ROLE
    You are a Formatting Orchestrator. You process ALL output files in `output/`
    to apply technical formatting rules. Process each file sequentially.

    ## STEPS
    1. Read `progress.md` to identify all wireframes with status "✅ Drafted & Reviewed"
    2. List all `-content.html` files in `output/` (use **Glob** tool, NOT ls)
    3. Read `prompts/formatting.md` for the formatting rules
    4. For each file, apply the formatting rules from `prompts/formatting.md`
    5. Update progress.md after each file (use **Edit** tool): mark "Formatted" as ✅
    6. After all files: set Phase 3 to ✅ Complete in progress.md
    7. Return a brief summary: files formatted, issues fixed, errors (if any)

    ## TOOL USAGE RULES (MANDATORY — EVERY Bash command triggers a user approval prompt)
    - Use **Read** tool to read files (NOT cat/head/tail/wc via Bash)
    - Use **Write** tool to write files (NOT echo/cat <<EOF via Bash)
    - Use **Edit** tool for targeted changes (NOT sed/awk via Bash)
    - Use **Glob** tool to list files (NOT ls/find via Bash)
    - Only use Bash for mkdir or system commands with no dedicated tool
```

---

## Key Implementation Notes

1. **Subagent Context Loading:** Each subagent MUST use the Read tool to load source documents before writing. The prompt explicitly instructs this. Section subagents load primary sources in full and scan secondary sources, as directed by the Source File Relevance table in the context file.

2. **Stats Tracking:** The coordinator subagent maintains the `stats_used` list for its wireframe and passes it to each section subagent to prevent repetition.

3. **Source File Prioritisation:** The context file's "Source File Relevance by Section" table directs each section subagent to the most relevant source docs as primary (full read) and secondary (scan). This focuses subagent context on the most relevant material rather than diluting attention across everything. The secondary scan preserves the safety net of finding unexpected facts.

4. **Page-Level Parallelisation:** Wireframes are processed in batches of 2-3 simultaneously. Each wireframe has independent stats budgets, context files, and output files — zero cross-page dependencies. Within each wireframe, sections MUST be drafted sequentially so each subagent receives the cumulative `stats_used` list. The batch orchestrator launches coordinator subagents with `run_in_background: true`, waits for the batch to complete, then launches review subagents for Stage C (also in parallel).

5. **Coordinator Subagents:** Each wireframe in a parallel batch gets its own coordinator subagent (`model: "opus"`, `run_in_background: true`). The coordinator handles both Stage A (context retrieval — reads ALL source docs, creates stats budget, narrative plan, source priorities, and page voice note) and Stage B (sequential section drafting via section subagents). This gives each wireframe a fresh context window with no cross-page pollution. The batch orchestrator handles orchestration (launching coordinators, launching review subagents, updating the global stats registry, and updating progress.md).

6. **Review Subagents:** Stage C page review uses a dedicated review subagent per wireframe (`model: "opus"`, `run_in_background: true`). Reviews within a batch run in parallel. This ensures the reviewer has maximum attention on the content being judged, with no accumulated coordinator outputs or prior page reviews polluting editorial judgment. The batch orchestrator launches all review subagents simultaneously, collects results, and updates progress.md.

7. **Global Stats Registry:** After each batch completes (all wireframes in batch drafted and reviewed), the batch orchestrator updates `cache/global-stats-registry.md` with stats that were featured prominently on pages in that batch. Coordinators for the next batch read this registry during Stage A and adjust their stats budgets accordingly, ensuring website-level variety.

8. **Section Narrative Plan:** Each section subagent receives its assigned narrative role, conflict framing, resolution, and key new evidence from the Section Narrative Plan. This gives subagents explicit knowledge of where they sit in the page arc without needing to infer it from a bare wireframe heading. The review subagent validates adherence to the plan.

9. **Batch Orchestrator Pattern:** Each batch of 2-3 wireframes is managed by a dedicated batch orchestrator subagent (`model: "sonnet"`, blocking). The batch orchestrator reads the prompt template files from `prompts/` to construct coordinator and review subagent prompts, launches coordinator subagents in parallel (`model: "opus"`, `run_in_background: true`), waits for all coordinators, then launches review subagents in parallel (`model: "opus"`, `run_in_background: true`), waits for all reviews, updates the global stats registry, and returns a brief summary. This prevents context accumulation in the main agent: per-batch orchestration generates ~10-15KB of context, but each batch orchestrator gets a fresh context window, and the main agent only sees the ~100-word summary. Stage C reviews are parallelised within each batch (they were sequential in v5.0), saving ~4-6 minutes per batch.

10. **Formatting Orchestrator:** Phase 3 formatting is managed by a single formatting orchestrator subagent (`model: "sonnet"`, blocking). It reads the formatting rules from `prompts/formatting.md` and processes all output files sequentially in a fresh context, preventing context accumulation from 16+ file reads/writes in the main agent.

---

## Progress Tracking Schema

The `progress.md` file maintains the live state of the workflow:

```markdown
# Website Copy Generation Progress

## Status: [INITIALISING | IN PROGRESS | COMPLETE | ERROR]

### Timeline
| Phase | Status | Started | Completed | Duration |
|-------|--------|---------|-----------|----------|
| 0. Initialisation | ✅ Complete | 2024-01-15 09:00 | 2024-01-15 09:01 | 1m |
| 1. Writer Prompt Generation | ✅ Complete | 2024-01-15 09:01 | 2024-01-15 09:03 | 2m |
| 2. Content Drafting & Review | 🔄 In Progress | 2024-01-15 09:03 | - | - |
| 3. Final Formatting | ⏳ Pending | - | - | - |

### Wireframe Progress
| File | Sections | Context Cached | Drafted | Reviewed | Formatted | Status |
|------|----------|----------------|---------|----------|-----------|--------|
| homepage.md | 6 | ✅ Yes | 6/6 | ✅ Yes | ⏳ Pending | ✅ Drafted & Reviewed |
| about.md | 4 | ✅ Yes | 2/4 | ⏳ Pending | ⏳ Pending | 🔄 Drafting |
| services.md | 8 | ⏳ Pending | 0/8 | ⏳ Pending | ⏳ Pending | ⏳ Pending |
| contact.md | 3 | ⏳ Pending | 0/3 | ⏳ Pending | ⏳ Pending | ⏳ Pending |

### Current Activity
🖊️ Drafting: **Services Overview Section** in about.md

### Page Context (Current Wireframe)
**Stats Used:**
- "30 years experience" used in Hero
- "in-house QS" used in Trust section

**SEO Keywords Used:**
- "Auckland renovations" used in Hero

### Section Queue (Current File: about.md)
| Section | Status |
|---------|--------|
| Hero | ✅ Complete |
| Our Story | ✅ Complete |
| Team | 🔄 In Progress |
| Values | ⏳ Pending |
| --- | --- |
| Page Review | ⏳ After all sections |

### Global Stats Registry Status
Last updated after batch: [batch number]
Stats featured prominently: [count]

### Log (Recent)
- [2024-01-15 09:25] Page review complete for homepage.md (via review subagent)
- [2024-01-15 09:25] Updated global stats registry with homepage prominent stats
- [2024-01-15 09:22] Drafted CTA for homepage.md
- [2024-01-15 09:20] Drafted Testimonials for homepage.md
- [2024-01-15 09:17] Drafted Features for homepage.md
- [2024-01-15 09:15] Drafted Services Overview for homepage.md
- [2024-01-15 09:12] Drafted Value Proposition for homepage.md
- [2024-01-15 09:08] Drafted Hero for homepage.md
- [2024-01-15 09:03] Started Phase 2: Content Drafting & Review
- [2024-01-15 09:01] Generated writer prompt (extended thinking ON)

### Errors
[None]
```

---

## Execution Commands

### Full Workflow Execution
```
Execute the complete website copy generation workflow:

1. Run Phase 0: Initialisation (including global stats registry)
2. Run Phase 1: Writer Prompt Generation (extended thinking ON)
3. Run Phase 2: Content Drafting & Review
   - Group wireframes into batches of 3
   - For each batch: launch ONE Batch Orchestrator subagent (blocking)
   - Batch orchestrator manages coordinators (parallel), reviews (parallel),
     and global stats registry update
   - Main agent receives brief summary, verifies progress.md, proceeds to next batch
4. Run Phase 3: Technical Formatting
   - Launch ONE Formatting Orchestrator subagent (blocking)
   - Formatting orchestrator processes all output files sequentially

Update progress.md after EVERY step.
Stop and report if any phase fails validation.
```

### Single Phase Execution
```
Execute Phase [N] of the website copy generation workflow.
Read the SKILL.md file for phase requirements.
Update progress.md upon completion.
```

### Resume From Checkpoint
```
Resume the website copy generation workflow from the last incomplete step.

1. Read progress.md to determine current state
2. Read cache/global-stats-registry.md for cross-page stats state
3. Determine resume point:

   a. DRAFTED BUT NOT REVIEWED wireframes exist:
      → Launch a batch orchestrator with ONLY Stage C (reviews) for those wireframes
      → The batch orchestrator prompt should skip Steps 3-4 (coordinators) and
        proceed directly to Step 5 (review subagents) for the affected wireframes

   b. PENDING wireframes remain (not yet drafted):
      → Group pending wireframes into batches of 3
      → Launch full batch orchestrators for each batch (blocking, sequential)

   c. ALL wireframes show "✅ Drafted & Reviewed" but formatting pending:
      → Launch the Formatting Orchestrator subagent for Phase 3

   d. ALL wireframes formatted:
      → Workflow complete — verify and mark done

4. Update progress.md after each step
5. Stop and report if any phase fails validation
```

### Regenerate Single Section
```
Regenerate the [SECTION_NAME] section for [WIREFRAME_FILE].
Use the existing writer prompt from cache/writer-prompt.md.
Consult the Section Narrative Plan in cache/context-[filename].md.
Replace only that section in the output file.
Update progress.md to reflect the regeneration.
```

---

## Error Handling

### Common Errors and Recovery

| Error | Cause | Recovery |
|-------|-------|----------|
| Missing source docs | Empty source-docs/ folder | Add positioning/messaging documents |
| No wireframes found | Empty wireframes/ folder | Add wireframe .md files |
| Section parse failure | Inconsistent heading structure | Standardise wireframe headings to ## format |
| Spelling inconsistency | Mixed US/NZ spelling in output | Re-run Phase 3 formatting |
| Repetition detected | Same stat used multiple times | Re-run Page Review with stricter checks |
| Cross-page stat overuse | Same stat featured on multiple pages | Check global-stats-registry.md, re-run affected Stage A |
| Narrative plan deviation | Section ignores assigned conflict/resolution | Re-run section subagent with emphasis on plan adherence |

### Error Logging
When an error occurs:
1. Update progress.md Status to ERROR
2. Add error details to the Errors section
3. Log the error with timestamp
4. Preserve partial work in output files

---

## Quality Validation

The full quality checklist is in `references/quality-checklist.md`. Run all checks before marking workflow as complete.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 5.0 | — | Previous monolithic version |
| 6.0 | 2026-02-22 | **MAJOR — Structural restructure:** Split monolithic SKILL.md into orchestration hub + 6 prompt templates (prompts/) + 2 reference files (references/). Deduplicated context file format (single source of truth in prompts/context-retrieval.md). No functional changes to workflow logic, prompts, or output. |
| 6.1 | 2026-02-22 | **Model routing update:** Replaced blanket Opus mandate with depth-vs-breadth routing policy. Opus retained for depth-first and editorial tasks (Phase 1 writer prompt, Stage 2A context retrieval, Stage 2B section drafting, Stage 2C page review). Sonnet assigned to orchestration and mechanical tasks (Phase 0 init, batch orchestration, Phase 3 formatting). |
