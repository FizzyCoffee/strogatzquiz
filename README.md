# Relationship Destiny Engine

An interactive web quiz that applies nonlinear dynamics — inspired by mathematician Steven Strogatz's work — to classify relationship patterns using eigenvalue analysis.

> "The math of love isn't just a metaphor. It's a model." — inspired by *Nonlinear Dynamics and Chaos*, Steven Strogatz

---

## What It Does

Users answer 6 questions about their own emotional regulation and how they interact with their partner. The app models the relationship as a 2×2 dynamical system, computes eigenvalues of the resulting matrix, and maps the result to one of five **relationship archetypes** with personalized advice.

Available in English and Japanese.

---

## Mathematical Model

The quiz is grounded in Strogatz's treatment of Romeo-and-Juliet-style coupled ODEs:

```
dR/dt = a·R + b·J
dJ/dt = c·R + d·J
```

Where:
- **R** = Romeo's (your) emotional state
- **J** = Juliet's (partner's) emotional state
- **a** = your self-regulation coefficient (Q1, negated)
- **d** = partner's self-regulation coefficient (Q2, negated)
- **b** = how you respond to your partner (Q3)
- **c** = how your partner responds to you (Q4)

The system matrix `[[a, b], [c, d]]` is analyzed via:

| Quantity | Formula | Meaning |
|---|---|---|
| **τ (Tau / Trace)** | `a + d` | Total emotional energy; negative = self-damping |
| **Δ (Delta / Determinant)** | `a·d − b·c` | Resilience to shocks; negative = saddle point |
| **D (Discriminant)** | `τ² − 4Δ` | Interaction pattern; positive = smooth, negative = spiral |

### Archetype Classification

The (τ, Δ, D) triple maps to the phase-plane portrait of the system:

```
             Δ < 0            ──→  House of Cards  (saddle point)
Δ > 0, τ < 0, D > 0          ──→  The Anchor       (stable node)
Δ > 0, τ < 0, D < 0          ──→  The Mature Rollercoaster (stable spiral)
Δ > 0, τ > 0, D > 0          ──→  The Supernova    (unstable node)
Δ > 0, τ > 0, D < 0          ──→  The Toxic Vortex (unstable spiral)
```

**House of Cards** has three sub-archetypes based on the signs of `a` and `d`:
- **Anchor-Kite** — one partner stabilizes, one destabilizes
- **Cold War** — both partners are self-damping but incompatibly coupled
- **Feedback Loop** — both partners amplify each other

### Individual Personality Archetypes

Each person is classified independently using their self-regulation (`a` or `d`) and cross-influence (`b` or `c`) coefficients:

| Self-reg | Cross-influence | Archetype |
|---|---|---|
| Negative (damping) | Positive (responsive) | The Altruist |
| Negative (damping) | Negative (withdrawing) | The Critic |
| Positive (amplifying) | Positive (responsive) | The Firestarter |
| Positive (amplifying) | Negative (withdrawing) | The Instigator |

### Baseline / Fixed-Point Analysis

Questions 5 and 6 capture baseline sentiment (mood in absence of the other person). These are used as forcing terms `b1` and `b2` to find the fixed point `(R*, J*)` of the driven system — representing where the relationship tends to settle emotionally when both partners are present.

---

## Features

- **6-question quiz** with a −5 to +5 slider per question
- **5 relationship archetypes** (with 3 sub-archetypes for House of Cards)
- **4 individual personality types** per partner
- **Compatibility matrix** — 4×4 lookup of how personality pairings interact across all relationship contexts
- **Gap analysis** — flags stability mismatches, opposing reaction styles, and mutual volatility
- **Sustainability score** based on trace sign
- **Bilingual** — full English and Japanese content with graceful fallback
- **No build step** — runs directly in any browser

---

## Project Structure

```
strogatzquiz/
├── index.html    # App shell: screens, slider, results layout
├── style.css     # Design system, component styles, responsive breakpoints
├── script.js     # State management, quiz flow, math engine, result rendering
└── content.js    # All text, questions, archetypes, compatibility matrix (EN + JP)
```

### Key responsibilities

| File | Responsibility |
|---|---|
| `index.html` | DOM structure; three `<section>` screens (landing, quiz, results) |
| `style.css` | CSS variables, glass-card components, slider styling, mobile layout |
| `script.js` | Quiz state, language switching, eigenvalue calculation, result rendering |
| `content.js` | Single `CONTENT` object keyed by `en` / `jp`, containing all copy and game data |

---

## Running Locally

No build tooling required. Open `index.html` directly in a browser:

```bash
# Option 1: open directly
open index.html

# Option 2: serve with any static server
npx serve .
python3 -m http.server 8080
```

---

## Adding a New Language

All content lives in `content.js` inside the `CONTENT` object. To add a new locale:

1. Add a new top-level key (e.g. `'fr'`) mirroring the structure of `CONTENT.en`.
2. Add a language toggle button in `index.html` (`<button id="lang-fr" class="lang-btn" onclick="switchLanguage('fr')">`)
3. Handle the button in `switchLanguage()` in `script.js`.

The app falls back to `CONTENT.en` for any missing key, so partial translations work safely.

### Content structure

```js
CONTENT = {
  en: {
    ui: { /* button labels, section headers, math explanations */ },
    questions: [ /* 6 objects: { id, title, desc, neg, pos } */ ],
    relationshipArchetypes: { /* keyed by archetype name */ },
    individualArchetypes:   { /* keyed by archetype name */ },
    personalDynamics:       { /* [relArchetype][indArchetype] → string */ },
    compatibilityMatrix:    { /* [yourType][partnerType] → { destiny, dynamics } */ },
    gapAnalysis:            { /* stabilityGap, reactionGap, mutualVolatility, sustainabilityScore */ },
    baselineAnalysis:       { /* happy, unhappy, imbalanced */ },
  },
  jp: { /* same shape */ }
}
```

---

## How the Math Engine Works (`script.js`)

`calculateResults()` runs after the final question is answered:

1. **Extract parameters** — map question answers to matrix entries `a, b, c, d`.
2. **Compute τ, Δ, D** — trace, determinant, discriminant of the 2×2 system matrix.
3. **Classify relationship archetype** — using the (τ, Δ, D) phase-plane rules above.
4. **Classify individual archetypes** — using `getIndividualArchetype(selfReg, crossInt)` for each partner.
5. **Compatibility matrix lookup** — cross-reference the two individual types for refined destiny/dynamics text.
6. **Gap analysis** — flag large stability mismatches (`|a − d| ≥ 3`), opposing cross-influences, and mutual amplification.
7. **Baseline fixed-point** — solve `A·[R*,J*] = −[b1,b2]` using Cramer's rule; classify the equilibrium sentiment.
8. **Render results** — populate archetype badge, individual cards, math stats, and advice blocks.

---

## Design System

Defined via CSS custom properties in `style.css`:

```css
--pink:   #ff8fb1
--teal:   #78e4d0
--purple: #b79ced
--bg:     #fdf0f5
```

Key component classes: `.glass-container`, `.advice-block`, `.advice-block.alerts`, `.advice-block.synergy`, `.math-stats .stat`.

Responsive breakpoints: 768 px (tablet), 600 px, 480 px (mobile).

---

## Background

This project is based on the playful mathematical models of romantic relationships discussed in:

- Strogatz, S. H. (1988). *Love affairs and differential equations*. Mathematics Magazine, 61(1), 35.
- Strogatz, S. H. (1994). *Nonlinear Dynamics and Chaos*. Addison-Wesley.

The original model uses linear ODEs to show how different "love styles" (eager beaver, cautious lover, etc.) produce qualitatively different long-run outcomes — stable equilibria, oscillations, or runaway spirals — purely from the signs of four coefficients.
