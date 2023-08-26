//* ======================== START SCREEN ============================

//!----- constants -----*/


//!----- state variables -----*/
let difficulty = 'intermediate';

//!----- cached elements  -----*/

//? save app screens
//* save #start-screen
const startScreen = document.querySelector('#start-screen');
//* save #rules-screen
const rulesScreen = document.querySelector('#rules-screen');
//* save #game-screen
const gameScreen = document.querySelector('#game-screen');
//* save navbar
const navBar = document.querySelector('#navbar');

//? save start screen buttons
//* save #difficulty dropdown menu element
const dropDown = document.querySelector('#difficulty');
//* save #start-game button
const startButton = document.querySelector('#start-game');
//* save #game-rules button
const rulesButton = document.querySelector('#game-rules');

//? save changing text
//* save #difficulty-info paragraphs
const difficultyInfo = document.querySelectorAll('#difficulty-info p');

//!----- event listeners -----*/

//* select difficulty
function selectDifficulty() {
  //* listen to dropDown being clicked
  dropDown.addEventListener('change', (event) => {
    //* save the game difficulty chosen
    difficulty = event.target.value;
    
    //* cycle through difficultyInfo array
    for (let i=0; i<difficultyInfo.length; i++) {
      //* check if the paragraph class matches difficulty selected
      if (difficultyInfo[i].getAttribute('class') === difficulty) {
        //* unhide the paragraph
        difficultyInfo[i].hidden = false;
      } else {
        //* hide the rest
        difficultyInfo[i].hidden = true;
      }
    }

  });
}



//!----- render functions -----*/
//* start game
function renderStartGame() {
  //* set #start-screen hidden 
  startScreen.hidden = true;

  //* set #rules-screen hidden
  rulesScreen.hidden = true;

  //* unhide #game-screen
  gameScreen.hidden = false;

  //* unhide nav bar
  navBar.hidden = false;
}

//* show game rules
function renderRules() {
  //* set #start-screen hidden 
  startScreen.hidden = true;

  //* set #game-screen hidden
  gameScreen.hidden = true;

  //* unhide #rules-screen
  rulesScreen.hidden = false;

  //* unhide nav bar
  navBar.hidden = false;
}

//!----- other functions -----*/ 
function startScreenActive() {

  selectDifficulty();
  //* listen to start button being clicked
  startButton.addEventListener('click', () => renderStartGame());
  //* listen to rules button being clicked
  rulesButton.addEventListener('click', () => renderRules());
}
startScreenActive();

//* ======================== NAV BAR ============================

//!----- constants -----*/

//!----- state variables -----*/

//!----- cached elements  -----*/
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('#hamburger');
const sublinks = document.querySelector('#sublinks');
const sublinkButtons = document.querySelectorAll('#sublinks h4');


//!----- event listeners -----*/
//* listen to logo being clicked and go back to start screen
logo.addEventListener('click', () => renderStartScreen());

//* listen to hamburger being clicked and show and hide sublinks
let hamburgerCount = 0;
hamburger.addEventListener('click', () => renderSublinks());

//* cycle through sublinkButtons
sublinkButtons.forEach((button) => {
  //* listen to button being clicked and render sublink screens
  button.addEventListener('click', (event) => renderSublinkScreens(event.target.innerText));
});


//!----- render functions -----*/
function renderStartScreen() {
  //* hide rules screen
  rulesScreen.hidden = true;

  //* hide game screen
  gameScreen.hidden = true;

  //* unhide start screen
  startScreen.hidden = false;

  //* hide navbar
  navBar.hidden = true;

  //* check if hamburger is activated
  if (hamburger.classList.contains('nav-activated')) {
    //* close sublinks
    renderSublinks();
  }

  //* reset the new paragraph to empty
  newPara.innerHTML = '';
}

function renderSublinks() {
  if (hamburgerCount % 2 === 0) {
    //* set hamburger nav active
    hamburger.classList.add('nav-activated');

    //* unhide sublinks
    sublinks.hidden = false;
  } else {
    //* remove nav-activated class
    hamburger.classList.remove('nav-activated');
    //* hide sublinks
    sublinks.hidden = true;
  }
  
  hamburgerCount++;
}

function renderSublinkScreens(button) {
  switch(button) {
    //* if 'game rules' is clicked
    case 'game rules':
      //* render rules screen
      renderRules();
      //* close sublinks
      renderSublinks();
      break;
    //* if 'start game' is clicked
    case 'start game':
      //* render game screen
      renderStartGame();
      //* close sublinks
      renderSublinks();
      break;
    //* if 'restart' is clicked
    case 'restart':
      //* render start screen
      renderStartScreen();
      break;
    default:
  }
  //* reset the new paragraph to empty
  newPara.innerHTML = '';
}

//!----- other functions -----*/



//* ======================== RULES SCREEN ============================

//!----- constants -----*/

//!----- state variables -----*/

//!----- cached elements  -----*/

//* save images in an array
const images = document.querySelectorAll('#rules-screen .container img');

//* save #new-para to update innerHTML
const newPara = document.querySelector('#new-para');

//!----- event listeners -----*/

//* cycle through array
images.forEach((img) => {

  //* listen to picture being clicked
  img.addEventListener('click', (event) => {

    //* create new paragraph with rules relating to the icon clicked
    newParagraph(event.target.alt);

    //* add class opacity to a clicked image for 100ms
    img.classList.add('opacity');
    setTimeout(() => {img.classList.remove('opacity')}, 100);

  });
  

});


//!----- render functions -----*/

//!----- other functions -----*/
function newParagraph(image) {
  const base = 10;
  //* display specific text for each icon
  switch (image) {
    case 'cherry':
    case 'money':
    case 'seven':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount x ${base}`;
      break;
    case 'crystal':
    case 'kitten':
    case 'bell':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount x ${base+10}`;
      break;
    case 'bullets':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount x ${base+20}`;
      break;
    case 'grenade':
      newPara.innerHTML = `outcome: at least 2 ${image} icons<br/>result: wallet - $50 (unless kitten save)`;
      break;
    default:
      console.log(image);
  }
}


//* ======================== GAME SCREEN ============================

//!----- constants -----*/
//* icons used in the gameplay
const pictures = ['cherry', 'money', 'seven', 'crystal', 'kitten', 'bell', 'bullets', 'grenade'];

//* create a class so easier to transform pictures into objects inside an array
class Icon {
  //* construct properties
  constructor(name) {

  }
}

//!----- state variables -----*/

//!----- cached elements  -----*/

//!----- event listeners -----*/

//!----- render functions -----*/

//!----- other functions -----*/



