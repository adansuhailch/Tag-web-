if (typeof window.tagData === 'undefined') {
  window.tagData = {};
}

async function loadFormElementsData() {
  try {
    const response = await fetch('../data/form-tag.json');
    window.tagData = await response.json(); 
    
    console.log("🚀 Form elements module synced successfully into browser global memory space.");
  } catch (error) {
    console.error("❌ High-level data streaming break inside forms module:", error);
  }
}

loadFormElementsData();
