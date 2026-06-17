const tagData = {
    "All Headings": {
        title: "All Headings",
        history: "Includes h1 to h6 tags used for headings.",
        code: "<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6>",
        quiz: "Which tags are used for headings?",
        answer: "h1 to h6"
    },
    "em": {
        title: "<em> Emphasis Tag",
        history: "Used to emphasize text. Usually italicized.",
        code: "<em>This text is emphasized</em>",
        quiz: "Which tag is used for emphasis?",
        answer: "em"
    },
    "hr": {
        title: "<hr>Horizontal line Tag",
        history: "Used for draw a horizontal line",
        code: "Under this text there is a horizontall line.<hr>",
        quiz: "Which tag is used for draw horizontall line.",
        answer: "hr tag"
    },
    "h2": {
        title: "<h2> Subheading Tag",
        history: "Used for subheadings. Smaller than h1.",
        code: "<h2>This is a subheading</h2>",
        quiz: "Which tag is smaller than h1 but still a heading?",
        answer: "h2"
    },
    "p": {
        title: "<p> Paragraph Tag",
        history: "Used to write paragraphs of text.",
        code: "<p>This is a paragraph.</p>",
        quiz: "Which tag wraps a paragraph?",
        answer: "p"
    },
    "br": {
        title: "<br> Line Break Tag",
        history: "Used to insert a single line break in text content.",
        code: "<p>Hello World<br>Welcome to my website</p>",
        quiz: "Which tag is used to insert a line break in HTML?",
        answer: "br"
    },
    "i": {
        title: "<i> Italic Tag",
        history: "Used to italicize text (without emphasis).",
        code: "<i>This is italic text</i>",
        quiz: "Which tag makes text italic?",
        answer: "i"
    },
    "u": {
        title: "<u> Underline Tag",
        history: "Used to underline text.",
        code: "<u>This is underlined text</u>",
        quiz: "Which tag underlines text?",
        answer: "u"
    },
    "mark": {
        title: "<mark> Highlight Tag",
        history: "Used to highlight text.",
        code: "<mark>This is highlighted</mark>",
        quiz: "Which tag highlights text?",
        answer: "mark"
    },
    "small": {
        title: "<small> Small Text Tag",
        history: "Used to show smaller text.",
        code: "<small>This is small text</small>",
        quiz: "Which tag shows small text?",
        answer: "small"
    },
    "sup": {
        title: "<sup> Superscript Tag",
        history: "Used for superscript (like math powers).",
        code: "x<sup>2</sup>",
        quiz: "Which tag shows superscript?",
        answer: "sup"
    },
    "sub": {
        title: "<sub> Subscript Tag",
        history: "Used for subscript (like chemical formulas).",
        code: "H<sub>2</sub>O",
        quiz: "Which tag shows subscript?",
        answer: "sub"
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
