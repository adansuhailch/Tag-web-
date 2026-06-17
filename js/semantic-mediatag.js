const tagData = {
    "video": {
        title: "<video> Video",
        history: "For video embedding",
        code: "<video controls><source href='assets/Website.mp4' type='video/mp4'></video>",
        quiz: "Which tag is used to embed video?",
        answer: "video"
    },
    "source": {
        title: "<source> Source Tag",
        history: "Specifies multiple media resources for media elements like <video> and <audio>.",
        code: "<video controls><source src='video.mp4' type='video/mp4'><source src='video.webm' type='video/webm'></video>",
        quiz: "Which tag specifies multiple media resources for media elements?",
        answer: "source"
    },
    "track": {
        title: "<track> Track Tag",
        history: "Used to specify text tracks for media elements like <video> and <audio>.",
        code: "<video controls><source src='video.mp4' type='video/mp4'><track kind='subtitles' src='subtitles_en.vtt' srclang='en' label='English'></video>",
        quiz: "Which tag is used to specify text tracks for media elements?",
        answer: "track"
    },
    "source": {
        title: "<source> Media Source Tag",
        history: "Defines multiple media resources for audio or video elements.",
        code: "<video controls>\n  <source src='movie.mp4' type='video/mp4'>\n  <source src='movie.ogg' type='video/ogg'>\n  Your browser does not support the video tag.\n</video>",
        quiz: "Which tag defines multiple media resources for audio or video?",
        answer: "source"
    },
    "track": {
        title: "<track> Text Track Tag",
        history: "Provides subtitles, captions, or descriptions for audio/video elements.",
        code: "<video controls>\n  <source src='movie.mp4' type='video/mp4'>\n  <track src='subtitles_en.vtt' kind='subtitles' srclang='en' label='English'>\n  <track src='subtitles_fr.vtt' kind='subtitles' srclang='fr' label='French'>\n</video>",
        quiz: "Which tag provides subtitles or captions for video/audio?",
        answer: "track"
    },

    "figure": {
        title: "<figure> Figure Tag",
        history: "Used to group media content with a caption.",
        code: "<figure><img src='assets/tag web logo.png' alt='sample'><figcaption>This is figure tag</figcaption></figure>",
        quiz: "Which tag is used to group media content with a caption?",
        answer: "figure"
    },
    "figcaption": {
        title: "<figcaption> Figcaption Tag",
        history: "Defines a caption for a <figure> element.",
        code: "<figure><img src='image.jpg' alt='sample'><figcaption>This is figure caption tag</figcaption></figure>",
        quiz: "Which tag defines a caption for a figure?",
        answer: "figcaption"
    },

    //Semantic Tags 
    "nav": {
        title: "<nav> Navigation Tag",
        history: "Defines a set of navigation links.",
        code: "<nav><a href='#home'>Home</a> | <a href='#about'>About</a> | <a href='#contact'>Contact</a></nav>",
        quiz: "Which tag defines a set of navigation links?",
        answer: "nav"


    },
    "main": {
        title: "<main> Main Tag",
        history: "Specifies the main content of a document.",
        code: "<main><h1>Welcome to My Website</h1><p>This is the main content area.</p></main>",
        quiz: "Which tag specifies the main content of a document?",
        answer: "main"
    },
    "div": {
        title: "<div> Division Tag",
        history: "A generic container for flow content.",
        code: "<div style='border:1px solid black; padding:10px;'><h2>Section Title</h2><p>This is a section inside a div.</p></div>",
        quiz: "Which tag is a generic container for flow content?",
        answer: "div"
    },
    "span": {
        title: "<span> Span Tag",
        history: "A generic inline container for phrasing content.",
        code: "<p>This is a <span style='color:red; font-weight:bold;'>highlighted</span> word.</p>",
        quiz: "Which tag is a generic inline container for phrasing content?",
        answer: "span"
    },
    "section": {
        title: "<section> Section Tag",
        history: "Defines a section in a document.",
        code: "<section><h2>Section Title</h2><p>This is a section of content.</p></section>",
        quiz: "Which tag defines a section in a document?",
        answer: "section"
    },
    "aside": {
        title: "<aside> Aside Tag",
        history: "Defines content aside from the page content.",
        code: "<div><p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p><aside><h4>Epcot Center</h4><p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p></aside></div>",
        quiz: "Which tag defines content aside from the page content?",
        answer: "aside"
    },
    "article": {
        title: "<article> Article Tag",
        history: "Represents a self-contained composition in a document.",
        code: "<article><h2>Article Title</h2><p>This is the content of the article.</p></article>",
        quiz: "Which tag represents a self-contained composition in a document?",
        answer: "article"
    },
    "header": {
        title: "<header> Header Tag",
        history: "Defines a container for introductory content or navigation links in HTML.",
        code: "<header>\n  <h1>My Website</h1>\n  <nav>\n    <a href='#home'>Home</a>\n    <a href='#about'>About</a>\n    <a href='#contact'>Contact</a>\n  </nav>\n</header>",
        quiz: "Which tag is used to define the top section of a webpage?",
        answer: "header"
    },
    "address": {
        title: "<address> Address Tag",
        history: "Provides contact information for the author or owner of a document or article.",
        code: "<address>\n  Written by <a href='mailto:adansuhailch@example.com'>adansuhailch@example.com</a><br>\n  Visit us at: 123 Main Street, Lahore\n</address>",
        quiz: "Which tag is used to define contact information in HTML?",
        answer: "address"
    },
    "time": {
        title: "<time> Time Tag",
        history: "Represents a specific time or date, optionally machine-readable.",
        code: "<p>Event starts at <time datetime='2025-12-12T13:00'>1:00 PM, Dec 12 2025</time></p>",
        quiz: "Which tag is used to represent time or date in HTML?",
        answer: "time"
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
