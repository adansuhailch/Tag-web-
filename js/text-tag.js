let tagData = {};

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
// Variable ko sahi tarike se globally declare kiya taake baqi files bhi use kar sakein
// if (typeof tagData === 'undefined') {
//     window.tagData = {};
// }

// async function loadTextTagsData() {
//     try {
//         let jsonPath = 'data/text-tag.json';
//         if (window.location.pathname.includes('editor.html')) {
//             jsonPath = '../data/text-tag.json';
//         }

//         const response = await fetch(jsonPath);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         window.tagData = await response.json();
//         console.log("🎉 Text tag data loaded successfully from: " + jsonPath);

//         if (window.location.pathname.includes('editor.html')) {
//             const urlParams = new URLSearchParams(window.location.search);
//             const tag = urlParams.get('tag');
//             if (tag && typeof fillEditorPageData === 'function') {
//                 fillEditorPageData(tag);
//             }
//         }
//     } catch (error) {
//         console.error("🚨 Error loading text tag data:", error);
//     }
// }

// loadTextTagsData();
