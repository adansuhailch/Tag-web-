const tagData = {
    "background-image": {
        title: "<background-image>",
        history: "Sets one or more background images (url(), gradients).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-image</title></head><body style="background-image:url('https://via.placeholder.com/600x200');">
  <h1>background-image demo</h1>
  <p>Background image applied to body.</p>
</body></html>`,
        quiz: "Which property sets a background image?",
        answer: "background-image"
    },

    "background-repeat": {
        title: "<background-repeat>",
        history: "Controls tiling of background images (repeat, no-repeat, repeat-x, repeat-y, space, round).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-repeat</title></head><body style="background-image:url('https://via.placeholder.com/150'); background-repeat:no-repeat;">
  <h1>background-repeat demo</h1>
</body></html>`,
        quiz: "Which property controls background tiling?",
        answer: "background-repeat"
    },

    "background-position": {
        title: "<background-position>",
        history: "Sets initial position of background image (keywords, percentages, lengths).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-position</title></head><body style="background-image:url('https://via.placeholder.com/300'); background-position:right top;">
  <h1>background-position demo</h1>
</body></html>`,
        quiz: "Which property sets the background image position?",
        answer: "background-position"
    },

    "background-size": {
        title: "<background-size>",
        history: "Controls size of background images (cover, contain, or explicit sizes).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-size</title></head><body style="background-image:url('https://via.placeholder.com/800x400'); background-size:cover;">
  <h1>background-size demo</h1>
</body></html>`,
        quiz: "Which property scales the background image?",
        answer: "background-size"
    },

    "background-attachment": {
        title: "<background-attachment>",
        history: "Determines whether background scrolls with content or is fixed to viewport (scroll, fixed, local).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-attachment</title></head><body style="background-image:url('https://via.placeholder.com/800x600'); background-attachment:fixed;">
  <h1>background-attachment demo</h1>
</body></html>`,
        quiz: "Which property fixes the background to the viewport?",
        answer: "background-attachment"
    },

    "background-origin": {
        title: "<background-origin>",
        history: "Specifies the box (border-box, padding-box, content-box) used to position/clip the background.",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-origin</title></head><body>
  <div style="width:300px;height:120px;border:20px solid #ccc;padding:16px;background:url('https://via.placeholder.com/200') no-repeat;background-origin:content-box;">
    <h1>background-origin demo</h1>
  </div>
</body></html>`,
        quiz: "Which property sets the box used for background positioning?",
        answer: "background-origin"
    },

    "background-blend-mode": {
        title: "<background-blend-mode>",
        history: "Blends background layers and background-color using blend modes (multiply, screen, overlay, etc.).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>background-blend-mode</title></head><body style="background-image:linear-gradient(rgba(255,0,0,0.5),rgba(0,0,255,0.5)), url('https://via.placeholder.com/600'); background-blend-mode:multiply;">
  <h1>background-blend-mode demo</h1>
</body></html>`,
        quiz: "Which property blends multiple background layers?",
        answer: "background-blend-mode"
    },

    "multiple-backgrounds": {
        title: "<multiple backgrounds>",
        history: "CSS allows multiple comma-separated background layers; order matters (first is topmost).",
        code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>multiple backgrounds</title></head><body style="background-image:url('https://via.placeholder.com/200'), linear-gradient(45deg, rgba(255,255,0,0.3), rgba(0,255,255,0.3)); background-repeat:no-repeat,repeat;">
  <h1>multiple backgrounds demo</h1>
</body></html>`,
        quiz: "How do you apply more than one background image to an element?",
        answer: "Use comma-separated values in background-image"
    },

    "gradients": {
        "title": "Gradients",
        "history": "CSS gradients allow smooth transitions between colors without images (linear, radial, conic).",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Gradients Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: linear-gradient(to right, red, blue);\n  }\n</style>\n</head>\n<body>\n<h2>CSS Gradients Example</h2>\n<div class=\"box\">This box uses a linear gradient.</div>\n</body>\n</html>",
        "quiz": "Which CSS feature creates smooth color transitions without images?",
        "answer": "gradients"
    },

    "layering": {
        "title": "Background Layering",
        "history": "Each background layer can be controlled separately with properties like background-size, background-position, etc.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background Layering Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background: url('a.png'), linear-gradient(to right, yellow, green);\n    background-size: contain, cover;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Background Layering Example</h2>\n<div class=\"box\">This box has layered backgrounds.</div>\n</body>\n</html>",
        "quiz": "Which feature allows controlling each background layer separately?",
        "answer": "Background layering"
    },

    "conic-gradient": {
        "title": "conic-gradient() Function",
        "history": "The conic-gradient() function creates pie chart-like circular gradients without images.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Conic-Gradient Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 200px;\n    background: conic-gradient(red, yellow, green, blue);\n    border-radius: 50%;\n  }\n</style>\n</head>\n<body>\n<h2>CSS conic-gradient() Example</h2>\n<div class=\"box\">This box uses conic-gradient.</div>\n</body>\n</html>",
        "quiz": "Which function creates pie chart-like circular gradients?",
        "answer": "conic-gradient()"
    },

    "background-clip-text": {
        "title": "background-clip: text",
        "history": "Using background-clip: text fills text with an image or gradient instead of solid color.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Background-Clip Text Example</title>\n<style>\n  .text {\n    font-size: 40px;\n    background: linear-gradient(to right, red, blue);\n    -webkit-background-clip: text;\n    color: transparent;\n  }\n</style>\n</head>\n<body>\n<h2>CSS background-clip:text Example</h2>\n<p class=\"text\">Gradient Text</p>\n</body>\n</html>",
        "quiz": "Which property can fill text with an image or gradient?",
        "answer": "background-clip: text"
    },
    "houdiniPaintDemo": {
        title: "<CSS Houdini Paint API>",
        history: "Paint worklets draw custom CSS images off the main thread; use feature detection before registering.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Houdini Paint Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    .card{width:320px;height:160px;border-radius:8px;background:paint(stripes);display:flex;align-items:center;justify-content:center;color:#fff}
  </style>
</head>
<body>
  <h1>Houdini Paint API Demo</h1>
  <div class="card">Painted background</div>
  <script>
    const code = \`
      class Stripes { paint(ctx, size) {
        ctx.fillStyle='#222'; ctx.fillRect(0,0,size.width,size.height);
        ctx.fillStyle='#6cf'; for(let x=0;x<size.width;x+=30){ ctx.fillRect(x,0,15,size.height); }
      } }
      registerPaint('stripes', Stripes);
    \`;
    if ('paintWorklet' in CSS) {
      const blob = new Blob([code], {type:'application/javascript'});
      CSS.paintWorklet.addModule(URL.createObjectURL(blob));
    } else {
      console.warn('Paint API not supported');
    }
  </script>
</body>
</html>`,
        quiz: "What API lets you draw custom CSS backgrounds using worklets?",
        answer: "CSS Houdini Paint API"
    },

    "cssLogicalProperties": {
        title: "<CSS Logical Properties>",
        history: "Logical properties map layout to flow-relative directions (inline/block/start/end) and help with internationalization.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CSS Logical Properties Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body{font-family:Arial;padding:16px}
    .box{border:1px solid #ccc;padding:12px;margin-block:12px;margin-inline:8px}
    .example{padding-inline:16px;padding-block:8px;background:#f4f8ff}
  </style>
</head>
<body>
  <h1>Logical Properties Example</h1>
  <p>Using <code>margin-inline</code> and <code>padding-block</code> instead of left/right/top/bottom.</p>
  <div class="box example" dir="ltr">LTR: margin-inline applies left/right</div>
  <div class="box example" dir="rtl">RTL: margin-inline flips automatically</div>
</body>
</html>`,
        quiz: "Which CSS feature maps layout to flow-relative directions for RTL/LTR support?",
        answer: "CSS logical properties"
    },


    "systemColors": {
        title: "<System Colors / Color Keywords>",
        history: "CSS provides named color keywords and system color mappings to match platform UI; use keywords or hex/RGB values.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>System Colors Demo</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body{font-family:Arial;padding:16px}
    .swatch{display:inline-block;width:120px;height:60px;margin:8px;border:1px solid #ccc;text-align:center;line-height:60px}
    .red{background:crimson} .navy{background:navy;color:#fff} .system{background:ButtonFace;color:ButtonText}
  </style>
</head>
<body>
  <h1>System Colors and Keywords</h1>
  <div class="swatch red">crimson</div>
  <div class="swatch navy">navy</div>
  <div class="swatch system">ButtonFace</div>
  <p>Use named keywords or hex/RGB for precise control.</p>
</body>
</html>`,
        quiz: "What CSS values let you use named colors or platform UI colors?",
        answer: "color keywords / system colors"
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
