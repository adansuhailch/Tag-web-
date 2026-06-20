let tagData = {};

async function loadCssDimensions() {
  try {
    const response = await fetch('../data/css-dimension.json');

    tagData = await response.json();

    console.log("🚀 Media & Semantic Tags architecture initialized successfully!");

  } catch (error) {
    console.error("❌ Data sync broken inside layout container:", error);
  }
}

loadCssDimensions();