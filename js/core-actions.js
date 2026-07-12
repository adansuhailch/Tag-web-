function openModal(tag) {
    let pageName = window.location.pathname.split("/").pop().replace(".html", "");
    let category = (pageName === "index" || pageName === "") ? "tag-web" : pageName;
    window.open(`/pages/editor.html?category=${category}&tag=${tag}`, '_blank');
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
// Global variable declare kiya taake data safe rahe
if (typeof tagData === 'undefined') {
    window.tagData = {};
}

async function loadDynamicEditorData() {
    // Agar hum sirf editor.html wale page par hain, tabhi yeh engine chalayein
    if (window.location.pathname.includes('editor.html')) {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category') || 'tag-web'; // Default
            const tag = urlParams.get('tag');

            // Category ke mutabiq sahi json rasta select kiya
            let jsonPath = `../data/${category}.json`;

            const response = await fetch(jsonPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            window.tagData = await response.json();
            console.log(`🎉 Master Engine loaded data successfully from: ${jsonPath}`);

            // Data aate hi screen par fill kar do
            if (tag && typeof fillEditorPageData === 'function') {
                fillEditorPageData(tag);
            }

        } catch (error) {
            console.error("🚨 Master Engine Error loading data:", error);
        }
    }
}

// Page load hote hi automatic fire hoga
document.addEventListener("DOMContentLoaded", loadDynamicEditorData);


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

function fillEditorPageData(tag) {
    if (!tagData[tag]) {
        document.getElementById('modal-title').innerHTML = "Tag Not Found";
        return;
    }

    // ─── 🌟 JADUAI DYNAMIC BREADCRUMBS ENGINE ───
    // URL se category ka naam nikalne ka tarika
    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('category') || 'Documentation';

    // HTML ke andar automatic parent aur child text inject karna
    // .replace(/-/g, ' ') se agar 'text-tag' hoga to woh 'text tag' ban jayega (khubsoorat dikhne ke liye)
    document.getElementById("breadcrumb-parent").textContent = categoryName.replace(/-/g, ' ');

    // Baqi aapka purana data filling ka code bilkul same rahega
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

// ==========================================================================
// 🎯 DYNAMIC W3SCHOOLS-STYLE CLICK ROUTER LAYER (CLASS INTEGRATION)
// ==========================================================================

// 📦 Centralized Routing Dictionary (W3Schools parameter structure setup)
const routingTargetDB = {
    "css-boxmodel": "/pages/quiz-section.html?category=css-boxmodel",
    "css-animation": "/pages/quiz-section.html?category=css-animation",
    "text-tag": "/pages/quiz-section.html?category=text-tag",
    "form-tag": "/pages/quiz-section.html?category=form-tag",
    "link-tag": "/pages/quiz-section.html?category=link-tag"
};

// Listen for the DOM load event to safely bind elements
document.addEventListener("DOMContentLoaded", () => {
    initInstantClickRouting();
});

function initInstantClickRouting() {
    // 1. ID ki jagah pooray page se saari quiz classes ko ek list mein save karein
    const allQuizSections = document.querySelectorAll('.quiz-exercise-card');

    // Agar page par ek bhi quiz box nahi hai, to silent exit ho jao
    if (allQuizSections.length === 0) return;

    // 2. Loop lagayein taake har ek quiz card alag se independent kaam kare
    allQuizSections.forEach(currentCard => {

        // Is makhsoos card ka apna 'data-page-target' nikalen (e.g. text-tag ya form-tag)
        const currentTargetKey = currentCard.getAttribute('data-page-target');

        // Sirf ISI card ke andar ke radio option buttons ko target karein
        const optionBoxes = currentCard.querySelectorAll('.quizoption');

        optionBoxes.forEach(box => {
            // Trigger action instant redirection framework on single choice click interaction
            box.addEventListener('click', (e) => {
                // Prevent any native form submissions or page-locked interruptions
                e.preventDefault();

                // Auto check the inner native radio element input state toggle for accessibility
                const radioInput = box.querySelector('input[type="radio"]');
                if (radioInput) radioInput.checked = true;

                // Fetch destination path from routing config map rules matrix
                const finalDestinationURL = routingTargetDB[currentTargetKey];

                if (finalDestinationURL) {
                    // Micro delay (300ms) to let visual click select state render, then trigger routing!
                    setTimeout(() => {

                    window.open(`/pages/quiz-section.html?category=${currentTargetKey}`, '_blank');

                    }, 300);
                } else {
                    // Fallback boundary safeguard if category string parameter mapping is undefined
                    window.location.href = "/pages/quiz-section.html?category=all";
                }
            });
        });
    });
}
