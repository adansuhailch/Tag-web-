let tagData = {};

async function loadOtherCssTags() {
    try {
        const response = await fetch('../data/other-csstags.json');

        tagData = await response.json();

        console.log("🚀 Other Css Tags are architecture initialized successfully!");
    } catch (error) {
        console.error("❌ Data sync broken inside layout container:", error);
    }
}

loadOtherCssTags();