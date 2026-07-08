// Global memory properties registration variables safely
if (typeof tagData === 'undefined') window.tagData = {};
if (typeof jsCategories === 'undefined') window.jsCategories = [];

async function loadAllJavaScriptData() {
    try {
        let basePath = '../data/';
        if (!window.location.pathname.includes('/pages/')) {
            basePath = 'data/';
        }

        console.log("⏳ Dual-Engine Active: Fetching files simultaneously...");

        // Promise.all running parallel requests streams
        const [categoriesResponse, contentResponse] = await Promise.all([
            fetch(`${basePath}javascript-categories.json`),
            fetch(`${basePath}javascript-part.json`)
        ]);

        if (!categoriesResponse.ok || !contentResponse.ok) {
            throw new Error("JSON files failed to fetch from path endpoints.");
        }

        window.jsCategories = await categoriesResponse.json();
        window.tagData = await contentResponse.json();

        console.log("🎉 SUCCESS: JavaScript metadata synchronized.");

        // ─── 🌟 TIMING FIX: ENSURE DOM IS FULLY READY BEFORE RENDERING BUTTONS ───
        if (typeof renderCategoryTabs === 'function') {
            // Agar HTML loading slow ho to check lagaya halke delay ke sath
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", () => renderCategoryTabs(window.jsCategories));
            } else {
                renderCategoryTabs(window.jsCategories); // Instant write trigger if DOM already parsed
            }
        }

        // Full screen editor rendering logic hooks check
        if (window.location.pathname.includes('editor.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const tag = urlParams.get('tag');
            if (tag && typeof fillEditorPageData === 'function') {
                fillEditorPageData(tag);
            }
        }

    } catch (error) {
        console.error("🚨 Critical Dual-Fetch Failure:", error);
    }
}

// Automatically launch on document processing sequence
loadAllJavaScriptData();
