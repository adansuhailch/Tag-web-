const tagData = {
  // 🔹 Basic (Purane / Most Used)
  "iteration-count": {
    title: "animation-iteration-count",
    history: "Controls how many times an animation repeats (number or infinite). Useful for loops and attention-grabbers.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation-iteration-count</title>
<style>
  @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
  .dot { width:80px; height:80px; background:#ef4444; border-radius:50%; animation: pulse 1s ease-in-out infinite; margin:40px; }
  body { display:flex; justify-content:center; align-items:center; height:100vh; margin:0; }
</style>
</head>
<body>
  <div class="dot"></div>
</body>
</html>`,
    quiz: "Which property sets how many times an animation repeats?",
    answer: "animation-iteration-count"
  },

  "animation-direction": {
    title: "animation-direction",
    history: "Controls playback direction: normal, reverse, alternate (back-and-forth). Useful for oscillating effects.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation-direction</title>
<style>
  @keyframes wiggle { 0% { transform: rotate(-6deg); } 50% { transform: rotate(6deg); } 100% { transform: rotate(-6deg); } }
  .icon { display:inline-block; padding:18px; background:#fde68a; border-radius:8px; animation: wiggle 1s ease-in-out infinite; animation-direction: alternate; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="icon">↺</div>
</body>
</html>`,
    quiz: "Which property sets animation playback direction including alternate?",
    answer: "animation-direction"
  },

  "fill-mode": {
    title: "animation-fill-mode",
    history: "Defines how an element styles before/after animation (forwards, backwards, both, none). Keeps end state when needed.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation-fill-mode</title>
<style>
  @keyframes grow { from { transform: scale(0.8); opacity:0 } to { transform: scale(1); opacity:1 } }
  .panel { width:220px; padding:16px; background:#60a5fa; color:#fff; border-radius:8px; animation: grow 600ms ease forwards; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="panel">Keeps final state</div>
</body>
</html>`,
    quiz: "Which property controls element state before/after animation?",
    answer: "animation-fill-mode"
  },

  "play-state": {
    title: "animation-play-state",
    history: "Pause or resume animations via CSS or JS (running or paused). Useful for user controls and performance.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation-play-state</title>
<style>
  @keyframes spin { to { transform: rotate(360deg); } }
  .wheel { width:80px; height:80px; border-radius:50%; background:#34d399; animation: spin 2s linear infinite; }
  .wheel.paused { animation-play-state: paused; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="wheel" id="w"></div>
  <button onclick="document.getElementById('w').classList.toggle('paused')">Toggle Pause</button>
</body>
</html>`,
    quiz: "Which property pauses or resumes an animation?",
    answer: "animation-play-state"
  },

  // 🔹 Intermediate / Advanced (Present)
  "timing-function": {
    title: "animation-timing-function",
    history: "Controls the speed curve of an animation: ease, linear, ease-in/out, or custom cubic-bezier for precise motion.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation-timing-function</title>
<style>
  @keyframes move { from { transform: translateX(0); } to { transform: translateX(220px); } }
  .box { width:80px; height:80px; background:#fb7185; animation: move 1.2s cubic-bezier(.2,.9,.2,1) infinite alternate; margin:24px; }
  body { font-family: Arial, sans-serif; }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
    quiz: "Which property controls the animation speed curve?",
    answer: "animation-timing-function (including cubic-bezier)"
  },
  "steps": {
    "title": "steps() Timing Function",
    "history": "The CSS <code>steps()</code> timing function creates a stepped timing curve for animations, producing discrete jumps instead of smooth interpolation. It is commonly used for sprite animations, frame-by-frame transitions, and any effect that requires a fixed number of frames.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>steps() Timing Function Example</title>\n<style>\n  :root{ --size:120px; font-family:system-ui, Arial, sans-serif; }\n  body{ margin:0; min-height:100vh; display:grid; place-items:center; gap:18px; background:#0f1724; color:#e6eef8; }\n  .wrap{ display:flex; gap:24px; align-items:center; }\n  .panel{ background:linear-gradient(180deg,#0b1220,#0f1b2b); padding:14px; border-radius:12px; box-shadow:0 10px 30px rgba(2,8,20,0.6); }\n  .label{ font-size:13px; color:#9fb3d0; margin-bottom:8px; }\n\n  /* Sprite strip simulation: we use background-position to jump between frames */\n  .sprite {\n    width: var(--size);\n    height: var(--size);\n    background-image: linear-gradient(90deg,#ff7a7a 0 20%, #ffd27a 20% 40%, #7af7a6 40% 60%, #7ad1ff 60% 80%, #c77aff 80% 100%);\n    background-size: 500% 100%; /* 5 frames horizontally */\n    border-radius:10px;\n    border:1px solid rgba(255,255,255,0.06);\n    overflow:hidden;\n  }\n\n  /* Smooth animation (for comparison) */\n  .smooth { animation: slideSmooth 1s linear infinite; }\n  @keyframes slideSmooth { from { background-position: 0% 0%; } to { background-position: 100% 0%; } }\n\n  /* steps() animation: 5 steps, end (frame changes at end of each step) */\n  .steps-end { animation: slideStepsEnd 1s steps(5, end) infinite; }\n  @keyframes slideStepsEnd { from { background-position: 0% 0%; } to { background-position: 100% 0%; } }\n\n  /* steps() animation: 5 steps, start (frame changes at start of each step) */\n  .steps-start { animation: slideStepsStart 1s steps(5, start) infinite; }\n  @keyframes slideStepsStart { from { background-position: 0% 0%; } to { background-position: 100% 0%; } }\n\n  .caption{ font-size:12px; color:#bcd3ea; margin-top:8px; }\n  .grid{ display:grid; grid-template-columns: repeat(3, auto); gap:18px; align-items:start; }\n</style>\n</head>\n<body>\n  <div class=\"panel\">\n    <div class=\"label\">CSS <code>steps()</code> timing function — 5 frames</div>\n    <div class=\"grid\">\n      <div>\n        <div class=\"sprite smooth\"></div>\n        <div class=\"caption\">Smooth (linear)</div>\n      </div>\n\n      <div>\n        <div class=\"sprite steps-end\"></div>\n        <div class=\"caption\">steps(5, end) — frame changes at end of step</div>\n      </div>\n\n      <div>\n        <div class=\"sprite steps-start\"></div>\n        <div class=\"caption\">steps(5, start) — frame changes at start of step</div>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"max-width:720px; padding:12px; color:#9fb3d0; font-size:13px; text-align:center;\">\n    <p><strong>How it works:</strong> <code>steps(n, position)</code> divides the animation into <code>n</code> equal intervals. Use <code>end</code> to advance frames at the end of each step (common for sprite sheets), or <code>start</code> to advance at the beginning of each step. This produces crisp, frame-by-frame jumps instead of smooth interpolation.</p>\n  </div>\n</body>\n</html>",
    "quiz": "Which timing function creates discrete animation frames instead of smooth interpolation?",
    "answer": "steps()"
  },

  "multiple-animations": {
    title: "Multiple animations",
    history: "Run more than one animation on the same element by comma-separating animation declarations.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Multiple Animations</title>
<style>
  @keyframes fade { from{opacity:0} to{opacity:1} }
  @keyframes float { 0%{transform:translateY(0)}100%{transform:translateY(-8px)} }
  .badge { width:140px; padding:12px; background:#7c3aed; color:#fff; border-radius:10px; animation: fade 1s ease forwards, float 2s ease-in-out 1s infinite alternate; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="badge">Multi animation</div>
</body>
</html>`,
    quiz: "How do you run multiple animations on one element?",
    answer: "Comma-separate animations in the animation shorthand"
  },
  "transform-animation": {
    "title": "transform + animation",
    "history": "Combines CSS transforms (translate, rotate, scale, skew, translateZ) with CSS animations or transitions to create motion and 3D effects. Useful for interactive UI elements, micro‑interactions, and animated components.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>transform + animation Example</title>\n<style>\n  :root{ --bg:#0b1220; --card1:#1b6cff; --card2:#8b5cff; --glass: rgba(255,255,255,0.06); }\n  html,body{ height:100%; margin:0; font-family:system-ui, Arial, sans-serif; background: linear-gradient(180deg,#071029 0%, #0f1b2b 100%); color:#e6eef8; display:grid; place-items:center; }\n\n  .stage{\n    width:760px; max-width:94vw; display:grid; grid-template-columns: 1fr 1fr; gap:28px; align-items:center; justify-items:center;\n  }\n\n  /* Card that uses keyframes animation (looping) */\n  .card-anim{\n    width:320px; height:200px; border-radius:14px; padding:18px; color:#041022; position:relative; overflow:hidden;\n    background: linear-gradient(135deg, var(--card1), var(--card2));\n    transform-style: preserve-3d;\n    box-shadow: 0 18px 40px rgba(2,8,20,0.6);\n    animation: floatRotate 4s ease-in-out infinite;\n  }\n\n  .card-anim .title{ font-weight:700; letter-spacing:0.4px; }\n  .card-anim .badge{ position:absolute; top:12px; right:12px; background:rgba(255,255,255,0.12); padding:6px 10px; border-radius:8px; font-size:12px; }\n\n  @keyframes floatRotate{\n    0%   { transform: translateZ(0px) translateY(0px) rotateY(0deg) scale(1); }\n    25%  { transform: translateZ(20px) translateY(-8px) rotateY(8deg) scale(1.02); }\n    50%  { transform: translateZ(0px) translateY(0px) rotateY(0deg) scale(1); }\n    75%  { transform: translateZ(-10px) translateY(6px) rotateY(-6deg) scale(0.99); }\n    100% { transform: translateZ(0px) translateY(0px) rotateY(0deg) scale(1); }\n  }\n\n  /* Card that animates on hover using transition + transform */\n  .card-hover{\n    width:320px; height:200px; border-radius:14px; padding:18px; color:#eaf4ff; position:relative; overflow:hidden;\n    background: linear-gradient(180deg,#0f1724 0%, #122033 100%);\n    border: 1px solid rgba(255,255,255,0.04);\n    transition: transform 300ms cubic-bezier(.2,.9,.3,1), box-shadow 300ms ease;\n    transform-origin: center center;\n  }\n  .card-hover:hover{\n    transform: translateY(-12px) rotateX(8deg) rotateY(-10deg) scale(1.03);\n    box-shadow: 0 30px 60px rgba(2,8,20,0.7);\n  }\n  .card-hover .inner{ background: rgba(255,255,255,0.03); border-radius:10px; height:100%; display:flex; align-items:center; justify-content:center; }\n\n  /* small helper visuals */\n  .note{ grid-column: 1 / -1; text-align:center; color:#9fb3d0; font-size:13px; }\n  @media (max-width:720px){ .stage{ grid-template-columns: 1fr; } }\n</style>\n</head>\n<body>\n  <div class=\"stage\">\n    <div class=\"card-anim\" aria-hidden=\"false\">\n      <div class=\"badge\">Animated</div>\n      <div class=\"title\">Floating 3D Card</div>\n      <p style=\"margin-top:12px; font-size:13px; color:rgba(4,16,34,0.85);\">This card uses <code>@keyframes</code> with <code>transform</code> (translateZ, rotateY, scale) to create a looping 3D float effect.</p>\n    </div>\n\n    <div class=\"card-hover\">\n      <div class=\"inner\">\n        <div style=\"text-align:center;\">\n          <div style=\"font-weight:700;\">Hover to Transform</div>\n          <div style=\"font-size:13px; color:rgba(234,244,255,0.85); margin-top:8px;\">Uses <code>transition</code> + <code>transform</code> for interactive tilt.</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"note\">Tip: use <code>transform-style: preserve-3d</code> on parent and <code>backface-visibility</code> when layering 3D children. Combine <code>@keyframes</code> for continuous motion and <code>transition</code> for user interactions.</div>\n  </div>\n</body>\n</html>",
    "quiz": "Which CSS features are combined to create continuous 3D motion and interactive tilts?",
    "answer": "transform + animation (keyframes) and transition"
  },
  "transform-3d": {
    "title": "3D Transforms (rotateX, rotateY, perspective)",
    "history": "3D transforms let you rotate, translate, and scale elements in three-dimensional space. The <code>perspective</code> property (on a parent) controls the viewer distance and depth; <code>rotateX</code> and <code>rotateY</code> rotate elements around the X and Y axes respectively. Combine <code>transform-style: preserve-3d</code>, <code>backface-visibility</code>, and perspective to build realistic 3D UI effects and interactive cards.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>3D Transforms Example</title>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n<style>\n  :root{ --bg:#071026; --cardA:#1b6cff; --cardB:#8b5cff; }\n  html,body{ height:100%; margin:0; font-family:system-ui,Segoe UI,Roboto,Arial; background:linear-gradient(180deg,#041022 0%, #071026 100%); color:#e6eef8; display:grid; place-items:center; }\n\n  /* Scene: perspective applied here */\n  .scene{\n    width:360px; height:240px; perspective:900px; /* smaller = stronger perspective */\n    display:flex; align-items:center; justify-content:center;\n  }\n\n  /* Card wrapper preserves 3D for children */\n  .card-wrap{\n    width:320px; height:200px; transform-style: preserve-3d; transition: transform 300ms cubic-bezier(.2,.9,.3,1);\n  }\n\n  /* The card itself */\n  .card{\n    width:100%; height:100%; border-radius:14px; overflow:hidden; position:relative;\n    background: linear-gradient(135deg, var(--cardA), var(--cardB));\n    box-shadow: 0 20px 50px rgba(2,8,20,0.6);\n    display:flex; align-items:center; justify-content:center; color:#041022; font-weight:700; font-size:18px;\n    backface-visibility: hidden; /* hide backside when rotated */\n  }\n\n  /* Back face to demonstrate rotateY 180deg */\n  .card-back{\n    position:absolute; inset:0; border-radius:14px; background: linear-gradient(135deg,#ffdca8,#ffb3a8); display:flex; align-items:center; justify-content:center; transform: rotateY(180deg); backface-visibility: hidden; color:#041022; font-weight:700;\n  }\n\n  /* small UI */\n  .controls{ margin-top:18px; text-align:center; color:#9fb3d0; font-size:13px; }\n  .range{ width:220px; }\n\n  /* responsive */\n  @media (max-width:420px){ .scene{ width:300px; height:200px; } .card-wrap{ width:280px; height:180px; } }\n</style>\n</head>\n<body>\n  <div style=\"text-align:center; margin-bottom:12px; color:#9fb3d0;\">Move the sliders or hover the card to see 3D transforms</div>\n\n  <div class=\"scene\" id=\"scene\">\n    <div class=\"card-wrap\" id=\"cardWrap\">\n      <div class=\"card\" id=\"cardFront\">Front Face</div>\n      <div class=\"card-back\" id=\"cardBack\">Back Face</div>\n    </div>\n  </div>\n\n  <div class=\"controls\">\n    <div style=\"margin-bottom:8px;\">\n      <label style=\"color:#9fb3d0;\">rotateX: <span id=\"rx\">0</span>°</label>\n      <input class=\"range\" id=\"rangeX\" type=\"range\" min=\"-60\" max=\"60\" value=\"0\">\n    </div>\n    <div>\n      <label style=\"color:#9fb3d0;\">rotateY: <span id=\"ry\">0</span>°</label>\n      <input class=\"range\" id=\"rangeY\" type=\"range\" min=\"-60\" max=\"60\" value=\"0\">\n    </div>\n    <div style=\"margin-top:10px; color:#9fb3d0; font-size:13px;\">Tip: <code>perspective</code> is set on the <strong>.scene</strong> element</div>\n  </div>\n\n<script>\n  // Elements\n  const cardWrap = document.getElementById('cardWrap');\n  const rangeX = document.getElementById('rangeX');\n  const rangeY = document.getElementById('rangeY');\n  const rxLabel = document.getElementById('rx');\n  const ryLabel = document.getElementById('ry');\n  const scene = document.getElementById('scene');\n\n  // Update transform from sliders\n  function updateTransform(x, y){\n    rxLabel.textContent = x;\n    ryLabel.textContent = y;\n    cardWrap.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;\n  }\n\n  rangeX.addEventListener('input', (e) => updateTransform(e.target.value, rangeY.value));\n  rangeY.addEventListener('input', (e) => updateTransform(rangeX.value, e.target.value));\n\n  // Hover tilt: subtle interactive effect using mouse position\n  scene.addEventListener('mousemove', (e) => {\n    const rect = scene.getBoundingClientRect();\n    const cx = rect.left + rect.width/2;\n    const cy = rect.top + rect.height/2;\n    const dx = e.clientX - cx;\n    const dy = e.clientY - cy;\n    const ry = Math.max(-30, Math.min(30, (dx / rect.width) * 60));\n    const rx = Math.max(-30, Math.min(30, -(dy / rect.height) * 60));\n    // apply but do not override slider values permanently\n    cardWrap.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;\n  });\n\n  scene.addEventListener('mouseleave', () => {\n    // reset to slider values when mouse leaves\n    updateTransform(rangeX.value, rangeY.value);\n  });\n\n  // Click to flip (rotateY 180deg) demonstrating backface-visibility\n  let flipped = false;\n  scene.addEventListener('click', () => {\n    flipped = !flipped;\n    if(flipped){\n      cardWrap.style.transform += ' rotateY(180deg)';\n    } else {\n      // reset to slider values\n      updateTransform(rangeX.value, rangeY.value);\n    }\n  });\n\n  // Initialize\n  updateTransform(0,0);\n</script>\n</body>\n</html>",
    "quiz": "Which properties are used to rotate elements in 3D and which property controls the viewer distance for perspective?",
    "answer": "rotateX, rotateY and perspective"
  },

  "filter-animation": {
    title: "filter + animation",
    history: "Animate filter effects (blur, hue-rotate, brightness) for creative image and UI transitions.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>filter + animation</title>
<style>
  @keyframes hue { to { filter: hue-rotate(360deg); } }
  .photo { width:320px; height:180px; background:url('https://via.placeholder.com/320x180') center/cover; animation: hue 6s linear infinite; border-radius:8px; }
  body { padding:24px; font-family: Arial, sans-serif; }
</style>
</head>
<body>
  <div class="photo" aria-hidden="true">Select this part with cursor and See the Magic of Css Animations.</div>
</body>
</html>`,
    quiz: "Which property group animates blur, brightness, and hue changes?",
    answer: "filter with animation"
  },

  "clip-path-animation": {
    title: "clip-path + animation",
    history: "Animate clip-path to reveal or morph shapes for creative reveals and transitions.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>clip-path animation</title>
<style>
  @keyframes reveal { from { clip-path: circle(0% at 50% 50%); } to { clip-path: circle(75% at 50% 50%); } }
  .reveal { width:320px; height:160px; background:linear-gradient(90deg,#f97316,#fb7185); animation: reveal 1s ease forwards; border-radius:12px; }
  body { padding:24px; font-family: Arial, sans-serif; }
</style>
</head>
<body>
  <div class="reveal"></div>
</body>
</html>`,
    quiz: "Which property can be animated to morph or reveal shapes?",
    answer: "clip-path"
  },

  "backdrop-animation": {
    title: "backdrop-filter",
    history: "Animate backdrop-filter for glassmorphism effects (blur/saturate) on translucent panels; requires semi-transparent background.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>backdrop-filter animation</title>
<style>
  body { background:url('https://via.placeholder.com/900x400') center/cover no-repeat; height:100vh; margin:0; display:flex; align-items:center; justify-content:center; }
  .panel { width:320px; padding:18px; background: rgba(255,255,255,0.18); border-radius:12px; border:1px solid rgba(255,255,255,0.35); transition: backdrop-filter 0.4s ease; backdrop-filter: blur(6px) saturate(120%); }
  .panel:hover { backdrop-filter: blur(12px) saturate(140%); }
</style>
</head>
<body>
  <div class="panel">Glass panel (hover)</div>
</body>
</html>`,
    quiz: "Which property blurs or affects the area behind an element for glass effects?",
    answer: "backdrop-filter"
  },

  "will-change": {
    title: "will-change",
    history: "Hint the browser about upcoming animated properties (transform, opacity) to optimize rendering. Use sparingly.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>will-change example</title>
<style>
  .tile { width:120px; height:120px; background:#fca5a5; transition: transform 0.35s; will-change: transform; }
  .tile:hover { transform: translateY(-10px) scale(1.03); }
  body { padding:24px; font-family: Arial, sans-serif; }
</style>
</head>
<body>
  <div class="tile"></div>
</body>
</html>`,
    quiz: "Which property hints the browser for upcoming changes to optimize performance?",
    answer: "will-change"
  },

  // 🔹 Less Common but Powerful
  "blend-animation": {
    title: "mix-blend-mode + animation",
    history: "Animate elements that use blend modes to create dynamic composite effects with the backdrop.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>mix-blend-mode animation</title>
<style>
  body { background: linear-gradient(90deg,#fde68a,#bfdbfe); height:100vh; margin:0; display:flex; align-items:center; justify-content:center; }
  @keyframes move { to { transform: translateX(120px); } }
  .shape { width:140px; height:140px; background:#ef4444; mix-blend-mode:multiply; animation: move 2s linear infinite alternate; border-radius:12px; }
</style>
</head>
<body>
  <div class="shape"></div>
</body>
</html>`,
    quiz: "Which property blends an element with its backdrop and can be animated?",
    answer: "mix-blend-mode"
  },

  "motion-path": {
    title: "Motion path (offset-path)",
    history: "Animate elements along custom SVG or basic paths using offset-path and offset-distance for complex motion.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>offset-path Example</title>
<style>
  .stage { height:220px; position:relative; margin:24px; }
  .dot { width:20px; height:20px; background:#10b981; border-radius:50%; position:absolute; offset-path: path('M10 110 C 150 10, 250 210, 390 110'); animation: move 4s linear infinite; }
  @keyframes move { to { offset-distance: 100%; } }
</style>
</head>
<body>
  <div class="stage"><div class="dot" aria-hidden="true"></div></div>
</body>
</html>`,
    quiz: "Which property animates an element along a custom path?",
    answer: "offset-path (Motion Path)"
  },

  "scroll-snap-animation": {
    title: "Scroll-snap + animation",
    history: "Combine scroll-snap with animations for smooth carousels and scroll-driven slide effects.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Scroll Snap + animation</title>
<style>
  .carousel { display:flex; overflow-x:auto; gap:12px; scroll-snap-type:x mandatory; padding:12px; }
  .slide { flex:none; width:300px; height:160px; background:#93c5fd; scroll-snap-align:start; border-radius:8px; transition: transform .3s; }
  .slide:focus, .slide:hover { transform: scale(1.03); }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="carousel" tabindex="0">
    <div class="slide" tabindex="0">1</div><div class="slide" tabindex="0">2</div><div class="slide" tabindex="0">3</div>
  </div>
</body>
</html>`,
    quiz: "Which features combine for smooth snapping carousels with animated slides?",
    answer: "scroll-snap with animations"
  },

  "shape-outside-animation": {
    title: "shape-outside + animation",
    history: "Animate floated shapes to create dynamic text wrapping and magazine-style motion effects.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>shape-outside animation</title>
<style>
  .float { float:left; width:180px; height:180px; shape-outside: circle(50%); clip-path: circle(50%); background:#fca5a5; margin:12px; animation: bob 3s ease-in-out infinite; }
  @keyframes bob { 0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)} }
  .text { max-width:700px; font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="float" aria-hidden="true"></div>
  <p class="text">Animated float with text wrapping around the circular shape creates lively magazine layouts.</p>
</body>
</html>`,
    quiz: "Which property wraps text around animated custom shapes?",
    answer: "shape-outside"
  },

  // 🔹 Future / Experimental (2023–2025)
  "scroll-driven": {
    "title": "Scroll-driven animations",
    "history": "Bind animation progress to scroll position using @scroll-timeline and animation-timeline. Enables performant, declarative scroll-based effects without heavy JS.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Scroll-driven animation Example</title>\n<style>\n  body{ margin:0; font-family:system-ui,Arial; }\n  .spacer{ height:120vh; background:linear-gradient(#f7f9fc,#eef4ff); }\n\n  /* Define a scroll timeline named --main-timeline */\n  @scroll-timeline --main-timeline {\n    source: auto; /* use nearest scroll container / viewport */\n    orientation: block;\n  }\n\n  /* Animate the header background color based on scroll progress */\n  header{\n    position:sticky; top:0; padding:24px; font-weight:700; color:#042;\n    background: linear-gradient(90deg,#fff,#fff);\n    animation: headerColor 1s linear both;\n    animation-timeline: --main-timeline;\n  }\n\n  @keyframes headerColor{\n    0%{ background: linear-gradient(90deg,#ffffff,#ffffff); }\n    100%{ background: linear-gradient(90deg,#ffdca8,#ffb3a8); }\n  }\n\n  .panel{ height:60vh; display:grid; place-items:center; font-size:20px; }\n</style>\n</head>\n<body>\n  <div class=\"spacer\"></div>\n  <header>Scroll-driven header color</header>\n  <section class=\"panel\">Scroll to see the header change based on scroll progress</section>\n  <div class=\"spacer\"></div>\n</body>\n</html>",
    "quiz": "Which CSS at-rule defines a scroll-based timeline for animations?",
    "answer": "@scroll-timeline"
  },

  "anchor-position": {
    title: "CSS Anchor Positioning (animate tooltips/popovers)",
    history: "Position and animate tooltips/popovers relative to another element using anchor positioning; syntax and support are evolving.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Anchor Positioning (concept)</title>
<style>
  /* Conceptual: actual anchor positioning syntax varies by spec and support */
  .anchor { display:inline-block; margin:60px; }
  .tooltip { position:absolute; background:#fff; border:1px solid #ddd; padding:8px; border-radius:6px; transform-origin: top center; transition: transform .2s ease; }
</style>
</head>
<body>
  <button class="anchor">Anchor</button>
  <div class="tooltip">Tooltip near anchor (animated)</div>
</body>
</html>`,
    quiz: "Which experimental feature positions and animates tooltips relative to another element?",
    answer: "CSS Anchor Positioning"
  },
  "houdini-animation-worklets": {
    "title": "CSS Houdini Animation Worklets",
    "history": "Animation Worklets let developers write JS-driven animations that run on a worklet thread (off the main thread) for high-performance, procedural animations. This API is experimental and may require a polyfill or a modern browser build to run.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Houdini Animation Worklet Demo</title>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n<style>\n  :root{ --w:320px; }\n  body{ margin:0; min-height:100vh; display:grid; place-items:center; font-family:system-ui,Arial; background:#071026; color:#eaf4ff; }\n  .wrap{ display:flex; gap:20px; align-items:center; }\n  .box{\n    width:var(--w); height:140px; border-radius:12px; display:flex; align-items:center; justify-content:center;\n    background: linear-gradient(135deg,#1b6cff,#8b5cff); color:#041022; font-weight:700; box-shadow:0 18px 40px rgba(2,8,20,0.6);\n    /* Use the custom animator name 'wiggle' in the animation shorthand */\n    animation: wiggle 1200ms linear infinite;\n    will-change: transform;\n  }\n  .note{ margin-top:18px; color:#9fb3d0; font-size:13px; text-align:center; }\n</style>\n</head>\n<body>\n  <div class=\"wrap\">\n    <div class=\"box\">Houdini Worklet</div>\n  </div>\n  <div class=\"note\">If your browser does not support Animation Worklets, open the console for a message.</div>\n\n  <script>\n    // Register the animation worklet module (experimental API)\n    // The API is evolving; this code attempts to register the worklet when supported.\n    (async () => {\n      try {\n        if (CSS && CSS.animationWorklet && CSS.animationWorkletruntime helpers vary between implementations\n// and polyfills. The example below follows the common registerAnimator pattern\n// used by current examples and polyfills. If your environment uses a different\n/ the environment likely needs a polyfill.\n  // Throwing here will be visible in the console when loading the worklet.\n  throw new Error('registerAnimator not available in this environment. Use a polyfill or a compatible browser.');\n}\n",
    "quiz": "Which Houdini primitive lets you run JS-driven animations off the main thread for high-performance effects?",
    "answer": "Animation Worklet (Houdini)"
  },

  "motion-path-l2": {
    title: "CSS Motion Path Level 2",
    history: "Advanced motion path features (path syntax, offsets, rotation along path) for complex path-based animations.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Motion Path Level 2 (concept)</title>
<style>
  .stage { height:220px; position:relative; margin:24px; }
  .dot { width:18px; height:18px; background:#f59e0b; border-radius:50%; position:absolute; offset-path: path('M10,80 C40,10 65,10 95,80'); animation: run 3s linear infinite; }
  @keyframes run { to { offset-distance: 100%; } }
</style>
</head>
<body>
  <div class="stage"><div class="dot" aria-hidden="true"></div></div>
</body>
</html>`,
    quiz: "Which spec expands path-based animations with advanced path features?",
    answer: "CSS Motion Path Level 2"
  },

  "color-level4": {
    title: "Color Level 4/5 animations",
    history: "Animate colors across perceptual color spaces (Lab, LCH, HWB) for smoother, more accurate transitions in design systems.",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Color Level Animations (example)</title>
<style>
  @keyframes colorShift { from { background: lch(60% 40 30); } to { background: lch(60% 40 300); } }
  .swatch { width:220px; height:120px; border-radius:8px; animation: colorShift 3s linear infinite alternate; margin:24px; }
  body { font-family: Arial, sans-serif; }
</style>
</head>
<body>
  <div class="swatch"></div>
</body>
</html>`,
    quiz: "Which new color specs enable perceptual color animations like LCH?",
    answer: "CSS Color Level 4/5 (Lab, LCH, HWB)"
  }
};
function openModal(tag) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-title').innerHTML = tagData[tag].title;
  document.getElementById('modal-history').innerHTML = tagData[tag].history;
  document.getElementById('modal-editor').value = tagData[tag].code;
  document.getElementById('live-preview').srcdoc = tagData[tag].code;
  document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
  document.getElementById('quiz-answer').value = '';
  document.getElementById('quiz-feedback').innerHTML = '';
  document.getElementById('quiz').setAttribute('data-tag', tag);
  document.getElementById("modal-content").classList.remove("modal-dark")
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function copyCode() {
  const code = document.getElementById('modal-editor').value;
  navigator.clipboard.writeText(code).then(() => {
    alert('🎉 Code Copied! 🎉');
  });
}

function runLiveCode() {
  const code = document.getElementById('modal-editor').value;
  document.getElementById('live-preview').srcdoc = code;
}

function checkAnswer() {
  const tag = document.getElementById('quiz').getAttribute('data-tag');
  const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
  const correct = tagData[tag].answer.toLowerCase();

  if (answer === correct) {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:#00FFFF;'>Correct!</span>";
  } else {
    document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ffb703;'>Try again!</span>";
  }
}
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
