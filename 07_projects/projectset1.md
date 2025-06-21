# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const wb_allButtons = document.querySelectorAll('.button');
// console.log(wb_allButtons)

const body = document.body;

// const wb_excludedRegions = document.querySelectorAll('body :not(span.button)');
// console.log("wb_excludedRegions",wb_excludedRegions)

// Handle button clicks
wb_allButtons.forEach((eachButton) => {
  eachButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling

    console.log(e.target);

    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }
    body.style.backgroundColor = e.target.id;
  });
});

// Handle clicks outside buttons
body.addEventListener('click', (e) => {
  // Check if the clicked element is not a button
  if (!e.target.classList.contains('button')) {
    body.style.backgroundColor = 'white';
  }
});

```