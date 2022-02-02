// ==UserScript==
// @name         Canvas opacity fixer
// @namespace    https://kruitbos.dev/
// @version      0.1
// @description  Fixes the opacity for cards with a background image. Allows for better color coding the cards
// @author       xVanjaZ
// @match        https://canvas.hu.nl/
// @icon         https://www.google.com/s2/favicons?domain=hu.nl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement("style");
    style.innerHTML = ".ic-DashboardCard__header_hero { opacity: 1 !important }";
    document.head.appendChild(style);
})();
