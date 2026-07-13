// const menuBtn = document.getElementById("menu-btn");
// const sidebar = document.getElementById("sidebar");
// const overlay = document.getElementById("sidebar-overlay");
// const navLinks = document.querySelectorAll(".nav-list a");

// Open Sidebar
// function openSidebar() {
//     sidebar.classList.add("active");
//     overlay.classList.add("active");
//     document.body.classList.add("menu-open");
//     menuBtn.setAttribute("aria-expanded", "true");
// }

// Close Sidebar
// function closeSidebar() {
//     sidebar.classList.remove("active");
//     overlay.classList.remove("active");
//     document.body.classList.remove("menu-open");
//     menuBtn.setAttribute("aria-expanded", "false");
// }

// Toggle Sidebar (Galti se crash hone se bachane ke liye if condition lagayi)
// if (menuBtn) {
//     menuBtn.addEventListener("click", () => {
//         if (sidebar.classList.contains("active")) {
//             closeSidebar();
//         } else {
//             openSidebar();
//         }
//     });
// }

// Close when clicking overlay
// if (overlay) {
//     overlay.addEventListener("click", closeSidebar);
// }

// Close when clicking any sidebar link
// if (navLinks && navLinks.length > 0) {
//     navLinks.forEach(link => {
//         link.addEventListener("click", closeSidebar);
//     });
// }

// ─── OLD OPENMODAL BLOCK KO REDIRECT ENGINE MEIN BADAL DIYA ───
// function openModal(tag) {
//     let category = 'tag-web';

//     if (window.location.pathname.includes('text-tag.html')) {
//         category = 'text-tag';
//     } else if (window.location.pathname.includes('semantic-media.html')) {
//         category = 'semantic-media';
//     } else if (window.location.pathname.includes('other-tags.html')) {
//         category = 'other-tags';
//     } else if (window.location.pathname.includes('other-css-tags.html')) {
//         category = 'other-css-tags';
//     } else if (window.location.pathname.includes('javascript-part.html')) {
//         category = 'javascript-part';
//     } else if (window.location.pathname.includes('form-tag.html')) {
//         category = 'form-tag';
//     } else if (window.location.pathname.includes('css-text-fonts.html')) {
//         category = 'css-text-fonts';
//     } else if (window.location.pathname.includes('css-part.html')) {
//         category = 'css-part';
//     } else if (window.location.pathname.includes('css-layout.html')) {
//         category = 'css-layout';
//     } else if (window.location.pathname.includes('css-grid.html')) {
//         category = 'css-grid';
//     } else if (window.location.pathname.includes('css-flex.html')) {
//         category = 'css-flex';
//     } else if (window.location.pathname.includes('css-effects.html')) {
//         category = 'css-effects';
//     } else if (window.location.pathname.includes('css-dimension-size.html')) {
//         category = 'css-dimension-size';
//     } else if (window.location.pathname.includes('css-boxmodel.html')) {
//         category = 'css-boxmodel';
//     } else if (window.location.pathname.includes('css-background.html')) {
//         category = 'css-background';
//     } else if (window.location.pathname.includes('css-animation.html')) {
//         category = 'css-animation';
//     }
//     window.open(`/pages/editor.html?category=${category}&tag=${tag}`, '_blank');
// }
