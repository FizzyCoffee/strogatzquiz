const QUIZ_CONTENT = {
    relationshipArchetypes: {
        'House of Cards': {
            emoji: '🃏',
            name: 'House of Cards',
            description: 'Saddle Point. Fundamentally fragile; stable in only one direction. One wrong move leads to total divergence.',
            subArchetypes: {
                'AnchorKite': {
                    name: 'The Anchor & The Kite',
                    emoji: '🪁',
                    relAdvice: 'Your relationship is a delicate balance of asymmetry. One partner acts as the ground while the other drifts. High sensitivity means that while you can reach great heights, you lack a robust internal "return" mechanism if the anchor slips.'
                },
                'ColdWar': {
                    name: 'The Cold War',
                    emoji: '🧊',
                    relAdvice: 'Both of you are individually stable, but your cross-reactions are intensely defensive. You individually have peace, but together you create a "fragile" state where reactive feedback loops overpower your logic.'
                },
                'FeedbackLoop': {
                    name: 'The Feedback Loop',
                    emoji: '♾️',
                    relAdvice: 'You are both emotionally volatile, balanced on a razor\'s edge. You currently rely on reactive pressure to maintain structure. Any external shock could lead to total divergence without a shared grounding practice.'
                }
            }
        },
        'The Anchor': {
            emoji: '⚓',
            name: 'The Anchor',
            description: 'Stable Node. High resilience; the couple naturally pulls back to a calm, steady baseline.',
            relAdvice: 'You share a rare and beautiful stability. The system naturally dampens any shocks, allowing you to focus on building a future without the fear of sudden collapse.'
        },
        'The Mature Rollercoaster': {
            emoji: '🎢',
            name: 'The Mature Rollercoaster',
            description: 'Stable Spiral. Whimsical cycles that eventually settle into a steady rhythm.',
            relAdvice: 'You are in a dance of dampening oscillations. The highs and lows are part of your growth process, and each cycle brings you closer to a centered, quiet understanding.'
        },
        'The Supernova': {
            emoji: '💥',
            name: 'The Supernova',
            description: 'Unstable Node. Rapid linear escalation or collapse. Leads to intense burnout.',
            relAdvice: 'The intensity here is unsustainable without external intervention or deep self-regulation. You are accelerating toward an edge, driven by a lack of internal emotional brakes.'
        },
        'The Toxic Vortex': {
            emoji: '🌀',
            name: 'The Toxic Vortex',
            description: 'Unstable Spiral. Hot/cold cycles that become increasingly violent and destructive over time.',
            relAdvice: 'This feedback loop is amplifying itself. Each conflict carries more energy than the last. Breaking this cycle requires a radical shift in how you both regulate your own internal states.'
        }
    },

    // Mapping: personalInfo[RelType][PersonalityType]
    personalDynamics: {
        'The Anchor': {
            'The Altruist': "In this stable harbor, you act as the lighthouse. Your validation isn't fighting a fire; it's enriching a peaceful home. You provide the safety that allows the system to remain centered.",
            'The Critic': "Your critical eye helps keep this relationship honest and grounded. Because the relationship is stable, your critiques are heard as constructive rather than attacking.",
            'The Firestarter': "Your passion provides the 'warmth' in the anchor's security. You prevent the relationship from becoming stagnant by constantly bringing new energy into the safe zone.",
            'The Instigator': "You are the healthy catalyst here. You challenge the status quo to ensure the stability remains dynamic. Your volatility is balanced by the partner's strength."
        },
        'The Mature Rollercoaster': {
            'The Altruist': "You are the safety harness on this ride. Your validation ensures that even at the peak of a cycle, the landing is soft and the return to baseline is inevitable.",
            'The Critic': "You are the 'brakes' on the spiral. By reacting to the deviations, you help pull the system back to the center, preventing the cycles from growing out of control.",
            'The Firestarter': "You provide the momentum. You love the 'highs' of the cycles and your energy keeps the movement alive, though you trust the partner to help find the center.",
            'The Instigator': "You often trigger the next 'turn' in the dance. While this creates motion, your challenge is to ensure the turns are purposeful and lead back toward the shared quiet.",
            'Mutual': "Even though you both share this archetype, you play different roles in the cycle. One is often the 'launcher' while the other is the 'catcher,' creating a rhythmic emotional heartbeat."
        },
        'The Toxic Vortex': {
            'The Altruist': "In this spiral, your validation accidentally fuels the fire. You try to soothe the chaos, but without internal boundaries, your warmth is just more energy for the vortex.",
            'The Critic': "Your reactivity acts like an accelerant. Every time you 'check' the partner, the system spins faster. You are attempting to fix a problem that is actually being driven by your own reaction.",
            'The Firestarter': "Your passion turns into a storm here. Without internal brakes, your desire for intensity pushes the spiral outward faster than the relationship can handle.",
            'The Instigator': "You are the engine of the vortex. Your volatile-reactive nature finds perfect resonance in the chaos, driving the system toward an edge of total emotional exhaustion.",
            'Mutual': "A dangerous symmetry. You are mirroring each other's volatility, creating a resonance effect where the smallest disagreement scale into a massive, self-amplifying storm."
        },
        'The Supernova': {
            'The Altruist': "You are trying to catch a falling star. Your kindness is being consumed by the rapid, linear divergence of the system. You are stabilizing while the system is incinerating.",
            'The Critic': "Your attempts to regulate the partner are being overwhelmed by the sheer velocity of the escalation. You are shouting into a hurricane of emotional change.",
            'The Firestarter': "You are the fuel. Your lack of internal regulation and high validation creates a 'runaway' effect. You are building a tower that is too heavy for its own foundation.",
            'The Instigator': "You are the spark. You thrive on the rapid escalation until the system hits the point of no return. You are driving the divergence with every reaction.",
            'Mutual': "Maximum acceleration. You are both running toward the horizon at full speed. Without an external anchor, this intensity will inevitably lead to a total burnout."
        },
        'House of Cards': {
            'The Altruist': "You are the careful hand trying to keep the cards from falling. You provide the 'soft' validation that hides the underlying fragility and asymmetric pressure.",
            'The Critic': "You see the weakness in the individual cards. Your core challenge is ensuring your 'corrections' don't knock the whole structure over in an attempt to straighten it.",
            'The Firestarter': "Your energy is a risk here. Every burst of passion tests the structural integrity. You are a candle burning inside a paper house—beautiful but dangerous.",
            'The Instigator': "You are the 'joker' in the pack. Your unpredictability is what makes this house of cards both exciting and terrifying. You test the limits of the structure daily.",
            'Mutual': "A stalemate of fragility. You are both holding your breath, hoping the other won't move too fast. The relationship lacks a robust base because you are both reactive."
        }
    },

    gapAnalysis: {
        stabilityGap: "Warning: There is a significant <strong>Sustainability Gap</strong>. {stable} is carrying the emotional load (the 'Heat Sink'), while {volatile} is potentially free-riding on that stability. This is exhausting for the regulator.",
        reactionGap: "Warning: Your <strong>Validation Gaps</strong> are mismatched. One of you is validating while the other is reacting. This creates a 'pursuer-distancer' dynamic that makes the center unstable.",
        mutualVolatility: "Alert: <strong>Mutual Volatility Detected.</strong> Both of you lack internal emotional brakes. You are relying entirely on the other's mood to regulate your own. This is high-risk for a structural collapse.",
        sustainabilityScore: "Sustainability Note: Your 'k' factor (Trace) is currently {trace}. For long-term peace, this must remain negative. If it turns positive, the relationship is consuming its own future."
    },

    individualArchetypes: {
        'The Altruist': { emoji: '💖' },
        'The Critic': { emoji: '🧐' },
        'The Firestarter': { emoji: '🧨' },
        'The Instigator': { emoji: '🧪' }
    }
};
