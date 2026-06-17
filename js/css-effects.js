const tagData = {
    // 🔹 Basic / Most Used Effects
    "text-shadow": {
        title: "text-shadow",
        history: "Adds shadow to text for emphasis or depth. Accepts x/y offsets, blur radius, and color.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>text-shadow</title>
<style>
  h1 {
    font-size: 48px;
    color: #222;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  }
</style>
</head>
<body>
  <h1>Shadowed Heading</h1>
</body>
</html>`,
        quiz: "Which property adds a shadow behind text?",
        answer: "text-shadow"
    },

    "border-radius": {
        title: "border-radius",
        history: "Rounds element corners. Can be uniform or per-corner. Works on most replaced elements and boxes.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>border-radius</title>
<style>
  .avatar {
    width: 120px;
    height: 120px;
    background: #cfe8ff;
    border-radius: 50%;
    display:inline-block;
  }
</style>
</head>
<body>
  <div class="avatar" aria-hidden="true"></div>
</body>
</html>`,
        quiz: "Which property creates rounded corners?",
        answer: "border-radius"
    },

    "filter": {
        title: "filter",
        history: "Applies graphical effects like blur, brightness, contrast, grayscale to elements (commonly images). Can be chained.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>filter</title>
<style>
  img { width: 320px; filter: blur(4px) brightness(0.9) contrast(1.1); }
</style>
</head>
<body>
  <img src="https://via.placeholder.com/320x180" alt="Example image">
</body>
</html>`,
        quiz: "Which property applies blur, brightness, and contrast effects?",
        answer: "filter"
    },

    "transform": {
        title: "transform",
        history: "Performs 2D/3D transforms like rotate, scale, skew, translate. Often combined with transition for smooth animations.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>transform</title>
<style>
  .box { width:120px; height:120px; background:#ffd6a5; display:inline-block; transition: transform 0.3s ease; }
  .box:hover { transform: rotate(15deg) scale(1.05) translateY(-6px); }
</style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
        quiz: "Which property rotates, scales, skews, or translates elements?",
        answer: "transform"
    },

    "transition": {
        title: "transition",
        history: "Creates smooth changes between states for animatable properties. Use with :hover, :focus, or JS-driven class changes.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>transition</title>
<style>
  .btn { background:#4f46e5; color:white; padding:10px 16px; border-radius:8px; transition: background 0.25s ease, transform 0.25s ease; }
  .btn:hover { background:#3730a3; transform: translateY(-3px); }
</style>
</head>
<body>
  <button class="btn">Hover me</button>
</body>
</html>`,
        quiz: "Which property enables smooth changes between states?",
        answer: "transition"
    },

    // 🔹 Advanced / Modern Effects
    "mix-blend-mode": {
        title: "mix-blend-mode",
        history: "Blends an element with the backdrop using blend modes (multiply, screen, overlay) similar to image editors.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>mix-blend-mode</title>
<style>
  .bg { background: linear-gradient(90deg,#ffb3c6,#b3d9ff); padding:40px; }
  .blend { width:200px; height:120px; background:#ffd54f; mix-blend-mode: multiply; }
</style>
</head>
<body>
  <div class="bg"><div class="blend"></div></div>
</body>
</html>`,
        quiz: "Which property blends an element with its background using Photoshop-like modes?",
        answer: "mix-blend-mode"
    },

    "background-blend-mode": {
        title: "background-blend-mode",
        history: "Blends multiple background layers (images, gradients, colors) of the same element.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>background-blend-mode</title>
<style>
  .hero {
    height:180px;
    background-image: url('https://via.placeholder.com/600x180'), linear-gradient(90deg,#ff7a7a,#7ad1ff);
    background-size: cover;
    background-blend-mode: overlay;
  }
</style>
</head>
<body>
  <div class="hero"></div>
</body>
</html>`,
        quiz: "Which property blends multiple backgrounds of one element?",
        answer: "background-blend-mode"
    },

    "clip-path": {
        title: "clip-path",
        history: "Cuts an element into custom shapes using basic shapes or SVG paths. Great for creative layouts and masks.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>clip-path</title>
<style>
  .shape { width:220px; height:220px; background:#ffcc80; clip-path: circle(50% at 50% 50%); }
</style>
</head>
<body>
  <div class="shape"></div>
</body>
</html>`,
        quiz: "Which property cuts an element into custom shapes?",
        answer: "clip-path"
    },

    "mask-image": {
        title: "mask-image / mask-clip",
        history: "Use images or gradients as masks to control element visibility. More flexible than clip-path for soft edges.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>mask-image</title>
<style>
  .masked {
    width:300px; height:160px;
    background: linear-gradient(90deg,#7bdff6,#b3ffb3);
    -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent);
            mask-image: linear-gradient(to bottom, black 60%, transparent);
  }
</style>
</head>
<body>
  <div class="masked"></div>
</body>
</html>`,
        quiz: "Which properties apply an image or gradient as a mask?",
        answer: "mask-image and mask-clip"
    },
    "perspective": {
        "title": "perspective Property",
        "history": "The CSS `perspective` property defines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. It affects how 3D transformed children are rendered, creating depth.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>perspective Example</title>\n<style>\n  body{ font-family: system-ui, Arial; background:#0b1220; color:#e6f0ff; display:flex; align-items:center; justify-content:center; height:100vh; margin:0; }\n  .scene {\n    width: 320px;\n    height: 220px;\n    background: linear-gradient(180deg,#071029 0%, #0f1b2b 100%);\n    border-radius:12px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    box-shadow: 0 20px 40px rgba(2,8,20,0.6);\n    /* perspective distance controls depth: smaller = stronger perspective */\n    perspective: 800px;\n    padding: 18px;\n  }\n  .card-wrap {\n    width: 220px;\n    height: 140px;\n    transform-style: preserve-3d; /* allow children to render in 3D */\n    transition: transform 400ms cubic-bezier(.2,.9,.3,1);\n  }\n  .card {\n    position: relative;\n    width:100%; height:100%;\n    border-radius:10px;\n    background: linear-gradient(135deg,#1b6cff 0%, #8b5cff 100%);\n    color:#041022;\n    display:flex; align-items:center; justify-content:center;\n    font-weight:700; letter-spacing:0.6px;\n    transform-origin: center center;\n    box-shadow: 0 12px 30px rgba(11,20,40,0.6), 0 2px 6px rgba(0,0,0,0.4) inset;\n    backface-visibility: hidden;\n  }\n  .card::after{\n    content: '3D Card'; position:absolute; bottom:10px; right:12px; font-size:12px; color:rgba(4,16,34,0.6);\n  }\n  /* child element rotated in 3D to show perspective effect */\n  .card .inner {\n    width:80%; height:60%; background:rgba(255,255,255,0.85); border-radius:8px; display:flex; align-items:center; justify-content:center; transform: translateZ(40px) rotateY(-12deg);\n  }\n  /* hover to tilt the whole card and reveal perspective */\n  .scene:hover .card-wrap{ transform: rotateX(12deg) rotateY(-18deg) translateZ(0); }\n  /* small responsive tweak */\n  @media (max-width:420px){ .scene{ width: 280px; height:200px; } }\n</style>\n</head>\n<body>\n  <div class=\"scene\" aria-hidden=\"false\">\n    <div class=\"card-wrap\">\n      <div class=\"card\">\n        <div class=\"inner\">Perspective demo</div>\n      </div>\n    </div>\n  </div>\n</body>\n</html>",
        "quiz": "Which property sets the distance used to create a 3D perspective for transformed children?",
        "answer": "perspective"
    },
    "backdrop-filter": {
        "title": "backdrop-filter Property",
        "history": "Applies graphical effects (blur, brightness, contrast, etc.) to the area behind an element. Useful for frosted‑glass UIs and subtle background treatments.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>backdrop-filter Example</title>\n<style>\n  body{ margin:0; font-family:system-ui, Arial; height:100vh; display:grid; place-items:center; background: url('https://picsum.photos/1200/800') center/cover no-repeat; }\n  .panel {\n    width: 360px;\n    padding: 20px;\n    border-radius: 12px;\n    background: rgba(255,255,255,0.18); /* partial transparency required */\n    -webkit-backdrop-filter: blur(8px) saturate(120%); /* Safari */\n    backdrop-filter: blur(8px) saturate(120%);\n    box-shadow: 0 10px 30px rgba(2,8,20,0.6);\n    color: #fff;\n    border: 1px solid rgba(255,255,255,0.12);\n  }\n  .panel h2{ margin:0 0 8px 0; font-size:18px; }\n  .panel p{ margin:0; font-size:14px; color:rgba(255,255,255,0.9); }\n</style>\n</head>\n<body>\n  <div class=\"panel\">\n    <h2>Frosted panel</h2>\n    <p  style='color: azure'; >This uses <code>backdrop-filter</code> to blur and saturate the background behind the panel.</p>\n  </div>\n</body>\n</html>",
        "quiz": "Which property applies graphical effects to the area behind an element (requires transparency)?",
        "answer": "backdrop-filter"
    },

    "preserve-3d": {
        title: "perspective & transform-style: preserve-3d",
        history: "Perspective gives 3D depth; transform-style: preserve-3d allows nested 3D transforms to keep their 3D context.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>3D Transforms</title>
<style>
  .scene { perspective: 800px; width:220px; height:160px; margin:40px; }
  .card {
    width:100%; height:100%; transform-style: preserve-3d; transition: transform 0.6s;
  }
  .card:hover { transform: rotateY(20deg) rotateX(6deg); }
  .face { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; border-radius:8px; }
  .front { background:#ffd6a5; }
</style>
</head>
<body>
  <div class="scene">
    <div class="card">
      <div class="face front">3D Card</div>
    </div>
  </div>
</body>
</html>`,
        quiz: "Which properties enable 3D depth and nested 3D transforms?",
        answer: "perspective and transform-style: preserve-3d"
    },

    "will-change": {
        title: "will-change",
        history: "Hints the browser about upcoming changes (transform, opacity) to optimize rendering. Use sparingly to avoid memory overhead.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>will-change</title>
<style>
  .anim { width:120px; height:120px; background:#cfe9ff; transition: transform 0.4s; will-change: transform; }
  .anim:hover { transform: translateY(-10px); }
</style>
</head>
<body>
  <div class="anim"></div>
</body>
</html>`,
        quiz: "Which property hints the browser for performance optimization?",
        answer: "will-change"
    },

    // 🔹 Less Common but Powerful
    "drop-shadow": {
        title: "filter: drop-shadow()",
        history: "Creates shadows that follow the opaque parts of an element (better for non-rectangular shapes) and can look more natural than box-shadow.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>drop-shadow</title>
<style>
  .logo { width:160px; height:80px; background:#fff; filter: drop-shadow(0 6px 8px rgba(0,0,0,0.25)); }
</style>
</head>
<body>
  <div class="logo"></div>
</body>
</html>`,
        quiz: "Which filter produces natural shadows following an element's opaque shape?",
        answer: "filter: drop-shadow()"
    },

    "shape-outside": {
        title: "shape-outside",
        history: "Defines a float shape so inline content wraps around custom shapes (circle, polygon, path). Useful for magazine-style layouts.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>shape-outside</title>
<style>
  .float { float:left; width:180px; height:180px; shape-outside: circle(50%); clip-path: circle(50%); background:#ffd1dc; margin:12px; }
  .text { max-width:700px; }
</style>
</head>
<body>
  <div class="float"></div>
  <p class="text">Long paragraph text wraps around the circular float using shape-outside.</p>
</body>
</html>`,
        quiz: "Which property wraps text around custom float shapes?",
        answer: "shape-outside"
    },

    "object-fit": {
        title: "object-fit / object-position",
        history: "Control how replaced elements (images, videos) fit inside their containers and where they are positioned (cover, contain, center, top).",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>object-fit / object-position</title>
<style>
  .thumb { width:320px; height:180px; overflow:hidden; }
  .thumb img { width:100%; height:100%; object-fit: cover; object-position: center top; }
</style>
</head>
<body>
  <div class="thumb"><img src="https://via.placeholder.com/640x360" alt=""></div>
</body>
</html>`,
        quiz: "Which properties control image fitting and positioning inside a container?",
        answer: "object-fit and object-position"
    },

    "scroll-snap": {
        title: "scroll-snap",
        history: "Enables smooth snapping behavior for scroll containers — ideal for carousels, slides, and paginated UIs.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>scroll-snap</title>
<style>
  .carousel { display:flex; overflow-x:auto; gap:12px; scroll-snap-type:x mandatory; padding:12px; }
  .slide { flex:none; width:280px; height:160px; background:#d6f5e1; scroll-snap-align:start; border-radius:8px; }
</style>
</head>
<body>
  <div class="carousel">
    <div class="slide">1</div><div class="slide">2</div><div class="slide">3</div>
  </div>
</body>
</html>`,
        quiz: "Which feature enables snapping behavior for carousels and sliders?",
        answer: "scroll-snap"
    },

    "pointer-events": {
        title: "pointer-events",
        history: "Controls whether an element reacts to pointer (mouse/touch) events. Useful to disable clicks or let events pass through.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>pointer-events</title>
<style>
  .overlay { position:fixed; inset:0; background:rgba(0,0,0,0.3); pointer-events:none; }
  .button { margin:40px; }
</style>
</head>
<body>
  <div class="overlay"></div>
  <button class="button">Clickable despite overlay (overlay pointer-events:none)</button>
</body>
</html>`,
        quiz: "Which property controls whether an element receives pointer events?",
        answer: "pointer-events"
    },

    "isolation": {
        title: "isolation",
        history: "Creates a new stacking context so blend modes and z-index behave predictably; useful when using mix-blend-mode or complex stacking.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>isolation</title>
<style>
  .stack { position:relative; isolation:isolate; }
  .a { position:absolute; inset:10px; background:#ffd6d6; mix-blend-mode:multiply; }
  .b { position:absolute; inset:30px; background:#d6eaff; }
</style>
</head>
<body>
  <div class="stack">
    <div class="a"></div>
    <div class="b"></div>
  </div>
</body>
</html>`,
        quiz: "Which property creates a new stacking context for blend modes?",
        answer: "isolation"
    },

    // 🔹 New / Experimental (2023–2025)
    "houdini": {
        title: "CSS Houdini Paint API",
        history: "Allows custom drawing via JavaScript paint worklets so you can create procedural backgrounds and effects directly in CSS.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Houdini Paint API (concept)</title>
<style>
  .pattern { width:320px; height:160px; background: paint(myPattern); border-radius:8px; }
</style>
<script>
  if (CSS && CSS.paintWorklet) {
    CSS.paintWorklet.addModule('myPattern.js'); // requires a worklet file and browser support
  }
</script>
</head>
<body>
  <div class="pattern">Custom paint worklet background</div>
</body>
</html>`,
        quiz: "Which API lets you draw custom backgrounds programmatically in CSS?",
        answer: "CSS Houdini Paint API"
    },

    "anchor-positioning": {
        title: "CSS Anchor Positioning (experimental)",
        history: "Positions elements relative to another element (anchor) for tooltips/popovers. Syntax and support are evolving.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Anchor Positioning (concept)</title>
<style>
  /* Conceptual example — browser support varies */
  .anchor { display:inline-block; margin:60px; }
  .popup { position: absolute; /* anchored to .anchor in supported specs */ background:#fff; border:1px solid #ccc; padding:8px; }
</style>
</head>
<body>
  <button class="anchor">Anchor</button>
  <div class="popup">Tooltip/popover positioned relative to anchor</div>
</body>
</html>`,
        quiz: "Which experimental feature positions elements relative to another element?",
        answer: "CSS Anchor Positioning"
    },

    "scroll-animations": {
        title: "Scroll-driven animations",
        history: "Animate properties based on scroll progress (scroll timelines). Enables immersive, scroll-linked motion. Support is growing.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Scroll-driven Animations (concept)</title>
<style>
  .panel { height:120vh; display:flex; align-items:center; justify-content:center; }
  .box { width:120px; height:120px; background:#ffd6f0; }
  /* Real implementations use @scroll-timeline and animation-timeline (experimental) */
</style>
</head>
<body>
  <div class="panel"><div class="box">Scroll to animate</div></div>
</body>
</html>`,
        quiz: "Which technique animates elements based on scroll progress?",
        answer: "Scroll-driven animations"
    },

    "motion-path": {
        title: "CSS Motion Path (offset-path)",
        history: "Animate elements along custom paths using offset-path, offset-distance, and related properties. Great for complex motion effects.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Motion Path (offset-path)</title>
<style>
  .stage { height:220px; position:relative; }
  .dot { width:24px; height:24px; background:#4f46e5; border-radius:50%; position:absolute; offset-path: path('M10 110 C 150 10, 250 210, 390 110'); animation: move 4s linear infinite; }
  @keyframes move { to { offset-distance: 100%; } }
</style>
</head>
<body>
  <div class="stage"><div class="dot"></div></div>
</body>
</html>`,
        quiz: "Which CSS feature animates elements along custom paths?",
        answer: "offset-path (CSS Motion Path)"
    },

    "css-color-14": {
        title: "CSS Color Level 4/5",
        history: "New color spaces (Lab, LCH, HWB) and improved color functions for more accurate and perceptual color control in design systems.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>CSS Color Level (example)</title>
<style>
  .swatch { width:120px; height:80px; background: lch(65% 40 270); border-radius:8px; }
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
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = tagData[tag].title;
    document.getElementById('modal-history').innerHTML = tagData[tag].history;
    document.getElementById('modal-editor').value = tagData[tag].code;
    document.getElementById('live-preview').srcdoc = tagData[tag].code;
    document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
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
