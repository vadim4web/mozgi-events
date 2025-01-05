# Mozgi Events - Full-Cycle Event Agency

## Overview

This project is a simple single-page application (SPA) built using **Vue.js** and **Vite**. It serves as the landing page for a full-cycle event agency, showcasing the agency's core features and services.

The page is designed to be:
- **Responsive**: Fully responsive and works across various screen sizes.
- **Cross-browser compatible**: Supports major browsers like Chrome, Firefox, and Safari.
- **Semantic HTML**: Proper use of HTML elements for accessibility and SEO.
- **Smooth Animations**: Includes fluid animations, implemented with Vue transitions and native CSS for a seamless experience.

## Features

- **Logo Animation**: On page load, the logo fills with black color from bottom to top.
- **Hover Effects**:
  - Menu items change text color to white and show an underline from left to right when hovered.
  - On hover, the menu item text rotates counterclockwise.
- **Mouse Interaction**: The main text slightly shifts in the direction of the mouse cursor.
- **Background Text Animation**: Continuous scrolling text where each line moves in opposite directions.
- **Language Selection**: Language options (RU, UA) appear when hovering over the respective element, with an opacity effect moving toward the logo.
- **Page Transitions**: Smooth page transition animations implemented using **Vue transitions** and **CSS**.

## Tech Stack

- **Vue.js**: The core JavaScript framework for building the application.
- **Vite**: A fast and modern build tool.
- **Vue Router**: For navigation and routing between pages.
- **Vue Use**: Vue utility library for handling mouse move listening etc.
- **Vue I18n**: For internationalization, supporting EN, UA, and RU languages.
- **CSS & SVG**: For styling and animations, leveraging Vue transitions and native CSS animations.
- **Video**: Used for media elements in the Show section.

## Project Structure

```arduino
mozgi-events/
├── dist/ # Compiled production files (auto-generated after build)
├── node_modules/ # Installed dependencies (auto-generated after npm install)
├── public/ # Public assets (images, fonts, icons, etc.)
│   ├── 404.html # GitHub Pages redirect file
│   └── mozgi.svg # Favicon
├── src/ # Source code for the project
│   ├── assets/ # Images, fonts, and other assets used in components
│   │   ├── lingo.png # PNG image used in `Lingo` component
│   │   ├── routes.css # Styles used in Vue-Router Transition
│   │   ├── show.mp4 # MOZGI Event Agency's cover Video
│   │   ├── show.png # PNG showreel wheel-shaped span used in `Show.vue`
│   │   └── vars.css # CSS variables for different devices
│   ├── components/ # Vue components
│   │   ├── Head1.vue # Header component
│   │   ├── Logo.vue # Logo component
│   │   ├── Links.vue # Links menu component
│   │   ├── Lingo.vue # Language switching component
│   │   ├── Play.vue # Player component
│   │   ├── Show.vue # Player show/Hide component
│   │   └── Spot.vue # Spot like the Sun behind component
│   ├── i18n.js # Internationalization setup (Vue-i18n)
│   ├── router.js # Vue Router for page navigation
│   ├── store.js # Reactive global state management
│   ├── style.css # Global styles (including animations, transitions, etc.)
│   ├── views/ # Vue views for different routes/pages
│   │   ├── 404.vue # 404 page view
│   │   ├── Home.vue # Home page view
│   │   ├── What.vue # 'What' page view
│   │   ├── Where.vue # 'Where' page view
│   │   └── Who.vue # 'Who' page view
│   ├── App.vue # Main Vue component that serves as the entry point
│   └── main.js # Main entry JavaScript file for the Vue app
├── .gitignore # Git ignore file for version control
├── index.html # Main HTML file (entry point for Vue app)
├── package.json # Project metadata and dependencies
├── package-lock.json # Lock file for consistent dependency installs
├── README.md # Project documentation
└── vite.config.js # Vite configuration file
```

## Animations

All animations are implemented using Vue transitions and native CSS for smooth, high-performance animations. The following animations and effects have been implemented:

### Logo Animation
- After the page loads, the logo fills with black color from the bottom to the top.
- Initially, the logo only has a black outline, and the final result appears as shown in the design.

### Hover Effects
- On hover over the menu link elements:
  - The text color changes to white.
  - A white underline appears from left to right.
  - Additionally, the text starts rotating counterclockwise.

### Mouse Movement
- As the mouse moves across the screen, the main text slightly shifts in the direction of the cursor movement, providing a dynamic effect.

### Background Text Animation
- A continuous text scroll (marquee effect) is applied to the background.
- Each line of text moves in the opposite direction to the other, creating a visually interesting and dynamic scrolling effect.

### Language Selection Hover
- When hovering over the language selection element, text elements (RU, UA) appear sequentially with an opacity effect.
- The text elements move toward the logo (to the right) during the hover interaction.

All animations are designed to be smooth, without any jerks or disruptions, providing a polished user experience.
