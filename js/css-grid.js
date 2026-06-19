let tagData = {};

async function loadCssGrid() {
    try {
        const response = await fetch('../data/css-grid.json');

        tagData = await response.json();

        console.log("🚀 Media & Semantic Tags architecture initialized successfully!");
    } catch (error) {
        console.error("❌ Data sync broken inside layout container:", error)
    }
}

loadCssGrid();