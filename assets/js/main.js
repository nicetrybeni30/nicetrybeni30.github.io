// Small enhancements only. The site works fully without JavaScript.
(function () {
  // Nav border once the page scrolls
  var top = document.querySelector('.top');
  if (top) {
    var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  // Quote slider
  var slides = document.querySelectorAll('.quote .slides p');
  var count = document.querySelector('.quote .count');
  if (slides.length) {
    var i = 0;
    var show = function (n) {
      slides[i].classList.remove('on');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('on');
      if (count) count.textContent = (i + 1) + '/' + slides.length + ' · Principles';
    };
    var prev = document.querySelector('.quote .prev'), next = document.querySelector('.quote .next');
    if (prev) prev.addEventListener('click', function () { show(i - 1); });
    if (next) next.addEventListener('click', function () { show(i + 1); });
  }

  // Fade sections in as they scroll into view
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
