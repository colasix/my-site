/**
 * WebXC — Main JS
 * Minimal vanilla JS for interactive behaviour.
 */

(function () {
    'use strict';

    // --- Mobile nav toggle ---
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isOpen);
            nav.classList.toggle('is-open');
        });
    }

    // --- Mobile dropdown toggle (services) ---
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

    dropdownItems.forEach(function (item) {
        const link = item.querySelector('.nav-link');
        if (!link) return;

        link.addEventListener('click', function (e) {
            // Only prevent default on mobile (when nav toggle is visible)
            if (window.innerWidth < 1024) {
                e.preventDefault();
                item.classList.toggle('is-open');
            }
        });
    });

    // --- Close mobile nav on resize to desktop ---
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
            if (nav) nav.classList.remove('is-open');
            dropdownItems.forEach(function (item) {
                item.classList.remove('is-open');
            });
        }
    });
})();
