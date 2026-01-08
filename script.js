let currentLang = 'en';
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
const langEnBtn = document.getElementById('lang-en');
const langJpBtn = document.getElementById('lang-jp');

// Initialize
function init() {
    renderText();
    setupEventListeners();
}

function getC() {
    return CONTENT[currentLang];
}

function switchLanguage(lang) {
    currentLang = lang;

    // Update active button state
    if (lang === 'en') {
        langEnBtn.classList.add('active');
        langJpBtn.classList.remove('active');
        document.body.style.fontFamily = "'Outfit', sans-serif";
    } else {
        langJpBtn.classList.add('active');
        langEnBtn.classList.remove('active');
        // Fallback font for JP if needed, though Outfit handles latin well
        document.body.style.fontFamily = "'Noto Sans JP', 'Outfit', sans-serif";
    }

    renderText();

    // Refresh current view if needed
    if (!quizScreen.classList.contains('hidden')) {
        showQuestion(currentQuestionIndex);
    } else if (!resultsScreen.classList.contains('hidden')) {
        calculateResults(); // Re-calculate to refresh text
    }
}

function renderText() {
    const ui = getC().ui;

    // Landing
    document.querySelector('#landing h1').textContent = ui.title;
    document.querySelector('#landing .subtitle').textContent = ui.subtitle;
    document.querySelector('#landing .description p').innerHTML = ui.description;
    startBtn.textContent = ui.startBtn;

    // Quiz Buttons
    nextBtn.textContent = (currentQuestionIndex === getC().questions.length - 1) ? ui.resultBtn : ui.nextBtn;
    prevBtn.textContent = ui.prevBtn;
    restartBtn.textContent = ui.restartBtn;

    // Results Static Text
    document.querySelector('.results-title').textContent = ui.resultsTitle;
    // Math Corner headers
    const mathStats = document.querySelectorAll('.math-stats .stat span');
    if (mathStats.length >= 3) {
        mathStats[0].textContent = ui.energy;
        mathStats[1].textContent = ui.strength;
        mathStats[2].textContent = ui.style;
    }
    document.querySelector('.advice-section h3').textContent = ui.adviceTitle;
    document.querySelector('#results .result-card:nth-child(2) h3').textContent = ui.mathCorner;
    document.getElementById('slider-label-text').textContent = ui.valueLabel;

    document.getElementById('desc-energy').textContent = ui.mathExplanations.energy;
    document.getElementById('desc-strength').textContent = ui.mathExplanations.strength;
    document.getElementById('desc-style').textContent = ui.mathExplanations.style;
}

function setupEventListeners() {
    startBtn.addEventListener('click', () => {
        landingScreen.style.display = 'none';
        quizScreen.style.display = 'flex';
        quizScreen.classList.remove('hidden');
        showQuestion(0);
    });

    slider.addEventListener('input', (e) => {
        sliderValueDisplay.textContent = e.target.value;
        answers[getC().questions[currentQuestionIndex].id] = parseInt(e.target.value);
    });

    nextBtn.addEventListener('click', () => {
        const questions = getC().questions;
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
}

function showQuestion(index) {
    const questions = getC().questions;
    // Ensure index is valid
    if (index >= questions.length) index = 0;

    const q = questions[index];
    const ui = getC().ui;

    questionNumber.textContent = ui.questionCount.replace('{i}', index + 1).replace('{n}', questions.length);
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
    nextBtn.textContent = index === questions.length - 1 ? ui.resultBtn : ui.nextBtn;
}

function getIndividualArchetype(selfReg, crossInt) {
    if (selfReg < 0 && crossInt > 0) return 'The Altruist';
    if (selfReg < 0 && crossInt < 0) return 'The Critic';
    if (selfReg > 0 && crossInt > 0) return 'The Firestarter';
    return 'The Instigator';
}

function calculateResults() {
    const C = getC();
    const ui = C.ui;

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
    // Fallback to English if translation missing for specific keys
    const relArchs = C.relationshipArchetypes.length > 0 ? C.relationshipArchetypes : CONTENT.en.relationshipArchetypes;

    if (delta < 0) {
        archetypeKey = 'House of Cards';

        // Handle missing translation fallback safely
        const arch = C.relationshipArchetypes[archetypeKey] || CONTENT.en.relationshipArchetypes[archetypeKey];

        let subKey = '';
        if ((a < 0 && d > 0) || (a > 0 && d < 0)) subKey = 'AnchorKite';
        else if (a < 0 && d < 0) subKey = 'ColdWar';
        else subKey = 'FeedbackLoop';

        const sub = arch.subArchetypes ? arch.subArchetypes[subKey] : CONTENT.en.relationshipArchetypes[archetypeKey].subArchetypes[subKey];
        subName = sub.name;
        relAdvice = sub.relAdvice;
        subEmoji = sub.emoji;
    } else if (tau < 0) {
        archetypeKey = disc > 0 ? 'The Anchor' : 'The Mature Rollercoaster';
        const arch = C.relationshipArchetypes[archetypeKey] || CONTENT.en.relationshipArchetypes[archetypeKey];
        relAdvice = arch.relAdvice;
    } else {
        archetypeKey = disc > 0 ? 'The Supernova' : 'The Toxic Vortex';
        const arch = C.relationshipArchetypes[archetypeKey] || CONTENT.en.relationshipArchetypes[archetypeKey];
        relAdvice = arch.relAdvice;
    }

    // Individual Archetypes
    const yourKey = getIndividualArchetype(a, b);
    const partnerKey = getIndividualArchetype(d, c);

    // Get localized individual names/emojis
    const cleanKey = (key) => key; // Keys are same across langs
    const indArchs = C.individualArchetypes || CONTENT.en.individualArchetypes;

    const yourData = indArchs[yourKey] || CONTENT.en.individualArchetypes[yourKey];
    const partnerData = indArchs[partnerKey] || CONTENT.en.individualArchetypes[partnerKey];


    // Personal Dynamics (Combinatorial)
    // Fallback logic for nested objects
    const pDyn = C.personalDynamics[archetypeKey] ? C.personalDynamics : CONTENT.en.personalDynamics;
    const yourDyn = pDyn[archetypeKey][yourKey];
    let partnerDyn = pDyn[archetypeKey][partnerKey];

    // Handle "Mutual" case or perspective shift for Juliet
    if (yourKey === partnerKey && pDyn[archetypeKey].Mutual) {
        // Simple append for now, localization of complex replace strings is hard without formatting libraries
        partnerDyn = pDyn[archetypeKey].Mutual + " (" + partnerDyn + ")";
    }

    // Gap Analysis Logic
    const gaps = C.gapAnalysis.stabilityGap ? C.gapAnalysis : CONTENT.en.gapAnalysis;
    let gapAlerts = [];
    if (Math.abs(a - d) >= 3) {
        const stableSide = a < d ? 'You (Romeo)' : 'Partner (Juliet)';
        const volatileSide = a < d ? 'Partner' : 'You';
        gapAlerts.push(gaps.stabilityGap.replace('{stable}', stableSide).replace('{volatile}', volatileSide));
    }
    if ((b > 0 && c < 0) || (b < 0 && c > 0)) {
        gapAlerts.push(gaps.reactionGap);
    }
    if (a > 0 && d > 0) {
        gapAlerts.push(gaps.mutualVolatility);
    }

    // Sustainability Trace Check
    let sustain = gaps.sustainabilityScore.replace('{trace}', tau.toFixed(1));
    if (tau > 0) sustain = `⚠️ ${sustain}`;

    // Baseline Fixed Point Analysis (Q5=b1, Q6=b2)
    const b1 = answers['q5'];
    const b2 = answers['q6'];
    let baselineMsg = '';
    const bases = C.baselineAnalysis.happy ? C.baselineAnalysis : CONTENT.en.baselineAnalysis;

    if (delta !== 0) {
        const rStar = (b * (-b2) - d * (-b1)) / delta;
        const jStar = (c * (-b1) - a * (-b2)) / delta;

        if (rStar > 0 && jStar > 0) {
            baselineMsg = bases.happy;
        } else if (rStar < 0 && jStar < 0) {
            baselineMsg = bases.unhappy;
        } else {
            baselineMsg = bases.imbalanced;
        }
    }

    // Matrix Lookup (Deep Dynamics)
    const matrix = C.compatibilityMatrix['The Altruist'] ? C.compatibilityMatrix : CONTENT.en.compatibilityMatrix;
    const matrixEntry = matrix[yourKey] ? matrix[yourKey][partnerKey] : null;
    let matrixDestiny = archetypeKey;
    let matrixDynamics = relAdvice;

    if (matrixEntry) {
        matrixDestiny = matrixEntry.destiny;
        matrixDynamics = matrixEntry.dynamics;
    }

    // Ensure arch data for description fallback
    const baseArch = C.relationshipArchetypes[archetypeKey] || CONTENT.en.relationshipArchetypes[archetypeKey];

    // Synthesis
    const finalAdvice = `
        <div class="advice-block">
            <h4>${ui.dynamicsTitle}: ${matrixDestiny}</h4>
            <p>${matrixDynamics}</p>
        </div>
        <div class="advice-block">
            <h4>${ui.personalTitle}</h4>
            <p><strong>You:</strong> ${yourDyn}</p>
            <p><strong>Partner:</strong> ${partnerDyn}</p>
        </div>
        <div class="advice-block alerts">
            <h4>${ui.sustainabilityTitle}</h4>
            <p>${sustain}</p>
            ${gapAlerts.map(alert => `<p>${alert}</p>`).join('')}
            ${baselineMsg ? `<p style="margin-top:0.5rem; border-top:1px dashed rgba(0,0,0,0.1); padding-top:0.5rem;">${baselineMsg}</p>` : ''}
        </div>
        <div class="advice-block synergy">
            <h4>${ui.synergyTitle}</h4>
            <p>${archetypeKey === 'The Anchor' ?
            (currentLang === 'en' ? 'Your system is in a Global Attractor state. Focus on deepening the baseline warmth.' : 'あなたのシステムは安定的です。愛情の基盤を深めることに集中しましょう。') :
            (currentLang === 'en' ? 'To stabilize the system, you must shift the parameters: increase internal regulation.' : 'システムを安定させるには、自己調整力を高め、反応的サイクルを減らす必要があります。')}</p>
        </div>
    `;

    // Update UI
    document.getElementById('archetype-name').textContent = matrixDestiny || subName || baseArch.name;
    document.getElementById('archetype-desc').textContent = baseArch.description;
    document.getElementById('archetype-emoji').textContent = subEmoji || baseArch.emoji;

    document.getElementById('your-archetype-name').textContent = yourData.name || yourKey;
    document.getElementById('your-archetype-emoji').textContent = yourData.emoji;

    document.getElementById('partner-archetype-name').textContent = partnerData.name || partnerKey;
    document.getElementById('partner-archetype-emoji').textContent = partnerData.emoji;

    document.getElementById('stat-trace').textContent = tau.toFixed(2);
    document.getElementById('stat-det').textContent = delta.toFixed(2);
    document.getElementById('stat-disc').textContent = disc.toFixed(2);
    document.getElementById('strategic-advice').innerHTML = finalAdvice;

    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'flex';
    resultsScreen.classList.remove('hidden');
}

// Start
init();
