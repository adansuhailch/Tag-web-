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

// Toggle Sidebar (Galti se crash hone se bachane ke liye if condition lagayi)
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        if (sidebar.classList.contains("active")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
}

// Close when clicking overlay
if (overlay) {
    overlay.addEventListener("click", closeSidebar);
}

// Close when clicking any sidebar link
if (navLinks && navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });
}

// ─── OLD OPENMODAL BLOCK KO REDIRECT ENGINE MEIN BADAL DIYA ───
function openModal(tag) {
    // Ab same page par dabba kholne ke bajaye, yeh user ko naye page par bhej dega tag name ke sath!
    window.open(`/pages/editor.html?tag=${tag}`, '_blank');
}

// Back to previous page action logic
function goBack() {
    window.history.back();
}



// Full page template ke andar data insert karne ka function
function fillEditorPageData(tag) {
    if (!tagData[tag]) {
        document.getElementById('modal-title').innerHTML = "Tag Not Found";
        return;
    }
    document.getElementById('modal-title').innerHTML = tagData[tag].title;
    document.getElementById('modal-history').innerHTML = tagData[tag].history;
    document.getElementById('modal-tip').innerHTML = tagData[tag].tip || "No tip available for this tag.";
    document.getElementById('modal-editor').value = tagData[tag].code;
    document.getElementById('live-preview').srcdoc = tagData[tag].code;
    document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
    document.getElementById('quiz-answer').value = '';
    document.getElementById('quiz-feedback').innerHTML = '';

    document.getElementById('quiz').setAttribute('data-tag', tag);
}

// Baqi functions (copyCode, runLiveCode, checkAnswer) bilkul same pehle jaise hi kaam karte rahenge!
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
