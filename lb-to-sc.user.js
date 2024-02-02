// ==UserScript==
// @name         Letterboxd - Secret Cinema links
// @namespace    cphxxx
// @version      1.0
// @homepage    https://secret-cinema.pw/forums.php?action=viewthread&threadid=2978
// @description  Add Secret Cinema links to Letterboxd movie pages
// @match        https://letterboxd.com/film/*/
// @icon        https://letterboxd.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    // Find the IMDb link and extract the IMDb ID from its href attribute
    const imdbLinkEl = document.querySelector('a.track-event[data-track-action="IMDb"]');
    if (imdbLinkEl && imdbLinkEl.href) {
        const imdbIdMatch = imdbLinkEl.href.match(/\/title\/(tt\d+)/);
        if (imdbIdMatch && imdbIdMatch[1]) {
            const imdbId = imdbIdMatch[1];
            console.log(imdbId);

            // Find the "More at" paragraph to insert the Secret Cinema link
            const moreAtParagraph = document.querySelector('.text-link.text-footer');
            if (moreAtParagraph) {
                // Create the Secret Cinema link element
                const scLink = document.createElement('a');
                scLink.href = `https://secret-cinema.pw/torrents.php?action=advanced&searchsubmit=1&filter_cat=1&cataloguenumber=${imdbId}&order_by=time&order_way=desc&tags_type=0`;
                scLink.target = "_blank";
                scLink.className = "micro-button track-event";
                scLink.style.marginLeft = "10px"; // Adjust spacing as needed
                scLink.textContent = "Secret Cinema";

                // Optionally, you can insert the SC link directly after the IMDb link for consistency
                imdbLinkEl.parentNode.insertBefore(scLink, imdbLinkEl.nextSibling);
            }
        }
    }
})();