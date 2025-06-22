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


## project 2

```javascript
// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
//   e.preventDefault();


//   const wb_int_height = parseInt(form.querySelector('#height').value)
//   const wb_int_weight = parseInt(form.querySelector('#weight').value)
//   const wb_results = form.querySelector('#results')

//   if (wb_int_height === '' || wb_int_height < 0 || isNaN(wb_int_height)) {
//     wb_results.innerHTML = `Provide a correct height! ${wb_int_height}`
//   } else if (wb_int_weight === '' || wb_int_weight < 0 || isNaN(wb_int_weight)) {
//     wb_results.innerHTML = `Provide a correct weight! ${wb_int_weight}`
//   } else {
//     const bmi = (wb_int_weight / ((wb_int_height*wb_int_height)/10000)).toFixed(2)
//     wb_results.innerHTML = `<span>${bmi}</span>`

//     firstSpan = wb_results.getElementsByTagName('span')
//     console.log(firstSpan)

//     if (bmi < 18.6) {
//       firstSpan[0].innerHTML = `<span>Under Weight</span>`
//     } else if (bmi >= 18.6 && bmi < 24.9) {
//       firstSpan[0].innerHTML = `<span>Normal Range</span>`
//     } else {
//       firstSpan[0].innerHTML = `<span>Overweight</span>`
//     }
//   }
// })

// Your code will work, but it is overwriting - that's exactly what's happening and why you're not seeing the BMI number anymore.
// Let me trace through what happens:
// javascript// Step 1: You create a span with the BMI value
// wb_results.innerHTML = `<span>25.5</span>`
// // DOM now looks like: <div id="results"><span>25.5</span></div>

// // Step 2: You get reference to that span
// firstSpan = wb_results.getElementsByTagName('span')
// // firstSpan[0] points to the span containing "25.5"

// // Step 3: You overwrite the content of that span
// firstSpan[0].innerHTML = `<span>Under Weight</span>`
// // DOM now looks like: <div id="results"><span><span>Under Weight</span></span></div>
// The BMI value (25.5) is completely gone! It got replaced with "Under Weight".
// You're replacing the content inside the span (which was "25.5") with new content ("<span>Under Weight</span>").
// If you want to keep both the BMI value AND add the category, you have several options:
// Option 1: Append instead of replace
// javascriptwb_results.innerHTML = `<span>${bmi}</span>`
// wb_results.innerHTML += `<br><span>Under Weight</span>` // Add, don't replace
// Option 2: Combine them in the span
// javascriptfirstSpan[0].innerHTML = `${bmi} - Under Weight` // Keep BMI + add category
// Option 3: Modify the text content while keeping structure
// javascriptfirstSpan[0].textContent = `${bmi} - Under Weight`
// Your current code works in the sense that it runs without errors, but it's definitely overwriting the BMI value with the category. That's why you only see "Under Weight" and not "25.5 - Under Weight" or both values separately.




const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();


  const wb_int_height = parseInt(form.querySelector('#height').value)
  const wb_int_weight = parseInt(form.querySelector('#weight').value)
  const wb_results = form.querySelector('#results')

  if (wb_int_height === '' || wb_int_height < 0 || isNaN(wb_int_height)) {
    wb_results.innerHTML = `Provide a correct height! ${wb_int_height}`
  } else if (wb_int_weight === '' || wb_int_weight < 0 || isNaN(wb_int_weight)) {
    wb_results.innerHTML = `Provide a correct weight! ${wb_int_weight}`
  } else {
    const bmi = (wb_int_weight / ((wb_int_height*wb_int_height)/10000)).toFixed(2)
    wb_results.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
      wb_results.innerHTML += `<br><span>Under Weight</span>`
    } else if (bmi >= 18.6 && bmi < 24.9) {
      wb_results.innerHTML += `<br><span>Normal Range</span>`
    } else {
      wb_results.innerHTML += `<br><span>Overweight</span>`
    }
  }
})
```


## project 3

```javascript
const wb_clock = document.querySelector('#clock');

const obj_date = new Date();

// console.log(obj_date.toLocaleTimeString())

setInterval(() => {
  const obj_date = new Date();
  wb_clock.innerHTML = obj_date.toLocaleTimeString();
}, 1000);

```


## project 4
```javascript
// const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

// const wb_submit = document.querySelector('#subt');
// const wb_userInput = document.querySelector('#guessField');
// const wb_previousGuesses = document.querySelector('.guesses');
// const wb_guessesRemaining = document.querySelector('.lastResult');
// const wb_finalResult = document.querySelector('.lowOrHi');

// let int_guessesRemaining = 10;
// let arr_previousGuesses = [];
// let playGame = true;

// function validateInput(userInputVal) {
//   if (userInputVal <= 0 || userInputVal > 100) {
//     wb_finalResult.innerHTML = `<h2 class='finalResult'>Oops!!! You have entered an incorrect value. Please retry</h2>`;
//   } else if ((userInputVal = '')) {
//     wb_finalResult.innerHTML = `<h2 class='finalResult'>Oops!!! You have entered an incorrect informatted value. Please retry</h2>`;
//   }
// }

// function endGame() {
//   arr_previousGuesses.length = 0;
//   wb_previousGuesses.innerHTML = '';
//   int_guessesRemaining = 10;
//   wb_guessesRemaining.innerHTML = `---`;
//   wb_userInput.value = '';
// }

// if (playGame) {
//   wb_submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const userInputVal = parseInt(wb_userInput.value);
//     console.log(typeof userInputVal);
//     if (int_guessesRemaining === 0) {
//       wb_finalResult.innerHTML = `<span h2='finalResult'>Oops!!! You are out of number of attempts allowed. Better luck next time!</h2>`;
//       playGame = false;
//     } else if (randomNumber === userInputVal) {
//       wb_finalResult.innerHTML = `<h2 class='finalResult'>Yayyy!!! Its a match at ${randomNumber}</h2>`;
//       endGame();
//       playGame = false;
//     } else {
//       arr_previousGuesses.push(userInputVal);
//       wb_previousGuesses.innerHTML = `${arr_previousGuesses}`;
//       int_guessesRemaining = int_guessesRemaining - 1;
//       console.log(`Guess remaining: ${int_guessesRemaining}`);
//       wb_guessesRemaining.innerHTML = `${int_guessesRemaining}`;
//       wb_userInput.value = '';
//     }
//   });
// }

let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const wb_submit = document.querySelector('#subt');
const wb_userInput = document.querySelector('#guessField');
const wb_previousGuesses = document.querySelector('.guesses');
const wb_guessesRemaining = document.querySelector('.lastResult');
const wb_display_result = document.querySelector('.lowOrHi');
const div = document.querySelector('.resultParas');

let int_guessesRemaining = 10;
let arr_previousGuesses = [];
let playGame = true;

const wb_p_tag_created = document.createElement('p');
// document.appendChild(wb_p_tag_created);

if (playGame) {
  wb_submit.addEventListener('click', (e) => {
    e.preventDefault();
    userInputVal = parseInt(wb_userInput.value);
    if (validateInput(userInputVal)) {
      processInput(userInputVal);
    }
  });
}

function validateInput(userInputVal) {
  if (userInputVal < 1) {
    displayMessage('Please enter number greater than 0');
    return false;
  } else if (userInputVal > 100) {
    displayMessage('Please enter number less than 100');
    return false;
  } else if (isNaN(userInputVal)) {
    displayMessage(
      'Oops!!! You have entered an informatted value. Please retry!'
    );
    return false;
  } else {
    return true;
  }
}

function processInput(userInputVal) {
  if (int_guessesRemaining === 0) {
    displayMessage(`Oops!!! Game Over! Number was ${randomNumber}`);
    endGame();
    return;
  } else if (userInputVal === randomNumber) {
    displayMessage(`Yayyy!!! Its a match at ${randomNumber}`);
    endGame();
    return;
  } else if (userInputVal < randomNumber) {
    displayMessage('Number TOO low');
  } else if (userInputVal > randomNumber) {
    displayMessage('Number TOO high');
  }
  arr_previousGuesses.push(userInputVal);
  displayUserInput(userInputVal);
  int_guessesRemaining = int_guessesRemaining - 1;
  wb_guessesRemaining.innerHTML = `${int_guessesRemaining}`;
  wb_userInput.value = '';
}

function displayUserInput(userInputVal) {
  wb_previousGuesses.innerHTML += `${userInputVal}, `;
}

function displayMessage(message) {
  wb_display_result.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  playGame = false;
  arr_previousGuesses = [];
  int_guessesRemaining = 10;
  wb_guessesRemaining.innerHTML = `---`;
  wb_userInput.value = '';

  wb_userInput.setAttribute('disabled', '');
  wb_submit.setAttribute('disabled', '');

  // wb_p_tag_created.classList.add('button');
  wb_p_tag_created.innerHTML = "<button id='newGame'>Start New Game</button>";
  div.appendChild(wb_p_tag_created);

  newGame();
}

function newGame() {
  start_button = document.querySelector('#newGame');
  start_button.addEventListener('click', (e) => {
    wb_userInput.removeAttribute('disabled');
    wb_submit.removeAttribute('disabled');
    wb_p_tag_created.innerHTML = '';
    wb_previousGuesses.innerHTML = '';
    wb_display_result.innerHTML = '';
    wb_guessesRemaining.innerHTML = `${int_guessesRemaining}`;
    randomNumber = parseInt(Math.random() * 100 + 1);
    div.removeChild(wb_p_tag_created);
    playGame = true;
  });
}

```
