# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [How long did it take ?](#test)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

![](/public/assets/images/screenshotDarkModeChallenge.png)
![](/public/assets/images/screenshotLightModeChallenge.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Maaaid/browserExtensionManagerChallenge)
<!-- - Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media Queries
- Javascript
- Mobile-first workflow

### What I learned

Its my first time using display : grid to manipulate elements, i find it more efficient than flexbox for the extensions

First time using media queries to add responsive design to a frontend.

```css
@media (min-width: 1025px) and (max-width: 1440px) {
  .topBar {
    width: 90%;
  }
  .topExtensions {
    display: flex;
    align-items: center;
    width: 92%;
    margin: 0;
    margin-top: 25px;
    gap: 20px;
  }
  .extensionsList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 93%;
    margin: 0;
    margin-top: 25px;
    padding: 0;
  }

  .extensions {
    width: 29.9%;
    height: 140px;
  }
}
```

First time adding variables to a css file, to switch between light and dark mode.

```css
:root {
  transition: --background 0.5s ease-in-out;
  --background: linear-gradient(180deg, #040918 0%, #091540 100%);
  --color-primary: #212636;
  --color-secondary: #09153e;
  --color-tertiary: #2f364b;
  --color-quaternary: #c7c7c7;
  --color-quinary: #545969;
  --color-topLogo: #fbfdfe;
}
```

First time i use JSON files to read datas and add or remove it dynamically to an html file with some variables and functions.

```js
fetch("/api/extensions")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((extension, index) => {}
};
```

### Continued development

What I will focus in future projects ?

- My css knowledge, learn how to use grid properly and maybe add more animations.
- My Javascript knowledge, fetch( ), await( ), async( ), and learn how to use JS better and better to turn to ReactJS one day.
- Focusing on UI/UX basic design to make a more efficient design who make the users more comfortable.
- Raise my HTML knowledge to type faster than know, be more productive etc...

### Useful resources

- [MDN documentation ( basic )](https://developer.mozilla.org/fr/) - This helped to understand how certain things works, especially in JS ( data fetching, adding HTML with a const, filtering some sort of HTML etc...)
- [French Youtube NodeJS Tuto](https://www.youtube.com/watch?v=NRxzvpdduvQ&t=4530s) - I've watched like 2 hours of this video before stopping, i think I need to be better in HTML CSS JS and maybe start React to start creating a working backend, I dont want to learn some kinds of hard things ( for a begginner ) without the certitude that my current knowledge stay in my head. ( Was'nt sure about what i'm saying and hope my english is good enough for everyone to understand ! ).

## How long did it take ? {#test}

I've started this project on 19/04/25, worked on it maybe 2 hours per day for a total of ~10 hours, finished it on 24/04/25.

## Author

- Website - [Guibao](https://github.com/Maaaid/browserExtensionManagerChallenge)
- Frontend Mentor - [@Maaaid](https://www.frontendmentor.io/profile/Maaaid)
