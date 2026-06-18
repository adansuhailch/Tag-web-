let tagData = {};

async function loadTableTagsData() {
    try {
        const response = await fetch('../data/css-layout.json');
        tagData = await response.json();
        console.log("🚀 Tabular layout components synced successfully via isolated JSON pipelines!");
    } catch (error) {
        console.error("❌ High-level data streaming break detected on table init:", error);
    }
}

loadTableTagsData();
