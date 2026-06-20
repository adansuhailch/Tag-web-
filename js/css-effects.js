let tagData = {};

async function loadCssEffects() {
  try {
    const response = await fetch('../data/css-effects.json');

    tagData = await response.json();

    console.log("🚀 Media & Semantic Tags architecture initialized successfully!");

  } catch (error) {
    console.error("❌ Data sync broken inside layout container:", error);
  }
}

loadCssEffects();