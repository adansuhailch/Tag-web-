// const menuBtn = document.getElementById("menu-btn");
// const sidebar = document.getElementById("sidebar");
// const overlay = document.getElementById("sidebar-overlay");
// const navLinks = document.querySelectorAll(".nav-list a");

// Open Sidebar
// function openSidebar() {
//     sidebar.classList.add("active");
//     overlay.classList.add("active");
//     document.body.classList.add("menu-open");
//     menuBtn.setAttribute("aria-expanded", "true");
// }

// Close Sidebar
// function closeSidebar() {
//     sidebar.classList.remove("active");
//     overlay.classList.remove("active");
//     document.body.classList.remove("menu-open");
//     menuBtn.setAttribute("aria-expanded", "false");
// }

// Toggle Sidebar (Galti se crash hone se bachane ke liye if condition lagayi)
// if (menuBtn) {
//     menuBtn.addEventListener("click", () => {
//         if (sidebar.classList.contains("active")) {
//             closeSidebar();
//         } else {
//             openSidebar();
//         }
//     });
// }

// Close when clicking overlay
// if (overlay) {
//     overlay.addEventListener("click", closeSidebar);
// }

// Close when clicking any sidebar link
// if (navLinks && navLinks.length > 0) {
//     navLinks.forEach(link => {
//         link.addEventListener("click", closeSidebar);
//     });
// }

// ─── OLD OPENMODAL BLOCK KO REDIRECT ENGINE MEIN BADAL DIYA ───
// function openModal(tag) {
//     let category = 'tag-web';

//     if (window.location.pathname.includes('text-tag.html')) {
//         category = 'text-tag';
//     } else if (window.location.pathname.includes('semantic-media.html')) {
//         category = 'semantic-media';
//     } else if (window.location.pathname.includes('other-tags.html')) {
//         category = 'other-tags';
//     } else if (window.location.pathname.includes('other-css-tags.html')) {
//         category = 'other-css-tags';
//     } else if (window.location.pathname.includes('javascript-part.html')) {
//         category = 'javascript-part';
//     } else if (window.location.pathname.includes('form-tag.html')) {
//         category = 'form-tag';
//     } else if (window.location.pathname.includes('css-text-fonts.html')) {
//         category = 'css-text-fonts';
//     } else if (window.location.pathname.includes('css-part.html')) {
//         category = 'css-part';
//     } else if (window.location.pathname.includes('css-layout.html')) {
//         category = 'css-layout';
//     } else if (window.location.pathname.includes('css-grid.html')) {
//         category = 'css-grid';
//     } else if (window.location.pathname.includes('css-flex.html')) {
//         category = 'css-flex';
//     } else if (window.location.pathname.includes('css-effects.html')) {
//         category = 'css-effects';
//     } else if (window.location.pathname.includes('css-dimension-size.html')) {
//         category = 'css-dimension-size';
//     } else if (window.location.pathname.includes('css-boxmodel.html')) {
//         category = 'css-boxmodel';
//     } else if (window.location.pathname.includes('css-background.html')) {
//         category = 'css-background';
//     } else if (window.location.pathname.includes('css-animation.html')) {
//         category = 'css-animation';
//     }
//     window.open(`/pages/editor.html?category=${category}&tag=${tag}`, '_blank');
// }
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
