// Data object
const cssTextFonts = {
    "white-space": {
        title: "White-space Property",
        history: "Controls how whitespace inside an element is handled.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>White Space Demo</title>
  <style>
    p {
      width: 300px;
      border: 2px solid black;
      padding: 10px;
      white-space: pre;
    }
  </style>
</head>
<body>
  <h1>White Space Property Demo</h1>
  <p>
This     is     a      demo    text
where      extra      spaces
and
line breaks
will be shown exactly as written.
  </p>
</body>
</html>`,
        quiz: "Which CSS property controls spaces and line breaks?",
        answer: "white-space"
    },
    "tab-size": {
        title: "Tab-size Property",
        history: "Specifies the width of tab characters.",
        code: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tab-size Example</title>
</head>
<body>
<pre style="tab-size: 4; -moz-tab-size: 4; white-space: pre;">
Item1	SubitemA
Item2	SubitemB
</pre>
<code style="display: block; white-space: pre; tab-size: 8; -moz-tab-size: 8;">
Name	Age	City
Ali	16	Karachi
</code>
</body>
</html>`,
        quiz: "Which property sets the width of tab characters?",
        answer: "tab-size"
    },
    "font-stretch": {
        title: "Font-stretch Property",
        history: "Controls how condensed or expanded the text appears.",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Font Stretch Example</title>
</head>
<body>
    <h2>Font-Stretch Example</h2>
    <p style="font-stretch: condensed; font-family: 'Arial';">
        This text is CONDENSED (narrow).
    </p>
    <p style="font-stretch: expanded; font-family: 'Arial';">
        This text is EXPANDED (wider).
    </p>
</body>
</html>`,
        quiz: "Which CSS property changes the width (condensed/expanded) of the font?",
        answer: "font-stretch"
    },
  "font": {
    title: "<font> (Deprecated)",
    history: "Used for inline font styling (face, size, color). Deprecated in favor of CSS (font-family, font-size, color).",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>font Example (Deprecated)</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.5; padding: 20px; }
    .note { color: #555; margin-top: 12px; }
    .modern { background:#f4f8ff; padding:8px; border-radius:4px; margin-top:8px; }
  </style>
</head>
<body>
  <h1>&lt;font&gt; Example (Deprecated)</h1>
  <p>The <code>&lt;font&gt;</code> tag was historically used to change font face, size, and color inline. It is deprecated and should not be used in modern HTML.</p>

  <h2>Old usage (deprecated)</h2>
  <p><font face="Times New Roman" size="4" color="red">This text uses the old &lt;font&gt; tag: Times New Roman, size 4, red color.</font></p>

  <h2>Modern equivalent (use CSS)</h2>
  <div class="modern">
    <p style="font-family: 'Times New Roman', serif; font-size:18px; color:red;">
      This text uses CSS for the same visual result: font-family, font-size, and color.
    </p>
  </div>

  <p class="note">Note: Use CSS (external stylesheet or inline styles) for presentation and keep HTML semantic.</p>
</body>
</html>`,
    quiz: "Which deprecated tag was used for inline font styling?",
    answer: "font"
  },
    "width": {
        title: "Width Property",
        history: "Defines the width of an element's content box.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Width Example</title>
  <!-- Internal CSS -->
  <style>
    .box {
      width: 300px;          /* element ki width fix kar di */
      height: 150px;         /* height bhi set kar di */
      background-color: lightblue;
      border: 2px solid navy;
      text-align: center;    /* text ko center align kiya */
      line-height: 150px;    /* text vertically center */
    }
  </style>
</head>
<body>
  <h2>CSS Width Property Example</h2>
  <div class="box">
    This box is 300px wide
  </div>
</body>
</html>`,
        quiz: "Which property sets the horizontal size of an element?",
        answer: "width"
    },
    "padding": {
        title: "padding Property",
        history: "Padding adds inner space between an element’s content and its border.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Padding Example</title>
  <!-- Internal CSS -->
  <style>
    .box {
      width: 300px;
      height: 150px;
      background-color: lightgreen;
      border: 2px solid darkgreen;

      /* Padding adds space between content and border */
      padding: 30px;

      text-align: center;
    }
  </style>
</head>
<body>
  <h2>CSS Padding Property Example</h2>
  <div class="box">
    This box has 30px padding
  </div>
</body>
</html>`,
        quiz: "Which property sets the vertically size of an element?",
        answer: "padding"
    },
    "margin-top": {
        "title": "margin-top Property",
        "history": "The margin-top property adds space above an element, outside of its border.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Margin-Top Example</title>\n  <!-- Internal CSS -->\n  <style>\n    .box {\n      width: 300px;\n      height: 100px;\n      background-color: lightblue;\n      border: 2px solid navy;\n\n      /* Margin-top adds space above the element */\n      margin-top: 50px;\n\n      text-align: center;\n    }\n  </style>\n</head>\n<body>\n  <h2>CSS margin-top Property Example</h2>\n  <div class=\"box\">\n    This box has 50px margin-top\n  </div>\n</body>\n</html>",
        "quiz": "Which property adds space above an element, outside of its border?",
        "answer": "margin-top"
    },
    "background-color": {
        "title": "background-color Property",
        "history": "The background-color property sets the background color of an element.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Color Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-color: lightblue;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-color Property Example</h2>\n<div class=\"box\">This box has a lightblue background.</div>\n</body>\n</html>",
        "quiz": "Which property sets the background color of an element?",
        "answer": "background-color"
    },

    "background-clip": {
        "title": "background-clip Property",
        "history": "The background-clip property defines how far the background extends (border-box, padding-box, or content-box).",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Clip Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    padding: 20px;\n    border: 5px dashed navy;\n    background: lightblue;\n    background-clip: content-box;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-clip Property Example</h2>\n<div class=\"box\">Background limited to content-box.</div>\n</body>\n</html>",
        "quiz": "Which property limits background painting area to border-box, padding-box, or content-box?",
        "answer": "background-clip"
    },
  "houdiniPaint": {
    title: "<CSS Houdini Paint API>",
    history: "Paint API allows custom 2D rendering via worklets; used for custom backgrounds and borders.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Houdini Paint API Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .card { width: 320px; height: 160px; border-radius: 8px; margin: 12px 0; background: paint(stripes); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; }
    .note { font-size:0.9rem; color:#555; margin-top:12px; }
  </style>
</head>
<body>
  <h1>Houdini Paint API Demo</h1>
  <div class="card">Painted background</div>
  <p class="note">If your browser does not support Houdini Paint API, the background will be blank. Use a modern Chromium build or polyfill.</p>

  <script>
    // Create a blob URL for the paint worklet so the demo is self-contained
    const workletCode = \`
      class StripesPainter {
        static get inputProperties() { return ['--stripe-color','--stripe-width']; }
        paint(ctx, size, props) {
          const color = props.get('--stripe-color').toString() || '#6cf';
          const stripeWidth = parseFloat(props.get('--stripe-width').toString()) || 20;
          ctx.fillStyle = '#222';
          ctx.fillRect(0,0,size.width,size.height);
          ctx.fillStyle = color;
          for (let x = -size.height; x < size.width + size.height; x += stripeWidth*2) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x + size.height, 0);
            ctx.lineTo(x + size.height - size.height, size.height);
            ctx.lineTo(x - size.height, size.height);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
      registerPaint('stripes', StripesPainter);
    \`;

    if ('paintWorklet' in CSS) {
      const blob = new Blob([workletCode], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      CSS.paintWorklet.addModule(url).then(() => {
        // set custom properties for the painted background
        document.querySelector('.card').style.setProperty('--stripe-color', '#6cf');
        document.querySelector('.card').style.setProperty('--stripe-width', '24');
      }).catch(err => console.error('Paint worklet load failed', err));
    } else {
      console.warn('Houdini Paint API not supported in this browser.');
    }
  </script>
</body>
</html>`,
    quiz: "What API lets you draw custom CSS backgrounds using worklets?",
    answer: "CSS Houdini Paint API"
  },

    "background-shorthand": {
        title: "background Property (Shorthand)",
        history: "The background property is a shorthand for setting all background-related properties in one declaration.",
        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background Shorthand Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: #f0f0f0 url('bg.png') no-repeat center/cover;\n    border: 1px solid #333;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background Shorthand Example</h2>\n<div class=\"box\">This box uses background shorthand.</div>\n</body>\n</html>",
        quiz: "Which property is shorthand for setting all background properties?",
        answer: "background"
    },
    "tables-layout": {
        "title": "Tables for Layout (Legacy)",
        "history": "Tables were originally meant for tabular data but misused in the 90s for page layouts. They are heavy and not semantic.",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Table Layout Example</title>\n<style>\n  table { width: 100%; border: 1px solid black; }\n  td { border: 1px solid gray; padding: 10px; }\n</style>\n</head>\n<body>\n<h2>Legacy Table Layout Example</h2>\n<table>\n  <tr>\n    <td>Sidebar</td>\n    <td>Main Content</td>\n  </tr>\n</table>\n</body>\n</html>",
        "quiz": "Which legacy technique used tables for page layout in the 90s?",
        "answer": "Tables"
    },

    "flexbox": {
        "title": "Flexbox Layout",
        "history": "Flexbox is a modern one-dimensional layout system for arranging items in rows or columns. Perfect for navbars, cards, and forms.",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Flexbox Example</title>\n<style>\n  .container { display: flex; gap: 10px; }\n  .item { flex: 1; background: lightcoral; height: 80px; }\n</style>\n</head>\n<body>\n<h2>Flexbox Layout Example</h2>\n<div class=\"container\">\n  <div class=\"item\">Item 1</div>\n  <div class=\"item\">Item 2</div>\n  <div class=\"item\">Item 3</div>\n</div>\n</body>\n</html>",
        "quiz": "Which modern layout system is one-dimensional and perfect for navbars and cards?",
        "answer": "Flexbox"
    },

    "subgrid": {
        "title": "Subgrid Feature",
        "history": "Subgrid allows child elements to inherit parent grid tracks for consistent alignment.",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Subgrid Example</title>\n<style>\n  .parent { display: grid; grid-template-columns: 1fr 1fr; }\n  .child { display: grid; grid-template-columns: subgrid; }\n</style>\n</head>\n<body>\n<h2>CSS Subgrid Example</h2>\n<div class=\"parent\">\n  <div class=\"child\">Child inherits parent grid tracks</div>\n</div>\n</body>\n</html>",
        "quiz": "Which CSS Grid feature allows child elements to inherit parent grid tracks?",
        "answer": "Subgrid"
    },

    "multi-column-power": {
        "title": "Multi-column Layout",
        "history": "The multi-column layout creates newspaper-style columns for text content. Useful for magazines and articles.",
        "code": "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\">\n<title>Multi-Column Layout Example</title>\n<style>\n  .text {\n    column-count: 3;\n    column-gap: 20px;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Multi-Column Layout Example</h2>\n<div class=\"text\">\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n</div>\n</body>\n</html>",
        "quiz": "Which CSS feature creates newspaper-style columns?",
        "answer": "Multi-column Layout"
    },
    "flex-direction": {
        title: "flex-direction Property",
        history: "Defines the direction of flex items (row, row-reverse, column, column-reverse).",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Direction Example</title>
<style>
  .container { display: flex; flex-direction: row-reverse; gap: 10px; }
  .item { background: lightblue; padding: 10px; }
</style>
</head>
<body>
<h2>CSS flex-direction Example</h2>
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
</body>
</html>`,
        quiz: "Which property defines the direction of flex items?",
        answer: "flex-direction"
    },

    "flex-wrap": {
        title: "flex-wrap Property",
        history: "Controls whether flex items wrap onto multiple lines (nowrap, wrap, wrap-reverse).",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Wrap Example</title>
<style>
  .container { display: flex; flex-wrap: wrap; gap: 10px; }
  .item { width: 120px; height: 60px; background: lightgreen; }
</style>
</head>
<body>
<h2>CSS flex-wrap Example</h2>
<div class="container">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
  <div class="item">Box 3</div>
  <div class="item">Box 4</div>
</div>
</body>
</html>`,
        quiz: "Which property controls whether flex items wrap onto multiple lines?",
        answer: "flex-wrap"
    },

    "justify-content": {
        title: "justify-content Property",
        history: "Aligns flex items along the main axis (flex-start, center, space-between, space-around, space-evenly).",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Justify-Content Example</title>
<style>
  .container { display: flex; justify-content: space-between; background: lightyellow; padding: 10px; }
  .item { background: lightblue; padding: 10px; }
</style>
</head>
<body>
<h2>CSS justify-content Example</h2>
<div class="container">
  <div class="item">Item A</div>
  <div class="item">Item B</div>
  <div class="item">Item C</div>
</div>
</body>
</html>`,
        quiz: "Which property aligns flex items along the main axis?",
        answer: "justify-content"
    },
    // css grid
  "grid-template-columns": {
    title: "<grid-template-columns>",
    history: "Defines the number and widths of grid columns; accepts fixed and flexible sizes (px, %, fr, repeat(), minmax(), etc.)",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>grid-template-columns Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    .grid { display: grid; grid-template-columns: 1fr 2fr 100px; gap: 10px; padding: 12px; }
    .item { background:#e8f0ff; padding:12px; border:1px solid #cfe; }
  </style>
</head>
<body>
  <h1>&lt;grid-template-columns&gt; Demo</h1>
  <div class="grid">
    <div class="item">Column 1 (1fr)</div>
    <div class="item">Column 2 (2fr)</div>
    <div class="item">Column 3 (100px)</div>
  </div>
  <p>Try changing the values to see how columns resize.</p>
</body>
</html>`,
    quiz: "Which property sets the number and widths of grid columns?",
    answer: "grid-template-columns"
  },

  "grid-template-rows": {
    title: "<grid-template-rows>",
    history: "Specifies the heights of grid rows; values mirror column sizing options (px, fr, minmax(), repeat(), etc.).",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>grid-template-rows Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    .grid { display: grid; grid-template-rows: 80px 1fr 40px; gap: 8px; height: 300px; }
    .item { background:#fff4e6; padding:10px; border:1px solid #ffd; }
  </style>
</head>
<body>
  <h1>&lt;grid-template-rows&gt; Demo</h1>
  <div class="grid">
    <div class="item">Row 1 (80px)</div>
    <div class="item">Row 2 (1fr)</div>
    <div class="item">Row 3 (40px)</div>
  </div>
  <p>Resize the container to see how the flexible row (1fr) behaves.</p>
</body>
</html>`,
    quiz: "Which property sets the heights of grid rows?",
    answer: "grid-template-rows"
  },

  "gap": {
    title: "<gap>",
    history: "Shorthand for row-gap and column-gap; sets spacing (gutters) between grid rows and columns and also works with flex containers.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>gap Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px 10px; padding:12px; }
    .item { background:#e6ffe8; padding:16px; border:1px solid #cfc; }
  </style>
</head>
<body>
  <h1>&lt;gap&gt; Demo</h1>
  <div class="grid">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
  <p>Here gap: <code>20px 10px</code> means 20px row-gap and 10px column-gap.</p>
</body>
</html>`,
    quiz: "Which property sets the spacing between grid rows and columns?",
    answer: "gap"
  },
    "color-bg": {
        title: "color / background-color",
        history: "Set text color and element background color. Fundamental for visual design and accessibility.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>color / background-color</title>
<style>
  .box {
    color: red;
    background-color: #f0f8ff;
    padding: 16px;
    border-radius: 8px;
  }
</style>
</head>
<body>
  <div class="box">This text is red on a light background.</div>
</body>
</html>`,
        quiz: "Which properties set text color and element background color?",
        answer: "color and background-color"
    },

    "opacity": {
        title: "opacity",
        history: "Controls element transparency; affects the element and its children. Useful for overlays and subtle UI effects.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>opacity</title>
<style>
  .bg { background: #333; padding: 20px; color: white; }
  .overlay { background: rgba(255,255,255,0.8); opacity: 0.6; padding: 12px; }
</style>
</head>
<body>
  <div class="bg">
    <div class="overlay">Semi-transparent overlay (opacity: 0.6)</div>
  </div>
</body>
</html>`,
        quiz: "Which property controls element transparency?",
        answer: "opacity"
    },

    "box-shadow": {
        title: "box-shadow",
        history: "Adds shadow behind elements to create depth. Supports offsets, blur, spread, and color (including rgba for soft shadows).",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>box-shadow</title>
<style>
  .card {
    width: 280px;
    padding: 18px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }
  body { background: #f4f6f8; display:flex; justify-content:center; align-items:center; height:100vh; }
</style>
</head>
<body>
  <div class="card">Card with box-shadow</div>
</body>
</html>`,
        quiz: "Which property adds a shadow behind elements?",
        answer: "box-shadow"
    },
    "transition": {
        title: "transition",
        history: "Smoothly animate property changes (hover, focus, class toggles). Simple and performant for UI micro-interactions.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>transition Example</title>
<style>
  .btn { background:#2563eb; color:#fff; padding:12px 18px; border-radius:8px; transition: all 0.3s ease; display:inline-block; }
  .btn:hover { transform: translateY(-6px); background:#1e40af; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <button class="btn">Hover me</button>
</body>
</html>`,
        quiz: "Which property creates smooth hover/focus transitions?",
        answer: "transition"
    },

    "keyframes": {
        title: "@keyframes",
        history: "Defines animation keyframes (steps from→to or multiple stops). Used with animation-name to run CSS animations.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>@keyframes Example</title>
<style>
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .box { width:200px; height:100px; background:#f97316; color:#fff; display:flex; align-items:center; justify-content:center; animation: fadeIn 1s ease forwards; margin:24px; border-radius:8px; }
</style>
</head>
<body>
  <div class="box">Fade In</div>
</body>
</html>`,
        quiz: "Which at-rule defines animation steps?",
        answer: "@keyframes"
    },

    "animation-basics": {
        title: "animation-name / animation-duration / animation-delay",
        history: "Control which animation runs, how long it lasts, and when it starts. Core controls for CSS animations.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>animation controls</title>
<style>
  @keyframes slideUp { from { transform: translateY(20px); opacity:0 } to { transform: translateY(0); opacity:1 } }
  .card { width:260px; padding:18px; background:#06b6d4; color:#fff; border-radius:10px; animation-name: slideUp; animation-duration: 800ms; animation-delay: 300ms; animation-fill-mode: both; }
  body { font-family: Arial, sans-serif; padding:24px; }
</style>
</head>
<body>
  <div class="card">Animated card</div>
</body>
</html>`,
        quiz: "Which properties set animation identity, time, and start delay?",
        answer: "animation-name, animation-duration, animation-delay"
    },


};

// Modal functions
function openModal(tag) {
    const item = cssTextFonts[tag];
    if (!item) return;

    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = item.title;
    document.getElementById('modal-history').innerHTML = item.history;
    document.getElementById('modal-editor').value = item.code;
    document.getElementById('live-preview').srcdoc = item.code;
    document.getElementById('quiz-question').innerHTML = item.quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').innerHTML = '';

    document.getElementById('quiz').setAttribute('data-tag', tag);

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
    const correct = cssTextFonts[tag].answer.toLowerCase();

    if (answer === correct) {
      document.getElementById('quiz-feedback').innerHTML = "<span style='color:#00FFFF;'>Correct!</span>";
    } else {
      document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ffb703;'>Try again!</span>";
    }
}

// Search function
function searchTag() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.tag-card');

    cards.forEach(card => {
        const tag = card.textContent.toLowerCase();
        if (tag.includes(input)) {
            card.style.display = "inline-block";
            card.classList.add("highlight");
        } else {
            card.style.display = "none";
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

// Scroll buttons
document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById("scrollBottomBtn").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

window.addEventListener("scroll", () => {
    const topBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function toggleModalTheme() {
  document.getElementById("modal-content")
    .classList.toggle("modal-dark");
}
