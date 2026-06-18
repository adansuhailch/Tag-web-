let data = {};

async function loadTextTagsData() {
    try {
        const response = await fetch('../data/text-tag.json');
        tagData = await response.json();

        console.log(" 🎉Text tag data loaded successfully.");
    } catch (error) {
        console.error("🚨Error loading text tag data:", error);
    }
}

loadTextTagsData();

// function openModal(tag) {
//     document.getElementById('modal').style.display = 'flex';
//     document.getElementById('modal-title').innerHTML = tagData[tag].title;
//     document.getElementById('modal-history').innerHTML = tagData[tag].history;
//     document.getElementById('modal-editor').value = tagData[tag].code;
//     document.getElementById('live-preview').srcdoc = tagData[tag].code;
//     document.getElementById('quiz-question').innerHTML = tagData[tag].quiz;
//     document.getElementById('quiz-answer').value = '';
//     document.getElementById('quiz-feedback').innerHTML = '';
//     document.getElementById('quiz').setAttribute('data-tag', tag);
//     document.getElementById("modal-content").classList.remove("modal-dark");

// }

// function closeModal() {
//     document.getElementById('modal').style.display = 'none';
// }

// function copyCode() {
//     const code = document.getElementById('modal-editor').value;
//     navigator.clipboard.writeText(code).then(() => {
//         alert('🎉 Code Copied! 🎉');
//     });
// }

// function runLiveCode() {
//     const code = document.getElementById('modal-editor').value;
//     document.getElementById('live-preview').srcdoc = code;
// }

// function checkAnswer() {
//     const tag = document.getElementById('quiz').getAttribute('data-tag');
//     const answer = document.getElementById('quiz-answer').value.trim().toLowerCase();
//     const correct = tagData[tag].answer.toLowerCase();

//     if (answer === correct) {
//         document.getElementById('quiz-feedback').innerHTML = "<span style='color:#00FFFF;'>Correct!</span>";
//     } else {
//         document.getElementById('quiz-feedback').innerHTML = "<span style='color:#ffb703;'>Try again!</span>";
//     }
// }


// function searchTag() {
//     const input = document.getElementById('searchBar').value.toLowerCase();
//     const cards = document.querySelectorAll('.tag-card');

//     cards.forEach(card => {
//         const tag = card.textContent.toLowerCase(); // card ka text
//         if (tag.includes(input)) {
//             card.style.display = "inline-block"; // show match
//             card.classList.add("highlight");
//         } else {
//             card.style.display = "none"; // hide non-match
//             card.classList.remove("highlight");
//         }
//     });


//     if (input === "") {
//         cards.forEach(card => {
//             card.style.display = "inline-block";
//             card.classList.remove("highlight");
//         });
//     }
// }

// function toggleModalTheme() {
//     document.getElementById("modal-content")
//         .classList.toggle("modal-dark");
// }
