# Re-restaurant-page

# Jomiloju's Breakfast Bar

A restaurant website built for The Odin Project's JavaScript curriculum. The page content is generated entirely with JavaScript (DOM creation), split into ES modules and bundled with webpack.

## Features

- Three tabs: **Home**, **Menu**, and **Contact**
- Each tab is its own module that builds its DOM and returns it
- The active tab's button is highlighted
- Menu and contact content are driven by data arrays, so adding a dish or a contact method means editing data, not DOM code

## Project structure

```
Re-restaurant-page/
├── src/
│   ├── index.js       # entry point: wires up the tab buttons
│   ├── header.js      # builds the nav buttons
│   ├── homePage.js    # Home tab
│   ├── menu.js        # Menu tab
│   ├── contact.js     # Contact tab
│   ├── factory.js     # factoryElem helper for creating elements
│   └── styles.css
├── webpack.config.js
└── package.json
```

## How it works

- `factoryElem(tag, className, text)` creates an element with a class and text.
- Each page module exports a function that builds its elements and returns the top-level container.
- `index.js` clears `#content` and appends the chosen page whenever a tab button is clicked, then updates the `active` class on the buttons.
- Menu and contact pages loop over arrays of objects and build one section per entry.

## Getting started

Requirements: Node.js 22.15 or newer.

```bash
git clone https://github.com/Coal77/Re-restaurant-page.git
cd Re-restaurant-page
npm install
```

### Run the dev server

```bash
npx webpack serve
```

Then open http://localhost:8080. The page rebuilds when you save a file.

### Build for production

```bash
npx webpack
```

This writes the bundled output to `dist/`.

## Notes

- `node_modules/` and `dist/` are listed in `.gitignore`. Run `npm install` after cloning, and `npx webpack` to regenerate `dist/`.
- Imports in this project need the `./` prefix and the `.js` extension, for example `import { factoryElem } from "./factory.js";`.

## Concepts practiced

- ES modules (`import` / `export`)
- DOM creation and manipulation
- Separating responsibilities across files
- Data-driven rendering with arrays, objects, and loops
- Bundling with webpack and managing dependencies with npm

## Possible next steps

- Add images and more menu items
- Add a contact form