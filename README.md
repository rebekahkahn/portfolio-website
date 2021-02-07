# Portfolio website

This project was primarily created with [Create React App](https://github.com/facebook/create-react-app) and [material-ui](https://material-ui.com/)

## Done (Feb 6, 2021)

- Added switch (later will toggle dark and light theme)
- Changed switch: it toggles itself between black and white
- Added media query for gold line on About
- Added font styles, made appbar sticky
- Designed portfolio page

## Design Ideas

- Arrow bounces and once clicked, slides next section up

## To Do

### Miscellaneous

- Add react-router to site
- Delete jason2mq from packages (yarn remove doesn't work)

### Design Choices (musing)

- Add dark theme hook to toggle it (difficult)
- The arrow will bounce, then when you click it, a slide animation will bring up the next part of the page (to add later)
- Will map over data so that code is not repeated after I get the layout finished (add very soon)
- Learn material-ui theming etc. (to do very soon)
- When you hover over links, a golden underline grows under the link (add at some point)

## Dependencies

Version of create react app:

```bash
npx create-react-app@3.4.1
```

Core material-ui package

```bash
yarn add @material-ui/core
```

Packages for icons

```bash
yarn add font-awesome@4.7.0
yarn add @material-ui/icons
```

For images (As recommended by material-ui)

```bash
yarn add material-ui-image
```

## Start Project

- yarn start

## Languages/Libraries used

- react
- react-router
- material-ui
