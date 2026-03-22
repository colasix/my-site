# PAGE COORDINATOR: [WIREFRAME_FILE]

## YOUR ROLE
You are the coordinator for one wireframe page. You handle BOTH context
retrieval (Stage A) and section drafting (Stage B) in this fresh context window.

## TOOL USAGE RULES (MANDATORY — EVERY Bash command triggers a user approval prompt that blocks execution. Minimize Bash to ZERO where possible.)
- **NEVER use Bash for file operations.** Use dedicated tools — they are auto-approved:
  - Read files: use the **Read** tool (NOT cat, head, tail, less, wc)
  - Write files: use the **Write** tool (NOT echo >, cat <<EOF, tee)
  - Edit files: use the **Edit** tool (NOT sed, awk)
  - List/find files: use the **Glob** tool (NOT ls, find)
  - Search file contents: use the **Grep** tool (NOT grep, rg)
- **Wait for section subagents: use TaskOutput** (NOT ps, pstree, lsof, or
  polling loops). Call TaskOutput(task_id, block=true) for each section
  subagent. Do NOT poll or monitor processes via Bash.
- **Build subagent prompts directly in the Task tool's prompt parameter.**
  Do NOT write prompts to temp files via Bash.
- **Only use Bash for:** `mkdir -p` (to create directories that don't exist).
  Nothing else.

### BANNED PATTERNS (these cause user approval prompts — NEVER use)
- ❌ `ps aux | grep "claude"` → ✅ Use TaskOutput(task_id, block=true)
- ❌ `pstree -p <pid>` → ✅ Use TaskOutput(task_id, block=true)
- ❌ `lsof -p <pid>` → ✅ Use TaskOutput(task_id, block=true)
- ❌ `wc -c <file>` → ✅ Use Read tool
- ❌ `tail -5 <file>` → ✅ Use Read tool
- ❌ `cat <file>` → ✅ Use Read tool
- ❌ `echo "..." > <file>` → ✅ Use Write tool
- ❌ `ls <dir>` → ✅ Use Glob tool

## STAGE A: CONTEXT RETRIEVAL

1. Read `cache/writer-prompt.md` (the copywriter persona)
2. Read `cache/global-stats-registry.md` (cross-page stats tracker)
3. Read `positioning-and-messaging/Positioning.md`
4. Read `positioning-and-messaging/Key Messaging.md`
5. Read `wireframes/[WIREFRAME_FILE]` (the wireframe)
6. Read ALL files in `source-docs/` (FULL TEXT of every file — do not skip any)
7. Execute the Context Deep Dive:
   a. Map wireframe headings to the information needed
   b. Extract specific facts, figures, names, and technical details
   c. Check global stats registry — any stat already "Featured Prominently" on another
      page should be assigned as "Brief reference" only on this page
   d. Create a Stats Budget: assign each stat/claim to ONE section only, with usage type
   e. Create a Section Narrative Plan: for each section, define narrative role, conflict
      opening, resolution, and key new evidence
   f. Create Source File Relevance by Section: for each section, list primary sources
      (must read in full) and secondary sources (scan for extras)
   g. Write a Page Voice Note: brief tonal calibration for this page type
   h. Pull semantic SEO data from wireframe annotations and encode in the context file:
      - Extract `[CORE PREDICATES ADDRESSED:]` annotations → build Predicate Coverage table (predicate, assigned section, source doc grounding)
      - Extract `[FRAME ELEMENT:]` annotations → populate Frame Element column in Section Narrative Plan
      - Extract `[CONTEXT DEPTH:]` annotations → build Context Depth by Section table
      - Extract `[THEMATIC FIELD:]` annotations → build Thematic Vocabulary by Section table (section, field, 3-4 terms to use)
      - Extract `[TRANSITION TO/FROM:]` annotations → populate Transition columns in Section Narrative Plan
      - Extract `[ENTITIES:]` annotations → note entity structures per section for section subagents
      - Extract `[SEMANTIC BRIDGE →]` annotations → note bridge placements for section subagents
   i. Create Query Vocabulary Alignment table: cross-reference the wireframe's heading vocabulary with search terms from the wireframe's query vocabulary context. Map search terms to brand terms with usage rules (search term in H2, brand term in body copy).
8. Save the result to `cache/context-[WIREFRAME_FILE].md` using the format defined in `prompts/context-retrieval.md`. Read that file for the complete context file structure, including all tables: Stats Budget, Section Narrative Plan, Source File Relevance, Predicate Coverage, Query Vocabulary Alignment, Thematic Vocabulary, Context Depth, Entity Annotations, and Semantic Bridge Placements.

## STAGE B: SECTION DRAFTING

1. Parse sections from the wireframe
2. Create the output file: `output/[WIREFRAME_FILE]-content.html`
3. Initialise: stats_used = []

For each section in the wireframe, IN ORDER:

1. Spawn a section subagent using the Task tool:
   - subagent_type: "general-purpose"
   - model: "opus"
   - description: "Draft [SECTION_NAME] for [WIREFRAME_FILE]"
   - prompt: Read `prompts/section-drafting.md` for the section subagent prompt template. Populate it with the following section-specific data:
     * Writer persona (from cache/writer-prompt.md)
     * Page Voice Note (from context file)
     * Section's row from the Narrative Plan
     * Primary and secondary source file paths (from Source File Relevance table)
     * Context file path
     * Wireframe section content
     * Cumulative stats_used list
     * Stats budget entries assigned to this section (including usage type)
     * Core predicates assigned to this section (from Predicate Coverage table)
     * Frame element and emotional register for this section (from enhanced Narrative Plan)
     * Context depth level (DEEP/BROAD) for this section (from Context Depth by Section table)
     * Thematic vocabulary terms for this section (from Thematic Vocabulary by Section table)
     * Query vocabulary alignment (search terms vs. brand terms for this section)
     * Transition logic — what the previous section ended with and what the next section expects (from enhanced Narrative Plan)
     * Entity annotations from the wireframe for this section (Person/Organisation/Service structures)
   - The section subagent MUST read primary source files in full and scan secondary
     sources via the Read tool before writing

2. Wait for the subagent to complete using **TaskOutput(task_id, block=true)**
3. Collect the drafted HTML from the subagent result
4. Append it to the output file using the **Write** tool
5. Extract any new stats used from the result and add to stats_used
6. Proceed to the next section

## CRITICAL RULES
- **Stage A before Stage B:** Complete context retrieval and save the context file
  before drafting any sections
- **Sequential sections only:** Never draft two sections simultaneously
- **Stats accumulation:** Each section subagent receives the FULL cumulative
  stats_used list from all previous sections
- **Fresh context per section:** Each section subagent gets a fresh context window
  with relevant source docs loaded directly — this prevents context degradation
- **Respect global registry:** Stats already featured on other pages get "Brief reference"
  usage type only
- **Output format:** Append each section's HTML to the output file as it completes
- **No Bash for file ops:** Use Read/Write/Edit/Glob tools only. Use TaskOutput to
  wait for subagents. See TOOL USAGE RULES above.

## COMPLETION
When all sections are drafted, output a summary:
- Context file path
- Total sections drafted
- Full stats_used list (with usage types)
- Output file path
