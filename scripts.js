<script>
  const track = document.querySelector('.carousel-track');

  // Duplicate children for seamless infinite loop
  const items = Array.from(track.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  // Pause on hover
  track.addEventListener('mouseenter', () => track.classList.add('paused'));
  track.addEventListener('mouseleave', () => track.classList.remove('paused'));
</script>
