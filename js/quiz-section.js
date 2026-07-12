let questionsDB = []; // Data live load hoga questions.json se
let quizQuestions = [];
let currIdx = 0;
let score = 0;
let userAnswers = []; // Tracks historical choice tracking for end-review report

const el = (id) => document.getElementById(id);

// Symmetrical Array Shuffler
function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

// Upgraded Async Launcher: JSON fetch karke browser routing states maintain rakhega
async function startNewQuiz(limit = "all", targetCategory = "all") {
    const urlParams = new URLSearchParams(window.location.search);

    currIdx = parseInt(urlParams.get('q')) || 0;
    score = parseInt(urlParams.get('score')) || 0;
    userAnswers = [];

    // 🌟 HAR CATEGORY KI CUSTOM LIMIT KA MATRIX
    const categoryLimits = {
        "text-tag": 15,       // text-tag ke hamesha 15 show honge
        // "css-animation": 10,  // css-animation ke hamesha 10 show honge
        // "html-elements": 20,  // html-elements ke hamesha 20 show honge
        // "all": "all"          // default mix data ke liye saare load honge
    };

    try {
        const response = await fetch('../data/quiz-section.json');
        questionsDB = await response.json();

        let validQuestions = questionsDB.filter(q => q.q && Array.isArray(q.options));

        let filteredPool = targetCategory === "all"
            ? validQuestions
            : validQuestions.filter(q => q.category === targetCategory);

        // 🌟 AUTOMATIC LIMIT ASSIGNMENT:
        // Agar URL se koi limit nahi aayi (yaani "all" hai), to hum upar wale matrix se us category ki limit uthaenge
        let activeLimit = limit;
        if (limit === "all" && categoryLimits[targetCategory]) {
            activeLimit = categoryLimits[targetCategory];
        }

        // Final integer parsing or fallback to total pool length
        let finalLimit = activeLimit === "all" ? filteredPool.length : parseInt(activeLimit);

        quizQuestions = filteredPool.slice(0, finalLimit).map(q => {
            const correctText = q.options[q.ans];
            return {
                q: q.q,
                options: q.options,
                correct: correctText
            };
        });

        el('quiz-feedback').innerHTML = "";

        if (currIdx < quizQuestions.length) {
            loadQuestion();
        } else {
            showQuizSummaryReport();
        }

    } catch (error) {
        console.error("Error loading the questions database json:", error);
        el('quiz-question').textContent = "Failed to load dynamic test parameters.";
    }
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
    // 1. URL se check karein ke abhi kaunsi category chal rahi thi
    const urlParams = new URLSearchParams(window.location.search);
    const currentCategory = urlParams.get('category');

    // 2. Agar category hai AUR woh "all" NAHI hai (jaise text-tag, form-tag)
    if (currentCategory && currentCategory !== "all") {
        // User ko uske makhsoos topic page par wapas bhejien
        window.location.href = `${currentCategory}.html`;
    } else {
        // 🏡 AGAR CATEGORY "all" HAI: To folder se bahar nikal kar seedha index/dashboard par bhejien!
        window.location.href = "../index.html";

        // NOTE: Agar aapka home page dashboard.html hai, to aap isko aise likhenge:
        // window.location.href = "../dashboard.html";
    }
}


// Dynamic URL Detector framework
// Dynamic URL Detector framework
document.addEventListener("DOMContentLoaded", () => {
    // 1. Browser ke URL se parameters read karein
    const urlParams = new URLSearchParams(window.location.search);

    // 2. URL se 'category' ki value nikalen. Agar kuch na ho, to default 'all' chalega
    const currentCategory = urlParams.get('category') || "all";

    // 3. URL se 'limit' ki value nikalen. Agar URL mein limit nahi hai, to default "all" chalega
    const currentLimit = urlParams.get('limit') || "all";

    // 4. Dynamic header pill update (W3Schools style display refinement)
    const liveCounterEl = el('live-counter');
    if (liveCounterEl) {
        liveCounterEl.textContent = currentCategory.toUpperCase().replace('-', ' ');
    }

    // 5. Auto-launch the exact quiz dynamically (Ab yeh URL ke mutabik chalega!)
    startNewQuiz(currentLimit, currentCategory);
});
