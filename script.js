const questions = [
    {
        id: 'q1',
        title: 'Your Internal Regulation (a)',
        desc: 'When you are upset, do you tend to "feed your own fire" (spiral), or do you have a strong internal "governor" that calms you down?',
        neg: 'Volatile',
        pos: 'Stable'
    },
    {
        id: 'q2',
        title: 'Your Partner’s Regulation (d)',
        desc: 'Does your partner have a solid internal "emotional brake," or do they tend to amplify their own negative moods?',
        neg: 'Volatile',
        pos: 'Stable'
    },
    {
        id: 'q3',
        title: 'Your Reaction to Them (b)',
        desc: 'When your partner is happy or affectionate, do you feel naturally uplifted (Validation), or do you feel a need to pull back or dampen the mood (Reactance)?',
        neg: 'Reactive',
        pos: 'Validating'
    },
    {
        id: 'q4',
        title: 'Their Reaction to You (c)',
        desc: 'When you are in a great mood, does your partner celebrate and mirror that energy, or do they tend to "rain on your parade" to balance the room?',
        neg: 'Reactive',
        pos: 'Validating'
    },
    {
        id: 'q5',
        title: 'Your Baseline Sentiment (b1)',
        desc: 'If you haven\'t spoken to your partner yet today, what is your "resting temperature" toward them? Are you starting the day with warmth or resentment?',
        neg: 'Stress',
        pos: 'Security'
    },
    {
        id: 'q6',
        title: 'Their Baseline Sentiment (b2)',
        desc: 'What is your partner’s "default" state of affection toward you, regardless of the day\'s events?',
        neg: 'Insecurity',
        pos: 'Security'
    },
    {
        id: 'q7',
        title: 'The Recovery Factor',
        desc: 'After a fight, does the relationship eventually "gravitate" back to a calm center, or do the echoes of the argument linger and drift toward a new conflict?',
        neg: 'Drifts',
        pos: 'Gravitates'
    },
    {
        id: 'q8',
        title: 'The Oscillation Trend',
        desc: 'Looking at your relationship cycles over the last few months, are the "highs and lows" getting smaller and more manageable, or larger and more extreme?',
        neg: 'Getting Larger',
        pos: 'Getting Smaller'
    },
    {
        id: 'q9',
        title: 'The Influence Balance',
        desc: 'Who "drives" the mood in the house? Is the emotional influence equal, or is one person primarily "driving" while the other is mostly "reacting"?',
        neg: 'Driving',
        pos: 'Equal'
    },
    {
        id: 'q10',
        title: 'The House of Cards Test',
        desc: 'Do you feel like the relationship is robust enough to handle a major life "shock," or does it feel like one wrong word could lead to total divergence?',
        neg: 'Fragile',
        pos: 'Robust'
    }
];

let currentQuestionIndex = 0;
const answers = {};

// DOM Elements
const landingScreen = document.getElementById('landing');
const quizScreen = document.getElementById('quiz');
const resultsScreen = document.getElementById('results');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const slider = document.getElementById('quiz-slider');
const sliderValueDisplay = document.getElementById('slider-value');
const progressBar = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');
const questionTitle = document.getElementById('question-title');
const questionDesc = document.getElementById('question-desc');
const labelNeg = document.querySelector('.label-neg');
const labelPos = document.querySelector('.label-pos');

// Initialize
startBtn.addEventListener('click', () => {
    landingScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    quizScreen.classList.remove('hidden');
    showQuestion(0);
});

slider.addEventListener('input', (e) => {
    sliderValueDisplay.textContent = e.target.value;
    answers[questions[currentQuestionIndex].id] = parseInt(e.target.value);
});

nextBtn.addEventListener('click', () => {
    // Save current answer
    answers[questions[currentQuestionIndex].id] = parseInt(slider.value);

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        calculateResults();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

restartBtn.addEventListener('click', () => {
    location.reload();
});

function showQuestion(index) {
    const q = questions[index];
    questionNumber.textContent = `Question ${index + 1} of 10`;
    questionTitle.textContent = q.title;
    questionDesc.textContent = q.desc;
    labelNeg.textContent = `-5 (${q.neg})`;
    labelPos.textContent = `+5 (${q.pos})`;

    // Restore previous answer if exists, otherwise default to 0
    const savedValue = answers[q.id] !== undefined ? answers[q.id] : 0;
    slider.value = savedValue;
    sliderValueDisplay.textContent = savedValue;

    // Update progress bar
    progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;

    // Nav buttons
    prevBtn.classList.toggle('invisible', index === 0);
    nextBtn.textContent = index === questions.length - 1 ? 'See Results' : 'Next';
}

const emojiMap = {
    // Relationship Destiny
    'The Anchor': '⚓',
    'The Mature Rollercoaster': '🎢',
    'The Supernova': '💥',
    'The Toxic Vortex': '🌀',
    'House of Cards': '🃏',
    // Individual Archetypes
    'The Altruist': '💖',
    'The Critic': '🧐',
    'The Firestarter': '🧨',
    'The Instigator': '🧪'
};

const individualAdvice = {
    'The Altruist': 'You bring a warm, stabilizing presence to the table, always looking to validate and support.',
    'The Critic': 'You provide essential grounding but your reactive nature can sometimes dampen the mood.',
    'The Firestarter': 'Your energy is infectious and passionate, though your internal volatility keeps things intense.',
    'The Instigator': 'You are a catalyst for movement, but your combination of volatility and reactivity can create friction.'
};

function getIndividualArchetype(selfReg, crossInt) {
    if (selfReg < 0 && crossInt > 0) return 'The Altruist';
    if (selfReg < 0 && crossInt < 0) return 'The Critic';
    if (selfReg > 0 && crossInt > 0) return 'The Firestarter';
    return 'The Instigator';
}

function calculateResults() {
    const a = -answers['q1'];
    const d = -answers['q2'];
    const b = answers['q3'];
    const c = answers['q4'];

    const tau = a + d;
    const delta = (a * d) - (b * c);
    const disc = (tau * tau) - (4 * delta);

    let archetype = '';
    let description = '';
    let relAdvice = '';

    if (delta < 0) {
        archetype = 'House of Cards';
        description = 'Saddle Point. Fundamentally fragile; stable in only one direction. One wrong move leads to total divergence.';
        relAdvice = 'Your relationship is a delicate balance. High sensitivity to interaction coefficients means that while you can reach great heights, you lack a robust internal "return" mechanism.';
    } else if (tau < 0) {
        if (disc > 0) {
            archetype = 'The Anchor';
            description = 'Stable Node. High resilience; the couple naturally pulls back to a calm, steady baseline.';
            relAdvice = 'You share a rare and beautiful stability. The system naturally dampens any shocks, allowing you to focus on building a future without the fear of sudden collapse.';
        } else {
            archetype = 'The Mature Rollercoaster';
            description = 'Stable Spiral. Whimsical cycles that eventually settle into a steady rhythm.';
            relAdvice = 'You are in a dance of dampening oscillations. The highs and lows are part of your growth process, and each cycle brings you closer to a centered, quiet understanding.';
        }
    } else {
        if (disc > 0) {
            archetype = 'The Supernova';
            description = 'Unstable Node. Rapid linear escalation or collapse. Leads to intense burnout.';
            relAdvice = 'The intensity here is unsustainable without external intervention or deep self-regulation. You are accelerating toward an edge, driven by a lack of internal emotional brakes.';
        } else {
            archetype = 'The Toxic Vortex';
            description = 'Unstable Spiral. Hot/cold cycles that become increasingly violent and destructive over time.';
            relAdvice = 'This feedback loop is amplifying itself. Each conflict carries more energy than the last. Breaking this cycle requires a radical shift in how you both regulate your own internal states.';
        }
    }

    const yourArch = getIndividualArchetype(a, b);
    const partnerArch = getIndividualArchetype(d, c);

    // Dynamic advice synthesis
    const finalAdvice = `
        <strong>Relationship Outlook:</strong> ${relAdvice}<br><br>
        <strong>Personal Dynamics:</strong><br>
        • As ${yourArch}, ${individualAdvice[yourArch]}<br>
        • As ${partnerArch}, your partner ${individualAdvice[partnerArch].toLowerCase().replace('you ', 'brings ')}<br><br>
        <strong>Strategic Synergy:</strong> ${archetype === 'The Anchor' ? 'Keep doing what you\'re doing!' : 'To stabilize the system, focus on increasing internal regulation (negative "a" and "d") to dampen the spirals.'}
    `;

    // Update Results UI
    document.getElementById('archetype-name').textContent = archetype;
    document.getElementById('archetype-desc').textContent = description;
    document.getElementById('archetype-emoji').textContent = emojiMap[archetype];

    document.getElementById('your-archetype-name').textContent = yourArch;
    document.getElementById('your-archetype-emoji').textContent = emojiMap[yourArch];

    document.getElementById('partner-archetype-name').textContent = partnerArch;
    document.getElementById('partner-archetype-emoji').textContent = emojiMap[partnerArch];

    document.getElementById('stat-trace').textContent = tau.toFixed(2);
    document.getElementById('stat-det').textContent = delta.toFixed(2);
    document.getElementById('stat-disc').textContent = disc.toFixed(2);
    document.getElementById('strategic-advice').innerHTML = finalAdvice;

    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'flex';
    resultsScreen.classList.remove('hidden');
}
