<script>
  // ---- Carousel Code
window.addEventListener('load', function() {
  setTimeout(function() {
    const track = document.querySelector('.carousel-track');

    const items = Array.from(track.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    track.addEventListener('mouseenter', () => track.classList.add('paused'));
    track.addEventListener('mouseleave', () => track.classList.remove('paused'));
  }, 500);
});
</script>
