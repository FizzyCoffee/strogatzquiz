const QUIZ_CONTENT = {
    relationshipArchetypes: {
        'House of Cards': {
            emoji: '🃏',
            name: 'House of Cards',
            description: 'A fragile balance. Everything looks perfect from the outside, but the foundation is delicate.',
            subArchetypes: {
                'AnchorKite': {
                    name: 'The Anchor & The Kite',
                    emoji: '🪁',
                    relAdvice: 'Your connection has a "grounded one" and a "free spirit." It works beautifully as long as the Anchor holds steady, but if the rope snaps, the Kite can drift away. You balance each other, but the stability is uneven.'
                },
                'ColdWar': {
                    name: 'The Cold War',
                    emoji: '🧊',
                    relAdvice: 'You are both strong, independent people, but sometimes your defenses clash. You might find yourselves walking on eggshells, trying not to trigger a reaction. The peace is real, but it requires constant effort to maintain.'
                },
                'FeedbackLoop': {
                    name: 'The Feedback Loop',
                    emoji: '♾️',
                    relAdvice: 'This is a high-passion, high-energy connection! You both feel things deeply and feed off each other\'s moods. It\'s exciting, but without a pause button, small sparks can turn into big flames quickly.'
                }
            }
        },
        'The Anchor': {
            emoji: '⚓',
            name: 'The Anchor',
            description: 'A secure, steady harbor. You naturally return to a calm baseline after any storm.',
            relAdvice: 'You share a rare and beautiful stability. Your relationship naturally "dampens" stress, allowing you to relax and build a future without worrying about sudden shifts. It\'s a safe place to land.'
        },
        'The Mature Rollercoaster': {
            emoji: '🎢',
            name: 'The Mature Rollercoaster',
            description: 'A rhythmic journey. Ups and downs are part of your growth, but they always lead back home.',
            relAdvice: 'Your relationship moves in cycles, like a dance. The highs are fun and the lows are manageable. Over time, you are learning to ride these waves together, making the ride smoother and deeper with every loop.'
        },
        'The Supernova': {
            emoji: '💥',
            name: 'The Supernova',
            description: 'A shooting star. Intense, fast, and incredibly bright, but burning fuel quickly.',
            relAdvice: 'The intensity here is off the charts! You are accelerating together, which feels amazing, but be careful of burnout. Make sure to build in some "cooldown" periods so this beautiful energy can last.'
        },
        'The Toxic Vortex': {
            emoji: '🌀',
            name: 'The Vortex',
            description: 'A stormy spiral. Conflicts tend to linger and loop, becoming harder to resolve over time.',
            relAdvice: 'It feels like you get stuck in loops where one reaction triggers another. It\'s not about blame; it\'s about the pattern. breaking this cycle requires one of you to gently "step out" of the dance and change the rhythm.'
        }
    },

    // Mapping: personalInfo[RelType][PersonalityType]
    personalDynamics: {
        'The Anchor': {
            'The Altruist': "You are the lighthouse in this harbor. Your warmth makes the safety feel like home, not just shelter.",
            'The Critic': "You are the anchor's chain. You keep things honest and realistic, ensuring the stability doesn't become complacency.",
            'The Firestarter': "You bring the warmth! You make sure this safe harbor never gets boring by keeping the hearth fire burning.",
            'The Instigator': "You keep things moving. You ensure that 'stable' doesn't mean 'stuck,' gently pushing for growth within the safety."
        },
        'The Mature Rollercoaster': {
            'The Altruist': "You make the ride safe. When the rollercoaster dips, your support ensures everyone feels secure.",
            'The Critic': "You are the brakes. You help slow things down when the excitement gets a bit too fast, keeping the ride enjoyable.",
            'The Firestarter': "You are the thrill! You love the highs and bring the excitement that makes this journey memorable.",
            'The Instigator': "You lead the dance. You aren't afraid of the turns, helping the relationship navigate the curves with style.",
            'Mutual': "You trade roles perfectly. Sometimes one leads, sometimes the other, creating a dynamic and living rhythm."
        },
        'The Toxic Vortex': {
            'The Altruist': "Your kindness is precious, but here it might be getting lost in the storm. Remember to protect your own peace too.",
            'The Critic': "You are trying to fix things, but sometimes 'fixing' feels like 'fighting' in this weather. Try stepping back.",
            'The Firestarter': "Your passion is powerful, but in this wind, it spreads fast. finding a calm center is your superpower here.",
            'The Instigator': "You react quickly, which is natural, but slowing down your response time can act as a shield against the chaos.",
            'Mutual': "It's like two storms meeting. You both feel deeply, which amplifies everything. Finding a shared 'calm word' can help pause the spiral."
        },
        'The Supernova': {
            'The Altruist': "You are trying to hold on tight. Your support is the gravity trying to keep this shooting star on course.",
            'The Critic': "You see the map and know the speed is risky. Your challenge is getting heard above the roar of the engines.",
            'The Firestarter': "You are the rocket fuel! Your energy drives this forward, just remember to check the gauge occasionally.",
            'The Instigator': "You push the button for 'go.' You thrive on the acceleration, driving the relationship toward new horizons fast.",
            'Mutual': "Full speed ahead! You are both running toward the future. Just make sure you're holding hands so you arrive together."
        },
        'House of Cards': {
            'The Altruist': "You are holding the pieces together. Your gentleness protects the delicate balance of this beautiful structure.",
            'The Critic': "You see where the glue is thin. Your insight is valuable, just be gentle when pointing out the cracks.",
            'The Firestarter': "You are a spark in a paper house. Your light is beautiful, just be mindful of how much heat you bring.",
            'The Instigator': "You like to test the stability. It keeps things exciting, reminding everyone that life is a balancing act.",
            'Mutual': "A delicate dance. You are both moving carefully, which creates a precious, if fragile, beauty. Trusting each other is the key."
        }
    },

    gapAnalysis: {
        stabilityGap: "💡 Balance Check: One of you is carrying more of the emotional load (the 'Rock'), while the other is free to be more expressive. Make sure the Rock gets a break to rest too!",
        reactionGap: "💡 Style Check: You have different love languages here. One validates while the other reacts. Only one person 'chasing' the mood can be tiring, so try to meet in the middle.",
        mutualVolatility: "🔥 Passion Alert: You are both high-energy! This is exciting but can be exhausting. Relying on each other to calm down is tricky when you're both up; try finding a solo 'cool down' ritual.",
        sustainabilityScore: "🌱 Growth Note: Your 'Relationship Energy' is currently {trace}. For a long-lasting peace, we want this to be negative (grounded). Positive means the energy is expanding—exciting, but requires care!"
    },

    baselineAnalysis: {
        happy: "🌟 Projected Future: Blissful Stability. Your baseline parameters suggest that when the dust settles, you naturally drift toward a state of high mutual affection.",
        unhappy: "🌧️ Projected Future: Stable Discontent. While the relationship is 'stable' (predictable), the math suggests you might settle into a routine that feels a bit cold. Focus on raising your daily baseline warmth through small, consistent acts of kindness.",
        imbalanced: "⚖️ Projected Future: Asymmetric Affection. One of you is projected to be much happier than the other in the long run. The happier partner needs to ensure they aren't taking the other for granted."
    },

    // Pairwise Compatibility Matrix
    compatibilityMatrix: {
        'The Altruist': {
            'The Altruist': { destiny: 'The Anchor', dynamics: 'Stable Node. High warmth, zero friction. You gravitate toward the baseline with minimal oscillation.' },
            'The Critic': { destiny: 'Mature Rollercoaster', dynamics: 'Balanced push-pull cycles. One pursues, one regulates. You experience cycles of "getting closer" and "needing space," but these damp down over time.' },
            'The Firestarter': { destiny: 'Supernova Risk', dynamics: 'Altruist must be highly stable to prevent burnout. High passion; requires strong boundaries.' },
            'The Instigator': { destiny: 'The Survival Spiral', dynamics: 'Altruist acts as a "Heat Sink" for chaos. Only survives if Altruist is a saint.' }
        },
        'The Critic': {
            'The Altruist': { destiny: 'Mature Rollercoaster', dynamics: 'Balanced push-pull cycles. One pursues, one regulates. Experience cycles of closeness and space that dampen over time.' },
            'The Critic': { destiny: 'The Icebox', dynamics: 'Stable but potentially cold. You are both "brakes" with no gas. You need to manually boost your baseline warmth through shared activities and planned dates.' },
            'The Firestarter': { destiny: 'Controlled Burn', dynamics: 'Critic prevents Firestarter from exploding. High friction but structurally grounded.' },
            'The Instigator': { destiny: 'The Friction Trap', dynamics: 'Constant reactive dampening. High conflict potential.' }
        },
        'The Firestarter': {
            'The Altruist': { destiny: 'Supernova Risk', dynamics: 'High passion; requires strong boundaries. Altruist must provide the stability.' },
            'The Critic': { destiny: 'Controlled Burn', dynamics: 'Critic prevents Firestarter from exploding. High friction but structurally grounded.' },
            'The Firestarter': { destiny: 'The Supernova', dynamics: 'Rapid escalation and inevitable burnout. You lack the "Damping" required to survive a major shock.' },
            'The Instigator': { destiny: 'Toxic Vortex', dynamics: 'Volatility meets reactivity. High danger. Increasing cycles of destructive behavior.' }
        },
        'The Instigator': {
            'The Altruist': { destiny: 'The Survival Spiral', dynamics: 'Altruist acts as a "Heat Sink" for chaos. Only survives if Altruist is largely selfless.' },
            'The Critic': { destiny: 'The Friction Trap', dynamics: 'High conflict and resentment. Constant reactive dampening.' },
            'The Firestarter': { destiny: 'Toxic Vortex', dynamics: 'Volatility meets reactivity. High danger. Increasing cycles of destructive behavior.' },
            'The Instigator': { destiny: 'Total Collapse', dynamics: 'Unstable and divergent (House of Cards). One small disagreement sends sentiments flying apart.' }
        }
    },

    individualArchetypes: {
        'The Altruist': { emoji: '💖' },
        'The Critic': { emoji: '🧐' },
        'The Firestarter': { emoji: '🧨' },
        'The Instigator': { emoji: '🧪' }
    }
};
