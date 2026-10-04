document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('carouselContainer');
  const carousel = document.getElementById('cardCarousel');

  if (!container || !carousel) return;

  const originalCards = Array.from(carousel.children);

  // Duplicate cards to enable a seamless connected loop
  originalCards.forEach((card) => {
    const cloneAfter = card.cloneNode(true);
    carousel.appendChild(cloneAfter);
    
    const cloneBefore = card.cloneNode(true);
    carousel.insertBefore(cloneBefore, carousel.firstChild);
  });

  // Map mouse scroll wheel to horizontal scrolling
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });

  function checkLoop() {
    const setWidth = carousel.scrollWidth / 3;

    // Infinite loop reset points
    if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft -= setWidth;
    } else if (container.scrollLeft <= setWidth * 0.5) {
      container.scrollLeft += setWidth;
    }
  }

  container.addEventListener('scroll', checkLoop);

  // Set initial scroll position to center
  const setWidth = carousel.scrollWidth / 3;
  container.scrollLeft = setWidth;
});