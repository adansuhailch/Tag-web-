if (typeof window.tagData === 'undefined') {
  window.tagData = {};
}

async function loadOtherTagsData() {
  try {
    const response = await fetch('../data/other-tags.json');

    window.tagData = await response.json();

    console.log("🚀 Other Tags data loaded successfully into global state.");
  } catch (error) {
    console.error("Error loading Other Tags data:", error);
  }
}
loadOtherTagsData();
