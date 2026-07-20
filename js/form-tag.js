// if (typeof tagData == 'undefined') {
//   window.tagData = {};
// }

// async function loadFormtagData() {
//   try{
//     let jsonPath = 'data/form-tag.json';
//     if (window.location.pathname.includes('editor.html')) {
//       jsonPath = '../data/form-tag.json';
//     }

//     const response = await fetch(jsonPath);
//     if (!response.ok) {
//       throw new Error(`Http error! status: $ {response.status}`);
//     }

//     window.tagData = await response.json();
//     console.log("Form Tag data loaded successfully from:" + jsonPath);

//     if (window.location.pathname.includes('editor.html')) {
//       const urlParams = new URLSearchParams(window.location.search);
//       const tag = urlParams.get('tag');
//       if (tag && typeof fillEditorPageData === 'function') {
//         fillEditorPageData(tag);
//       }
//     }
//   } catch (error) {
//     console.error("Error loading form tag data:",error);
//   }
// }

// loadFormtagData();


// if (typeof window.tagData === 'undefined') {
//   window.tagData = {};
// }

// async function loadFormElementsData() {
//   try {
//     const response = await fetch('../data/form-tag.json');
//     window.tagData = await response.json(); 
    
//     console.log("🚀 Form elements module synced successfully into browser global memory space.");
//   } catch (error) {
//     console.error("❌ High-level data streaming break inside forms module:", error);
//   }
// }

// loadFormElementsData();
