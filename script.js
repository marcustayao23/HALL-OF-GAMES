
document.addEventListener('DOMContentLoaded', () => {
  console.log("Hall of Games loaded.");

  // Search panel
  const searchLink = document.querySelector('.nav-right a[href="#search"]');
  const searchPanel = document.getElementById('searchPanel');
  const searchInput = document.getElementById('search');

  if (searchLink && searchPanel && searchInput) {
    searchLink.addEventListener('click', (event) => {
      event.preventDefault();

      searchPanel.hidden = !searchPanel.hidden;
      searchLink.setAttribute(
        'aria-expanded',
        String(!searchPanel.hidden)
      );

      if (!searchPanel.hidden) {
        searchInput.focus();
      }
    });

    // On Home, pressing Enter opens Browse with the search.
    // On Browse, the results update as the user types.
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !document.querySelector('.browse-container')) {
        event.preventDefault();

        const query = searchInput.value.trim();

        window.location.href =
          'browse.html?search=' + encodeURIComponent(query);
      }
    });
  }

  // Browse page: category and search filtering
  const browseContainer = document.querySelector('.browse-container');

  if (browseContainer) {
    const gameCards = Array.from(
      browseContainer.querySelectorAll('.game-card')
    );

    const params = new URLSearchParams(window.location.search);
    let selectedCategory = params.get('category') || '';
    const initialSearch = params.get('search') || '';

    if (searchInput) {
      searchInput.value = initialSearch;
    }

    // Create a message for when no games match.
    const noResults = document.createElement('p');
    noResults.className = 'no-results';
    noResults.textContent =
      'No games found. Try another name or category.';
    noResults.hidden = true;
    browseContainer.appendChild(noResults);

    function filterGames() {
      const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : '';

      let visibleCount = 0;

      gameCards.forEach((card) => {
        const title = card.querySelector('.game-title');
        const tags = card.querySelector('.game-tags');

        const gameTitle = title
          ? title.textContent.toLowerCase()
          : '';

        const gameTags = tags
          ? tags.textContent.toLowerCase()
          : '';

        const gameText = card.textContent.toLowerCase();

        const matchesSearch =
          !searchTerm || gameText.includes(searchTerm);

        let matchesCategory = true;

        if (selectedCategory) {
          const categoryTags = {
            'fps': ['fps', 'first-person shooter', 'tactical shooter'],
            'open-world': ['open-world', 'open world'],
            'horror': ['horror'],
            'battle-royale': ['battle royale', 'battle royal'],
            'story-mode': ['story mode', 'story-driven', 'single-player']
          };

          const tagsToMatch = categoryTags[selectedCategory] || [
            selectedCategory
          ];

          matchesCategory = tagsToMatch.some((tag) =>
            gameTags.includes(tag)
          );
        }

        const shouldShow = matchesSearch && matchesCategory;
        card.hidden = !shouldShow;

        if (shouldShow) {
          visibleCount++;
        }
      });

      noResults.hidden = visibleCount !== 0;
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterGames);
    }

    // Run filtering immediately when Browse opens with a category/search URL.
    filterGames();
  }

  // Home page: horizontal game carousel
  const container = document.getElementById('carouselContainer');
  const carousel = document.getElementById('cardCarousel');

  if (!container || !carousel) return;

  const originalCards = Array.from(carousel.children);

  // Duplicate the original cards for the continuous scrolling effect.
  originalCards.forEach((card) => {
    carousel.appendChild(card.cloneNode(true));
    carousel.insertBefore(card.cloneNode(true), carousel.firstChild);
  });

  // Convert mouse-wheel movement into horizontal scrolling.
  container.addEventListener('wheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
  }, { passive: false });

  function checkLoop() {
    const setWidth = carousel.scrollWidth / 3;

    if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft -= setWidth;
    } else if (container.scrollLeft <= setWidth * 0.5) {
      container.scrollLeft += setWidth;
    }
  }

  container.addEventListener('scroll', checkLoop);

  // Start in the middle set of duplicated cards.
  container.scrollLeft = carousel.scrollWidth / 3;
});