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
