// Variable ko sahi tarike se globally declare kiya taake dono files use kar sakein
if (typeof tagData === 'undefined') {
    window.tagData = {};
}

async function loadTagWebData() {
    try {
        // Intelligent path: Check karega ke hum sub-folder (editor.html) mein hain ya root par
        let jsonPath = 'data/tag-web.json';
        if (window.location.pathname.includes('editor.html')) {
            jsonPath = '../data/tag-web.json';
        }

        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        window.tagData = await response.json();
        console.log("🎉 Tag web main data loaded successfully from: " + jsonPath);

        // ─── MAGIC LINE: DATA DOWNLOAD HOTE HI SCREEN PAR FILL KAREIN ───
        if (window.location.pathname.includes('editor.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const tag = urlParams.get('tag');
            if (tag && typeof fillEditorPageData === 'function') {
                fillEditorPageData(tag);
            }
        }
    } catch (error) {
        console.error("🚨 Error loading text tag data:", error);
    }
}

// Automatically fire immediately
loadTagWebData();
