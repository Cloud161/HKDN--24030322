---
name: visual-dashboard
description: Convert a business-plan Markdown file into a professional, visual, single-page startup website using only facts in the source. Use KPI cards, CSS charts, SWOT cards, timelines, and comparison visuals when the source data supports them. Do not invent, estimate, or silently change business information.
---

# Visual Dashboard Skill

## Purpose

Turn a student's business plan in Markdown into a clear, professional, visual one-page HTML website.

This skill is designed for non-programming students. Prefer simple, reliable HTML and CSS over frameworks or complex dependencies.

## Required input

At minimum, read the business-plan Markdown file provided by the user, for example:

- `business_plan.md`

Optional visual references may include:

- screenshots exported from Gamma
- brand colors explicitly stated by the user
- logos or images supplied by the user

Treat the Markdown business plan as the authoritative source for business content unless the user explicitly says otherwise.

## Core rules

1. **Do not invent information.**
   - Never create revenue, customer counts, percentages, market size, prices, dates, competitors, SWOT items, or other facts that are absent from the source.
   - Never convert qualitative statements into numerical values unless the source already contains those values.
   - Never fill missing values with "reasonable" estimates.

2. **Preserve meaning.**
   - You may shorten text for presentation, but do not change its meaning.
   - Keep names, numbers, currencies, dates, units, and percentages exactly aligned with the source.

3. **Visualize only supported data.**
   - Create a chart only when the source contains data suitable for that chart.
   - If the data is insufficient, use a text card, comparison card, or list instead.
   - Never create decorative fake statistics.

4. **Keep the website lightweight.**
   - Default to HTML + CSS only.
   - Do not use React, Vue, npm, build tools, databases, APIs, or external JavaScript libraries unless the user explicitly requests them.
   - Do not require user registration or paid services.

5. **Protect sensitive information.**
   - If the Markdown contains passwords, API keys, personal IDs, private phone numbers, private addresses, account numbers, or confidential internal data, do not display them in the website.
   - Replace sensitive values with a clear placeholder such as `[REDACTED]` and tell the user what was redacted.

## Workflow

### Step 1 — Read and map the source

Read the entire Markdown file before editing or creating the website.

Identify only sections that actually exist, such as:

- Business Idea
- Vision
- Problem / Pain Point
- Target Customer
- Product / Service
- Value Proposition
- Business Model
- Pricing
- Competitors
- Competitive Advantages
- Revenue Model
- Startup Cost
- Operating Cost
- Sales
- Gross Profit
- Break-even
- Marketing Strategy
- SWOT
- Risks
- 90-Day Action Plan

Do not add a missing section merely because it appears in this list.

### Step 2 — Decide which content should be visual

Use the following rules.

#### KPI cards

Use KPI cards for explicit business metrics such as:

- price
- startup cost
- monthly operating cost
- estimated sales
- gross profit
- break-even point
- customer count

Rules:

- Use the exact number and unit from the source.
- Do not calculate a new KPI unless the user explicitly asks for calculation.
- If a calculation is requested, show the formula or clearly label the result as calculated.

#### Horizontal bar chart

Use a horizontal bar chart when the source contains comparable numeric values, for example:

- customer segments
- competitor scores already provided by the student
- sales by product
- monthly costs by category

Rules:

- Use CSS bars.
- Label every bar with its original value.
- Do not normalize or rescale values in a way that hides the original number.
- If values use different units, do not place them in the same chart.

#### Donut / pie-style chart

Use a CSS `conic-gradient` donut only when:

- the source contains percentages or explicit parts of a whole, and
- the relationship is genuinely part-to-whole.

Before creating the chart:

- verify the percentage values.
- If the values are intended to represent the full whole but do not total 100%, do not silently correct them.
- Display the values as written and add a small note such as `Source values do not total 100%`.

Do not infer missing percentages.

#### Trend / timeline

Use a timeline when the source contains explicit dates, phases, months, or ordered milestones.

Use an inline SVG or CSS-based visual only if the source contains sufficient ordered numeric data for a trend.

Do not create forecast curves from descriptive text.

#### SWOT

Create a four-card SWOT layout only if the source explicitly includes SWOT content.

Use exactly these four groups:

- Strengths
- Weaknesses
- Opportunities
- Threats

Do not generate missing SWOT points.

#### Competitor comparison

Create comparison cards or a table if the source explicitly contains competitors and comparison criteria.

Do not invent competitor scores, rankings, market shares, or prices.

### Step 3 — Build the page structure

Create a single-page business website using only sections supported by the source.

Recommended order when those sections exist:

1. Hero
2. Business idea / value proposition
3. Problem and solution
4. Target customer
5. Key metrics
6. Product / service
7. Business model / pricing
8. Market / competitor comparison
9. SWOT
10. Marketing strategy
11. Financial information
12. Risks and solutions
13. Timeline / action plan

Do not force this order if the source structure clearly works better another way.

### Step 4 — Visual design

Use a professional startup-presentation style.

Default visual principles:

- strong visual hierarchy
- generous spacing
- readable typography
- rounded cards
- responsive grid
- clear section headings
- high contrast
- restrained use of gradients
- consistent card radius and spacing
- no excessive animation
- no flashing effects

For desktop and tablet:

- use responsive CSS
- avoid horizontal scrolling
- keep text widths readable

For mobile:

- stack cards vertically
- keep charts readable
- avoid tiny labels

### Step 5 — Gamma visual reference

If Gamma screenshots are supplied:

Use them only as visual references for:

- overall mood
- typography hierarchy
- spacing
- card shape
- color direction
- visual density

Do not copy business facts from screenshots unless the user explicitly identifies those facts as source content.

The Markdown remains the authoritative content source by default.

### Step 6 — Output files

Default output:

- `index.html`
- `style.css`

Keep the project simple.

If files with these names already exist:

- inspect them first
- improve them rather than unnecessarily rebuilding everything
- preserve correct existing content

### Step 7 — Final fact check

Before finishing, compare the website against the Markdown source.

Check all of the following:

- [ ] Every displayed number exists in the source or is explicitly labeled as a requested calculation.
- [ ] Names and business terms match the source.
- [ ] No new competitor, statistic, market fact, or claim was invented.
- [ ] Percentages match the source.
- [ ] Currency and units match the source.
- [ ] SWOT points come from the source.
- [ ] Timeline dates or phases come from the source.
- [ ] Sensitive information is not exposed.
- [ ] The page works without a build process.
- [ ] The page is readable on desktop, tablet, and mobile.
- [ ] Visualizations improve understanding rather than merely decorating the page.

If a requested visualization cannot be created from the available data, do not fabricate data. Use a non-numeric visual card and briefly state that the source does not contain enough numerical data for that chart.

## Modification rule

When the user asks for visual improvements to an existing site:

1. Inspect the current files first.
2. Keep all verified business information unchanged.
3. Modify only the visual presentation unless the user explicitly requests content changes.
4. Prefer targeted edits over rewriting the entire website.
5. Re-run the final fact check after editing.

## Recommended user prompts

### First build

Read `business_plan.md` and create a professional one-page startup website using the `visual-dashboard` skill.

Use only information contained in the Markdown file.
Do not invent data.

Create only:

- `index.html`
- `style.css`

### Visual improvement

Review the current website using the `visual-dashboard` skill.

Improve only:

- visual hierarchy
- spacing
- typography
- KPI cards
- charts
- SWOT cards
- responsive layout

Do not change any verified business information.

### Gamma-assisted design

Use the supplied Gamma screenshots only as visual references.

Apply a similar visual mood, typography hierarchy, spacing, and card style to the current website.

Keep `business_plan.md` as the authoritative business-content source.
Do not invent or modify business facts.
