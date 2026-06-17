const tagData = {
    "align-items": {
        title: "align-items Property",
        history: "Aligns flex items along the cross axis (flex-start, center, stretch, baseline).",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Align-Items Example</title>
<style>
  .container { display: flex; align-items: center; height: 150px; background: lightgray; }
  .item { background: lightcoral; padding: 10px; }
</style>
</head>
<body>
<h2>CSS align-items Example</h2>
<div class="container">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
</div>
</body>
</html>`,
        quiz: "Which property aligns flex items along the cross axis?",
        answer: "align-items"
    },

    "align-content": {
        title: "align-content Property",
        history: "Aligns multiple flex lines when flex-wrap is enabled.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Align-Content Example</title>
<style>
  .container { display: flex; flex-wrap: wrap; align-content: space-around; height: 200px; background: lightblue; }
  .item { width: 80px; height: 60px; background: lightgreen; margin: 5px; }
</style>
</head>
<body>
<h2>CSS align-content Example</h2>
<div class="container">
  <div class="item">1</div><div class="item">2</div><div class="item">3</div>
  <div class="item">4</div><div class="item">5</div><div class="item">6</div>
</div>
</body>
</html>`,
        quiz: "Which property aligns multiple flex lines when wrapping?",
        answer: "align-content"
    },

    "flex-grow": {
        title: "flex-grow Property",
        history: "Defines how much a flex item can grow relative to others.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Grow Example</title>
<style>
  .container { display: flex; }
  .item1 { flex-grow: 1; background: lightblue; }
  .item2 { flex-grow: 2; background: lightgreen; }
</style>
</head>
<body>
<h2>CSS flex-grow Example</h2>
<div class="container">
  <div class="item1">Grow 1</div>
  <div class="item2">Grow 2</div>
</div>
</body>
</html>`,
        quiz: "Which property defines how much a flex item can grow?",
        answer: "flex-grow"
    },

    "flex-shrink": {
        title: "flex-shrink Property",
        history: "Defines how much a flex item can shrink relative to others.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Shrink Example</title>
<style>
  .container { display: flex; width: 300px; }
  .item1 { flex-shrink: 1; background: lightblue; width: 200px; }
  .item2 { flex-shrink: 2; background: lightgreen; width: 200px; }
</style>
</head>
<body>
<h2>CSS flex-shrink Example</h2>
<div class="container">
  <div class="item1">Shrink 1</div>
  <div class="item2">Shrink 2</div>
</div>
</body>
</html>`,
        quiz: "Which property defines how much a flex item can shrink?",
        answer: "flex-shrink"
    },

    "flex-basis": {
        title: "flex-basis Property",
        history: "Defines the initial size of a flex item before free space is distributed.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Basis Example</title>
<style>
  .container { display: flex; }
  .item { flex-basis: 150px; background: lightcoral; }
</style>
</head>
<body>
<h2>CSS flex-basis Example</h2>
<div class="container">
  <div class="item">Item with flex-basis 150px</div>
</div>
</body>
</html>`,
        quiz: "Which property defines the initial size of a flex item?",
        answer: "flex-basis"
    },

    "flex": {
        title: "flex Property (Shorthand)",
        history: "Shorthand for flex-grow, flex-shrink, and flex-basis.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex Shorthand Example</title>
<style>
  .container { display: flex; }
  .item { flex: 1 1 100px; background: lightblue; }
</style>
</head>
<body>
<h2>CSS flex Shorthand Example</h2>
<div class="container">
  <div class="item">flex: 1 1 100px</div>
</div>
</body>
</html>`,
        quiz: "Which shorthand sets flex-grow, flex-shrink, and flex-basis?",
        answer: "flex"
    },

    "align-self": {
        title: "align-self Property",
        history: "Allows individual flex items to override the container's align-items setting.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Align-Self Example</title>
<style>
  .container { display: flex; height: 150px; align-items: flex-start; }
  .item1 { background: lightblue; padding: 10px; }
  .item2 { background: lightgreen; padding: 10px; align-self: center; }
</style>
</head>
<body>
<h2>CSS align-self Example</h2>
<div class="container">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2 (centered)</div>
</div>
</body>
</html>`,
        quiz: "Which property allows individual flex items to override align-items?",
        answer: "align-self"
    },
    "align-self": {
        title: "align-self Property",
        history: "Allows individual flex items to override the container's align-items setting.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Align-Self Example</title>
<style>
  .container { display: flex; height: 150px; align-items: flex-start; }
  .item1 { background: lightblue; padding: 10px; }
  .item2 { background: lightgreen; padding: 10px; align-self: center; }
</style>
</head>
<body>
<h2>CSS align-self Example</h2>
<div class="container">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2 (centered)</div>
</div>
</body>
</html>`,
        quiz: "Which property allows individual flex items to override container alignment?",
        answer: "align-self"
    },

    "order": {
        title: "order Property",
        history: "Changes the visual order of flex items without altering the HTML source order.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Order Example</title>
<style>
  .container { display: flex; gap: 10px; }
  .item1 { order: 2; background: lightblue; padding: 10px; }
  .item2 { order: 1; background: lightgreen; padding: 10px; }
</style>
</head>
<body>
<h2>CSS order Property Example</h2>
<div class="container">
  <div class="item1">Item 1 (order 2)</div>
  <div class="item2">Item 2 (order 1)</div>
</div>
</body>
</html>`,
        quiz: "Which property changes the visual order of flex items?",
        answer: "order"
    },

    "nested-flexbox": {
        title: "Nested Flexbox",
        history: "Flex containers can be nested inside each other to create complex layouts.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Nested Flexbox Example</title>
<style>
  .outer { display: flex; gap: 10px; }
  .inner { display: flex; flex-direction: column; gap: 5px; background: lightyellow; padding: 10px; }
  .item { background: lightblue; padding: 5px; }
</style>
</head>
<body>
<h2>Nested Flexbox Example</h2>
<div class="outer">
  <div class="inner">
    <div class="item">Inner 1</div>
    <div class="item">Inner 2</div>
  </div>
  <div class="inner">
    <div class="item">Inner A</div>
    <div class="item">Inner B</div>
  </div>
</div>
</body>
</html>`,
        quiz: "Which technique uses flex containers inside flex containers?",
        answer: "Nested Flexbox"
    },

    "gap": {
        title: "gap Property",
        history: "Introduced in 2020, the gap property adds spacing between flex items without using margins.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Gap Example</title>
<style>
  .container { display: flex; gap: 20px; }
  .item { background: lightcoral; padding: 20px; }
</style>
</head>
<body>
<h2>CSS gap Property Example</h2>
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
</body>
</html>`,
        quiz: "Which property adds spacing between flex items without margins?",
        answer: "gap"
    },

    "responsive-flexbox": {
        title: "Responsive Flexbox",
        history: "Flexbox combined with min/max-width, clamp(), and media queries creates responsive layouts.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Responsive Flexbox Example</title>
<style>
  .container { display: flex; flex-wrap: wrap; gap: 10px; }
  .item { flex: 1 1 clamp(150px, 30%, 300px); background: lightgreen; padding: 20px; }
</style>
</head>
<body>
<h2>Responsive Flexbox Example</h2>
<div class="container">
  <div class="item">Card 1</div>
  <div class="item">Card 2</div>
  <div class="item">Card 3</div>
</div>
</body>
</html>`,
        quiz: "Which technique combines flexbox with min/max-width, clamp(), and media queries?",
        answer: "Responsive Flexbox"
    },

    "flexbox-grid-combo": {
        title: "Flexbox + Grid Combo",
        history: "Flexbox is ideal for small components, while Grid is best for full page layouts.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flexbox + Grid Combo Example</title>
<style>
  .navbar { display: flex; gap: 10px; background: lightblue; padding: 10px; }
  .grid { display: grid; grid-template-columns: 1fr 2fr; gap: 10px; margin-top: 20px; }
  .item { background: lightcoral; padding: 20px; }
</style>
</head>
<body>
<h2>Flexbox + Grid Combo Example</h2>
<div class="navbar">
  <div class="item">Home</div>
  <div class="item">About</div>
  <div class="item">Contact</div>
</div>
<div class="grid">
  <div class="item">Sidebar</div>
  <div class="item">Main Content</div>
</div>
</body>
</html>`,
        quiz: "Which combo uses Flexbox for small components and Grid for full layouts?",
        answer: "Flexbox + Grid Combo"
    },

    "baseline-alignment": {
        title: "Baseline Alignment",
        history: "Aligns flex items based on text baseline, useful for text-heavy layouts.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Baseline Alignment Example</title>
<style>
  .container { display: flex; align-items: baseline; }
  .item1 { font-size: 20px; background: lightblue; }
  .item2 { font-size: 40px; background: lightgreen; }
</style>
</head>
<body>
<h2>Baseline Alignment Example</h2>
<div class="container">
  <div class="item1">Small Text</div>
  <div class="item2">Large Text</div>
</div>
</body>
</html>`,
        quiz: "Which alignment is useful for text-heavy layouts?",
        answer: "Baseline alignment"
    },

    "flex-basis-auto-vs-0": {
        title: "flex-basis: auto vs 0",
        history: "flex-basis:auto sizes items based on content, while flex-basis:0 distributes space equally. Subtle difference for responsiveness.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Flex-Basis Auto vs 0 Example</title>
<style>
  .container { display: flex; }
  .auto { flex: 1 1 auto; background: lightblue; }
  .zero { flex: 1 1 0; background: lightgreen; }
</style>
</head>
<body>
<h2>Flex-Basis Auto vs 0 Example</h2>
<div class="container">
  <div class="auto">flex-basis:auto</div>
  <div class="zero">flex-basis:0</div>
</div>
</body>
</html>`,
        quiz: "Which flex-basis value sizes items based on content?",
        answer: "auto"
    },
    "align-content": {
        title: "align-content Property (Advanced)",
        history: "The align-content property aligns multiple rows (or columns) of grid or flex items when there is extra space in the cross-axis. It only works when there are multiple lines (wrap enabled in flex or multiple rows in grid).",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Align-Content Example</title>
<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 60px;
    height: 250px;
    align-content: space-between;
    gap: 10px;
    background: lightgray;
  }
  .item { background: lightblue; text-align: center; }
</style>
</head>
<body>
<h2>CSS align-content (Advanced) Example</h2>
<div class="grid">
  <div class="item">Box 1</div>
  <div class="item">Box 2</div>
  <div class="item">Box 3</div>
  <div class="item">Box 4</div>
</div>
</body>
</html>`,
        quiz: "Which property aligns multiple rows or columns when extra space is available?",
        answer: "align-content"
    },

    "order-accessibility": {
        title: "order Property (Accessibility)",
        history: "The order property changes the visual order of flex or grid items without changing the HTML source order. This is useful for accessibility, as semantic HTML order remains intact while visual presentation can be adjusted.",
        code: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Order Accessibility Example</title>
<style>
  .container { display: flex; gap: 10px; }
  .item1 { order: 2; background: lightblue; padding: 10px; }
  .item2 { order: 1; background: lightgreen; padding: 10px; }
  .item3 { order: 3; background: lightcoral; padding: 10px; }
</style>
</head>
<body>
<h2>CSS order Property (Accessibility) Example</h2>
<div class="container">
  <div class="item1">Item 1 (order 2)</div>
  <div class="item2">Item 2 (order 1)</div>
  <div class="item3">Item 3 (order 3)</div>
</div>
<p>Note: The HTML source order remains semantic, but visual order is changed.</p>
</body>
</html>`,
        quiz: "Which property changes the visual order of items without altering HTML source order?",
        answer: "order"
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
