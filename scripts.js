<script>
  // ---- Carousel Code
window.addEventListener('load', function() {
  setTimeout(function() {
    const wrap = document.querySelector('.carousel_wrap');
    const items = Array.from(wrap.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      wrap.appendChild(clone);
    });

    wrap.addEventListener('mouseenter', () => wrap.classList.add('paused'));
    wrap.addEventListener('mouseleave', () => wrap.classList.remove('paused'));
  }, 500);
});
</script>
