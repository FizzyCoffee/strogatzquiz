const CONTENT = {
    en: {
        ui: {
            title: "Relationship Destiny",
            subtitle: "Every relationship has a hidden rhythm. What's yours?",
            description: "Are you a steady <strong>Anchor</strong>, a passionate <strong>Supernova</strong>, or a delicate <strong>House of Cards</strong>? Take this short journey to unveil the beautiful math behind your love.",
            startBtn: "Start the Journey ✨",
            nextBtn: "Next",
            resultBtn: "See Results",
            prevBtn: "Previous",
            restartBtn: "Start Over",
            questionCount: "Question {i} of {n}",
            resultsTitle: "Your Relationship Destiny",
            mathCorner: "Math Corner",
            energy: "Energy (τ)",
            strength: "Strength (Δ)",
            style: "Style (D)",
            adviceTitle: "Cute Advice ✨",
            dynamicsTitle: "Dynamics Summary",
            personalTitle: "Personal Dynamics",
            synergyTitle: "Strategic Synergy",
            sustainabilityTitle: "Sustainability Analysis",
            valueLabel: "Value: ",
            mathExplanations: {
                energy: "Total emotional bandwidth (Trace). Negative is calm, positive is volatile.",
                strength: "Resilience to shocks (Determinant). Positive means you self-correct.",
                style: "Interaction pattern (Discriminant). Spirals vs. smooth flows."
            },
            synergy: {
                stable: "Your relationship naturally trends toward stability (Restoring Force). The ups and downs are just part of your unique rhythm.",
                unstable: "Your system amplifies energy ($\tau > 0$). To stabilize, you need to reduce the 'Gain': practice **independent self-soothing**. If just one of you hits pause instead of reacting, the spiral breaks."
            }
        },
        questions: [
            {
                id: 'q1',
                title: 'Your Internal Regulation',
                desc: 'When you are upset, do you tend to "feed your own fire" (spiral), or do you have a strong internal "governor" that calms you down?',
                neg: 'Spirals',
                pos: 'Calms Down'
            },
            {
                id: 'q2',
                title: 'Your Partner’s Regulation',
                desc: 'Does your partner tend to amplify their own negative moods, or do they have a solid internal "emotional brake"?',
                neg: 'Amplifies',
                pos: 'Brakes'
            },
            {
                id: 'q3',
                title: 'Your Reaction to Them',
                desc: 'When your partner is affectionate, do you feel a need to pull back (dampen), or do you feel naturally uplifted (validate)?',
                neg: 'Pulls Back',
                pos: 'Validates'
            },
            {
                id: 'q4',
                title: 'Their Reaction to You',
                desc: 'When you are in a great mood, does your partner tend to "rain on your parade," or do they celebrate and mirror that energy?',
                neg: 'Dampens',
                pos: 'Celebrates'
            },
            {
                id: 'q5',
                title: 'Your Baseline Sentiment',
                desc: 'If you haven\'t spoken to your partner yet today, what is your "resting temperature" toward them? Are you starting the day with warmth or resentment?',
                neg: 'Stress',
                pos: 'Security'
            },
            {
                id: 'q6',
                title: 'Their Baseline Sentiment',
                desc: 'What is your partner’s "default" state of affection toward you, regardless of the day\'s events?',
                neg: 'Insecurity',
                pos: 'Security'
            }
        ],
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
        compatibilityMatrix: {
            'The Altruist': {
                'The Altruist': { destiny: 'The Anchor', dynamics: 'Stable Node. High warmth, zero friction. You gravitate toward the baseline with minimal oscillation.' },
                'The Critic': { destiny: 'Mature Rollercoaster', dynamics: 'Balanced push-pull cycles. One pursues, one regulates. You experience cycles of "getting closer" and "needing space," but these damp down over time.' },
                'The Firestarter': { destiny: 'Supernova Risk', dynamics: 'High passion but potentially unstable. If the Firestarter overwhelms the Altruist, it becomes a runaway loop. Needs strong "Cooling" rituals.' },
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
    },
    jp: {
        ui: {
            title: "二人の運命診断",
            subtitle: "すべての関係にはリズムがあります。あなたのリズムは？",
            description: "あなたは安定した<strong>「アンカー」</strong>？情熱的な<strong>「超新星」</strong>？それとも繊細な<strong>「砂上の楼閣」</strong>？<br>10の質問で、二人の関係性を数学的に診断します。",
            startBtn: "診断を始める ✨",
            nextBtn: "次へ",
            resultBtn: "結果を見る",
            prevBtn: "戻る",
            restartBtn: "最初からやり直す",
            questionCount: "質問 {i} / {n}",
            resultsTitle: "二人の関係性タイプ",
            mathCorner: "数学的分析",
            energy: "エネルギー",
            strength: "基盤の強さ",
            style: "スタイル",
            adviceTitle: "アドバイス ✨",
            dynamicsTitle: "ダイナミクス",
            personalTitle: "個人の特性",
            synergyTitle: "相性シナジー",
            sustainabilityTitle: "持続可能性チェック",
            valueLabel: "回答: ",
            mathExplanations: {
                energy: "感情の総エネルギー（トレース）。マイナスなら平穏、プラスなら不安定。",
                strength: "関係の復元力（行列式）。プラスなら問題起きても自然に修復されます。",
                style: "相互作用の型（判別式）。渦を巻くか、緩やかに流れるか。"
            },
            synergy: {
                stable: "この関係には自然な「復元力」があります。多少の波があっても、最終的には必ず安定した場所に戻ることができます。",
                unstable: "エネルギーが増幅しやすい状態（$\tau > 0$）です。安定させるには、**「個別の自己鎮静」**が鍵です。相手に反応する前に一度停止ボタンを押すことで、スパイラルを断ち切れます。"
            }
        },
        questions: [
            { id: 'q1', title: '自己調整力（あなた）', desc: '落ち込んだ時、自分で気持ちを立て直せますか？それとも感情が増幅してしまいますか？', neg: '増幅する', pos: '落ち着く' },
            { id: 'q2', title: '自己調整力（パートナー）', desc: 'パートナーは落ち込んだ時、自分で気持ちを立て直せますか？', neg: '増幅する', pos: '落ち着く' },
            { id: 'q3', title: '相手への反応（あなた）', desc: 'パートナーが愛情を示した時、素直に喜べますか？それとも少し距離を置きたくなりますか？', neg: '距離を置く', pos: '喜ぶ' },
            { id: 'q4', title: '相手への反応（パートナー）', desc: 'あなたが愛情を示した時、パートナーは素直に喜んでくれますか？', neg: '距離を置く', pos: '喜ぶ' },
            { id: 'q5', title: 'ベースライン（あなた）', desc: '特に何もない日、パートナーに対してどのような感情を持っていますか？', neg: 'ストレス', pos: '安心感' },
            { id: 'q6', title: 'ベースライン（パートナー）', desc: '特に何もない日、パートナーはあなたに対してどのような感情を持っていますか？', neg: '不安', pos: '安心感' }
        ],
        relationshipArchetypes: {
            'House of Cards': {
                emoji: '🃏',
                name: '脆い均衡 (Fragile Balance)',
                description: '美しくも儚いバランス。外からは完璧に見えますが、少しの衝撃で崩れかねない繊細さを持っています。',
                subArchetypes: {
                    'AnchorKite': {
                        name: '地と風の関係',
                        emoji: '🪁',
                        relAdvice: '「地に足がついた人」と「自由な魂」の組み合わせ。アンカーがしっかりしている限りうまくいきますが、糸が切れると凧は飛んでいってしまいます。バランスは取れていますが、安定感は不均等です。'
                    },
                    'ColdWar': {
                        name: '冷戦状態',
                        emoji: '🧊',
                        relAdvice: 'お互いに自立していますが、防衛心が強すぎることがあります。相手を刺激しないように「薄氷の上を歩く」ような状態かもしれません。平和ですが、それを維持するには努力が必要です。'
                    },
                    'FeedbackLoop': {
                        name: '無限ループ',
                        emoji: '♾️',
                        relAdvice: '情熱的で高エネルギーな関係！お互いの感情が増幅し合います。刺激的ですが、一時停止ボタンがないため、小さな火種がすぐに大火事になる危険性もあります。'
                    }
                }
            },
            'The Anchor': {
                emoji: '⚓',
                name: '穏やかな絆 (The Anchor)',
                description: '揺るぎない安全地帯。どんな嵐が来ても、二人の関係は常に穏やかな場所へと戻っていきます。',
                relAdvice: '稀に見る美しい安定感です。この関係は自然とストレスを「減衰」させ、急な変化を心配することなくリラックスして未来を築くことができます。'
            },
            'The Mature Rollercoaster': {
                emoji: '🎢',
                name: '成熟した波 (Mature Waves)',
                description: 'スリルと成長の旅。浮き沈みは二人のスパイスであり、必ず最後はホームに戻ってきます。',
                relAdvice: '二人の関係はダンスのようなサイクルで動いています。高いときは楽しく、低いときも制御可能です。時間をかけて波を乗りこなす方法を学んでいます。'
            },
            'The Supernova': {
                emoji: '💥',
                name: '燃え尽きる情熱 (Supernova)',
                description: '燃え上がる星。強烈な光と熱を放ちながら、二人で猛スピードで駆け抜けていきます。',
                relAdvice: '強烈なエネルギーです！一緒に加速していく感覚は素晴らしいですが、燃え尽き症候群に注意してください。この美しいエネルギーを持続させるために、「クールダウン」の期間を設けてください。'
            },
            'The Toxic Vortex': {
                emoji: '🌀',
                name: '負のスパイラル (Negative Spiral)',
                description: '終わりのない螺旋。一度対立が始まると、お互いに引きずり込まれてしまう引力があります。',
                relAdvice: '一つの反応が次の反応を引き起こすループに陥っているようです。誰が悪いかではなく、パターンの問題です。このサイクルを断ち切るには、どちらかが勇気を持ってダンスから「一歩外に出る」ことです。'
            }
        },
        personalDynamics: {
            'The Anchor': {
                'The Altruist': "あなたはこの港の灯台です。あなたの温かさが、ここを単なる避難所ではなく「家」にしています。",
                'The Critic': "あなたはこのアンカーの鎖です。物事を現実的に捉え、安定が「停滞」にならないようにしています。",
                'The Firestarter': "あなたが暖かさをもたらします！この安全な港が退屈にならないよう、かまどの火を絶やさない役割です。",
                'The Instigator': "あなたが変化をもたらします。「安定」が「固着」にならないよう、安全の中で成長を促しています。"
            },
            'The Mature Rollercoaster': {
                'The Altruist': "あなたが乗り物を安全にします。コースターが急降下するとき、あなたのサポートが皆を安心させます。",
                'The Critic': "あなたはブレーキ役です。興奮が行き過ぎたとき、スピードを緩めて楽しみを持続させます。",
                'The Firestarter': "あなたがスリルです！高揚感を愛し、この旅を思い出深いものにする興奮をもたらします。",
                'The Instigator': "あなたがダンスをリードします。カーブを恐れず、スタイリッシュにコーナーを曲がっていきます。",
                'Mutual': "役割を完璧に交代しています。時にリードし、時に従い、生きたリズムを作り出しています。"
            },
            'The Toxic Vortex': {
                'The Altruist': "あなたの優しさは貴重ですが、この嵐の中では見失われがちです。自分の平和も守ることを忘れないで。",
                'The Critic': "あなたは直そうとしていますが、この天候では「修理」が「攻撃」に感じられることがあります。一歩引いてみて。",
                'The Firestarter': "あなたの情熱は強力ですが、この風の中ではすぐに広がります。静かな中心を見つけることがここでのスーパーパワーです。",
                'The Instigator': "素早く反応するのは自然なことですが、反応時間を少し遅らせることが、カオスに対する盾になります。",
                'Mutual': "二つの嵐が出会うようです。お互いに深く感じすぎて増幅してしまいます。「合言葉」を決めてスパイラルを止めてみましょう。"
            },
            'The Supernova': {
                'The Altruist': "しっかり掴まっていようとしていますね。あなたのサポートは、この流れ星を軌道に乗せる重力です。",
                'The Critic': "地図を見てスピードのリスクを知っています。エンジン音の中で声を届けるのがあなたの課題です。",
                'The Firestarter': "あなたがロケット燃料です！この関係を前進させるエネルギーですが、時々残量計を確認してください。",
                'The Instigator': "「発射」ボタンを押すのはあなたです。加速を楽しみ、新しい地平線へ猛スピードで推進します。",
                'Mutual': "全速前進！二人で未来に向かって走っています。一緒に到着できるよう、手を離さないでください。"
            },
            'House of Cards': {
                'The Altruist': "あなたが破片を繋ぎ止めています。あなたの優しさが、この美しい構造の繊細なバランスを守っています。",
                'The Critic': "どこが脆いか見えています。その洞察は貴重ですが、指摘するときは優しく。",
                'The Firestarter': "あなたは紙の家の火花です。その光は美しいですが、熱くなりすぎないよう注意してください。",
                'The Instigator': "安定性をテストするのが好きですね。それが生活はバランスであることを思い出させ、退屈を防ぎます。",
                'Mutual': "繊細なダンス。二人とも慎重に動いており、それが儚くも美しい美を作り出しています。信頼が鍵です。"
            }
        },
        gapAnalysis: {
            stabilityGap: "💡 バランスチェック: どちらかが感情的な負担（岩）を多く背負い、もう一人が自由に振る舞っているようです。岩役の人にも休息を！",
            reactionGap: "💡 スタイルチェック: 愛の言語が異なります。一方が肯定し、他方が反応する形です。片方だけがムードを作ろうとするのは疲れるので、歩み寄りを。",
            mutualVolatility: "🔥 情熱アラート: 二人とも高エネルギーです！刺激的ですが疲れます。二人とも興奮している時に鎮めるのは難しいので、一人の「クールダウン」習慣を。",
            sustainabilityScore: "🌱 成長メモ: 現在の「関係エネルギー」は {trace} です。長続きする平和のためには、これをマイナス（安定的）にしたいところです。"
        },
        baselineAnalysis: {
            happy: "🌟 未来予測: 至福の安定。嵐が過ぎ去れば、自然と高い愛情レベルで安定する相性です。",
            unhappy: "🌧️ 未来予測: 安定した不満。関係は「安定」（予測可能）ですが、少し冷めたルーチンに落ち着く可能性があります。毎日の小さな親切で温かさを上げましょう！",
            imbalanced: "⚖️ 未来予測: 非対称な愛情。長期的には、どちらか一方の幸福度が非常に高くなる予測です。幸せな方は、相手を当たり前と思わないように注意してください。"
        },
        compatibilityMatrix: {
            'The Altruist': {
                'The Altruist': { destiny: '穏やかな絆', dynamics: '安定ノード。高い温かさ、摩擦ゼロ。ほとんど揺れることなく、穏やかなベースラインに落ち着きます。' },
                'The Critic': { destiny: '成熟した波', dynamics: 'バランスの取れた押し引き。一方が追い、他方が調整します。「接近」と「スペース」のサイクルを繰り返しますが、徐々に穏やかになります。' },
                'The Firestarter': { destiny: '情熱の反動', dynamics: '情熱的ですが不安定になりがちです。情熱家が包容力タイプを圧倒すると、収拾がつかなくなります。「クールダウン」の習慣が不可欠です。' },
                'The Instigator': { destiny: 'サバイバル・スパイラル', dynamics: '包容力タイプがカオスの「ヒートシンク（吸熱材）」になります。包容力タイプが聖人でない限り生き残れません。' }
            },
            'The Critic': {
                'The Altruist': { destiny: '成熟した波', dynamics: 'バランスの取れた押し引き。一方が追い、他方が調整します。時間とともに減衰する穏やかなサイクルです。' },
                'The Critic': { destiny: '極寒の安定', dynamics: '安定的ですが冷える可能性があります。二人とも「ブレーキ」で、アクセルがありません。デートなどで意識的に温度を上げる必要があります。' },
                'The Firestarter': { destiny: '制御された情熱', dynamics: '冷静沈着タイプが情熱家タイプの爆発を防ぎます。摩擦は高いですが、構造的に地に足がついています。' },
                'The Instigator': { destiny: '摩擦の罠', dynamics: '常に反応を抑え込む形になります。対立の可能性が高いです。' }
            },
            'The Firestarter': {
                'The Altruist': { destiny: '情熱の反動', dynamics: '高い情熱ですが、強い境界線が必要です。Altruistが安定性を提供する必要があります。' },
                'The Critic': { destiny: '制御された情熱', dynamics: '冷静沈着タイプが情熱家タイプの爆発を防ぎます。摩擦は高いですが、構造的に地に足がついています。' },
                'The Firestarter': { destiny: '燃え尽きる情熱', dynamics: '急速なエスカレーションと必然的な燃え尽き。大きなショックに耐えるための「減衰力」が不足しています。' },
                'The Instigator': { destiny: '負のスパイラル', dynamics: '揮発性と反応性の出会い。危険度高。破壊的な行動のサイクルが増幅します。' }
            },
            'The Instigator': {
                'The Altruist': { destiny: 'サバイバル・スパイラル', dynamics: '包容力タイプがカオスの「ヒートシンク」になります。包容力タイプが自己犠牲的でない限り困難です。' },
                'The Critic': { destiny: '摩擦の罠', dynamics: '高い対立と恨み。常に反応を抑え込む形になります。' },
                'The Firestarter': { destiny: '負のスパイラル', dynamics: '揮発性と反応性の出会い。危険度高。破壊的な行動のサイクルが増幅します。' },
                'The Instigator': { destiny: '完全崩壊', dynamics: '不安定で発散的（脆い均衡）。些細な意見の相違で、感情がバラバラに飛び散ります。' }
            }
        },
        individualArchetypes: {
            'The Altruist': { emoji: '💖', name: "包容力タイプ" },
            'The Critic': { emoji: '🧐', name: "冷静沈着タイプ" },
            'The Firestarter': { emoji: '🧨', name: "情熱家タイプ" },
            'The Instigator': { emoji: '🧪', name: "刺激追求タイプ" }
        }
    }
};
