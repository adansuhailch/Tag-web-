let tagData = {};

async function loadCssTextFonts() {
    try {
        const response = await fetch('../data/css-text-fonts.json');

        tagData = await response.json();
        console.log("🚀 Media & Semantic Tags architecture initialized successfully!");
    }
    catch (error) {
        console.error("❌ Data sync broken inside layout container:", error);
    }
}

loadCssTextFonts();