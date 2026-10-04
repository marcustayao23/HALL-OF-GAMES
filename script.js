document.addEventListener('DOMContentLoaded', () => {
  console.log("Final project page loaded.");


  const searchLink = document.querySelector('.nav-right a[href="#search"]');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('search');

  if (searchLink && searchPanel && searchInput) {
    searchLink.addEventListener('click', (event) => {
      event.preventDefault();

      const isOpen = !searchPanel.hidden;
      searchPanel.hidden = isOpen;
      searchLink.setAttribute('aria-expanded', String(!isOpen));

      if (isOpen) {
        searchLink.focus();
      } else {
        searchInput.focus();
      }
    });
  }


  const container = document.getElementById('carouselContainer');
  const carousel = document.getElementById('cardCarousel');

  if (!container || !carousel) return;

  // Amber
  // Cache the original cards
  const cards = Array.from(carousel.children);
  const cardCount = cards.length;

  // Duplicate cards to enable a seamless connected loop
  originalCards.forEach((card) => {
    const cloneAfter = card.cloneNode(true);
    carousel.appendChild(cloneAfter);
    
    const cloneBefore = card.cloneNode(true);
    carousel.insertBefore(cloneBefore, carousel.firstChild);
  });


  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }, { passive: false });

  // Amber
  // Handle smooth silent resetting using precise single-card widths (260px width minus 50px negative margin overlap)
  const singleCardScrollWidth = 210; 

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