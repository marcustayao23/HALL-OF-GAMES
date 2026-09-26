// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  console.log("Final project page loaded.");

  const container = document.getElementById('carouselContainer');
  const carousel = document.getElementById('cardCarousel');

  if (!container || !carousel) return;

  const originalCards = Array.from(carousel.children);

  // Duplicate cards BEFORE and AFTER to create a seamless connected loop
  originalCards.forEach((card) => {
    const cloneAfter = card.cloneNode(true);
    carousel.appendChild(cloneAfter); // Appends to end (1 to 15)
    
    const cloneBefore = card.cloneNode(true);
    carousel.insertBefore(cloneBefore, carousel.firstChild); // Prepends to front (15 to 1)
  });

  const allCards = Array.from(carousel.children);

  // Map vertical mouse wheel scroll to horizontal movement
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });

  function updateCarousel() {
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
    const setWidth = carousel.scrollWidth / 3;

    // Infinite looping boundary checks
    if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft -= setWidth;
    } else if (container.scrollLeft <= setWidth * 0.5) {
      container.scrollLeft += setWidth;
    }

    // Dynamic 3D cover-flow scaling and rotation relative to center
    allCards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distanceFromCenter = cardCenter - containerCenter;

      const maxDistance = 450;
      const normalizedDist = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      
      const scale = 1.15 - Math.abs(normalizedDist) * 0.35;
      const rotateY = normalizedDist * -25;
      const opacity = 1 - Math.abs(normalizedDist) * 0.45;
      const zIndex = Math.round(100 - Math.abs(normalizedDist) * 100);

      card.style.transform = `scale(${scale}) rotateY(${rotateY}deg)`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });
  }

  container.addEventListener('scroll', updateCarousel);
  window.addEventListener('resize', updateCarousel);

  // Set initial scroll position to the center set of cards
  const setWidth = carousel.scrollWidth / 3;
  container.scrollLeft = setWidth;
  updateCarousel();
});