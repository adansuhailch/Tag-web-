let data = {};

async function loadTagWebData() {
    try {
        const response = await fetch('../data/tag-web.json');
        tagData = await response.json();

        console.log(" 🎉Text tag data loaded successfully.");
    } catch (error) {
        console.error("🚨Error loading text tag data:", error);
    }
}

loadTagWebData();