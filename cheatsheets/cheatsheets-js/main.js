function copyBox(btn) {
    const pre = btn.parentElement.querySelector('pre');
    const text = pre.innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('done');
        setTimeout(() => btn.classList.remove('done'), 1200);
    });
}
// Modal Visibility Matrix Controller State Changer
function toggleModalDisplay(shouldOpen) {
    const modal = document.getElementById('shareModalOverlay');
    modal.style.display = shouldOpen ? 'flex' : 'none';
}

function openShareModal() {
    const currentUrl = window.location.href;

    document.getElementById("sharePageUrlField").value = currentUrl;

    // X (Twitter)
    document.getElementById("shareTwitterLink").href =
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;

    // Facebook
    document.getElementById("shareFacebookLink").href =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

    // LinkedIn
    document.getElementById("shareLinkedInLink").href =
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

    document.getElementById("shareDiscordLink").href = `https://www.discord.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    toggleModalDisplay(true);
}
// User click on black overlay outside modal panel box template framework
function closeShareModalExternal(event) {
    if (event.target.id === 'shareModalOverlay') {
        toggleModalDisplay(false);
    }
}

// Internal link copy click control pipeline implementation
function copyModalLinkText(buttonEl) {
    const inputEl = document.getElementById('sharePageUrlField');

    navigator.clipboard.writeText(inputEl.value).then(() => {
        const originalSvg = buttonEl.innerHTML;
        // Changing button inside box structure to check mark green icon frame matrix
        buttonEl.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';

        setTimeout(() => {
            buttonEl.innerHTML = originalSvg;
        }, 2000);
    }).catch(err => {
        console.error("Link capture execution pipeline runtime crash error:", err);
    });
}