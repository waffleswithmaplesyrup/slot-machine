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

//* ======================== GAME RULES SCREEN ============================

//!----- constants -----*/

//!----- state variables -----*/

//!----- cached elements  -----*/

//!----- event listeners -----*/

//!----- render functions -----*/

//!----- other functions -----*/


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



