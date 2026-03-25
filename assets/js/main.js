// WebXC - Main JS

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile nav toggle
(function() {
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', function() {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        mobileNav.classList.toggle('is-open');
    });
})();

// Homepage parallax media panel
(function() {
    var parallaxStates = Array.prototype.slice.call(document.querySelectorAll('[data-parallax-root]')).map(function(root) {
        return {
            root: root,
            image: root.querySelector('[data-parallax-image]'),
            currentOffset: 0,
            targetOffset: 0
        };
    }).filter(function(state) {
        return Boolean(state.image);
    });
    if (!parallaxStates.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var compactLayout = window.matchMedia('(max-width: 767px)');
    var viewWindow = 0.7;
    var offsetRange = 32;
    var ease = 0.14;
    var frameId = null;

    function setOffset(image, value) {
        image.style.setProperty('--parallax-offset', value.toFixed(2) + 'px');
    }

    function resetOffsets() {
        parallaxStates.forEach(function(state) {
            state.currentOffset = 0;
            state.targetOffset = 0;
            setOffset(state.image, 0);
        });
    }

    function calculateTarget(root) {
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var rect = root.getBoundingClientRect();
        var center = rect.top + (rect.height / 2);
        var distanceFromCenter = center - (viewportHeight / 2);
        var travelWindow = viewportHeight * viewWindow;
        var buffer = viewportHeight * 0.2;
        var normalized;

        if (rect.bottom < -buffer || rect.top > viewportHeight + buffer) {
            return 0;
        }

        normalized = distanceFromCenter / travelWindow;
        normalized = Math.max(-1, Math.min(1, normalized));

        return normalized * -offsetRange;
    }

    function animate() {
        var keepAnimating = false;

        frameId = null;

        if (reduceMotion.matches || compactLayout.matches) {
            resetOffsets();
            return;
        }

        parallaxStates.forEach(function(state) {
            var delta;

            state.currentOffset += (state.targetOffset - state.currentOffset) * ease;
            delta = Math.abs(state.targetOffset - state.currentOffset);

            if (delta > 0.1) {
                keepAnimating = true;
            } else {
                state.currentOffset = state.targetOffset;
            }

            setOffset(state.image, state.currentOffset);
        });

        if (keepAnimating) {
            frameId = window.requestAnimationFrame(animate);
        }
    }

    function requestTick() {
        if (reduceMotion.matches || compactLayout.matches) {
            resetOffsets();
            return;
        }

        parallaxStates.forEach(function(state) {
            state.targetOffset = calculateTarget(state.root);
        });

        if (frameId === null) {
            frameId = window.requestAnimationFrame(animate);
        }
    }

    document.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    window.addEventListener('load', requestTick);

    if (typeof reduceMotion.addEventListener === 'function') {
        reduceMotion.addEventListener('change', requestTick);
        compactLayout.addEventListener('change', requestTick);
    } else if (typeof reduceMotion.addListener === 'function') {
        reduceMotion.addListener(requestTick);
        compactLayout.addListener(requestTick);
    }

    requestTick();
})();
