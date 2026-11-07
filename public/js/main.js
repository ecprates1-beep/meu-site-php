/* ===============================================================
   main.js — Scripts iniciais
   =============================================================== */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var header = document.querySelector('.site-header');
        var toggle = document.querySelector('.nav-toggle');

        if (header && toggle) {
            toggle.addEventListener('click', function () {
                var isOpen = header.classList.toggle('nav-open');
                toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }

        // ---------------------------------------------------------
        // Adicione aqui novas interações (validação, modais, etc.)
        // ---------------------------------------------------------
    });
})();
