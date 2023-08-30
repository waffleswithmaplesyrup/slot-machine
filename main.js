//* ======================== START SCREEN ============================

//!----- constants -----*/
//* pictures in the reel
const pictures = ['cherry', 'money', 'seven', 'crystal', 'kitten', 'bell', 'bullets', 'grenade'];

//!----- state variables -----*/

//* number of reels (change between 3 to 5)
let numberOfReels = 3;

//* initial variables
const game = {
  difficulty: 'intermediate',

  wallet: 100,

  betAmount: 5,

  kittenSave: 0,

  spinOutcome: {},

  result: ''
};

//! ====================================================================================

//!----- cached elements  -----*/
//* save all screens in an array
const allScreens = document.querySelectorAll('section');

//* create new array that stores the id and contents of each screen into an object
const screens = Object.keys(allScreens).map((index) => {
  //* create an empty object
  const obj = {};
  //* add id of each screen into obj
  obj.id = allScreens[index].getAttribute('id');
  //* add content of each screen into obj
  obj.contents = allScreens[index];
  return obj;
});


//* save all h2 buttons on start screen into an array
const buttonsOnStartScreen = document.querySelectorAll('#start-screen h2');

//* save difficulty setting drop down menu
const difficultySetting = document.querySelector('#difficulty');

//* save difficulty info paragraphs as an array
const difficultyInfo = document.querySelectorAll('#difficulty-info p');

//!----- event listeners -----*/

//* cycle through buttons array
buttonsOnStartScreen.forEach((button) => {

  //* listen to button being clicked
  button.addEventListener('click', (event) => renderScreens(event.target));

});

//* listen to difficulty setting being changed
difficultySetting.addEventListener('change', (event) => changeDifficulty(event.target.value));

//!----- render functions -----*/

function renderScreens(button) {

  //* if button classList contains 'start-game'
  if (button.classList.contains('start-game')) {
    //* go to game screen
    changeScreenTo('game-screen');

    //* render game screen
    renderGameScreen();

    //* if button classList contains 'game-rules'
  } else if (button.classList.contains('game-rules')) {  
    //* go to rules screen
    changeScreenTo('rules-screen');

    //* render rules screen
    renderRulesScreen();

    //* if button classList contains 'start-screen'
  } else if (button.classList.contains('start-screen')) {
    //* go to rules screen
    changeScreenTo('start-screen');

    //* reset the game
    renderReset();
  }

}

function renderReset() {
  game.wallet = 100;
  game.kittenSave = 0;
  game.spinOutcome = {};
  game.result = '';
}

//!----- other functions -----*/ 

function changeScreenTo(main) {
  //* cycle through screens array
  screens.forEach((screen) => {
    //* check if the screen id matches the button selected
      if (screen.id === main) {
        //* unhide selected screen
        screen.contents.hidden = false;
        //* unhide navbar
        screens[1].contents.hidden = false;
        //* set sublinks to hidden
        sublinks.hidden = true;
      } else {
        //* hide the rest
        screen.contents.hidden = true;
      }
      //* only for start-screen
      if (screen.id === 'start-screen') {
        //* hide navbar
        screens[1].contents.hidden = true;
      }
  });
  
}

function changeDifficulty(choice) {
  //* change value of game difficulty to what has been selected
  game.difficulty = choice;

  //* cycle through difficultyInfo
  difficultyInfo.forEach((info) => {
    //* unhide paragraph where its class list contains the selected game difficulty
    if (info.classList.contains(game.difficulty)) {
      info.hidden = false;
    } else {  //* hide the rest
      info.hidden = true;
    }
  });

  //* only for intermediate level
  if (game.difficulty === 'intermediate') {
    //* unhide kitten save container that is on game screen
    kittenSave.hidden = false;

    //* for every other level
  } else {
    //* hide kitten save
    kittenSave.hidden = true;
  }

}

//* ======================== NAV BAR ============================

//!----- cached elements  -----*/
//* save logo as a clickable button
const logo = document.querySelector('#logo');

//* save hamburger as a clickable button
const hamburger = document.querySelector('#hamburger');

//* save sublinks to unhide and hide when hamburger is clicked
const sublinks = document.querySelector('#sublinks');

//* save sublink buttons 
const sublinkButtons = document.querySelectorAll('#sublinks h4');

//!----- event listeners -----*/
//* listen to logo being clicked -> redirect to start-screen
logo.addEventListener('click', (event) => renderScreens(event.target));

//* listen to hamburger being clicked -> unhide/hide sublinks
hamburger.addEventListener('click', () => renderSublinks());

//* cycle through sublink buttons
sublinkButtons.forEach((button) => {
  //* listen to button being clicked -> redirect to their respective screens
  button.addEventListener('click', (event) => renderScreens(event.target));
});

//!----- render functions -----*/
function renderSublinks() {
  //* if sublinks is hidden
  if (sublinks.hidden === true) {
    //* unhide it
    sublinks.hidden = false;
  } else {
    sublinks.hidden = true;
  }
}

//* ======================== RULES SCREEN ============================

//!----- cached elements  -----*/
//* save the container to store all icons
const imageContainer = document.querySelector('#rules-screen .container');
//* save the empty paragraph to store special rules
const newParagraph = document.querySelector('#new-para');

//!----- render functions -----*/
function renderImage(source, location) {
  //* create new img
  const newImg = document.createElement('img');

  //* give newImg an alt and src
  newImg.setAttribute('alt', source);
  newImg.setAttribute('src', `./assets/images/${source}.png`);

  //* append into image container
  // imageContainer.append(newImg);

  //* append into image container
  location.append(newImg);
}

function renderRulesImages() {
  //* cycle through pictures array -> render the pictures into the screen
  pictures.forEach((picture) => renderImage(picture, imageContainer));
}

function renderRulesScreen() {

  //* empty imagesContainer
  imageContainer.innerHTML = '';
  renderRulesImages();

  //* save images in rules screen
  const images = imageContainer.childNodes;

  //* empty newParagraph
  newParagraph.innerHTML = '';

  //!----- event listeners -----*/

  //* cycle through images array
  images.forEach((image) => {

    //* listen to image being clicked
    image.addEventListener('click', (event) => renderRulesParagraph(event.target.alt));

  });
}

function renderRulesParagraph(image) {
  const maxNumberOfReels = numberOfReels;
  const winningNumberOfReels = Math.ceil(numberOfReels/2);

  //* display specific text for each icon
  switch (image) {
    case 'cherry':
    case 'money':
    case 'seven':
      newParagraph.innerHTML = `outcome: ${maxNumberOfReels} ${image} icons<br/>result: bet amount x ${10}<br/>outcome: at least any ${winningNumberOfReels} same icons<br/>result: bet amount x 2`;
      break;
    case 'crystal':
    case 'bell':
      newParagraph.innerHTML = `outcome: ${maxNumberOfReels} ${image} icons<br/>result: bet amount x ${20}<br/>outcome: at least any ${winningNumberOfReels} same icons<br/>result: bet amount x 2`;
      break;
    case 'bullets':
      newParagraph.innerHTML = `outcome: ${maxNumberOfReels} ${image} icons<br/>result: bet amount x ${30}<br/>outcome: at least any ${winningNumberOfReels} same icons<br/>result: bet amount x 2`;
      break;
    case 'grenade':
      newParagraph.innerHTML = `outcome: at least ${winningNumberOfReels} ${image} icons<br/>result: wallet - $50 (unless kitten save)`;
      break;
    case 'kitten':
      newParagraph.innerHTML = `outcome: ${maxNumberOfReels} ${image} icons<br/>result: bet amount x ${20}<br/>kitten + bullets: save against grenade attack.<br/>outcome: at least any ${winningNumberOfReels} same icons<br/>result: bet amount x 2`;
      break;
    default:
      console.log(image);
  }
}

//* ======================== GAME SCREEN ============================

//!----- cached elements  -----*/
//* save the location where icons will render
const iconsLocation = document.querySelector('#icons');
//* save spin button
const spin = document.querySelector('#spin');
//* save container to store spin result
const spinResult = document.querySelector('#spin-result');
//* save wallet container
const wallet = document.querySelector('#wallet span');
//* save kitten save container
const kittenSave = document.querySelector('#kitten-save');
//* kitten save value
const kittenSaveValue = document.querySelector('#kitten-save span');
//* save bet selector
const betSelector = document.querySelector('#bet');

//!----- event listeners -----*/

//* listen to bet selector being changed -> change bet amount
betSelector.addEventListener('change', (event) => game.betAmount = event.target.value);

//* listen to spin button being clicked
spin.addEventListener('click', renderSpin);

//!----- render functions -----*/

function renderGameScreen() {

  //* render the icons when game screen is active
  renderStartingIcons();

  //* render wallet
  renderWallet();

  //* render kitten save value (only on intermediate level)
  renderKittenSaveValue();

  //* render empty result
  renderResult();
}

//* render starting icons
function renderStartingIcons() {
  //* empty icons container
  iconsLocation.innerHTML = '';

  //* cycle through numberOfReels
  for (let i=0; i<numberOfReels; i++) {
    //* render starting icons which is the kitten icon
    renderImage(pictures[4], iconsLocation);
  }
}

function renderIcons() {
  //* empty the container first
  iconsLocation.innerHTML = '';

  //* generate image numberOfReels amount of times
  for (let i=0; i<numberOfReels; i++) {
    renderImage(generateRandom(), iconsLocation);
  }
}

function renderSpin() {
  
  //* only when wallet amount is more than or equal to bet amount
  if (game.wallet >= game.betAmount) {
    //* empty result
    game.result = '';

    //* generate the icons
    renderIcons();

    //* remove bet amount from wallet
    game.wallet -= game.betAmount;

    //* save spin outcome inside game.spinOutcome
    game.spinOutcome = spinOutcome();

    //* check result
    checkResult();

    //* render wallet
    renderWallet();

    //* if wallet has a negative value
  } else if (game.wallet < 0){
    //* game over
    game.result = "You owe the casino money.<br/>You'll have to work for us to pay back the debt.<br/>Game over.";
    renderResult();

    //* if wallet has less than the lowest bet amount
  } else if (game.wallet < 5) {
    //* game over
    game.result = "You don't have enough money.<br/>Game over.";
    renderResult();

    //* if bet amount chosen is larger than wallet amount
  } else {
    //* prompt player to pick a lower bet amount
    game.result = "You don't have enough money.<br/>Bet a lower amount.";
    renderResult();
  }
}

function renderWallet() {
  wallet.innerHTML = game.wallet;
}

function renderKittenSaveValue() {
  kittenSaveValue.innerHTML = game.kittenSave;
}

function renderResult() {
  //* empty spin result
  spinResult.innerHTML = '';

  //* create new element
  const newElement = document.createElement('p');

  //* set innerHTML to game rsult
  newElement.innerHTML = game.result;

  //* append into spin result
  spinResult.append(newElement);
}


//!----- other functions -----*/ 
//* function that picks a random image from pictures array
function generateRandom() {
  let random = 0;
  if (game.difficulty === 'easy') {
    random = Math.floor(Math.random() * pictures.slice(0, 4).length);
  } else {  //* for the rest of the difficulty settings
    random = Math.floor(Math.random() * pictures.length);
  }
  return pictures[random];
}

//* save spin outcome inside game.spinOutcome
function spinOutcome() {

  //* save icon elements
  const icons = iconsLocation.childNodes;
  //* store icons generated inside obj
  const obj = {};
  icons.forEach((icon) => {
    //* check if icon already exists inside obj
    if (obj[icon.alt]) {
      //* add one to the value
      obj[icon.alt]++;
    } else {
      obj[icon.alt] = 1;
    }
  });

  //* save spin outcome inside game.spinOutcome
  return obj;
}

function checkResult() {

  //* edit game result if you get 2 or more of the same icon
  checkWinningIcons();

  //* edit game result if you get grenade attack
  checkGrenadeAttack();
  
  //* edit kitten save if spin outcome results in kitten and bullets
  checkKittenSave();
  
  //* render result
  renderResult();
}

function checkWinningIcons() {
  const maxNumberOfReels = numberOfReels;
  const winningNumberOfReels = Math.ceil(numberOfReels/2);

  ['cherry', 'money', 'seven'].forEach((item) => {
    //* if outcome has maximum number of the same item
    if (game.spinOutcome[item] === maxNumberOfReels) {
      game.wallet += game.betAmount * 10;
      game.result = `${maxNumberOfReels} ${item}s. You earn $${game.betAmount*10}.`;

      //* if outcome has 2 same items (for numberOfReels=3) or 3 same items (for numberOfReels=5)
    } else if (game.spinOutcome[item] >= winningNumberOfReels) {
      game.wallet += game.betAmount * 2;
      game.result = `${winningNumberOfReels} ${item}s. You earn $${game.betAmount * 2}.`;
    } 
  });

  ['crystal', 'kitten', 'bell'].forEach((item) => {
    if (game.spinOutcome[item] === maxNumberOfReels) {
      game.wallet += game.betAmount * 20;
      game.result = `${maxNumberOfReels} ${item}s. You earn $${game.betAmount*20}.`;

    } else if (game.spinOutcome[item] >= winningNumberOfReels) {
      game.wallet += game.betAmount * 2;
      game.result = `${winningNumberOfReels} ${item}s. You earn $${game.betAmount * 2}.`;
    } 
  });

  ['bullets'].forEach((item) => {
    if (game.spinOutcome[item] === maxNumberOfReels) {
      game.wallet += game.betAmount * 30;
      game.result = `${maxNumberOfReels} ${item}. You earn $${game.betAmount*30}.`;

    } else if (game.spinOutcome[item] >= winningNumberOfReels) {
      game.wallet += game.betAmount * 2;
      game.result = `${winningNumberOfReels} ${item}. You earn $${game.betAmount * 2}.`;
    } 
  });
}

function checkGrenadeAttack() {
  const grenadeAttackTrigger = Math.ceil(numberOfReels/2);

  if (game.spinOutcome['grenade'] >= grenadeAttackTrigger) {
    //* check if there is a kitten save && game difficulty is intermediate
    if (game.kittenSave > 0 && game.difficulty === 'intermediate') {
      game.result = 'Kitten saved you from grenade attack. You don\'t lose $50.';

      //* use up one kitten save 
      game.kittenSave--;
      //* render kitten save value
      renderKittenSaveValue();
    } else {
      game.wallet -= 50;
      game.result = 'Grenade attack! You lose $50.';
    } 
  }
}

function checkKittenSave() {
  //* when spin outcome has both kitten and bullets
  if (game.spinOutcome['kitten'] && game.spinOutcome['bullets']) {
    //* check if game diffculty is intermediate
    if (game.difficulty === 'intermediate') {
      //* add one kitten save to game
      game.kittenSave++;
      game.result = 'You got kitten and bullets. You earn one kitten save. Congrats!';

      //* render kitten save value
      renderKittenSaveValue();
    }
  }
}