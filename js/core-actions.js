// ===============================
// Mobile Sidebar Navigation
// ===============================

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
const navLinks = document.querySelectorAll(".nav-list a");

// Open Sidebar
function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
    menuBtn.setAttribute("aria-expanded", "true");
}

// Close Sidebar
function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuBtn.setAttribute("aria-expanded", "false");
}

// Toggle Sidebar
menuBtn.addEventListener("click", () => {

    if (sidebar.classList.contains("active")) {
        closeSidebar();
    } else {
        openSidebar();
    }

});

// Close when clicking overlay
overlay.addEventListener("click", closeSidebar);

// Close when pressing ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && sidebar.classList.contains("active")) {
        closeSidebar();
    }

});

// Close when clicking any sidebar link
navLinks.forEach(link => {

    link.addEventListener("click", closeSidebar);

});

function openModal(tag) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').innerHTML = tagData[tag].title;
    document.getElementById('modal-history').innerHTML = tagData[tag].history;
    document.getElementById('modal-tip').innerHTML = tagData[tag].tip || "No tip available for this tag.";
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
