// ⚡ AUTOMATIC SKELETON INJECTOR FOR CARDS
(function () {
    // 1. Saare tag-cards ko auto target karo
    const allCards = document.querySelectorAll('.tag-card');
    allCards.forEach(card => card.classList.add('skeleton-shimmer'));

    // 2. 🎯 THE HEADINGS FIX: Saari h1 aur h2 headings ko bhi auto target karo!
    const allHeadings = document.querySelectorAll('h1, h2');
    allHeadings.forEach(heading => {
        heading.classList.add('skeleton-shimmer');
    });
    const allhref = document.querySelectorAll('a');
    allhref.forEach(a => {
        a.classList.add('skeleton-shimmer');
    });
    const allpar = document.querySelectorAll('p');
    allpar.forEach(p => {
        p.classList.add('skeleton-shimmer');
    });
    const allquizopt = document.querySelectorAll('.quizoption');
    allquizopt.forEach(quizoption => {
        quizoption.classList.add('skeleton-shimmer');
    });
})();


(function () {
    const editorTextAreaId = 'modal-editor';
    const previewFrameId = 'live-preview';
    const quizContainerId = 'quiz';
    const defaultCategory = 'tag-web';

    if (typeof window.tagData === 'undefined') {
        window.tagData = {};
    }

    window.myCodeEditor = null;

    function openModal(tag) {
        const pageName = window.location.pathname.split('/').pop().replace('.html', '');
        const category = (pageName === 'index' || pageName === '') ? defaultCategory : pageName;
        window.open(`/pages/editor.html?category=${category}&tag=${tag}`, '_blank');
    }

    function goBack() {
        window.history.back();
    }

    function getCurrentCodeValue() {
        if (window.myCodeEditor && typeof window.myCodeEditor.getValue === 'function') {
            return window.myCodeEditor.getValue();
        }

        const textarea = document.getElementById(editorTextAreaId);
        return textarea ? textarea.value : '';
    }

    function setEditorValue(code) {
        const safeCode = code || '';
        const textarea = document.getElementById(editorTextAreaId);

        if (!textarea) {
            return;
        }

        if (window.myCodeEditor && typeof window.myCodeEditor.setValue === 'function') {
            window.myCodeEditor.setValue(safeCode);
            window.myCodeEditor.clearHistory();
            window.setTimeout(() => {
                window.myCodeEditor.refresh();
            }, 60);
            return;
        }

        textarea.value = safeCode;
    }

    function getEditorContentFromEntry(entry) {
        if (!entry || typeof entry !== 'object') {
            return '';
        }

        return entry.code || entry.content || entry.snippet || entry.example || entry.html || '';
    }

    function collectLintAnnotations(text) {
        const annotations = [];
        const lines = text.split(/\r?\n/);
        const tagRegex = /<\/?([a-zA-Z][\w:-]*)(?:\s[^>]*)?>/g;
        const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
        const stack = [];

        function addAnnotation(lineIndex, message, severity) {
            const safeLine = Math.max(0, Math.min(lines.length - 1, lineIndex));
            const lineText = lines[safeLine] || '';
            annotations.push({
                from: { line: safeLine, ch: 0 },
                to: { line: safeLine, ch: lineText.length || 1 },
                message,
                severity: severity || 'warning'
            });
        }

        let match;
        while ((match = tagRegex.exec(text)) !== null) {
            const fullTag = match[0];
            const tagName = (match[1] || '').toLowerCase();
            const lineIndex = text.slice(0, match.index).split(/\r?\n/).length - 1;

            if (!tagName || fullTag.startsWith('<!--') || fullTag.startsWith('<!')) {
                continue;
            }

            if (fullTag.startsWith('</')) {
                if (stack.length === 0) {
                    addAnnotation(lineIndex, `Unexpected closing tag </${tagName}>.`, 'error');
                } else {
                    const last = stack[stack.length - 1];
                    if (last.name !== tagName) {
                        addAnnotation(lineIndex, `Closing tag </${tagName}> does not match <${last.name}>.`, 'error');
                    }
                    stack.pop();
                }
            } else if (!fullTag.endsWith('/>') && !voidElements.has(tagName)) {
                stack.push({ name: tagName, line: lineIndex });
            }
        }

        if (stack.length) {
            stack.forEach((entry) => {
                addAnnotation(entry.line, `Unclosed tag <${entry.name}>.`, 'warning');
            });
        }

        if (/<script\b[^>]*>/i.test(text) && !/<\/script>/i.test(text)) {
            addAnnotation(lines.length - 1, 'Missing closing </script> tag.', 'warning');
        }

        if (/<style\b[^>]*>/i.test(text) && !/<\/style>/i.test(text)) {
            addAnnotation(lines.length - 1, 'Missing closing </style> tag.', 'warning');
        }

        return annotations;
    }

    function initializeCodeEditor() {
        const textarea = document.getElementById(editorTextAreaId);

        if (!textarea || typeof window.CodeMirror !== 'function') {
            return null;
        }

        if (window.myCodeEditor && window.myCodeEditor.getValue) {
            return window.myCodeEditor;
        }

        window.myCodeEditor = window.CodeMirror.fromTextArea(textarea, {
            theme: 'dracula',
            // theme: 'material-palenight',
            lineNumbers: true,
            lineWrapping: true,
            tabSize: 4,
            indentUnit: 4,
            matchBrackets: true,
            autoCloseTags: true,
            autoCloseBrackets: true,
            mode: 'htmlmixed',
            keyMap: 'sublime',
            viewportMargin: Infinity,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-lint-markers'],
            lint: {
                getAnnotations: function (text) {
                    return collectLintAnnotations(text);
                }
            },
            extraKeys: {
                'Tab': 'indentMore',
                'Shift-Tab': 'indentLess',
                'Cmd-/': 'toggleComment',    // for macOS
                'Ctrl-/': 'toggleComment',   // for windows/linux
                'Alt-Up': 'swapLineUp',
                'Alt-Down': 'swapLineDown',
                'Ctrl-D': 'duplicateLine',

                // Asli Format Code Logic 🔥
                'Shift-Alt-F': function (cm) {
                    // Pura code select karne ke liye
                    cm.execCommand("selectAll");
                    // Select kiye huay code ko automatic line up aur spacing dene ke liye
                    cm.execCommand("indentAuto");
                    // Formatting ke baad cursor ko unselect karne ke liye (taki text highlighted na rahe)
                    cm.setCursor(cm.getCursor());
                }
            }

        });

        window.myCodeEditor.on('change', function (instance) {
            const preview = document.getElementById(previewFrameId);
            if (preview) {
                preview.srcdoc = instance.getValue();
            }
        });

        const wrapper = window.myCodeEditor.getWrapperElement();
        wrapper.classList.add('tag-web-codemirror');

        window.setTimeout(() => {
            window.myCodeEditor.refresh();
        }, 120);

        return window.myCodeEditor;
    }

    function refreshEditorLayout() {
        if (window.myCodeEditor && typeof window.myCodeEditor.refresh === 'function') {
            window.setTimeout(() => {
                window.myCodeEditor.refresh();
            }, 80);
        }
    }

    function fillEditorPageData(tag) {
        if (!window.tagData[tag]) {
            document.getElementById('modal-title').innerHTML = 'Tag Not Found';
            document.getElementById('modal-history').innerHTML = 'The requested tag could not be found in the current dataset.';
            document.getElementById('modal-tip').innerHTML = 'Please return to the main list and select another tag.';
            return;
        }

        const currentEntry = window.tagData[tag];
        const urlParams = new URLSearchParams(window.location.search);
        const categoryName = (urlParams.get('category') || defaultCategory).replace(/-/g, ' ');

        document.getElementById('breadcrumb-parent').textContent = categoryName;
        document.getElementById('modal-title').innerHTML = currentEntry.title || tag;
        document.getElementById('modal-history').innerHTML = currentEntry.history || 'No history available for this tag.';
        document.getElementById('modal-tip').innerHTML = currentEntry.tip || 'No tip available for this tag.';
        document.getElementById('quiz-question').innerHTML = currentEntry.quiz || 'No quiz available for this tag.';
        document.getElementById('quiz-answer').value = '';
        document.getElementById('quiz-feedback').innerHTML = '';
        document.getElementById(quizContainerId).setAttribute('data-tag', tag);

        /* ==========================================================================
           DYNAMIC LAZY-LOADING VIDEO ENGINE INJECTION START 🎥
           ========================================================================== */
        const accordion = document.getElementById("video-accordion-container");
        const iframeSlot = document.getElementById("dynamic-iframe-slot");

        if (accordion && iframeSlot) {
            // 1. Purani loaded video ko clean karein aur accordion close kar dein
            accordion.removeAttribute('open');
            iframeSlot.innerHTML = '';

            // 2. Check karein kya current JSON entry ke andar video ID majood hai?
            const videoID = currentEntry.yt_video_id;
            const tagTitle = currentEntry.title || tag;

            // Har single tag par accordion element ko interface par active (block) rakhein
            accordion.style.display = 'block';

            // Multi-Click Event Listener Crash se bachne ke liye summary node ko clean aur refresh karein
            const summary = accordion.querySelector('.video-summary-trigger');
            const spanText = summary.querySelector('span'); // Target standard text inside summary
            const newSummary = summary.cloneNode(true);
            summary.parentNode.replaceChild(newSummary, summary);

            // Clean encoding structures for titles nodes
            const cleanTitle = tagTitle.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

            if (videoID && videoID.trim() !== "") {
                /* ==========================================================================
                   STATE A: VIDEO IS LIVE AND VERIFIED 📺
                   ========================================================================== */
                // Default reset elements inside viewports handles
                newSummary.querySelector('span').innerHTML = "Watch Live Code Explanation";
                newSummary.querySelector('i.fa-youtube').style.color = "#ea4335"; // Bright YouTube Red

                newSummary.addEventListener('click', function (e) {
                    if (!accordion.hasAttribute('open')) {
                        if (iframeSlot.innerHTML === '') {
                            iframeSlot.innerHTML = `
                                <iframe src="https://youtube.com/embed/${videoID}" 
                                        title="Tag Web Tutorial: ${cleanTitle}" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen>
                                </iframe>`;
                        }
                    }
                });
            } else {
                /* ==========================================================================
                   STATE B: VIDEO COMING SOON - DYNAMIC RETENTION ENGINE 🚀🔥
                   ========================================================================== */
                // Tag ka clean visual string extract karein (e.g. <!DOCTYPE html> ya <html>)
                const visibleTagName = tag.startsWith('!') ? `&lt;${tag}&gt;` : `&lt;${tag}&gt;`;
                const safeBadge = visibleTagName.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

                // Dynamic banner injection based on active template parameters string
                newSummary.querySelector('span').innerHTML = `<code>${safeBadge}</code> Guide Coming Soon! Stay Connected ⚡`;
                newSummary.querySelector('i.fa-youtube').style.color = "#ff0000"; // Dim icon color to specify inactive stream

                newSummary.addEventListener('click', function (e) {
                    if (!accordion.hasAttribute('open')) {
                        iframeSlot.innerHTML = `
                            <div style="padding: 24px; text-align: center; font-family: 'Outfit', sans-serif; color: #fffafa;">
                                <div style="font-size: 32px; margin-bottom: 12px;">🎬</div>
                                <h3 style="margin: 0 0 8px 0; color: #fffafa; font-size: 16px;">We are baking this video guide right now!</h3>
                                <p style="margin: 0; font-size: 13px; opacity: 0.8; line-height: 1.5;">
                                    The deep dive code breakdown for <strong style="color: #7aa2f7;">${safeBadge}</strong> is inside our production pipeline.<br>
                                    Subscribe to <strong style="color: #ea4335;">hellodevs</strong> channel so you don't miss the deployment crunch drops!
                                </p>
                            </div>`;
                    }
                });
            }

        }
        const code = getEditorContentFromEntry(currentEntry);
        setEditorValue(code);
        document.getElementById(previewFrameId).srcdoc = code;
        refreshEditorLayout();
    }

    function copyCode() {
        const code = getCurrentCodeValue();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code).then(() => {
                window.alert('🎉 Code copied successfully.');
            });
        } else {
            window.prompt('Copy your code manually:', code);
        }
    }

    function runLiveCode() {
        const code = getCurrentCodeValue();
        document.getElementById(previewFrameId).srcdoc = code;
    }

    function checkAnswer() {
        const tag = document.getElementById(quizContainerId).getAttribute('data-tag');
        const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
        const correct = (window.tagData[tag] && window.tagData[tag].answer) ? window.tagData[tag].answer.toLowerCase() : '';

        if (answer === correct) {
            document.getElementById('quiz-feedback').innerHTML = "<span style='color:#00FFFF;'>Correct!</span>";
        } else {
            document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ffb703;'>Try again!</span>";
        }
    }

    function searchTag() {
        const input = document.getElementById('searchBar').value.toLowerCase();
        const cards = document.querySelectorAll('.tag-card');

        cards.forEach((card) => {
            const tag = card.textContent.toLowerCase();
            if (tag.includes(input)) {
                card.style.display = 'inline-block';
                card.classList.add('highlight');
            } else {
                card.style.display = 'none';
                card.classList.remove('highlight');
            }
        });

        if (input === '') {
            cards.forEach((card) => {
                card.style.display = 'inline-block';
                card.classList.remove('highlight');
            });
        }
    }

    async function loadDynamicEditorData() {
        if (!window.location.pathname.includes('editor.html')) {
            return;
        }

        try {
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category') || defaultCategory;
            const tag = urlParams.get('tag');
            const jsonPath = `../data/${category}.json`;
            const response = await fetch(jsonPath);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            window.tagData = await response.json();
            console.log(`🎉 Master Editor engine loaded data from ${jsonPath}`);

            if (tag && typeof fillEditorPageData === 'function') {
                fillEditorPageData(tag);
            }
        } catch (error) {
            console.error('🚨 Master Editor engine could not load data:', error);
        }
    }

    const routingTargetDB = {
        'text-tag': '/pages/quiz-section.html?category=text-tag',
        'form-tag': '/pages/quiz-section.html?category=form-tag',
        'semantic-media': '/pages/quiz-section.html?category=semantic-media',
        'css-boxmodel': '/pages/quiz-section.html?category=css-boxmodel',
        'css-animation': '/pages/quiz-section.html?category=css-animation',
        'link-tag': '/pages/quiz-section.html?category=link-tag'
    };

    function initInstantClickRouting() {
        const allQuizSections = document.querySelectorAll('.quiz-exercise-card');
        if (allQuizSections.length === 0) return;

        allQuizSections.forEach((currentCard) => {
            const currentTargetKey = currentCard.getAttribute('data-page-target');
            const optionBoxes = currentCard.querySelectorAll('.quizoption');

            optionBoxes.forEach((box) => {
                box.addEventListener('click', (event) => {
                    event.preventDefault();
                    const radioInput = box.querySelector('input[type="radio"]');
                    if (radioInput) {
                        radioInput.checked = true;
                    }

                    const finalDestinationURL = routingTargetDB[currentTargetKey];
                    if (finalDestinationURL) {
                        window.setTimeout(() => {
                            window.open(`/pages/quiz-section.html?category=${currentTargetKey}`, '_blank');
                        }, 300);
                    } else {
                        window.location.href = '/pages/quiz-section.html?category=all';
                    }
                });
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {

        if (typeof loadDynamicEditorData === 'function') {
            loadDynamicEditorData();
        }
        initializeCodeEditor();
        initInstantClickRouting();
        refreshEditorLayout();
    });

    window.openModal = openModal;
    window.goBack = goBack;
    window.copyCode = copyCode;
    window.runLiveCode = runLiveCode;
    window.checkAnswer = checkAnswer;
    window.searchTag = searchTag;
    window.fillEditorPageData = fillEditorPageData;
    window.loadDynamicEditorData = loadDynamicEditorData;
    window.initializeCodeEditor = initializeCodeEditor;

    if (window.location.pathname.includes('editor.html')) {
        window.addEventListener('load', function () {
            initializeCodeEditor();
            refreshEditorLayout();
        });
    }
})();
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.sidebar-panel');
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; // Yeh track karega ke drag ho raha hai ya nahi

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            isDragging = false; // Click start hotay hi drag false ho ga
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'pointer';
        });

        slider.addEventListener('mouseup', (e) => {
            isDown = false;
            slider.style.cursor = 'pointer';

            // Agar user ne mouse hilaya tha (drag kiya tha), toh link khulne se roko
            if (isDragging) {
                e.preventDefault();
            }
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;

            // Agar mouse thoda sa bhi hila hai (let's say 3 pixels se zyada), toh isay drag samjho
            isDragging = true;

            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            slider.scrollLeft = scrollLeft - walk;
        });

        // 🎯 CHOR CHAKKAR FIX: Links par direct click hone se rokne ka logic
        slider.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (isDragging) {
                    e.preventDefault(); // Agar drag ho raha tha toh page change nahi hoga!
                }
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const navInfoBtn = document.getElementById('navInfoBtn');
    const navInfoPopover = document.getElementById('navInfoPopover');

    if (navInfoBtn && navInfoPopover) {
        // Icon click par toggle show/hide class
        navInfoBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Bubbling roko taake document click trigger na ho
            navInfoPopover.classList.toggle('active');
        });

        // Bahar click karne par automatic popup hide karne ka premium handle
        document.addEventListener('click', (e) => {
            if (!navInfoPopover.contains(e.target) && e.target !== navInfoBtn) {
                navInfoPopover.classList.remove('active');
            }
        });
    }
});

// loading screen js 
// ⚡ GLOBAL SKELETON REVEAL SYSTEM
window.addEventListener('load', () => {
    // Dunya ke saare elements dhoondo jin par shimmer chal raha hai
    const shimmerElements = document.querySelectorAll('.skeleton-shimmer');

    // Ek snap action me sab se loading screen ka asar khatam kar do
    shimmerElements.forEach(element => {
        element.classList.remove('skeleton-shimmer');
    });
});
// ⚡ THE ULTIMATE AUTOMATED TAG-WEB BIRTHDAY CONSOLE & FRONT-END ENGINE
// (function () {
//     const today = new Date();
//     // 🎯 STRICT 13th SEPTEMBER TIME GATE (Month 8 = September)
//     if (today.getDate() === 13 && today.getMonth() === 8) {

//         // ==========================================
//         // PHASE 1: FRONT-END VISUAL REWARD POP-UP
//         // ==========================================

//         // 🧱 Creating the Dynamic Neubrutalism Birthday Box
//         const bdayBox = document.createElement('div');
//         bdayBox.id = 'tag-web-bday-card';

//         // Custom Inline CSS Injection to keep it flawless and independent
//         bdayBox.style.cssText = `
//             position: fixed;
//             bottom: 24px;
//             right: 24px;
//             background-color: #0d1117;
//             border: 3px solid #f1c40f;
//             border-radius: 12px;
//             padding: 20px;
//             z-index: 1000000;
//             box-shadow: 6px 6px 0px #000000;
//             max-width: 320px;
//             font-family: 'JetBrains Mono', monospace;
//             animation: bdaySlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
//         `;

//         // HTML Structure inside the box with your pixel game fonts
//         bdayBox.innerHTML = `
//             <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px dashed #30363d; padding-bottom:8px; margin-bottom:12px;">
//                 <span style="color:#f1c40f; font-size:11px; font-weight:700; font-family:'Press Start 2P';">SYSTEM://SYSTEM</span>
//                 <span id="close-bday-box" style="color:#7d8590; cursor:pointer; font-size:14px; font-weight:700;">🗙</span>
//             </div>
//             <h4 style="font-family:'Silkscreen', sans-serif; font-size:18px; color:#ffffff; margin:0 0 6px 0; letter-spacing:1px;">🎉 HAPPY BIRTHDAY!</h4>
//             <p style="color:#e6edf3; font-size:12px; line-height:1.5; margin:0 0 14px 0;">Core system detected: <span style="color:#2f81f7; font-weight:700;">Muhammad Adan Suhail</span> has successfully upgraded to the next level of life engine!</p>
//             <div style="font-family:'Press Start 2P'; font-size:9px; color:#22c55e; text-align:right;">[ LEVEL UP +1 ]</div>
//         `;

//         // Keyframe Animation Injection into Document Head
//         const styleSheet = document.createElement("style");
//         styleSheet.innerText = `
//             @keyframes bdaySlideIn {
//                 0% { transform: translateY(100px); opacity: 0; }
//                 100% { transform: translateY(0); opacity: 1; }
//             }
//         `;
//         document.head.appendChild(styleSheet);

//         // Append the Card Box into webpage body layout
//         document.body.appendChild(bdayBox);

//         // Close action click controller
//         document.getElementById('close-bday-box').addEventListener('click', () => {
//             bdayBox.style.display = 'none';
//         });

//         // ==========================================
//         // PHASE 2: SECRET COMPILER TERMINAL LOGS
//         // ==========================================
//         console.log(
//             `%c🎂 SYSTEM: HAPPY BIRTHDAY ADAN! 🥳\n%c=========================================\n%c[+] LEVEL_STATUS : OVER_POWERED_DEVELOPER\n[+] CURRENT_YEAR : 2026 // EXP_GAIN: +1000XP\n%c=========================================\n%c"Wishing the most dedicated, analytical, and legendary code partner a magnificent year ahead. You are no longer just tracing code tags, you are engineering frameworks. Keep executing the future!" 🚀`,
//             "color: #f1c40f; font-size: 20px; font-weight: bold; font-family: 'Press Start 2P', monospace; text-shadow: 3px 3px 0px #000;",
//             "color: #30363d; font-weight: bold;",
//             "color: #22c55e; font-size: 12px; font-family: 'JetBrains Mono', monospace; font-weight: 600;",
//             "color: #30363d; font-weight: bold;",
//             "color: #e6edf3; font-size: 14px; font-family: -apple-system, sans-serif; line-height: 1.5;"
//         );
//     }
// })();
