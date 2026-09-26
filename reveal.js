// Gentle reveal on scroll. Anything on screen at load stays as-is; blocks further
// down fade in as they scroll into view. Does nothing for reduced-motion visitors
// or old browsers, so text is never stuck hidden.
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var selector = 'main h2, main p, main li, main blockquote, main figure, main .addresses > div, main .links';
  var picked = [];
  document.querySelectorAll(selector).forEach(function (el) {
    // Skip anything inside a block that's already animating as a whole.
    for (var i = 0; i < picked.length; i++) if (picked[i].contains(el)) return;
    picked.push(el);
  });

  var observer = new IntersectionObserver(function (entries) {
    var delay = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.style.transitionDelay = delay + 'ms';
      delay = Math.min(delay + 70, 280);
      el.classList.remove('reveal-pending');
      observer.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  picked.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add('reveal', 'reveal-pending');
    observer.observe(el);
  });
})();
