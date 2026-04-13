# Strogatz Quiz — Relationship Destiny Engine

An interactive single-page web application that applies **dynamical systems theory** (the Strogatz framework) to analyze romantic relationship dynamics. Users answer 6 questions via range sliders; the app performs mathematical analysis and classifies the relationship into an archetypal pattern, with personalized advice for both partners.

Fully bilingual: **English** and **Japanese**.

---

## Project Structure

```
strogatzquiz/
├── index.html    # HTML structure and screen layout
├── style.css     # Styling, responsive design, CSS variables
├── script.js     # Application logic, quiz flow, calculation engine
└── content.js    # All content data: questions, archetypes, translations
```

No build step, no package manager, no backend. Open `index.html` in a browser.

---

## Application Flow

```
Landing Screen
  └─ "Start the Journey"
        ↓
Quiz Screen  (6 questions, -5 → +5 slider each)
  └─ "See Results" on last question
        ↓
calculateResults()
  ├─ Extract parameters a, b, c, d from answers
  ├─ Compute τ, Δ, D
  ├─ Classify relationship archetype
  ├─ Classify each partner's individual archetype
  ├─ Gap analysis + baseline projection
  └─ Compatibility matrix lookup
        ↓
Results Screen
  ├─ Main relationship archetype (emoji + name)
  ├─ Individual archetypes for both partners
  ├─ Math metrics (τ, Δ, D)
  └─ Strategic advice (4 sections)
```

---

## Mathematical Model

The app implements a 2×2 coupled linear dynamical system from Steven Strogatz's work on relationship modelling.

### System variables

| Variable | Meaning |
|----------|---------|
| R | Romeo's (your) current sentiment/mood |
| J | Juliet's (partner's) current sentiment/mood |

### Parameters (extracted from quiz answers)

| Parameter | Source | Meaning |
|-----------|--------|---------|
| `a` | `-q1` | Your self-regulation (negative = volatile, positive = stable) |
| `d` | `-q2` | Partner's self-regulation |
| `b` | `q3`  | Your cross-influence (how you react to partner's mood) |
| `c` | `q4`  | Partner's cross-influence |

The baselines `q5` (your sentiment toward partner) and `q6` (partner's sentiment toward you) feed the baseline projection analysis.

### Derived metrics

| Metric | Formula | Interpretation |
|--------|---------|----------------|
| **τ (Tau / Energy)** | `a + d` | Total emotional bandwidth. Negative → system calms; Positive → amplifies |
| **Δ (Delta / Strength)** | `(a × d) − (b × c)` | Resilience. Positive → self-correcting; Negative → fragile |
| **D (Discriminant / Style)** | `τ² − 4Δ` | Interaction pattern; distinguishes oscillatory from exponential dynamics |

### Archetype classification rules

```
Δ < 0                          → House of Cards (sub-typed by b, c values)
τ < 0  and  D > 0              → The Anchor
τ < 0  and  D ≤ 0              → The Mature Rollercoaster
τ ≥ 0  and  D > 0              → The Supernova
τ ≥ 0  and  D ≤ 0              → The Toxic Vortex
```

**House of Cards sub-archetypes** (when Δ < 0):

| Sub-archetype | Condition |
|--------------|-----------|
| Anchor & Kite | `b × c < 0` — asymmetric cross-influence |
| Cold War | `b × c ≥ 0` and `b × c` is small | 
| Feedback Loop | `\|b × c\|` large — high mutual reactivity |

---

## Archetypes Reference

### Relationship Archetypes

| Archetype | Emoji | Core Meaning |
|-----------|-------|-------------|
| House of Cards | 🃏 | Fragile balance; outcome depends on sub-type |
| The Anchor | ⚓ | Stable, secure, self-correcting |
| The Mature Rollercoaster | 🎢 | Cyclical but grounded; τ < 0 keeps it contained |
| The Supernova | 💥 | High-intensity passion; risk of burnout |
| The Toxic Vortex | 🌀 | Unstable amplifying spiral |

### Individual Archetypes

Determined by the signs of a person's **self-regulation** and **cross-influence**:

| Archetype | Emoji | Self-reg | Cross-influence |
|-----------|-------|----------|-----------------|
| The Altruist | 💖 | < 0 (volatile) | > 0 (validating) |
| The Critic | 🧐 | < 0 (volatile) | < 0 (dampening) |
| The Firestarter | 🧨 | > 0 (stable) | > 0 (validating) |
| The Instigator | 🧪 | > 0 (stable) | < 0 (dampening) |

### Compatibility Matrix

A 4×4 grid maps every combination of individual archetypes to a predicted **destiny** and **dynamic** description. Highlights:

| You | Partner | Destiny |
|-----|---------|---------|
| Altruist | Altruist | Anchor |
| Instigator | Instigator | Total Collapse |
| Firestarter | Altruist | Supernova |
| Critic | Firestarter | Mature Rollercoaster |

(All 16 combinations are detailed in `content.js` under `compatibilityMatrix`.)

---

## Quiz Questions

| ID | Topic | Negative pole (−5) | Positive pole (+5) |
|----|-------|-------------------|-------------------|
| q1 | Your self-regulation | Spiral / dysregulate | Soothe / stabilise |
| q2 | Partner's self-regulation | Spiral | Soothe |
| q3 | Your reaction to partner's affection | Dampen / dismiss | Validate / amplify |
| q4 | Partner's reaction to your affection | Dampen | Validate |
| q5 | Your baseline sentiment toward partner | Very negative | Very positive |
| q6 | Partner's baseline sentiment toward you | Very negative | Very positive |

---

## Code Reference

### `script.js` — key functions

| Function | Purpose |
|----------|---------|
| `init()` | Bootstraps the app; wires event listeners; renders initial text |
| `renderText()` | Re-renders all UI strings from the active language content object |
| `switchLanguage(lang)` | Switches `currentLang` and calls `renderText()` |
| `getC()` | Returns `CONTENT[currentLang]` — shorthand used everywhere |
| `showQuestion(index)` | Renders question at `index`; restores prior answer if any |
| `calculateResults()` | Full pipeline: extract → compute metrics → classify → render results |
| `getIndividualArchetype(selfReg, crossInt)` | Maps (selfReg, crossInt) signs to one of the 4 individual archetypes |

### Global state

| Variable | Type | Role |
|----------|------|------|
| `currentLang` | `'en'` \| `'jp'` | Active language |
| `currentQuestionIndex` | number | Which question is displayed |
| `answers` | `{ q1..q6: number }` | Stores slider values per question |

### `content.js` — data structure

```
CONTENT
├── en / jp
│   ├── ui            # Button labels, section titles, math explanations
│   ├── questions[]   # 6 question objects { id, title, desc, negLabel, posLabel }
│   ├── archetypes{}  # 5 relationship archetype objects { emoji, name, desc, advice }
│   ├── individualArchetypes{}  # 4 individual type objects
│   ├── personalDynamics{}      # 5 × 4 role descriptions
│   ├── gapAnalysis{}           # stability / reaction / volatility / sustainability text
│   ├── baselineAnalysis{}      # happy / unhappy / imbalanced projections
│   └── compatibilityMatrix{}   # 4 × 4 destiny + dynamics entries
```

---

## Styling

**CSS variables (defined on `:root`):**

| Variable | Value | Used for |
|----------|-------|---------|
| `--primary` | `#ff8fb1` | Buttons, active states, highlights |
| `--secondary` | `#78e4d0` | Secondary accents |
| `--tertiary` | `#b79ced` | Labels, synergy advice blocks |
| `--bg` | `#fef9fb` | Page background |
| `--text` | `#444444` | Body text |

**Responsive breakpoints:**

| Breakpoint | Layout changes |
|-----------|---------------|
| ≤ 768px | Results grid collapses to 1 column |
| ≤ 600px | Reduced padding; stacked archetypes; smaller headings |
| ≤ 480px | Further font-size reductions |

---

## Language Support

Toggle between **EN** and **JP** via the buttons in the top-right corner. Language state persists through the quiz. All content — questions, archetypes, advice, math labels — is fully translated in `content.js`. Japanese title: **二人の運命診断** (Two People's Destiny Diagnosis).

---

## Adding Content / Extending

- **New language:** Add a new key to `CONTENT` in `content.js` mirroring the `en` structure, then update the language switcher in `index.html` and the `switchLanguage` handler in `script.js`.
- **New question:** Append to `content.js → questions[]` and update `calculateResults()` to use the new answer.
- **New archetype:** Add entry to `archetypes`, `individualArchetypes`, `personalDynamics`, and update classification logic in `calculateResults()` / `getIndividualArchetype()`.
