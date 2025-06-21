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

```
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
