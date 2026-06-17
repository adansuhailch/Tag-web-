/**
 * theme.js — Shared Light/Dark Mode Toggle
 * Tag Web | Applied to all pages
 *
 * Usage: <script src="/js/theme.js"></script>
 * Add a button with id="themeToggleBtn" in the page header.
 */
(function () {
    const STORAGE_KEY = 'tagweb-theme';
    const root = document.documentElement;

    // ── Helpers ──
    function getStoredTheme() {
        return localStorage.getItem(STORAGE_KEY) || 'dark';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateSwitchButton(theme);
    }

    function updateSwitchButton(theme) {
        const btn = document.getElementById('theme-switch');
        if (!btn) return;

        // Toggle icons inside button
        const sun = btn.querySelector('svg:first-child');
        const moon = btn.querySelector('#moon');

        if (theme === 'light') {
            btn.style.backgroundColor = '#f8efc9'; // matches CSS
            if (sun) sun.style.display = 'block';
            if (moon) moon.style.display = 'none';
        } else {
            btn.style.backgroundColor = '#010125';
            if (sun) sun.style.display = 'none';
            if (moon) moon.style.display = 'block';
        }
    }

    // ── Apply stored theme on page load ──
    const savedTheme = getStoredTheme();
    applyTheme(savedTheme);

    // ── Wire up the button click ──
    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('theme-switch');
        if (btn) {
            btn.addEventListener('click', function () {
                const current = root.getAttribute('data-theme') || 'dark';
                applyTheme(current === 'dark' ? 'light' : 'dark');
            });
        }

        // ==========================================
        //  Navigation System Logic
        // ==========================================
        const hamburger = document.querySelector('.hamburger');
        const navbar = document.querySelector('.navbar');
        const dropdowns = document.querySelectorAll('.dropdown');

        if (hamburger && navbar) {
            // Toggle Mobile Menu
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                const isActive = navbar.classList.contains('active');
                if (isActive) {
                    navbar.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                } else {
                    navbar.classList.add('active');
                    hamburger.setAttribute('aria-expanded', 'true');
                }
            });

            // Close Mobile Menu when clicking outside
            document.addEventListener('click', (e) => {
                if (navbar.classList.contains('active') && !navbar.contains(e.target) && !hamburger.contains(e.target)) {
                    navbar.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });

            // Mobile Dropdown Handling
            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('a');
                if (link) {
                    link.addEventListener('click', (e) => {
                        // Only prevent default and toggle if on mobile view
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            // Close other open dropdowns
                            dropdowns.forEach(d => {
                                if (d !== dropdown) d.classList.remove('mobile-open');
                            });
                            // Toggle current dropdown
                            dropdown.classList.toggle('mobile-open');
                        }
                    });
                }
            });
            
            // Close mobile menu when a regular link is clicked
            const navLinks = navbar.querySelectorAll('.nav-list > li:not(.dropdown) > a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navbar.classList.remove('active');
                        hamburger.setAttribute('aria-expanded', 'false');
                    }
                });
            });
            
            // Handle inner dropdown link clicks to also close the menu
            const dropdownLinks = navbar.querySelectorAll('.dropdown-menu a');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navbar.classList.remove('active');
                        hamburger.setAttribute('aria-expanded', 'false');
                        // Optionally close the dropdown too
                        dropdowns.forEach(d => d.classList.remove('mobile-open'));
                    }
                });
            });
        }
    });
})();