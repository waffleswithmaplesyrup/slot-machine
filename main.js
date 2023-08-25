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


//* start game
function startGame() {
  //* listen to start button being clicked
  startButton.addEventListener('click', () => {

    //* set #start-screen hidden 
    startScreen.hidden = true;

    //* unhide #game-screen
    gameScreen.hidden = false;

    //* unhide nav bar
    navBar.hidden = false;
  });
}


//* show game rules
function showRules() {
  //* listen to rules button being clicked
  rulesButton.addEventListener('click', () => {

    //* set #start-screen hidden 
    startScreen.hidden = true;

    //* unhide #rules-screen
    rulesScreen.hidden = false;

    //* unhide nav bar
    navBar.hidden = false;
  });
}


//!----- render functions -----*/


//!----- other functions -----*/ 
function startScreenActive() {

  selectDifficulty();
  startGame();
  showRules();
}
startScreenActive();

//* ======================== NAV BAR ============================

//!----- constants -----*/

//!----- state variables -----*/

//!----- cached elements  -----*/
const logo = document.querySelector('#logo');

//!----- event listeners -----*/
//* listen to logo being clicked
logo.addEventListener('click', () => {

  //* hide rules screen
  rulesScreen.hidden = true;

  //* hide game screen
  gameScreen.hidden = true;
  
  //* unhide start screen
  startScreen.hidden = false;

  //* hide navbar
  navBar.hidden = true;
});


//!----- render functions -----*/

//!----- other functions -----*/



//* ======================== GAME RULES SCREEN ============================

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
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base}`;
      break;
    case 'money':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base}`;
      break;
    case 'seven':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base}`;
      break;
    case 'crystal':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base+10}`;
      break;
    case 'kitten':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base+10}.<br/>outcome: at least 1 ${image} + 1 bullets<br/>result: kitten save (protect against grenade attack)`;
      break;
    case 'bell':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base+10}`;
      break;
    case 'bullets':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount * ${base+20}`;
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



