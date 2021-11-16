// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const moiraQuote = document.getElementById('quote');
const foldButton = document.getElementById('fold-button');
const cheeseVideo = document.getElementById('video-clip');
let clickCounter = 0;

foldButton.addEventListener('click', () => {
  clickCounter++
  
  if (clickCounter === 1) {
    moiraQuote.textContent = 'Just fold the cheese, David.'
  } 
  if (clickCounter === 2) {
    moiraQuote.textContent = 'If you say fold the cheese one more time.'
  }
  if (clickCounter === 3) {
    
  }
});