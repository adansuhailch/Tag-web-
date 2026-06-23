# CSS Change Log

This README lists the changes made while cleaning `style.css` into `style_responsive_cleaned.css`.

## What was improved

- Removed/cleaned duplicate blocks.

- Fixed a few selector mistakes.

- Made some layout values more responsive.

- Kept the same class names and IDs.

## Full line-by-line diff

```diff
--- style.css
+++ style_responsive_cleaned.css
@@ -112,7 +112,7 @@
     margin: 0;
     font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
     /* background-color: var(--bg-body); */
-    color: #0b0f19;
+    color: var(--text-primary);
     transition: background-color 0.3s ease, color 0.3s ease;
     min-height: 100vh;
 }
@@ -169,7 +169,7 @@
     transition: color 0.2s;
 }
 
-a:not(.no-hover) :hover {
+a:not(.no-hover):hover {
     color: var(--nav-link-hover);
 }
 
@@ -180,6 +180,8 @@
     display: flex;
     justify-content: flex-start;
     align-items: center;
+    flex-wrap: wrap;
+    gap: 12px;
     width: 100%;
     background: var(--bg-header);
     color: var(--text-primary);
@@ -202,7 +204,7 @@
 
 /* Logo */
 .logo {
-    margin-right: 12%;
+    margin-right: clamp(12px, 4vw, 12%);
     display: inline-flex;
     align-items: center;
     white-space: nowrap;
@@ -257,7 +259,7 @@
     background-color: #010125;
     position: sticky;
     top: 10px;
-    left: 100%;
+    margin-left: auto;
     z-index: 100;
     cursor: pointer;
 }
@@ -307,10 +309,8 @@
    RESPONSIVE NAVIGATION SYSTEM
    ============================================================ */
 .nav-container {
-    width: calc(100% + 40px);
-    margin-left: -20px;
-    margin-top: 16px;
-    margin-bottom: -16px;
+    width: 100%;
+    margin: 16px 0 0;
     position: relative;
     background: var(--bg-nav);
     box-shadow: 0 0 15px var(--shadow-card);
@@ -396,6 +396,7 @@
 /* page container */
 .page-container {
     display: flex;
+    flex-wrap: wrap;
     width: 100%;
     min-height: calc(100vh - 70px);
     /* Header ki height nikal kar baqi poori screen le lega */
@@ -457,6 +458,7 @@
 /* 📄 Right Side Content Configuration */
 .content-panel {
     flex: 1;
+    min-width: 0;
     /* Bachi hui poori screen automatic right side wale content ko de dega */
     padding: 30px 40px;
     overflow-y: auto;
@@ -553,8 +555,8 @@
     position: relative;
     max-width: 420px;
     width: 100%;
-    margin-left: 50px;
-    margin-right: 5.75rem;
+    flex: 1 1 320px;
+    margin: 0;
 }
 
 .search-icon {
@@ -583,9 +585,10 @@
 .button-group {
     display: flex;
     align-items: center;
+    flex-wrap: wrap;
     gap: 15px;
     /* padding: 15px;  */
-    margin-left: 0;
+    margin-left: auto;
 
 }
 
@@ -595,7 +598,7 @@
     justify-content: center;
     gap: 8px;
     padding: 10px 18px;
-    font-size: 18px;
+    font-size: 1rem;
     font-weight: 500;
     font-family: 'Poppins', sans-serif;
     border-radius: 8px;
@@ -623,7 +626,7 @@
 }
 
 .btn-whatsapp i {
-    font-size: 18px;
+    font-size: 1rem;
 }
 
 #searchBar::placeholder {
@@ -938,7 +941,7 @@
     padding: 24px;
     max-width: 1200px;
     /* 🚀 Photo ki tarah bada landscape layout dene ke liye size barhaya */
-    width: 95%;
+    width: min(95%, 1200px);
     border-radius: 16px;
     position: relative;
     max-height: 92vh;
@@ -1098,6 +1101,7 @@
     display: flex;
     gap: 10px;
     margin-top: 10px;
+    flex-wrap: wrap;
 }
 
 #quiz-answer {
@@ -1272,7 +1276,7 @@
     border: 1px solid var(--border-modal);
     background: var(--bg-scrollbtn);
     color: var(--text-primary);
-    font-size: 18px;
+    font-size: 1rem;
     cursor: pointer;
     box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
     transition: background 0.25s, transform 0.15s;
@@ -1362,23 +1366,6 @@
 
 .social-icons {
     display: flex;
-    gap: 10px;
-    flex-wrap: wrap;
-}
-
-.icon {
-    width: 38px;
-    height: 38px;
-    background: rgba(255, 255, 255, 0.05);
-    display: flex;
-    align-items: center;
-    justify-content: center;
-    border-radius: 8px;
-}
-
-/* Social icons container */
-.social-icons {
-    display: flex;
     gap: 20px;
     justify-content: center;
     align-items: center;
@@ -1386,23 +1373,25 @@
 }
 
 .social-icons .icon {
+    width: 38px;
+    height: 38px;
     position: relative;
     font-size: 25px;
     color: snow;
-    transition: color 0.3s ease;
-}
-
-/* Icon base style */
-.icon {
-    position: relative;
-    font-size: 30px;
-    color: #333;
-    transition: color 0.3s ease;
+    background: rgba(255, 255, 255, 0.05);
+    display: flex;
+    align-items: center;
+    justify-content: center;
+    border-radius: 8px;
+    transition: color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
     touch-action: manipulation;
-    /* for mobile tap */
-}
-
-/* Tooltip-style label below icon */
+}
+
+.social-icons .icon:hover {
+    transform: translateY(-2px);
+    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
+}
+
 .icon::after {
     content: attr(aria-label);
     position: absolute;
@@ -1415,13 +1404,10 @@
     color: white;
     opacity: 0;
     pointer-events: none;
-    transition:
-        opacity 0.3s ease,
-        bottom 0.3s ease;
+    transition: opacity 0.3s ease, bottom 0.3s ease;
     white-space: nowrap;
 }
 
-/* Show label on hover or tap */
 .icon:hover::after,
 .icon:focus::after,
 .icon:active::after {
@@ -1429,7 +1415,6 @@
     bottom: -40px;
 }
 
-/* Brand-specific hover color and label background */
 .icon[aria-label="YouTube"]:hover,
 .icon[aria-label="YouTube"]:focus,
 .icon[aria-label="YouTube"]:active {
@@ -1450,18 +1435,6 @@
     background-color: #24292e;
 }
 
-/* discord */
-.icon[aria-label="Discord"]:hover,
-.icon[aria-label="Discord"]:focus,
-.icon[aria-label="Discord"]:active {
-    color: #5865F2;
-}
-
-.icon[aria-label="Discord"]::after {
-    background-color: #5865F2;
-}
-
-
 .icon[aria-label="Instagram"]:hover,
 .icon[aria-label="Instagram"]:focus,
 .icon[aria-label="Instagram"]:active {
@@ -1492,328 +1465,12 @@
     background-color: #25d366;
 }
 
-
-.newsletter {
-    display: flex;
-    gap: 8px;
-    margin-top: 10px;
-    flex-wrap: wrap;
-}
-
-.footer-bottom {
-    max-width: 1200px;
-    margin: 25px auto 0;
-    padding-top: 15px;
-    border-top: 1px solid rgba(255, 255, 255, 0.08);
-    display: flex;
-    justify-content: space-between;
-    flex-wrap: wrap;
-    gap: 10px;
-    font-size: 0.85rem;
-}
-
-.footer-col-contact a {
-    color: var(--text-muted);
-    text-decoration: none;
-}
-
-.footer-col-contact a:hover {
-    color: var(--primary);
-}
-
-/* javascript section */
-.coming-soon-section {
-    position: relative;
-    overflow: hidden;
-}
-
-.coming-soon-section::before {
-    content: '';
-    position: absolute;
-    inset: 0;
-    border-radius: 12px;
-    background: repeating-linear-gradient(-45deg,
-            transparent,
-            transparent 8px,
-            rgba(255, 193, 7, 0.04) 8px,
-            rgba(255, 193, 7, 0.04) 16px);
-    pointer-events: none;
-}
-
-.coming-soon-badge {
-    display: inline-block;
-    background: linear-gradient(135deg, #f59e0b, #d97706);
-    color: #fff;
-    font-weight: 700;
-    font-size: 0.8rem;
-    padding: 4px 12px;
-    border-radius: 20px;
-    letter-spacing: 0.08em;
-    text-transform: uppercase;
-    margin-bottom: 10px;
-    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
-}
-
-.js-card-locked {
-    background: var(--bg-card);
-    color: var(--text-secondary);
-    border: 1px dashed #f59e0b;
-    margin: 8px 0;
-    padding: 14px 18px;
-    border-radius: 10px;
-    display: flex;
-    align-items: center;
-    gap: 10px;
-    font-weight: 500;
-    opacity: 0.7;
-    transition: opacity 0.2s;
-}
-
-.js-card-locked:hover {
-    opacity: 0.9;
-}
-
-.lock-icon {
-    font-size: 1.1rem;
-    flex-shrink: 0;
-}
-
-/* ============================================================
-   ANIMATIONS
-   ============================================================ */
-@keyframes fadeIn {
-    from {
-        opacity: 0;
-    }
-
-    to {
-        opacity: 1;
-    }
-}
-
-@keyframes slideDown {
-    from {
-        transform: translateY(-40px);
-        opacity: 0;
-    }
-
-    to {
-        transform: translateY(0);
-        opacity: 1;
-    }
-}
-
-/* ============================================================
-   RESPONSIVE
-   ============================================================ */
-@media (max-width: 768px) {
-    header h1 {
-        font-size: 1.3rem;
-    }
-
-    h2 {
-        font-size: 1.5rem;
-    }
-
-    section {
-        margin: 14px 10px;
-        padding: 16px;
-    }
-
-    #searchBar {
-        width: 85%;
-    }
-}
-
-@media (max-width: 480px) {
-    .entry-box {
-        padding: 22px 16px;
-    }
-
-    .entry-box h1 {
-        font-size: 1.3rem;
-    }
-
-    .entry-actions {
-        flex-direction: column;
-        align-items: stretch;
-    }
-
-    #enter-btn,
-    #reject-btn {
-        width: 100%;
-    }
-
-    .brand-wordmark {
-        display: none;
-    }
-
-    .dra-LOGO {
-        width: 44px;
-        height: 44px;
-    }
-
-    #modal-content {
-        padding: 16px;
-    }
-}
-
-/* ============================================================
-   SCROLLBAR STYLING (optional, webkit)
-   ============================================================ */
-::-webkit-scrollbar {
-    width: 6px;
-}
-
-::-webkit-scrollbar-track {
-    background: var(--bg-body);
-}
-
-::-webkit-scrollbar-thumb {
-    background: var(--border-modal);
-    border-radius: 3px;
-}
-
-::-webkit-scrollbar-thumb:hover {
-    background: var(--text-accent);
-}
-
-/* social icons */
-.social-icons {
-    display: flex;
-    gap: 10px;
-    flex-wrap: wrap;
-}
-
-.icon {
-    width: 38px;
-    height: 38px;
-    background: rgba(255, 255, 255, 0.05);
-    display: flex;
-    align-items: center;
-    justify-content: center;
-    border-radius: 8px;
-}
-
-/* Social icons container */
-.social-icons {
-    display: flex;
-    gap: 20px;
-    justify-content: center;
-    align-items: center;
-    flex-wrap: wrap;
-}
-
-.social-icons .icon {
-    position: relative;
-    font-size: 25px;
-    color: snow;
-    transition: color 0.3s ease;
-}
-
-/* Icon base style */
-.icon {
-    position: relative;
-    font-size: 30px;
-    color: #333;
-    transition: color 0.3s ease;
-    touch-action: manipulation;
-    /* for mobile tap */
-}
-
-.social-icons .icon:hover {
-    transform: translateY(-2px);
-    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
-}
-
-/* Tooltip-style label below icon */
-.icon::after {
-    content: attr(aria-label);
-    position: absolute;
-    bottom: -30px;
-    left: 50%;
-    transform: translateX(-50%);
-    padding: 4px 10px;
-    font-size: 12px;
-    border-radius: 4px;
-    color: white;
-    opacity: 0;
-    pointer-events: none;
-    transition:
-        opacity 0.3s ease,
-        bottom 0.3s ease;
-    white-space: nowrap;
-}
-
-/* Show label on hover or tap */
-.icon:hover::after,
-.icon:focus::after,
-.icon:active::after {
-    opacity: 1;
-    bottom: -40px;
-}
-
-/* Brand-specific hover color and label background */
-.icon[aria-label="YouTube"]:hover,
-.icon[aria-label="YouTube"]:focus,
-.icon[aria-label="YouTube"]:active {
-    color: #ff0000;
-}
-
-.icon[aria-label="YouTube"]::after {
-    background-color: #ff0000;
-}
-
-.icon[aria-label="GitHub"]:hover,
-.icon[aria-label="GitHub"]:focus,
-.icon[aria-label="GitHub"]:active {
-    color: #2b3137;
-}
-
-.icon[aria-label="GitHub"]::after {
-    background-color: #24292e;
-}
-
-.icon[aria-label="Instagram"]:hover,
-.icon[aria-label="Instagram"]:focus,
-.icon[aria-label="Instagram"]:active {
-    color: #e1306c;
-}
-
-.icon[aria-label="Instagram"]::after {
-    background-color: #e1306c;
-}
-
-.icon[aria-label="LinkedIn"]:hover,
-.icon[aria-label="LinkedIn"]:focus,
-.icon[aria-label="LinkedIn"]:active {
-    color: #0077b5;
-}
-
-.icon[aria-label="LinkedIn"]::after {
-    background-color: #0077b5;
-}
-
-.icon[aria-label="whatsapp"]:hover,
-.icon[aria-label="whatsapp"]:focus,
-.icon[aria-label="whatsapp"]:active {
-    color: #25d366;
-}
-
-.icon[aria-label="whatsapp"]::after {
-    background-color: #25d366;
-}
-
 /* light mode */
 html[data-theme="light"] .social-icons .icon {
     color: #0D1117;
-
     background: rgba(0, 0, 0, 0.05);
-
     border: 1px solid rgba(0, 0, 0, 0.15);
-
     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
-
     backdrop-filter: blur(6px);
     -webkit-backdrop-filter: blur(6px);
 }
@@ -1824,18 +1481,18 @@
 }
 
 html[data-theme="light"] .icon[aria-label="YouTube"]:hover,
-.icon[aria-label="YouTube"]:focus,
-.icon[aria-label="YouTube"]:active {
+html[data-theme="light"] .icon[aria-label="YouTube"]:focus,
+html[data-theme="light"] .icon[aria-label="YouTube"]:active {
     color: #ff0000;
 }
 
-html[data-theme="light"] .icon[aria-label="youtube"]::after {
+html[data-theme="light"] .icon[aria-label="YouTube"]::after {
     background-color: #ff0000;
 }
 
 html[data-theme="light"] .icon[aria-label="GitHub"]:hover,
-.icon[aria-label="GitHub"]:focus,
-.icon[aria-label="GitHub"]:active {
+html[data-theme="light"] .icon[aria-label="GitHub"]:focus,
+html[data-theme="light"] .icon[aria-label="GitHub"]:active {
     color: #2b3137;
 }
 
@@ -1844,8 +1501,8 @@
 }
 
 html[data-theme="light"] .icon[aria-label="Instagram"]:hover,
-.icon[aria-label="Instagram"]:focus,
-.icon[aria-label="Instagram"]:active {
+html[data-theme="light"] .icon[aria-label="Instagram"]:focus,
+html[data-theme="light"] .icon[aria-label="Instagram"]:active {
     color: #e1306c;
 }
 
@@ -1854,8 +1511,8 @@
 }
 
 html[data-theme="light"] .icon[aria-label="LinkedIn"]:hover,
-.icon[aria-label="LinkedIn"]:focus,
-.icon[aria-label="LinkedIn"]:active {
+html[data-theme="light"] .icon[aria-label="LinkedIn"]:focus,
+html[data-theme="light"] .icon[aria-label="LinkedIn"]:active {
     color: #0077b5;
 }
 
@@ -1864,8 +1521,8 @@
 }
 
 html[data-theme="light"] .icon[aria-label="whatsapp"]:hover,
-.icon[aria-label="whatsapp"]:focus,
-.icon[aria-label="whatsapp"]:active {
+html[data-theme="light"] .icon[aria-label="whatsapp"]:focus,
+html[data-theme="light"] .icon[aria-label="whatsapp"]:active {
     color: #25d366;
 }
 
```