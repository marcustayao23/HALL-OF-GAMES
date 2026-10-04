document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('carouselContainer');
  const carousel = document.getElementById('cardCarousel');

  if (!container || !carousel) return;

  // Amber
  // Cache the original cards
  const cards = Array.from(carousel.children);
  const cardCount = cards.length;

  // Amber
  // Clone a few cards to both ends to create a seamless buffer without massive duplication
  cards.slice(0, 3).forEach(card => {
    carousel.appendChild(card.cloneNode(true));
  });
  cards.slice(-3).forEach(card => {
    carousel.insertBefore(card.cloneNode(true), carousel.firstChild);
  });

  // Map mouse scroll wheel to horizontal scrolling
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });

  // Amber
  // Handle smooth silent resetting using precise single-card widths (260px width minus 50px negative margin overlap)
  const singleCardScrollWidth = 210; 

  function checkLoop() {
    const maxScroll = cardCount * singleCardScrollWidth;

    // Amber
    // If scrolled past the end, snap back silently to the start
    if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft -= maxScroll;
    } 
    // Amber
    // If scrolled past the beginning backwards, snap forward silently to the correct spot
    else if (container.scrollLeft <= 5) {
      container.scrollLeft += maxScroll;
    }
  }

  container.addEventListener('scroll', checkLoop);

  // Set initial scroll position past the prepended clones
  container.scrollLeft = cardCount * singleCardScrollWidth;
});