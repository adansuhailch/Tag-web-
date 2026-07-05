/**
 * js-part.js — JavaScript Learning Page Logic
 * Tag Web | Requires js-topics.js to be loaded first
 */

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentTopicKey = null;
let allTopicKeys = [];
let filteredKeys = [];
let visitedTopics = new Set(JSON.parse(localStorage.getItem('tw-js-visited') || '[]'));
let activeCategory = 'All';
let cmEditor = null; // CodeMirror instance

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    allTopicKeys = Object.keys(jsTopicData);
    filteredKeys = [...allTopicKeys];

    buildCategoryFilters();
    updateProgress();

    // Keyboard shortcut: Ctrl+Enter runs code
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const modal = document.getElementById('modal');
            if (modal && modal.style.display !== 'none') {
                runLiveCode();
            }
        }
    });

    // Close modal on backdrop click
    const modal = document.getElementById('modal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal();
        });
    }

    // Scroll buttons
    const topBtn = document.getElementById('scrollTopBtn');
    const botBtn = document.getElementById('scrollBottomBtn');
    if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    if (botBtn) botBtn.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));

    window.addEventListener('scroll', () => {
        if (topBtn) topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });
});

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
function openModal(key) {
    const topic = jsTopicData[key];
    if (!topic) return;

    currentTopicKey = key;

    // Mark as visited
    visitedTopics.add(key);
    localStorage.setItem('tw-js-visited', JSON.stringify([...visitedTopics]));
    updateProgress();

    // Highlight card
    document.querySelectorAll('.js-topic-card').forEach(c => c.classList.remove('active-card'));
    const card = document.querySelector(`[data-topic="${key}"]`);
    if (card) card.classList.add('active-card');

    // Populate modal
    document.getElementById('modal-title').textContent = topic.title;
    document.getElementById('modal-history').textContent = topic.history;

    // Initialize or update CodeMirror
    const textArea = document.getElementById('modal-editor');
    textArea.value = topic.code;
    if (!cmEditor) {
        cmEditor = CodeMirror.fromTextArea(textArea, {
            mode: "htmlmixed",
            theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'eclipse' : 'dracula',
            lineNumbers: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            indentUnit: 4,
            tabSize: 4,
            lineWrapping: true,
            extraKeys: {
                "Ctrl-Enter": function (cm) { runLiveCode(); },
                "Cmd-Enter": function (cm) { runLiveCode(); }
            }
        });
    } else {
        cmEditor.setValue(topic.code);
        cmEditor.setOption("theme", document.documentElement.getAttribute('data-theme') === 'light' ? 'eclipse' : 'dracula');
    }
    // Refresh to prevent rendering bugs in hidden modals
    setTimeout(() => cmEditor.refresh(), 50);

    // Initial run
    runLiveCode();

    document.getElementById('quiz-question').textContent = topic.quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz').setAttribute('data-topic', key);

    // Difficulty badge in modal
    const badge = document.getElementById('modal-difficulty');
    if (badge) {
        badge.textContent = topic.difficulty;
        badge.className = 'modal-difficulty-badge ' + (topic.difficulty === 'Beginner' ? 'badge-beginner' : 'badge-intermediate');
    }

    // Next / prev topic
    updateNavigation();

    // Show
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-content').classList.remove('modal-dark');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    currentTopicKey = null;
    document.querySelectorAll('.js-topic-card').forEach(c => c.classList.remove('active-card'));
}

function formatCode() {
    if (!cmEditor) return;
    const code = cmEditor.getValue();
    let formatted = code;
    if (typeof html_beautify !== 'undefined') {
        formatted = html_beautify(code, { indent_size: 4, wrap_line_length: 80 });
    }
    cmEditor.setValue(formatted);
}

function resetCode() {
    if (!cmEditor || !currentTopicKey) return;
    const topic = jsTopicData[currentTopicKey];
    if (topic) {
        cmEditor.setValue(topic.code);
        runLiveCode();
    }
}

function getConsoleInterceptScript(isDark) {
    const textColor = isDark ? '#e8eaf0' : '#1a202c';
    const bgColor = isDark ? '#0d1117' : '#ffffff';
    const codeColor = isDark ? '#64ffda' : '#0a7a8a';

    return `
    <style>
        body { 
            font-family: 'Inter', system-ui, sans-serif; 
            background: ${bgColor}; 
            color: ${textColor}; 
            padding: 12px; 
            margin: 0;
            border-radius: 8px;
        }
        #custom-console {
            background: ${isDark ? '#1a1f2e' : '#f0f4f8'};
            padding: 10px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 14px;
            margin-top: 10px;
            border: 1px solid ${isDark ? '#1e3a5f' : '#c3d7f0'};
            white-space: pre-wrap;
            color: ${codeColor};
            max-height: 150px;
            overflow-y: auto;
        }
        .console-log { margin: 2px 0; }
        .console-error { color: #ff5555; margin: 2px 0; }
        .console-warn { color: #f59e0b; margin: 2px 0; }
    </style>
    <script>
        (function() {
            const oldLog = console.log;
            const oldError = console.error;
            const oldWarn = console.warn;
            
            function printToConsole(type, args) {
                let consoleEl = document.getElementById('custom-console');
                if (!consoleEl) {
                    consoleEl = document.createElement('div');
                    consoleEl.id = 'custom-console';
                    document.body.appendChild(consoleEl);
                }
                const msg = Array.from(args).map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg).join(' ');
                const line = document.createElement('div');
                line.className = 'console-' + type;
                line.textContent = '> ' + msg;
                consoleEl.appendChild(line);
                consoleEl.scrollTop = consoleEl.scrollHeight;
            }
            
            console.log = function(...args) {
                printToConsole('log', args);
                oldLog.apply(console, args);
            };
            console.error = function(...args) {
                printToConsole('error', args);
                oldError.apply(console, args);
            };
            console.warn = function(...args) {
                printToConsole('warn', args);
                oldWarn.apply(console, args);
            };
            
            window.onerror = function(msg, url, line) {
                console.error("Error at line " + line + ": " + msg);
                return false;
            };
        })();
    </script>
    `;
}

function runLiveCode() {
    let code = cmEditor ? cmEditor.getValue() : document.getElementById('modal-editor').value;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark' || document.getElementById('modal-content').classList.contains('modal-dark');
    const interceptScript = getConsoleInterceptScript(isDark);

    let wrappedCode = code;

    // Check if code contains full HTML structure
    const hasHtmlDoc = code.toLowerCase().includes('<html') || code.toLowerCase().includes('<body');
    // Check if code contains HTML snippets (like <script>, <button>, <div>)
    const isHtmlSnippet = /<\s*?(script|div|p|h[1-6]|button|ul|li|span|a|form|input|style)/i.test(code);

    if (hasHtmlDoc) {
        // Inject script inside <head> or before </body>
        if (code.includes('</head>')) {
            wrappedCode = code.replace('</head>', interceptScript + '</head>');
        } else if (code.includes('</body>')) {
            wrappedCode = code.replace('</body>', interceptScript + '</body>');
        } else {
            wrappedCode = interceptScript + code;
        }
    } else if (isHtmlSnippet) {
        // It's an HTML snippet, inject directly into body
        wrappedCode = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                ${interceptScript}
            </head>
            <body>
                ${code}
            </body>
            </html>
        `;
    } else {
        // Just JS/text, wrap it
        wrappedCode = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                ${interceptScript}
            </head>
            <body>
                <script>
                    ${code}
                </script>
            </body>
            </html>
        `;
    }

    document.getElementById('live-preview').srcdoc = wrappedCode;
}

function copyCode() {
    const code = cmEditor ? cmEditor.getValue() : document.getElementById('modal-editor').value;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        const orig = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = orig, 2000);
    });
}

function checkAnswer() {
    const key = document.getElementById('quiz').getAttribute('data-topic');
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const correct = jsTopicData[key]?.answer?.toLowerCase() || '';
    const fb = document.getElementById('quiz-feedback');

    if (answer === correct) {
        fb.innerHTML = "<span style='color:#10b981;font-weight:700'>✅ Correct!</span>";
    } else {
        fb.innerHTML = "<span style='color:#f59e0b;font-weight:700'>🔄 Try again!</span>";
    }
}

function toggleModalTheme() {
    const modalContent = document.getElementById('modal-content');
    modalContent.classList.toggle('modal-dark');

    if (cmEditor) {
        const isDark = modalContent.classList.contains('modal-dark');
        cmEditor.setOption("theme", isDark ? 'dracula' : 'eclipse');
    }
    // Re-run code to apply theme to iframe
    runLiveCode();
}

// Global theme listener to sync CodeMirror if toggled outside
const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
        if (m.attributeName === 'data-theme' && cmEditor) {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            cmEditor.setOption("theme", isDark ? 'dracula' : 'eclipse');
            if (document.getElementById('modal').style.display !== 'none') {
                runLiveCode(); // Update iframe theme
            }
        }
    });
});
observer.observe(document.documentElement, { attributes: true });

/* ═══════════════════════════════════════════════
   NAVIGATION (next / prev)
═══════════════════════════════════════════════ */
function updateNavigation() {
    const idx = filteredKeys.indexOf(currentTopicKey);
    const prevBtn = document.getElementById('prev-topic-btn');
    const nextBtn = document.getElementById('next-topic-btn');

    if (prevBtn) {
        prevBtn.style.display = idx > 0 ? 'inline-block' : 'none';
    }
    if (nextBtn) {
        nextBtn.style.display = idx < filteredKeys.length - 1 ? 'inline-block' : 'none';
    }
}

function goNextTopic() {
    const idx = filteredKeys.indexOf(currentTopicKey);
    if (idx < filteredKeys.length - 1) openModal(filteredKeys[idx + 1]);
}

function goPrevTopic() {
    const idx = filteredKeys.indexOf(currentTopicKey);
    if (idx > 0) openModal(filteredKeys[idx - 1]);
}

/* ═══════════════════════════════════════════════
   SEARCH
═══════════════════════════════════════════════ */
function searchTopic() {
    const query = document.getElementById('jsSearchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.js-topic-card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const show = text.includes(query);
        card.style.display = show ? '' : 'none';
    });

    // Hide empty category sections
    document.querySelectorAll('.js-category-section').forEach(sec => {
        const visible = [...sec.querySelectorAll('.js-topic-card')].some(c => c.style.display !== 'none');
        sec.style.display = visible ? '' : 'none';
    });
}

/* ═══════════════════════════════════════════════
   CATEGORY FILTERS
═══════════════════════════════════════════════ */
function buildCategoryFilters() {
    const bar = document.getElementById('category-filter-bar');
    if (!bar) return;

    // "All" pill
    const allPill = createPill('All', '#6b7280');
    allPill.classList.add('active');
    bar.appendChild(allPill);

    jsCategories.forEach(cat => {
        bar.appendChild(createPill(cat.key, cat.color, cat.label));
    });
}

function createPill(key, color, label) {
    const btn = document.createElement('button');
    btn.className = 'filter-pill';
    btn.textContent = label || key;
    btn.dataset.cat = key;
    btn.style.setProperty('--pill-color', color);
    btn.addEventListener('click', () => filterByCategory(key));
    return btn;
}

function filterByCategory(cat) {
    activeCategory = cat;

    // Update pill states
    document.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.cat === cat);
    });

    const cards = document.querySelectorAll('.js-topic-card');
    const sections = document.querySelectorAll('.js-category-section');

    cards.forEach(card => {
        const show = cat === 'All' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
    });

    sections.forEach(sec => {
        const visible = [...sec.querySelectorAll('.js-topic-card')].some(c => c.style.display !== 'none');
        sec.style.display = visible ? '' : 'none';
    });

    // Update filtered keys for navigation
    filteredKeys = allTopicKeys.filter(k => cat === 'All' || jsTopicData[k]?.category === cat);
}

/* ═══════════════════════════════════════════════
   PROGRESS
═══════════════════════════════════════════════ */
function updateProgress() {
    const total = allTopicKeys.length;
    const visited = visitedTopics.size;
    const pct = Math.round((visited / total) * 100);

    const bar = document.getElementById('js-progress-fill');
    const text = document.getElementById('js-progress-text');
    if (bar) bar.style.width = pct + '%';
    if (text) text.textContent = `${visited} / ${total} topics explored (${pct}%)`;
}

function resetProgress() {
    if (!confirm('Reset your JS learning progress?')) return;
    visitedTopics.clear();
    localStorage.removeItem('tw-js-visited');
    updateProgress();
    document.querySelectorAll('.js-topic-card').forEach(c => c.classList.remove('visited-card'));
}
