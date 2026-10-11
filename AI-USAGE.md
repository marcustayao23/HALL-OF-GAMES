# AI usage

This project was built with AI assistance. This file is the record of it. It is
graded as the finals badge, and it is worth 100 points.

Start it in week 1 and keep it up as you go. The commit history of this file is
part of the evidence: a file written all at once the night before the deadline
looks exactly like what it is.

## 1. How I used AI

At least six entries. One per real use. Every entry needs a commit link.


### 2026-08-25  Turning Wireframe Into Website

![Static Badge](https://img.shields.io/badge/Google_Gemini-blueviolet?style=for-the-badge&logo=Google%20Gemini&label=AI%20TOOL&link=https%3A%2F%2Fgemini.google.com%2Fapp)



- **What I asked for:** Convert Hall of Games Wireframe into Website

- **What it gave back:** A polished, modern-looking website layout with clean HTML and CSS that looked like a finished, production-ready web page at first glance

- **What I kept, what I changed, and why:**
 As of  Week 1, we did not keep any of the AI-generated website code because the result was too far from our desired design and concept. We revised the wireframe and rebuilt the website from scratch, with the current HTML and CSS being written and developed by our group based on our own design and plans. Since the project is still in its early stage, JavaScript functionality has not yet been implemented.
 
- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/8be09c3bd8d51d553f021c227b274ac17b8b2c04

### 2026-09-29 - Adding the Search Bar

![Static Badge](https://img.shields.io/badge/Github_Copilot-black?style=for-the-badge&logo=Github%20Copilot&label=AI%20TOOL&link=https%3A%2F%2Fgithub.com%2Ffeatures%2Fcopilot)


- **What I asked for:** Help us plan the game image section for the main page, including placeholders for the game covers and a horizontal sliding layout.

- **What it gave back:** AI provided suggestions for displaying game images in a horizontal layout where the images can slide from left to right or right to left.

- **What I kept, what I changed, and why:** We used the suggestions as a reference and adjusted the layout to match our website design. Placeholder images were added to the main page while the actual game cover images are still being prepared.

- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/7a4cf1936230864ccfcb1ad91661dfac1a193571

### 2026-09-29 — Updating the Project Documentation

![Static Badge](https://img.shields.io/badge/Google_Gemini-blueviolet?style=for-the-badge&logo=Google%20Gemini&label=AI%20TOOL&link=https%3A%2F%2Fgemini.google.com%2Fapp)

- **What I asked for:** Help organize and explain the Week 2 changes in the project documentation.

- **What it gave back:** AI helped structure the documentation for the website's current features, project structure, screenshots, known issues, and next steps.

- **What I kept, what I changed, and why:** We used the suggestions as a starting point and changed the information to match the actual state of our project. We made sure the documentation did not describe unfinished features as completed.

- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/ab40e798f3f7c02edfca856e1ae08c21c2796f5c


### 2026-10-4 — More game items in the browse page

![Static Badge](https://img.shields.io/badge/Google_Gemini-blueviolet?style=for-the-badge&logo=Google%20Gemini&label=AI%20TOOL&link=https%3A%2F%2Fgemini.google.com%2Fapp)

- **What I asked for:** To create additional game items using the same initial container code while ensuring the structure remains well-organized, properly spaced, and neatly aligned. Allow the AI to handle the CSS attributes to maintain the container's layout, prevent structural issues, and ensure all elements are positioned correctly.

- **What it gave back:** The code generated additional game items using the same initial container structure. It maintained a consistent layout and spacing while allowing the AI to manage the CSS attributes 

- **What I kept, what I changed, and why:** We allowed the AI to handle the CSS attributes so it can adjust the styling as needed, prevent the container from breaking, and keep all elements neatly positioned. This approach makes the code more organized, easier to maintain, and more efficient when adding new game items.

- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/7a4cf1936230864ccfcb1ad91661dfac1a193571
  
### 2026-10-9 — Dynamic Search and Category Filtering for Browse Page

![Static Badge](https://img.shields.io/badge/Google_Gemini-blueviolet?style=for-the-badge&logo=Google%20Gemini&label=AI%20TOOL&link=https%3A%2F%2Fgemini.google.com%2Fapp)

- **What I asked for:** Revise our initial search panel code to make it more flexible, organized, and capable of supporting a growing library of games. The original code relied heavily on hardcoded logic and lacked a complete, consistent system for searching and filtering game items across pages.

- **What it gave back:**  A revised JavaScript implementation that reads game elements from the page, retrieves search terms and category selections from URL parameters, and dynamically filters game items based on their text and tags. It also introduces a no-results message, updates the search input using the URL, and supports navigation from the home page to the Browse page with the search query preserved.

- **What I kept, what I changed, and why:** We kept, URL parameter handling and combined search and category filtering because they provide a practical foundation for the search system. 

- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/2efdb95e5a946e5a97156da59d46926eb43fcef8#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3

### 2026-10-9 — Automating Functional Image Carousels with Links to the Browse Page
![Static Badge](https://img.shields.io/badge/Github_Copilot-black?style=for-the-badge&logo=Github%20Copilot&label=AI%20TOOL&link=https%3A%2F%2Fgithub.com%2Ffeatures%2Fcopilot)

- **What I asked for:** To integrate the downloaded and organized images into the remaining game items that had titles and IDs but no pictures. Also to revise the JavaScript code without breaking the scrollable carousel function so that every image in the homepage carousel would be interactive and link to the Browse page, allowing users to view the specific game they selected.

- **What it gave back:** An updated JavaScript implementation that supports game-specific filtering through URL parameters, allowing the Browse page to display the selected game in isolation.

- **What I kept, what I changed, and why:** We kept the URL parameter handling and game-title normalization because they help identify the selected game and filter the Browse page accordingly. 

- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/9ed121be7588ed8a520c41ee7bc72b9f471de710#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3


## 2. Where the AI got it wrong

### Case 1 - Making the Wireframe and Interactive Website

- **What it gave me:** A polished, modern-looking website layout with clean HTML and CSS that looked like a finished, production-ready web page at first glance

- **What was wrong with it:** It completely missed the mark on the actual wireframe design and core concept, giving a layout far from the intended idea. Furthermore, it lacked any meaningful JavaScript functionality, leaving the site completely static and devoid of interactive features.

- **What I did instead:** We redid our wireframe to make it more manageable for AI to code in the future. For now, the current website, as of Week 1, does not contain any AI-generated code because the functionalities have not yet been included and the plans are still being organized and finalized.
- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/8be09c3bd8d51d553f021c227b274ac17b8b2c04

### Case 2 — Search Bar Implementation

- **What it gave me:** AI suggested ways to implement the search bar and its functionality.

- **What was wrong with it:** Some of the suggested implementation did not completely match our existing website structure and needed to be adjusted to fit our project.

- **What I did instead:** We modified the suggestions to work with our existing HTML, CSS, and JavaScript structure.
- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/ab40e798f3f7c02edfca856e1ae08c21c2796f5c

### Case 3 — Game Image Layout

- **What it gave me:** AI suggested a game image layout for displaying multiple game covers horizontally.

- **What was wrong with it:** The suggested layout did not completely match the design we wanted for the main page.

- **What I did instead:** We adjusted the layout so the game image placeholders fit our planned design and could slide horizontally.
- **Commit:** https://github.com/marcustayao23/HALL-OF-GAMES/commit/7a4cf1936230864ccfcb1ad91661dfac1a193571

## 3. Who wrote what

At least a fifth of this project is code you wrote yourself. Name it, and explain
it in your own words.

> Group projects: give each member their own heading below, and use your GitHub
> handle as the heading. You are graded on your own section.


### Written by @marcustayao23
### My own work

- **File: index.html, styles.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/8be09c3bd8d51d553f021c227b274ac17b8b2c04**
- **What it does and why we kept it: I worked on the initial wireframe and basic layout of the website. I created the main structure of the page, including the navigation, main sections, and the basic arrangement of the website content. I built the layout this way so the website would follow our planned wireframe and have a clear structure before adding more features. The commit may show another group member's GitHub account because we were working at their house and their account was logged in on the computer. However, I was the one who wrote the initial layout code.**

### The AI-written part I understand best

- **File: index.html, styles.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/8be09c3bd8d51d553f021c227b274ac17b8b2c04**
- **What it does and why we kept it:**

- **File: index.html**
- **Commit:**
- **What it does and why we kept it: For the initial version, we asked Gemini AI to convert our Hall of Games wireframe into a website. It generated HTML and CSS for the page layout. I understand that the HTML provides the structure of the page, such as the navigation and content sections, while the CSS controls how those elements look and are positioned. We did not keep the AI-generated website as our final design because it was too different from the design we wanted. We used the suggestions as a reference, then changed and rebuilt the layout based on our own wireframe and project requirements. This helped me understand how the HTML structure and CSS styling work together to create the website.**


### Written by @karlllz
### My own work
- **File: browse.html, style.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/2993f77ba68332ca2b3399e69dc82a4bb329b6a4**
- **What it does and why we kept it: In this commit, I put together the main Browse page content with game pictures, titles, tags, and details. The layout is set up so the text and images sit side-by-side cleanly and can scroll down as more games get added. We kept this because it makes the game details look organized and allows us to list 15+ games without breaking anything. I get how it works since the HTML handles the structure for text and images, while basic CSS flexbox keeps everything aligned and scrollable.**

- **File: browse.html, style.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/7a4cf1936230864ccfcb1ad91661dfac1a193571**
- **What it does and why we kept it: In this commit, I created the scrollable game cards on the homepage. The JavaScript handles its scrolling functionality while the CSS organizes them in their containers. For the Browse page, I used index.html as a reference and kept the same format to build a new page content. We kept this because it gives us a clean, working layout across both pages that makes browsing games easy. I understand how it works because the script listens for user scrolls while the CSS keeps the cards lined up nicely inside their containers.**

### The AI-written part I understand best
- **File: browse.html, style.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/2993f77ba68332ca2b3399e69dc82a4bb329b6a4**
- **What it does and why we kept it: This commit sets up the content for the Browse page by placing game images alongside their titles, tags, and descriptions. The CSS keeps the layout neat and allows the page to scroll down as we add more games. We kept this because it displays all game details clearly and lets us add 15+ games without breaking the page layout. I understand how it works because the HTML holds the text and image sections, while simple CSS flex styling keeps everything side-by-side and scrollable.**

### Written by @Amber55666
### My own work

- **File: index.html**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/368d545115588afacb1ae972834937fa7d8dd16b**
- **What it does and why we kept it: I added image cards to the main page for the “Top 10 Games” section, and made it so when you hover over a categories, the game’s genre pops up. I also added the main banner photo on the homepage to make it look less empty.**

### The AI-written part I understand best

- **File: styles.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/368d545115588afacb1ae972834937fa7d8dd16b**
- **What it does and why we kept it: The AI suggested using :hover with opacity and transition to reveal the genre label on hover. I understood that it works by layering a text element on top of the image and making it fade in when you hover. We kept it because it adds a clean, interactive touch without needing JavaScript.**

- **File: script.js**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/368d545115588afacb1ae972834937fa7d8dd16b**
- **What it does and why we kept it: The AI helped implement the infinite horizontal scrolling logic for the card carousel. I understand that it works by cloning a small buffer of edge cards on both ends to create a seamless loop, using precise pixel math (singleCardScrollWidth) that matches our CSS negative card margins, and silently resetting the scroll position when the user hits the boundary so the carousel loops infinitely without any visual stutter or overlapping duplication glitches.**
  

### Written by  @blaizemt25
### My own work

- **File: index.html, script.js, styles.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/ab40e798f3f7c02edfca856e1ae08c21c2796f5c**
- **What it does and why we kept it: In index.html, I set up an accessible toggle link using ARIA attributes (aria-controls, aria-expanded) connected to a hidden #searchPanel container containing a labeled search input. I then  wrote the JavaScript logic that attaches a click listener to the search link to toggle the search panel's visibility and update its aria-expanded attribute.**

### The AI-written part I understand best

- **File: styles.css**
- **Commit: https://github.com/marcustayao23/HALL-OF-GAMES/commit/ab40e798f3f7c02edfca856e1ae08c21c2796f5c**
- **What it does and why we kept it: The floating layout rules and interactive focus state styling for the .game-search overlay and its form controls. It positions .game-search as an absolute floating dropdown directly beneath its parent element using grid layout and responsive sizing, while styling the inner label and full-width text input. We kept it because it creates a polished, dark-themed search interface that safely overlays other content (z-index: 1001), adapts seamlessly to smaller viewports, and ensures strong keyboard accessibility through custom high-contrast focus rings (:focus-visible).**
