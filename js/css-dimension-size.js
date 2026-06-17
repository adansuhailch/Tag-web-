const tagData = {
    "width-height": {
        "title": "width / height Properties",
        "history": "The width and height properties set the horizontal and vertical size of an element.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Width & Height Example</title>\n<style>\n  .box {\n    width: 200px;\n    height: 100px;\n    background-color: lightblue;\n  }\n</style>\n</head>\n<body>\n<h2>CSS width & height Properties Example</h2>\n<div class=\"box\">This box is 200px wide and 100px tall.</div>\n</body>\n</html>",
        "quiz": "Which properties set the horizontal and vertical size of an element?",
        "answer": "width and height"
    },

    "min-width-min-height": {
        "title": "min-width / min-height Properties",
        "history": "The min-width and min-height properties set the minimum size of an element.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Min-Width & Min-Height Example</title>\n<style>\n  .box {\n    min-width: 150px;\n    min-height: 80px;\n    background-color: lightgreen;\n  }\n</style>\n</head>\n<body>\n<h2>CSS min-width & min-height Properties Example</h2>\n<div class=\"box\">This box cannot be smaller than 150px wide and 80px tall.</div>\n</body>\n</html>",
        "quiz": "Which properties set the minimum size of an element?",
        "answer": "min-width and min-height"
    },

    "max-width-max-height": {
        "title": "max-width / max-height Properties",
        "history": "The max-width and max-height properties set the maximum size of an element.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Max-Width & Max-Height Example</title>\n<style>\n  .box {\n    max-width: 300px;\n    max-height: 150px;\n    background-color: lightcoral;\n  }\n</style>\n</head>\n<body>\n<h2>CSS max-width & max-height Properties Example</h2>\n<div class=\"box\">This box cannot be larger than 300px wide and 150px tall.</div>\n</body>\n</html>",
        "quiz": "Which properties set the maximum size of an element?",
        "answer": "max-width and max-height"
    },

    "box-sizing": {
        "title": "box-sizing Property",
        "history": "The box-sizing property defines how the total width and height of an element are calculated (content-box or border-box).",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Box-Sizing Example</title>\n<style>\n  .box {\n    width: 200px;\n    padding: 20px;\n    border: 5px solid navy;\n    box-sizing: border-box;\n    background-color: lightyellow;\n  }\n</style>\n</head>\n<body>\n<h2>CSS box-sizing Property Example</h2>\n<div class=\"box\">This box uses border-box sizing.</div>\n</body>\n</html>",
        "quiz": "Which property defines how total width and height are calculated?",
        "answer": "box-sizing"
    },

    "inline-block-size": {
        "title": "inline-size / block-size Properties",
        "history": "The inline-size property sets the size in the inline direction, while block-size sets the size in the block direction.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Inline-Size & Block-Size Example</title>\n<style>\n  .box {\n    inline-size: 250px;\n    block-size: 120px;\n    background-color: lightpink;\n  }\n</style>\n</head>\n<body>\n<h2>CSS inline-size & block-size Properties Example</h2>\n<div class=\"box\">This box uses inline-size and block-size.</div>\n</body>\n</html>",
        "quiz": "Which properties set size in inline and block directions?",
        "answer": "inline-size and block-size"
    },

    "aspect-ratio": {
        "title": "aspect-ratio Property",
        "history": "The aspect-ratio property sets a preferred width-to-height ratio for an element.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Aspect-Ratio Example</title>\n<style>\n  .box {\n    aspect-ratio: 16 / 9;\n    width: 320px;\n    background-color: lightblue;\n  }\n</style>\n</head>\n<body>\n<h2>CSS aspect-ratio Property Example</h2>\n<div class=\"box\">This box maintains a 16:9 aspect ratio.</div>\n</body>\n</html>",
        "quiz": "Which property sets a preferred width-to-height ratio?",
        "answer": "aspect-ratio"
    },

    "fit-content": {
        "title": "fit-content Keyword",
        "history": "The fit-content keyword allows an element to size itself based on its content up to a maximum limit.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Fit-Content Example</title>\n<style>\n  .box {\n    width: fit-content;\n    border: 2px solid navy;\n    background-color: lightgreen;\n  }\n</style>\n</head>\n<body>\n<h2>CSS fit-content Keyword Example</h2>\n<div class=\"box\">This box sizes itself to fit its content.</div>\n</body>\n</html>",
        "quiz": "Which keyword sizes an element based on its content up to a limit?",
        "answer": "fit-content"
    },

    "max-content": {
        "title": "max-content Keyword",
        "history": "The max-content keyword sizes an element to fit its longest content without wrapping.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Max-Content Example</title>\n<style>\n  .box {\n    width: max-content;\n    border: 2px solid red;\n    background-color: lightyellow;\n  }\n</style>\n</head>\n<body>\n<h2>CSS max-content Keyword Example</h2>\n<div class=\"box\">ThisIsAVeryLongWordThatWillNotWrapUsingMaxContent.</div>\n</body>\n</html>",
        "quiz": "Which keyword sizes an element to fit its longest content without wrapping?",
        "answer": "max-content"
    },

    "min-content": {
        "title": "min-content Keyword",
        "history": "The min-content keyword sizes an element to the smallest possible size without overflowing content.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Min-Content Example</title>\n<style>\n  .box {\n    width: min-content;\n    border: 2px solid green;\n    background-color: lightgray;\n  }\n</style>\n</head>\n<body>\n<h2>CSS min-content Keyword Example</h2>\n<div class=\"box\">This text will shrink to the smallest width possible.</div>\n</body>\n</html>",
        "quiz": "Which keyword sizes an element to the smallest possible size?",
        "answer": "min-content"
    },

    "clamp": {
        "title": "clamp() Function",
        "history": "The clamp() function sets a value that is clamped between a minimum, preferred, and maximum value.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Clamp Example</title>\n<style>\n  .text {\n    font-size: clamp(16px, 2vw, 24px);\n  }\n</style>\n</head>\n<body>\n<h2>CSS clamp() Function Example</h2>\n<p class=\"text\">This text uses clamp() to adjust font size between 16px and 24px.</p>\n</body>\n</html>",
        "quiz": "Which function clamps a value between minimum, preferred, and maximum?",
        "answer": "clamp()"
    },

    "viewport-units": {
        "title": "Viewport Units (vh, vw)",
        "history": "Viewport units size elements relative to the viewport: vh for height and vw for width.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Viewport Units Example</title>\n<style>\n  .box {\n    width: 100vw;\n    height: 100vh;\n    background-color: lightblue;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Viewport Units Example</h2>\n<div class=\"box\">This box uses viewport units (100vw x 100vh).</div>\n</body>\n</html>",
        "quiz": "Which units size elements relative to the viewport?",
        "answer": "vh and vw"
    },
    "dynamic-viewport-units": {
        "title": "Dynamic Viewport Units (dvh, svh, lvh)",
        "history": "Dynamic viewport units adjust element sizing based on viewport changes. dvh = dynamic viewport height, svh = small viewport height, lvh = large viewport height. They solve issues with mobile browser UI resizing.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Dynamic Viewport Units Example</title>\n<style>\n  .box {\n    width: 100vw;\n    height: 50dvh;\n    background-color: lightblue;\n  }\n  .box2 {\n    width: 100vw;\n    height: 50svh;\n    background-color: lightgreen;\n  }\n  .box3 {\n    width: 100vw;\n    height: 50lvh;\n    background-color: lightcoral;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Dynamic Viewport Units Example</h2>\n<div class=\"box\">This box uses 50dvh (dynamic viewport height).</div>\n<div class=\"box2\">This box uses 50svh (small viewport height).</div>\n<div class=\"box3\">This box uses 50lvh (large viewport height).</div>\n</body>\n</html>",
        "quiz": "Which units solve mobile browser resizing issues by using dynamic viewport height?",
        "answer": "dvh, svh, lvh"
    },

    "container-units": {
        "title": "Container Units (cqw, cqh)",
        "history": "Container query units size elements relative to their container instead of the viewport. cqw = 1% of container width, cqh = 1% of container height.",
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Container Units Example</title>\n<style>\n  .container {\n    width: 400px;\n    height: 200px;\n    border: 2px solid navy;\n    resize: both;\n    overflow: auto;\n  }\n  .box {\n    width: 50cqw;\n    height: 50cqh;\n    background-color: lightpink;\n  }\n</style>\n</head>\n<body>\n<h2>CSS Container Units Example</h2>\n<div class=\"container\">\n  <div class=\"box\">This box is sized relative to its container (50cqw x 50cqh).</div>\n</div>\n</body>\n</html>",
        "quiz": "Which units size elements relative to their container instead of the viewport?",
        "answer": "cqw and cqh"
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
