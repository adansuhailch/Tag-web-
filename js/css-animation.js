let data = {};

async function loadCssAnimation() {
  try {
    const response = await fetch('../data/css-animation.json');
    tagData = await response.json();

    console.log(" 🎉Text tag data loaded successfully.");
  } catch (error) {
    console.error("🚨Error loading text tag data:", error);

  }

}

loadCssAnimation();