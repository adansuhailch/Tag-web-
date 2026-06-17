const tagData = {
    // Core layout & interaction
    "positioning": {
        title: "Positioning",
        history: "Place elements at exact coordinates using position: static | relative | absolute | fixed | sticky. Essential for overlays, tooltips, and precise layouts.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Positioning Example</title>
<style>
  .container { position: relative; height: 220px; background:#f3f4f6; padding:16px; }
  .absolute { position: absolute; top: 12px; right: 12px; background:#ef4444; color:#fff; padding:8px 12px; border-radius:6px; }
</style>
</head>
<body>
  <div class="container">
    <div class="absolute">Absolutely positioned</div>
    <p>Container with an absolutely positioned badge.</p>
  </div>
</body>
</html>`,
        quiz: "Which CSS property family places elements at exact coordinates like top/left?",
        answer: "position (absolute, relative, fixed, sticky)"
    },

    "z-index": {
        title: "z-index",
        history: "Controls stacking order of positioned elements. Higher z-index appears above lower ones within the same stacking context.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>z-index Example</title>
<style>
  .a { position: relative; z-index: 1; width:200px; height:120px; background:#60a5fa; }
  .b { position: relative; margin-top:-60px; z-index: 10; width:200px; height:120px; background:#fb7185; }
</style>
</head>
<body>
  <div class="a"></div>
  <div class="b"></div>
</body>
</html>`,
        quiz: "Which property controls which element appears on top?",
        answer: "z-index"
    },

    "display": {
        title: "display",
        history: "Defines how an element participates in layout: block, inline, inline-block, none, flex, grid, inline-grid, etc.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>display Example</title>
<style>
  .row { display:flex; gap:12px; }
  .box { padding:12px; background:#dbeafe; border-radius:6px; }
</style>
</head>
<body>
  <div class="row">
    <div class="box">Flex item 1</div>
    <div class="box">Flex item 2</div>
  </div>
</body>
</html>`,
        quiz: "Which property sets an element's layout behavior like block, inline, flex, or grid?",
        answer: "display"
    },

    "visibility": {
        title: "visibility",
        history: "Show or hide an element while preserving its layout space. visibility: hidden keeps the box but hides content.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>visibility Example</title>
<style>
  .visible { background:#bbf7d0; padding:12px; }
  .hidden { visibility: hidden; background:#fee2e2; padding:12px; }
</style>
</head>
<body>
  <div class="visible">Visible box</div>
  <div class="hidden">Hidden but space reserved</div>
</body>
</html>`,
        quiz: "Which property hides an element but keeps its layout space?",
        answer: "visibility"
    },

    "overflow": {
        title: "overflow",
        history: "Controls what happens when content exceeds its container: visible, hidden, scroll, auto. Use overflow-x / overflow-y for axes.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>overflow Example</title>
<style>
  .frame { width:300px; height:120px; border:1px solid #cbd5e1; overflow:auto; padding:8px; }
  .content { height:240px; background:linear-gradient(#fff,#f0f9ff); }
</style>
</head>
<body>
  <div class="frame"><div class="content">Scrollable content</div></div>
</body>
</html>`,
        quiz: "Which property controls behavior when content overflows a box?",
        answer: "overflow (auto, hidden, scroll, visible)"
    },

    "object-fit-object-position": {
        title: "object-fit / object-position",
        history: "Control how replaced elements (images, videos) fill their container: cover, contain, fill, none, scale-down; object-position sets focal point.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>object-fit Example</title>
<style>
  .thumb { width:320px; height:180px; overflow:hidden; border-radius:8px; }
  .thumb img { width:100%; height:100%; object-fit: cover; object-position: center top; display:block; }
</style>
</head>
<body>
  <div class="thumb"><img src="https://via.placeholder.com/640x360" alt="Example"></div>
</body>
</html>`,
        quiz: "Which properties control how images fit and where they are positioned inside a container?",
        answer: "object-fit and object-position"
    },

    "pointer-events": {
        title: "pointer-events",
        history: "Enable or disable mouse/touch interactions on an element. pointer-events: none lets events pass through to elements underneath.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>pointer-events Example</title>
<style>
  .overlay { position:fixed; inset:0; background:rgba(0,0,0,0.3); pointer-events:none; }
  .btn { margin:40px; }
</style>
</head>
<body>
  <div class="overlay"></div>
  <button class="btn">Clickable despite overlay</button>
</body>
</html>`,
        quiz: "Which property disables mouse/touch interactions on an element?",
        answer: "pointer-events"
    },

    "user-select": {
        title: "user-select",
        history: "Control whether text can be selected by the user. Useful for UI controls where selection is undesirable.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>user-select Example</title>
<style>
  .no-select { user-select: none; -webkit-user-select: none; padding:12px; background:#fef3c7; border-radius:6px; }
</style>
</head>
<body>
  <div class="no-select">You cannot select this text.</div>
</body>
</html>`,
        quiz: "Which property prevents text selection by the user?",
        answer: "user-select"
    },

    "isolation": {
        title: "isolation",
        history: "Creates a new stacking context so blend modes and z-index behave predictably. Useful when using mix-blend-mode or complex overlays.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>isolation Example</title>
<style>
  .stack { position:relative; isolation:isolate; width:320px; height:160px; }
  .a { position:absolute; inset:10px; background:#ffd6d6; mix-blend-mode:multiply; }
  .b { position:absolute; inset:30px; background:#d6eaff; }
</style>
</head>
<body>
  <div class="stack"><div class="a"></div><div class="b"></div></div>
</body>
</html>`,
        quiz: "Which property creates a new stacking context for blend modes?",
        answer: "isolation"
    },

    "writing-mode-direction": {
        title: "writing-mode / direction",
        history: "Support for vertical text and right-to-left scripts. writing-mode controls flow (horizontal-tb, vertical-rl, vertical-lr); direction sets inline direction (ltr/rtl).",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>writing-mode Example</title>
<style>
  .vertical { writing-mode: vertical-rl; text-orientation: mixed; border:1px solid #c7d2fe; padding:12px; width:60px; }
</style>
</head>
<body>
  <div class="vertical">Vertical text example</div>
</body>
</html>`,
        quiz: "Which properties enable vertical text and RTL support?",
        answer: "writing-mode and direction"
    },

    "contain-will-change": {
        title: "contain / will-change",
        history: "contain limits what the browser must consider for an element (layout, paint, size) improving performance; will-change hints upcoming changes (transform, opacity) to optimize rendering.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>contain & will-change Example</title>
<style>
  .widget { contain: layout paint; width:300px; height:120px; background:#eef2ff; padding:12px; }
  .anim { will-change: transform; transition: transform .3s; }
  .anim:hover { transform: translateY(-8px); }
</style>
</head>
<body>
  <div class="widget"><div class="anim">Hover me (will-change)</div></div>
</body>
</html>`,
        quiz: "Which properties help with performance by limiting scope and hinting upcoming changes?",
        answer: "contain and will-change"
    },

    "scroll-snap": {
        title: "scroll-snap",
        history: "Create smooth snapping behavior for scroll containers (carousels, slides). Use scroll-snap-type on container and scroll-snap-align on children.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>scroll-snap Example</title>
<style>
  .carousel { display:flex; overflow-x:auto; gap:12px; scroll-snap-type:x mandatory; padding:12px; }
  .slide { flex:none; width:300px; height:160px; background:#c7f9cc; scroll-snap-align:start; border-radius:8px; }
</style>
</head>
<body>
  <div class="carousel"><div class="slide">1</div><div class="slide">2</div><div class="slide">3</div></div>
</body>
</html>`,
        quiz: "Which feature enables snapping behavior for scrollable carousels?",
        answer: "scroll-snap"
    },

    "aspect-ratio": {
        title: "aspect-ratio",
        history: "Maintain a fixed width-to-height ratio for elements, useful for responsive media and cards without extra wrappers.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>aspect-ratio Example</title>
<style>
  .card { width:320px; aspect-ratio: 16 / 9; background:#fff3cd; border-radius:8px; border:1px solid #f0e68c; }
</style>
</head>
<body>
  <div class="card"></div>
</body>
</html>`,
        quiz: "Which property keeps an element's width/height ratio fixed?",
        answer: "aspect-ratio"
    },

    "resize": {
        title: "resize",
        history: "Allow users to resize elements (usually textareas) with the mouse: none, both, horizontal, vertical. Works when overflow is not visible.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>resize Example</title>
<style>
  textarea { width:320px; height:120px; resize: both; padding:8px; }
</style>
</head>
<body>
  <textarea>Drag to resize me</textarea>
</body>
</html>`,
        quiz: "Which property enables user drag-resize of an element?",
        answer: "resize"
    },

    "touch-action": {
        title: "touch-action",
        history: "Control how touch gestures are handled (pan-x, pan-y, none, manipulation). Important for custom gesture handling and preventing browser defaults.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>touch-action Example</title>
<style>
  .swipe-area { width:320px; height:160px; background:#e0f2fe; touch-action: pan-x; display:flex; align-items:center; justify-content:center; }
</style>
</head>
<body>
  <div class="swipe-area">Touch horizontally to pan</div>
</body>
</html>`,
        quiz: "Which property controls how touch gestures are interpreted by the browser?",
        answer: "touch-action"
    },

    // Typography, utilities & modern features (grouped)
    "typography-control": {
        title: "Typography Control",
        history: "Properties like line-height, letter-spacing, word-spacing, and text-indent improve readability and spacing of text.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Typography Example</title>
<style>
  p { line-height:1.7; letter-spacing:0.02em; word-spacing:0.12em; text-indent: 1.2em; max-width:640px; }
</style>
</head>
<body>
  <p>Line-height, letter-spacing, word-spacing and text-indent improve readability and typographic rhythm.</p>
</body>
</html>`,
        quiz: "Which properties control line spacing and letter/word spacing?",
        answer: "line-height, letter-spacing, word-spacing, text-indent"
    },

    "font-management": {
        title: "Font Management",
        history: "Advanced font features: font-variant, font-feature-settings, font-kerning allow control over ligatures, numeric styles, and kerning.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Font Features Example</title>
<style>
  .text { font-variant: small-caps; font-feature-settings: 'liga' 1, 'kern' 1; font-kerning: normal; }
</style>
</head>
<body>
  <p class="text">Advanced font rendering with font-feature-settings and font-variant.</p>
</body>
</html>`,
        quiz: "Which properties enable advanced font rendering like ligatures and kerning?",
        answer: "font-variant, font-feature-settings, font-kerning"
    },

    "visibility-interaction": {
        title: "Visibility & Interaction Utilities",
        history: "Group of properties (visibility, pointer-events, user-select, caret-color) to control how users interact with content and how it's presented.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Visibility & Interaction</title>
<style>
  .no-select { user-select:none; }
  .hidden { visibility:hidden; }
  .no-pointer { pointer-events:none; }
  input { caret-color: transparent; }
</style>
</head>
<body>
  <div class="no-select">Cannot select this text</div>
  <div class="hidden">Hidden text (space reserved)</div>
  <div class="no-pointer">This element ignores pointer events</div>
  <input placeholder="caret hidden" />
</body>
</html>`,
        quiz: "Which properties control selection, pointer interaction, and caret color?",
        answer: "user-select, pointer-events, caret-color, visibility"
    },

    "scroll-behavior": {
        title: "Scroll Behavior",
        history: "scroll-behavior, scroll-margin, and scroll-padding control smooth scrolling and alignment for in-page navigation and focus management.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Scroll Behavior</title>
<style>
  html { scroll-behavior: smooth; }
  section { height:80vh; padding:24px; border-bottom:1px solid #e5e7eb; }
  h2 { scroll-margin-top: 80px; }
</style>
</head>
<body>
  <nav><a href="#s2">Go to section 2</a></nav>
  <section id="s1"><h2>Section 1</h2></section>
  <section id="s2"><h2>Section 2</h2></section>
</body>
</html>`,
        quiz: "Which property enables smooth in-page scrolling?",
        answer: "scroll-behavior"
    },

    "resize-overflow": {
        title: "Resize & Overflow Utilities",
        history: "Control resizing and overflow behavior with resize, overflow-x/y, overflow-wrap, and word-break to handle long content gracefully.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Resize & Overflow</title>
<style>
  .box { width:320px; overflow-wrap: break-word; word-break: break-word; border:1px solid #e2e8f0; padding:12px; }
  textarea { resize: vertical; width:320px; height:80px; }
</style>
</head>
<body>
  <div class="box">VeryLongWordWithoutSpacesThatWillBreakBecauseOf overflow-wrap and word-break.</div>
  <textarea>Resize me vertically</textarea>
</body>
</html>`,
        quiz: "Which properties help control overflow and user resizing?",
        answer: "resize, overflow-x/y, overflow-wrap, word-break"
    },

    "touch-gesture": {
        title: "Touch & Gesture",
        history: "touch-action and -webkit-tap-highlight-color help manage mobile gestures and visual tap feedback for better touch UX.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Touch & Gesture</title>
<style>
  .area { width:320px; height:160px; background:#eef2ff; touch-action: pan-x; -webkit-tap-highlight-color: rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center; }
</style>
</head>
<body>
  <div class="area">Touch area (pan-x)</div>
</body>
</html>`,
        quiz: "Which properties control mobile gesture handling and tap highlight?",
        answer: "touch-action and -webkit-tap-highlight-color"
    },

    "isolation-context": {
        title: "Isolation & Context",
        history: "Use isolation, z-index, contain, and will-change to manage stacking contexts and performance for complex UIs.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Isolation & Context</title>
<style>
  .panel { position:relative; isolation:isolate; contain: layout paint; width:320px; padding:12px; background:#fff; border:1px solid #e6eef8; }
</style>
</head>
<body>
  <div class="panel">Isolated stacking context with containment</div>
</body>
</html>`,
        quiz: "Which properties help manage stacking context and performance?",
        answer: "isolation, z-index, contain, will-change"
    },

    "writing-modes-support": {
        title: "Writing Modes Support",
        history: "writing-mode, direction, and text-orientation enable RTL and vertical text support for internationalization and creative layouts.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Writing Modes Support</title>
<style>
  .vertical { writing-mode: vertical-rl; text-orientation: upright; border:1px solid #c7f9cc; padding:12px; width:60px; }
</style>
</head>
<body>
  <div class="vertical">垂直</div>
</body>
</html>`,
        quiz: "Which properties enable RTL and vertical text?",
        answer: "writing-mode, direction, text-orientation"
    },

    "counter-content": {
        title: "Counter & Content",
        history: "counter-reset, counter-increment, and content allow custom numbering and generated content for lists, steps, and UI counters.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Counters Example</title>
<style>
  ol.custom { counter-reset: item; list-style:none; padding-left:0; }
  ol.custom li::before { counter-increment: item; content: counter(item) \". \"; font-weight:bold; margin-right:6px; }
</style>
</head>
<body>
  <ol class="custom"><li>First</li><li>Second</li><li>Third</li></ol>
</body>
</html>`,
        quiz: "Which properties create custom numbered lists and generated content?",
        answer: "counter-reset, counter-increment, content"
    },

    "custom-properties": {
        title: "Custom Properties (CSS variables)",
        history: "Define reusable values with --var-name and use them with var(). Great for theming and DRY CSS.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>CSS Variables</title>
<style>
  :root { --brand: #2563eb; --pad: 12px; }
  .btn { background:var(--brand); color:#fff; padding:var(--pad); border-radius:8px; }
</style>
</head>
<body>
  <button class="btn">Themed button</button>
</body>
</html>`,
        quiz: "Which syntax defines reusable CSS variables?",
        answer: "--variable-name and var()"
    },

    "environment-units": {
        title: "Environment Units",
        history: "env(safe-area-inset-*) exposes device safe-area insets (notch, rounded corners) for proper spacing on mobile devices.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Environment Units</title>
<style>
  .safe { padding: calc(16px + env(safe-area-inset-top)); background:#f8fafc; min-height:100vh; }
</style>
</head>
<body>
  <div class="safe">Content padded for safe area</div>
</body>
</html>`,
        quiz: "Which function provides safe-area insets for devices with notches?",
        answer: "env(safe-area-inset-*)"
    },

    "container-queries": {
        title: "Container Queries",
        history: "Style components based on their container size using @container, container-type, and container-name — enables component-level responsiveness.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Container Queries Example</title>
<style>
  .card { container-type: inline-size; width:320px; border:1px solid #e5e7eb; padding:12px; }
  .card .grid { display:grid; grid-template-columns: 1fr; gap:8px; }
  @container (min-width: 500px) { .card .grid { grid-template-columns: 1fr 1fr; } }
</style>
</head>
<body>
  <div class="card"><div class="grid"><div>A</div><div>B</div><div>C</div></div></div>
</body>
</html>`,
        quiz: "Which feature allows styling based on parent container size?",
        answer: "@container, container-type, container-name"
    },

    "view-transitions": {
        title: "View Transitions (2025)",
        history: "View transitions provide page-level transitions without heavy JS using view-transition-name and @view-transition. Support is emerging.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>View Transition (concept)</title>
<style>
  /* Conceptual: actual usage depends on browser support for view-transition APIs */
  .page { view-transition-name: page; }
</style>
</head>
<body>
  <div class="page">Page content for view transitions (browser support required)</div>
</body>
</html>`,
        quiz: "Which new feature enables page transitions without heavy JavaScript?",
        answer: "view-transition-name and @view-transition"
    },

    "anchor-positioning": {
        title: "Anchor Positioning (New)",
        history: "Position elements relative to another element using anchor-name and position-anchor — useful for tooltips/popovers with precise placement.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Anchor Positioning (concept)</title>
<style>
  /* Conceptual example — syntax and support vary across browsers */
  .anchor { display:inline-block; margin:60px; }
  .popup { position: absolute; /* anchored to .anchor in supported specs */ background:#fff; border:1px solid #ddd; padding:8px; }
</style>
</head>
<body>
  <button class="anchor">Anchor</button>
  <div class="popup">Tooltip anchored to button (spec support required)</div>
</body>
</html>`,
        quiz: "Which experimental feature positions elements relative to another element?",
        answer: "anchor-name and position-anchor"
    },

    "motion-path": {
        title: "Motion Path",
        history: "Animate elements along custom paths using offset-path, offset-distance, and offset-rotate for complex motion effects.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Motion Path Example</title>
<style>
  .stage { height:220px; position:relative; margin:24px; }
  .dot { width:18px; height:18px; background:#10b981; border-radius:50%; position:absolute; offset-path: path('M10 110 C 150 10, 250 210, 390 110'); animation: move 4s linear infinite; }
  @keyframes move { to { offset-distance: 100%; } }
</style>
</head>
<body>
  <div class="stage"><div class="dot" aria-hidden="true"></div></div>
</body>
</html>`,
        quiz: "Which properties animate an element along a custom path?",
        answer: "offset-path, offset-distance, offset-rotate"
    },

    "color-levels": {
        title: "Color Level 4/5",
        history: "New color spaces (Lab, LCH, HWB) and functions enable perceptually uniform color control and smoother color transitions for design systems.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Color Level Example</title>
<style>
  .swatch { width:220px; height:120px; background: lch(60% 40 270); border-radius:8px; }
</style>
</head>
<body>
  <div class="swatch"></div>
</body>
</html>`,
        quiz: "Which new color specs provide perceptual color control like LCH and HWB?",
        answer: "CSS Color Level 4/5 (Lab, LCH, HWB)"
    }
};
function openModal(tag) {
    const data = tagData[tag];
    if (!data) { alert('No data for ' + tag); return; }
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = data.title;
    document.getElementById('modal-history').innerHTML = data.history;
    document.getElementById('modal-editor').value = data.code;
    document.getElementById('live-preview').srcdoc = data.code;
    document.getElementById('quiz-question').innerHTML = data.quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').innerHTML = '';
    document.getElementById('quiz').setAttribute('data-tag', tag);
  document.getElementById("modal-content").classList.remove("modal-dark");

}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function copyCode() {
    const code = document.getElementById('modal-editor').value;
    navigator.clipboard.writeText(code).then(() => alert('🎉 Code Copied! 🎉'));
}

function runLiveCode() {
    const code = document.getElementById('modal-editor').value;
    document.getElementById('live-preview').srcdoc = code;
}

function checkAnswer() {
    const tag = document.getElementById('quiz').getAttribute('data-tag');
    const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
    const correct = (tagData[tag].answer || '').toLowerCase();
    document.getElementById('quiz-feedback').innerHTML =
      answer === correct ? "<span style='color:#00FFFF;'>Correct!</span>"
      : "<span style='color:#ffb703;'>Try again!</span>";
}


function searchTag() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.tag-card');

    if (input === "") {
        cards.forEach(c => { c.style.display = 'flex'; c.classList.remove('highlight'); });
        document.body.classList.remove('blur');
        return;
    }

    let found = false;
    cards.forEach(card => {
        const key = card.getAttribute('data-tag')?.toLowerCase() || '';
        const text = card.textContent.toLowerCase();
        const match = key.includes(input) || text.includes(input);
        card.style.display = match ? 'flex' : 'none';
        card.classList.toggle('highlight', match);
        found = found || match;
    });

    if (found) document.body.classList.add('blur');
}

// Scroll to Top
document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to Bottom
document.getElementById("scrollBottomBtn").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

// Show/Hide buttons based on scroll
window.addEventListener("scroll", () => {
    const topBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function searchTag() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.tag-card');

    cards.forEach(card => {
        const tag = card.textContent.toLowerCase(); // card ka text
        if (tag.includes(input)) {
            card.style.display = "inline-block"; // show match
            card.classList.add("highlight");
        } else {
            card.style.display = "none"; // hide non-match
            card.classList.remove("highlight");
        }
    });


    if (input === "") {
        cards.forEach(card => {
            card.style.display = "inline-block";
            card.classList.remove("highlight");
        });
    }
}

function toggleModalTheme() {
  document.getElementById("modal-content")
    .classList.toggle("modal-dark");
}
