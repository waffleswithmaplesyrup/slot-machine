//* ======================== START SCREEN ============================

//!----- constants -----*/


//!----- state variables -----*/
let difficulty = 'intermediate';

class Game {
  constructor() {
    //* initial difficulty setting. can change
    this.difficulty = 'intermediate';

    //* initial wallet amount
    this.wallet = 100;

    //* initial spin outcome value
    this.spinOutcome = [];

    //* initial bet amount
    this.betAmt = 5;

    //* inital result
    this.result = '';
  }
}

const game = new Game();


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
    game.difficulty = event.target.value;
    
    //* cycle through difficultyInfo array
    for (let i=0; i<difficultyInfo.length; i++) {
      //* check if the paragraph class matches difficulty selected
      if (difficultyInfo[i].getAttribute('class') === game.difficulty) {
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

  //* render starting icons
  renderStartingIcons();
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
  constructor(alt) {
    this.alt = alt;
    this.src = `./assets/images/${alt}.png`;

    //* add method that transforms the object into an img element on html
    this.makeIntoElement = () => renderNewImg(this.alt, this.src);
  }
}

//* cycle through pictures -> trasnform each item into an object -> push into new array
const icons = pictures.map((item) => new Icon(item));

//* for easy mode: there are only 4 icons
const easy = icons.slice(0, 4);


//!----- state variables -----*/

//!----- cached elements  -----*/
const wallet = document.querySelector('#wallet span');
const betSelect = document.querySelector('#bet');
const spin = document.querySelector('#spin');
const iconsDiv = document.querySelector('#icons');

//!----- event listeners -----*/

//* listen to betSelect being clicked
betSelect.addEventListener('change', (event) => {
  //* save the bet amount chosen
  game.betAmt = parseInt(event.target.value);

});

//* listen to spin button being clicked
spin.addEventListener('click', () => {
  //* result back to empty
  game.result = '';
  
  //* bet amount get removed from wallet
  game.wallet -= game.betAmt;

  //* render wallet
  wallet.innerText = game.wallet;

  renderSpin();
  checkResult();
});

//!----- render functions -----*/
function renderStartingIcons() {
  //* empty iconsDiv
  iconsDiv.innerHTML = '';

  //* generate kitten icon three times
  for (let i=0; i<3; i++) {
    icons[4].makeIntoElement();
  }
}

function renderSpin() {
  //* empty iconsDiv
  iconsDiv.innerHTML = '';
  //* each time spin button is clicked, empty spinOutcome
  game.spinOutcome = [];

  //* generate an icon three times
  for (let i=0; i<3; i++) {
    //* pick random icon
    const iconChosen = generateRandomIcon();

    //* display random icons on screen
    iconChosen.makeIntoElement();

    //* put icons generated into spinOutcome array
    game.spinOutcome.push(iconChosen);
  }
  
}

function renderResults(text) {
  const spinResult = document.querySelector('#spin-result');

  //* empty spinResult
  spinResult.innerHTML = '';

  //* create new element
  const newElement = document.createElement('p');
  newElement.innerText = text;

  //* append into #spin-result
  spinResult.append(newElement);
}

function renderNewImg(alt, src) {
  //* create new img element
  const newImg = document.createElement('img');

  //* set iconChosen as img src
  newImg.setAttribute('src', src);
  newImg.setAttribute('alt', alt);

  //* append to iconDiv
  iconsDiv.append(newImg);
}


//!----- other functions -----*/

function generateRandomIcon() {
  let randomIndex = '';
  //* if difficulty is easy
  if (game.difficulty === 'easy') {
    //* only select from ['cherry', 'money', 'seven', 'crystal']
    randomIndex = Math.floor(Math.random() * easy.length);
    return easy[randomIndex];
  } else {
    //* intermediate and hard modes use all icons
    randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  }
}

function checkResult() {
  game.spinOutcome = game.spinOutcome.reduce(iconCount, {});
  console.log(game.spinOutcome);

  // if ((game.spinOutcome['cherry'] === 3) || (game.spinOutcome['money'] === 3) || (game.spinOutcome['seven'] === 3)) {
  //   game.wallet += game.betAmt * 10;
  // } else if ((game.spinOutcome['crystal'] === 3) || (game.spinOutcome['kitten'] === 3) || (game.spinOutcome['bell'] === 3)) {
  //   game.wallet += game.betAmt * 20;
  // } else if (game.spinOutcome['bullets'] === 3) {
  //   game.wallet += game.betAmt * 30;
  // } else if (game.spinOutcome['grenade'] >= 2) {
  //   game.wallet -= 50;
  // }

  ['cherry', 'money', 'seven'].forEach((item) => {
    if (game.spinOutcome[item] === 3) {
      game.wallet += game.betAmt * 10;
      game.result = `Three ${item}s. You earn $${game.betAmt*10}.`;
    } else if (game.spinOutcome[item] === 2) {
      game.wallet += game.betAmt * 5;
      game.result = `Two ${item}s. You earn $${game.betAmt*5}.`;
    } 
  });

  ['crystal', 'kitten', 'bell'].forEach((item) => {
    if (game.spinOutcome[item] === 3) {
      game.wallet += game.betAmt * 20;
      game.result = `Three ${item}s. You earn $${game.betAmt*20}.`;
    } else if (game.spinOutcome[item] === 2) {
      game.wallet += game.betAmt * 5;
      game.result = `Two ${item}s. You earn $${game.betAmt*5}.`;
    } 
  });

  ['bullets'].forEach((item) => {
    if (game.spinOutcome[item] === 3) {
      game.wallet += game.betAmt * 30;
      game.result = `Three ${item}. You earn $${game.betAmt*30}.`;
    } else if (game.spinOutcome[item] === 2) {
      game.wallet += game.betAmt * 5;
      game.result = `Two ${item}. You earn $${game.betAmt*5}.`;
    } 
  });

  if (game.spinOutcome['grenade'] >= 2) {
      game.wallet -= 50;
      game.result = 'Grenade attack! You lose $50.';
  } 


  wallet.innerText = game.wallet;
  console.log(game.wallet);
  renderResults(game.result);
}

function iconCount(obj, currentIcon) {
  if (obj[currentIcon.alt]) {
    obj[currentIcon.alt] += 1;
  } else {
    obj[currentIcon.alt] = 1;
  }
  return obj;
}

