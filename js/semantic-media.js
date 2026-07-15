let tagData = {}; 
async function loadMediaSemanticData() {
    try {
        const response = await fetch('/data/semantic-mediatag.json');
        tagData = await response.json();

        console.log("🚀 Media & Semantic Tags architecture initialized successfully!");
    } catch (error) {
        console.error("❌ Data sync broken inside layout container:", error);
    }
}
loadMediaSemanticData();