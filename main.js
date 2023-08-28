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

    //* initial kitten save
    this.kittenSave = 0;

    //* initial bet amount
    this.betAmt = 5;

    //* inital result
    this.result = '';
  }
}

let game = new Game();


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

//* save screens inside array
const screens = [startScreen, rulesScreen, gameScreen, navBar];

// //* save screens inside an array
// const screens = document.querySelectorAll('section');

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
    difficultyInfo.forEach((infoElement) => {
      //* check if game difficulty matches one of the element's classes
      if (infoElement.classList.contains(game.difficulty)) {
        //* unhide the paragraph
        infoElement.hidden = false;
      } else {
        //* hide the rest
        infoElement.hidden = true;
      }
    });

  });
}


//!----- render functions -----*/
//* start game
function renderStartGame() {
  //* render wallet
  wallet.innerText = game.wallet;
  //* initialise bet selected
  betSelect[0].selected = true;
  //* empty result paragraph
  renderResults('');

  //* unhide gameScreen, hide the rest
  unhide(gameScreen);

  //* render starting icons
  renderStartingIcons();
}

//* show game rules
function renderRules() {

  //* unhide rulesScreen, hide the rest
  unhide(rulesScreen);
}

//!----- other functions -----*/ 
//* unhide selected screen, hide the rest
function unhide(main) {
  //* unhide screen
  main.hidden = false;

  //* cycle through screens array
  screens.forEach((screen) => {
    //* hide all screens that are not main
    if (screen !== main) {
      screen.hidden = true;
      //* if main is not startScreen
      if (main !== startScreen) {
        //* unhide navbar
        navBar.hidden = false;
      }
    }
  });
}

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

  //* every time start screen is activated, reset game
  game = new Game();

  //* unhide startScreen, hide the rest
  unhide(startScreen);

  //* check if hamburger is activated
  if (hamburger.classList.contains('nav-activated')) {
    //* close sublinks
    renderSublinks();
  }

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
//* icons used in the gameplay
const pictures = ['cherry', 'money', 'seven', 'crystal', 'kitten', 'bell', 'bullets', 'grenade'];

//* create a class so easier to transform pictures into objects inside an array
class Icon {
  //* construct properties
  constructor(alt) {
    this.alt = alt;
    this.src = `./assets/images/${alt}.png`;
  }
  //* add method that transforms the object into an img element on html
  makeIntoElement(parent) {
    return renderNewImg(this.alt, this.src, parent);
  } 
}

//* cycle through pictures -> transform each item into an object -> push into new array
const icons = pictures.map((item) => new Icon(item));

//!----- state variables -----*/

//!----- cached elements  -----*/

//* save images in an array
let images = document.querySelectorAll('#rules-screen .container img');

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
    case 'bell':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount x ${base+10}`;
      break;
    case 'bullets':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount x ${base+20}`;
      break;
    case 'grenade':
      newPara.innerHTML = `outcome: at least 2 ${image} icons<br/>result: wallet - $50 (unless kitten save)`;
      break;
    case 'kitten':
      newPara.innerHTML = `outcome: 3 ${image} icons<br/>result: bet amount x ${base+10}<br/>kitten + bullets: save against grenade attack.`;
      break;
    default:
      console.log(image);
  }
}


//* ======================== GAME SCREEN ============================

//!----- constants -----*/

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

  //* check if wallet amount is more than bet amount
  if (game.wallet >= game.betAmt) {
    //* bet amount get removed from wallet
    game.wallet -= game.betAmt;

    //* render wallet
    wallet.innerText = game.wallet;

    renderSpin();
    checkResult();
  } else if (game.wallet < 5){
    game.result = "You don't have enough money.<br/>Game over.";
    renderResults(game.result);
  } else {
    game.result = "You don't have enough money.<br/>Bet a lower amount.";
    renderResults(game.result);
  }

});

//!----- render functions -----*/
function renderStartingIcons() {
  //* empty iconsDiv
  iconsDiv.innerHTML = '';

  //* generate kitten icon three times
  for (let i=0; i<3; i++) {
    icons[4].makeIntoElement(iconsDiv);
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
    iconChosen.makeIntoElement(iconsDiv);

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
  newElement.innerHTML = text;

  //* append into #spin-result
  spinResult.append(newElement);
}

function renderNewImg(alt, src, parent) {
  //* create new img element
  const newImg = document.createElement('img');

  //* set iconChosen as img src
  newImg.setAttribute('src', src);
  newImg.setAttribute('alt', alt);

  //* append to iconDiv
  parent.append(newImg);
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

  ['cherry', 'money', 'seven'].forEach((item) => {
    if (game.spinOutcome[item] === 3) {
      game.wallet += game.betAmt * 10;
      game.result = `Three ${item}s. You earn $${game.betAmt*10}.`;
    } else if (game.spinOutcome[item] === 2) {
      game.wallet += game.betAmt * 2;
      game.result = `Two ${item}s. You earn $${game.betAmt * 2}.`;
    } 
  });

  ['crystal', 'kitten', 'bell'].forEach((item) => {
    if (game.spinOutcome[item] === 3) {
      game.wallet += game.betAmt * 20;
      game.result = `Three ${item}s. You earn $${game.betAmt*20}.`;
    } else if (game.spinOutcome[item] === 2) {
      game.wallet += game.betAmt * 2;
      game.result = `Two ${item}s. You earn $${game.betAmt * 2}.`;
    } 
  });

  ['bullets'].forEach((item) => {
    if (game.spinOutcome[item] === 3) {
      game.wallet += game.betAmt * 30;
      game.result = `Three ${item}. You earn $${game.betAmt*30}.`;
    } else if (game.spinOutcome[item] === 2) {
      game.wallet += game.betAmt * 2;
      game.result = `Two ${item}. You earn $${game.betAmt * 2}.`;
    } 
  });

  if (game.spinOutcome['grenade'] >= 2) {
    //* check if there is a kitten save && game difficulty is intermediate
    if (game.kittenSave > 0 && game.difficulty === 'intermediate') {
      //* you lose one kitten save 
      game.kittenSave--;
      game.result = 'Kitten saved you from grenade attack. You don\'t lose $50.';
    } else {
      game.wallet -= 50;
      game.result = 'Grenade attack! You lose $50.';
    }
      
  } 

  if (game.spinOutcome['kitten'] && game.spinOutcome['bullets']) {
    //* check if game diffculty is intermediate
    if (game.difficulty === 'intermediate') {
      //* add one kitten save to game
      game.kittenSave++;
      game.result = 'You got kitten and bullets. You earn one kitten save. Congrats!';
    }
    
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

