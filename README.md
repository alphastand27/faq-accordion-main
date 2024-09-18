# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshots/Screenshot%20from%202024-09-18%2010-54-10.png)
![](./screenshots/Screenshot%20from%202024-09-18%2010-54-37.png)
![](./screenshots/Screenshot%20from%202024-09-18%2010-55-10.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

I have learned that the code below for access the elements by class name returns an array.
To access each element with that class their index needs to be used just like the way we access array members.

```JS
const button = document.getElementsByClassName("qb");
const answer = document.getElementsByClassName("answer");
const icon = document.getElementsByClassName("action-icon");

button[0].addEventListener("click", function(){
    if (answer[0].innerText === "") {
        icon[0].src = minusImage;
        answer[0].innerText = answers.a1;
    } else {
        icon[0].src = plusImage;
        answer[0].innerText = "";
    }
});
```

## Author

- Frontend Mentor - [@alphastand27](https://www.frontendmentor.io/profile/alphastand27)
- Twitter - [@micheallifexp](https://x.com/micheallifexp)
