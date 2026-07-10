// Centralized Clean Database - 30 Practice Questions for Verification & Route Testing
const questionsDB = [
    // ==========================================
    // 📝 1. TEXT TAGS CATEGORY (10 Questions)
    // ==========================================
    { q: "Which HTML tag is used to define a paragraph?", options: ["<para>", "<p>", "<text>", "<paragraph>"], ans: 1, category: "text-tag" },
    { q: "Which HTML tag is used to display the largest heading?", options: ["<heading>", "<head>", "<h1>", "<h6>"], ans: 2, category: "text-tag" },
    { q: "Which HTML tag is used to insert a line break?", options: ["<newline>", "<br>", "<lb>", "<break>"], ans: 1, category: "text-tag" },
    { q: "Which HTML tag defines text with strong importance?", options: ["<bold>", "<i>", "<strong>", "<bdo>"], ans: 2, category: "text-tag" },
    { q: "Which HTML tag is used to render emphasized text?", options: ["<em>", "<italic>", "<i>", "<emp>"], ans: 0, category: "text-tag" },
    { q: "Which HTML element indicates a longer block quotation?", options: ["<quote>", "<q>", "<blockquote\>", "<cite>"], ans: 2, category: "text-tag" },
    { q: "Which HTML tag defines marked or highlighted text?", options: ["<high>", "<mark>", "<spot>", "<paint>"], ans: 1, category: "text-tag" },
    { q: "Which HTML tag is used to display subscript text?", options: ["<sub\>", "<sup\>", "<under>", "<bottom>"], ans: 0, category: "text-tag" },
    { q: "Which HTML tag is used to represent preformatted text?", options: ["<code>", "<pre\>", "<text>", "<format>"], ans: 1, category: "text-tag" },
    { q: "Which HTML element is used to add a thematic break or horizontal line?", options: ["<line>", "<br>", "<hr\>", "<border>"], ans: 2, category: "text-tag" },

    // ==========================================
    // 📋 2. FORM TAGS CATEGORY (10 Questions)
    // ==========================================
    { q: "Which HTML tag is used to create an interactive form container?", options: ["<input>", "<action>", "<form\>", "<fieldset>"], ans: 2, category: "form-tag" },
    { q: "Which input type value is used for single selection round dots?", options: ["type='checkbox'", "type='radio'", "type='button'", "type='circle'"], ans: 1, category: "form-tag" },
    { q: "Which HTML tag is used to create a multiline text input zone?", options: ["<input type='text'>", "<textbox>", "<input type='textarea'>", "<textarea\>"], ans: 3, category: "form-tag" },
    { q: "Which HTML tag is used to define a dropdown list selection container?", options: ["<list>", "<dropdown>", "<select\>", "<option>"], ans: 2, category: "form-tag" },
    { q: "Which element is used to represent an option inside a select dropdown menu?", options: ["<opt>", "<choice>", "<item>", "<option\>"], ans: 3, category: "form-tag" },
    { q: "Which attribute is used to provide a temporary hint text inside an input box?", options: ["hint", "placeholder", "value", "title"], ans: 1, category: "form-tag" },
    { q: "Which input type is specifically optimized for entering passwords?", options: ["type='secret'", "type='hidden'", "type='password'", "type='text'"], ans: 2, category: "form-tag" },
    { q: "Which attribute is used to combine multiple radio buttons into a single choice group?", options: ["id", "name", "group", "class"], ans: 1, category: "form-tag" },
    { q: "Which HTML tag is used to group related elements inside a web form?", options: ["<group>", "<section>", "<fieldset\>", "<legend>"], ans: 2, category: "form-tag" },
    { q: "Which input type creates a clickable submission trigger for forms?", options: ["type='click'", "type='submit'", "type='action'", "type='send'"], ans: 1, category: "form-tag" },

    // ==========================================
    // 🎬 3. CSS ANIMATION CATEGORY (10 Questions)
    // ==========================================
    { q: "Which CSS at-rule is used to define the animation keyframe states?", options: ["@animation", "@keyframes", "@frames", "@motion"], ans: 1, category: "css-animation" },
    { q: "Which CSS property specifies the duration of an animation cycle?", options: ["animation-time", "animation-speed", "animation-duration", "transition-delay"], ans: 2, category: "css-animation" },
    { q: "Which value makes an animation loop indefinitely?", options: ["loop", "infinite", "always", "continuous"], ans: 1, category: "css-animation" },
    { q: "Which CSS property binds keyframe rules to a specific HTML element target?", options: ["animation-name", "animation-target", "animation-link", "keyframes-set"], ans: 0, category: "css-animation" },
    { q: "Which property controls the speed curve or pacing of a CSS animation?", options: ["animation-curve", "animation-timing-function", "animation-pace", "transition-effect"], ans: 1, category: "css-animation" },
    { q: "Which CSS value plays the animation in reverse on alternate cycles?", options: ["reverse", "alternate", "alternate-reverse", "backwards"], ans: 1, category: "css-animation" },
    { q: "Which property specifies what styles apply before or after an animation runs?", options: ["animation-fill-mode", "animation-state", "animation-style", "transition-behavior"], ans: 0, category: "css-animation" },
    { q: "Which property specifies whether a CSS animation is running or paused?", options: ["animation-status", "animation-mode", "animation-play-state", "animation-control"], ans: 2, category: "css-animation" },
    { q: "Which property sets a delay interval before the animation starts executing?", options: ["animation-wait", "animation-delay", "delay-time", "transition-pause"], ans: 1, category: "css-animation" },
    { q: "What is the shorthand property to configure all animation settings in one single line?", options: ["css-animation", "animate", "animation", "motion"], ans: 2, category: "css-animation" }
];

let quizQuestions = [];
let currIdx = 0;
let score = 0;
let userAnswers = []; // Tracks historical choice tracking for end-review report

const el = (id) => document.getElementById(id);

// Is se hm array ka ans ko shuffle kar rhay hain 
function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

// Main Launcher: Call this to kick off the dynamic review or master quiz
function startNewQuiz(limit = 10, targetCategory = "all") {
    currIdx = 0;
    score = 0;
    userAnswers = [];

    // Filter by category if needed, otherwise pool everything
    let filteredPool = targetCategory === "all"
        ? questionsDB
        : questionsDB.filter(q => q.category === targetCategory);

    // Shuffle and pick requested limit count
    quizQuestions = shuffleArray(filteredPool).slice(0, limit).map(q => {
        const correctText = q.options[q.ans];
        const shuffledOptions = shuffleArray(q.options);
        return {
            q: q.q,
            options: shuffledOptions,
            correct: correctText
        };
    });

    // Display updates
    el('quiz-feedback').innerHTML = "";
    loadQuestion();
}

function loadQuestion() {
    if (quizQuestions.length === 0) return;

    const current = quizQuestions[currIdx];

    // Update structural text wrappers inside HTML components
    el('quiz-question').textContent = `[Question ${currIdx + 1}/${quizQuestions.length}]: ${current.q}`;

    const optionsGroup = el('quiz-options-group');
    optionsGroup.innerHTML = ""; // Wipe past option buttons

    current.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.type = 'button';
        btn.textContent = opt;

        btn.addEventListener('click', () => handleOptionSelection(opt, btn));
        optionsGroup.appendChild(btn);
    });
}

function handleOptionSelection(selectedOpt, clickedBtn) {
    const current = quizQuestions[currIdx];
    const correctOpt = current.correct;

    // Lock down options instantly after first click to avoid cheats
    const allButtons = document.querySelectorAll('.quiz-option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    // Evaluate answer against truth value
    if (selectedOpt === correctOpt) {
        score++;
        clickedBtn.classList.add('correct-choice');
        el('quiz-feedback').innerHTML = "<span style='color: #4ade80;'>✔ Correct Answer! Excellent.</span>";
    } else {
        clickedBtn.classList.add('wrong-choice');
        el('quiz-feedback').innerHTML = `<span style='color: #f87171;'>❌ Wrong! Correct was: <strong>${correctOpt}</strong></span>`;
    }

    userAnswers.push({ question: current.q, selected: selectedOpt, correct: correctOpt });

    // Auto-advance delay framework like W3schools
    setTimeout(() => {
        currIdx++;
        if (currIdx < quizQuestions.length) {
            el('quiz-feedback').innerHTML = "";
            loadQuestion();
        } else {
            showQuizSummaryReport();
        }
    }, 1000);
}

function showQuizSummaryReport() {
    const optionsGroup = el('quiz-options-group');
    const pct = Math.round((score / quizQuestions.length) * 100);

    el('quiz-question').textContent = "Quiz Challenge Completed!";

    optionsGroup.innerHTML = `
        <div class="quiz-result-card" style="width:100%; padding:15px; text-align:center;">
            <h3 style="margin:0; font-size:1.5rem; color:#64ffda;">Score: ${score} / ${quizQuestions.length}</h3>
            <p style="margin:8px 0; color:#cbd5e1;">Success Rate Matrix: <strong>${pct}%</strong></p>
            <p style="font-size:0.9rem; color:#94a3b8; margin-bottom:15px;">
                ${pct >= 70 ? "🎉 Outstanding work! Concept successfully retained." : "💡 Good attempt! Re-read documentation tips and re-verify your targets."}
            </p>
            <button class="quiz-btn" style="width:100%;" onclick="resetToDocumentationView()">Back to Course Content ↩</button>
        </div>
    `;
}

function resetToDocumentationView() {
    // 1. Browser ke URL se parameters check karein ke abhi kaunsi quiz chal rahi thi
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategory = urlParams.get('category');

    // 2. Agar koi specific category chal rahi thi (e.g. css-animation)
    if (currentCategory) {
        // User ko uske specific category page par wapas bhej dein (e.g. css-animation.html ya content.html?page=css-animation)
        // Aap apne project ke absolute files structure ke mutabik niche wale link ko adjust kar sakte hain:
        window.location.href = `/pages/${currentCategory}.html`;
    } else {
        // Agar pure course ki mix quiz (all) chal rahi thi, to main home page par bhej dein
        window.location.href = "../index.html";
    }
}

// Dynamic URL Detector framework
document.addEventListener("DOMContentLoaded", () => {
    // 1. Browser ke URL se parameters read karein
    const urlParams = new URLSearchParams(window.location.search);

    // 2. URL se 'category' ki value nikalen. Agar kuch na ho, to default 'all' chalega
    const currentCategory = urlParams.get('category') || "all";

    // 3. Dynamic header pill update (W3Schools style display refinement)
    const liveCounterEl = el('live-counter');
    if (liveCounterEl) {
        liveCounterEl.textContent = currentCategory.toUpperCase().replace('-', ' ');
    }

    // 4. Auto-launch the exact quiz dynamically!
    startNewQuiz(10, currentCategory);
});
