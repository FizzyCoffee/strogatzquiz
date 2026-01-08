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

function getIndividualArchetype(selfReg, crossInt) {
    if (selfReg < 0 && crossInt > 0) return 'The Altruist';
    if (selfReg < 0 && crossInt < 0) return 'The Critic';
    if (selfReg > 0 && crossInt > 0) return 'The Firestarter';
    return 'The Instigator';
}

function calculateResults() {
    // Math Parameters
    const a = -answers['q1'];
    const d = -answers['q2'];
    const b = answers['q3'];
    const c = answers['q4'];

    const tau = a + d;
    const delta = (a * d) - (b * c);
    const disc = (tau * tau) - (4 * delta);

    let archetypeKey = '';
    let relAdvice = '';
    let subName = '';
    let subEmoji = '';

    // Relationship Classification
    if (delta < 0) {
        archetypeKey = 'House of Cards';
        const arch = QUIZ_CONTENT.relationshipArchetypes[archetypeKey];
        let subKey = '';
        if ((a < 0 && d > 0) || (a > 0 && d < 0)) subKey = 'AnchorKite';
        else if (a < 0 && d < 0) subKey = 'ColdWar';
        else subKey = 'FeedbackLoop';

        const sub = arch.subArchetypes[subKey];
        subName = sub.name;
        relAdvice = sub.relAdvice;
        subEmoji = sub.emoji;
    } else if (tau < 0) {
        archetypeKey = disc > 0 ? 'The Anchor' : 'The Mature Rollercoaster';
        relAdvice = QUIZ_CONTENT.relationshipArchetypes[archetypeKey].relAdvice;
    } else {
        archetypeKey = disc > 0 ? 'The Supernova' : 'The Toxic Vortex';
        relAdvice = QUIZ_CONTENT.relationshipArchetypes[archetypeKey].relAdvice;
    }

    const archData = QUIZ_CONTENT.relationshipArchetypes[archetypeKey];
    const yourKey = getIndividualArchetype(a, b);
    const partnerKey = getIndividualArchetype(d, c);

    // Personal Dynamics (Combinatorial)
    const yourDyn = QUIZ_CONTENT.personalDynamics[archetypeKey][yourKey];
    let partnerDyn = QUIZ_CONTENT.personalDynamics[archetypeKey][partnerKey];

    // Handle "Mutual" case or perspective shift for Juliet
    if (yourKey === partnerKey && QUIZ_CONTENT.personalDynamics[archetypeKey].Mutual) {
        partnerDyn = QUIZ_CONTENT.personalDynamics[archetypeKey].Mutual + " " + partnerDyn.toLowerCase().replace('you ', 'your partner ');
    } else {
        partnerDyn = partnerDyn.replace(/You /g, 'Your partner ').replace(/you /g, 'your partner ');
    }

    // Gap Analysis Logic
    let gapAlerts = [];
    if (Math.abs(a - d) >= 3) {
        const stableSide = a < d ? 'You (Romeo)' : 'Your Partner (Juliet)';
        const volatileSide = a < d ? 'Your Partner' : 'You';
        gapAlerts.push(QUIZ_CONTENT.gapAnalysis.stabilityGap.replace('{stable}', stableSide).replace('{volatile}', volatileSide));
    }
    if ((b > 0 && c < 0) || (b < 0 && c > 0)) {
        gapAlerts.push(QUIZ_CONTENT.gapAnalysis.reactionGap);
    }
    if (a > 0 && d > 0) {
        gapAlerts.push(QUIZ_CONTENT.gapAnalysis.mutualVolatility);
    }

    // Sustainability Trace Check
    let sustain = QUIZ_CONTENT.gapAnalysis.sustainabilityScore.replace('{trace}', tau.toFixed(1));
    if (tau > 0) sustain = `⚠️ **Critical Sustainability Note:** ${sustain} (The system is EXPANDING and currently UNSTABLE).`;

    // Synthesis
    const finalAdvice = `
        <div class="advice-block">
            <h4>Relationship Outlook</h4>
            <p>${relAdvice}</p>
        </div>
        <div class="advice-block">
            <h4>Personal Dynamics</h4>
            <p><strong>You (Romeo):</strong> ${yourDyn}</p>
            <p><strong>Partner (Juliet):</strong> ${partnerDyn}</p>
        </div>
        <div class="advice-block alerts">
            <h4>Sustainability Analysis</h4>
            <p>${sustain}</p>
            ${gapAlerts.map(alert => `<p>${alert}</p>`).join('')}
        </div>
        <div class="advice-block synergy">
            <h4>Strategic Synergy</h4>
            <p>${archetypeKey === 'The Anchor' ?
            'Your system is in a Global Attractor state. Focus on deepening the baseline warmth to move the equilibrium toward higher affection.' :
            'To stabilize the system, you must shift the parameters: increase internal regulation (making a and d more stable) and reduce reactive cycles.'}</p>
        </div>
    `;

    // Update UI
    document.getElementById('archetype-name').textContent = subName || archData.name;
    document.getElementById('archetype-desc').textContent = archData.description;
    document.getElementById('archetype-emoji').textContent = subEmoji || archData.emoji;

    document.getElementById('your-archetype-name').textContent = yourKey;
    document.getElementById('your-archetype-emoji').textContent = QUIZ_CONTENT.individualArchetypes[yourKey].emoji;

    document.getElementById('partner-archetype-name').textContent = partnerKey;
    document.getElementById('partner-archetype-emoji').textContent = QUIZ_CONTENT.individualArchetypes[partnerKey].emoji;

    document.getElementById('stat-trace').textContent = tau.toFixed(2);
    document.getElementById('stat-det').textContent = delta.toFixed(2);
    document.getElementById('stat-disc').textContent = disc.toFixed(2);
    document.getElementById('strategic-advice').innerHTML = finalAdvice;

    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'flex';
    resultsScreen.classList.remove('hidden');
}
