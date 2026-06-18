function openModal(tag) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = tagData[tag].title;
    document.getElementById('modal-history').innerHTML = tagData[tag].history;
    document.getElementById('modal-editor').value = tagData[tag].code;
    document.getElementById('live-preview').srcdoc = tagData[tag].code;
    document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').innerHTML = '';

    // yahan tag ko hidden attribute me store hota ha
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
    // hidden attribute 
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
// scrool button
// ─── 🚀 SCROLL BUTTONS SYSTEM (BULLETPROOF) ───

// 1. Click Event Listeners With Separate Checks
const scrollTopBtn = document.getElementById('scrollTopBtn');
const scrollBottomBtn = document.getElementById('scrollBottomBtn');

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (scrollBottomBtn) {
    scrollBottomBtn.addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

// 2. Scroll Window Event Listener With Dynamic Safety Check
window.addEventListener("scroll", () => {
    const topBtn = document.getElementById("scrollTopBtn");
    if (topBtn) {
        if (window.scrollY > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }
});


function toggleModalTheme() {
    const modalContent = document.getElementById("modal-content");
    if (modalContent) {
        modalContent.classList.toggle("modal-dark");
    }
}
