# Slot Machine Game

Do you enjoy mindlessly cranking a lever looking at the pretty bright pictures on the screen completely unaware that you're draining your coins in the middle of a noisy casino? Yes? Well, this game is for you! :grin: Welcome to Slot Machine Game! This is a fun, interactive, virtual slot machine game with it's own special twist.

<br>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Timeframe](#timeframe)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [How To Play](#how-to-play)
- [Design Process](#design-process)
- [Challenges](#challenges)
- [Key Learnings](#key-learnings)
- [Future Developments](#future-developments)
- [Summary](#summary)
- [References](#references)
- [Game Assets](#game-assets)

<br>

## Introduction

This is a classic single line slot machine game with a kitten and grenades theme. The game was designed on [Canva](https://www.canva.com/) and develsoped using HTML, CSS, and Javascript using VS Code while attending the Software Engineering Immersive Bootcamp at General Assembly.

I chose this game amongst a list of games - where some were relatively easier to develop - because I wanted to challenge myself. I was very much indeed challenged. But it was a good challenge where I enjoyed solving every obstacle encountered.

<img src="https://raw.githubusercontent.com/waffleswithmaplesyrup/slot-machine/main/assets/images/game-over.png" height="400">

This game has a little cat-related twist because what more is there to a slot machine game than to keep spending money hoping to get a complete set of the same symbol? 

In this slot machine game, players look forward to acquiring special symbols: kittens, bullets and grenades. If the player acquires a certain amount of grenades in a single spin, they will lose more money. The only way to prevent that from happening is if the player acquired a set of kittens and bullets in a single spin prior to the grenade attack! Isn't this exciting?

<br>

## Features

- **User-friendly interface:** The game features an intuitive and visually appealing user interface that simulates a slot machine.
- **Randomized Results:** The outcomes of the slot machine are determined by a random number generator, ensuring fairness and unpredictability.
- **Winning Combinations:** The game includes different winning combinations, each with its own payout.
- **Credit System:** Players start with a certain amount of credits and can win or lose credits based on the results of each spin.
- **Sound Effects:** Engaging sound effects that enhance the gaming experience.

<br>

## Timeframe

1 week to finish developing the game

## Technologies Used

- HTML
- CSS
- Javascript
- Github

<br>

## Deployment

This game is deployed on GitHub pages. You can play the game here: [slot-machine](https://waffleswithmaplesyrup.github.io/slot-machine/).

<br>

## How to Play



The game is simple. Just like a classic slot machine, all you need to do is make a bet, spin the reels and hope for the best :grin:

This game includes a start screen where the player gets to choose the game difficulty. There are three difficulty levels: **easy, intermediate and hard**. 

<img src="https://raw.githubusercontent.com/waffleswithmaplesyrup/slot-machine/main/assets/images/start-screen.png" height="400">

In **easy** mode, there are only four types of symbols inside each reel so it's highly likely for you to get more than one of the same symbol in one spin. Therefore, easier to get rewards.

In **intermediate**, players should expect to see all of the symbols available including the dreaded grenades. If a player's spin results in 2 or more **grenades**, the player will **lose $50** unless there is a **kitten save**. 

Players acquire a **kitten save** when a spin results in a **kitten** symbol and **bullets** symbol in one spin.

In **hard** mode, just like in intermediate, all symbols are available. But unlike intermediate, there is **no kitten save**. So players have to be more wary of grenades.

<img src="https://raw.githubusercontent.com/waffleswithmaplesyrup/slot-machine/main/assets/images/rules-screen.png" height="400"><img src="https://raw.githubusercontent.com/waffleswithmaplesyrup/slot-machine/main/assets/images/game-screen.png" height="400">

This game includes an interactive rules page, where players can view the rewards relating to each symbol by clicking on a symbol. Once player is ready, they can start the game where they are able to see the contents of their wallet as well as number of kitten saves acquired if playing on **intermediate**. The player is able to adjust their bet amount and start a spin where the amount that was used to bet gets depleted from the wallet. Depending on the spin result, player loses or earns more money in their wallet.

<br>

## Design Process

Before writing the code for the game, I used [Canva](https://www.canva.com/) to visualise the design I had in mind for the game. I already knew I wanted a start screen with interactive buttons, a navigation bar with sublinks, a screen to display the game rules as well as the screen where you play the game. With all of these visual components on hand, I was able to plan out the HTML and CSS codes to add structure and aesthetics to the game. Knowing that I wanted some components to interact with each other such as the navigation buttons, I was able to plan out the pseudo code for the Javascript component.

<img src="https://raw.githubusercontent.com/waffleswithmaplesyrup/slot-machine/main/assets/images/design.png">

<br>

## Challenges

Biggest challenge for me was writing legible code. I often think from point A to point Z to point D which rarely makes sense to everybody else. So because of my unordered thought processes, it shows in the code I write. This isn't good as Software Engineers work together with others to produce the final result. That is why it is important to add structure and make your code coherent for the other Software Engineers to understand what the code is doing.

<br>


## Key Learnings

In the bootcamp, we learn about MVC model which has been useful in my code writing as it provides some structure to my thought processes. I was able to implement it to the best of my abilities and I think with practice, it will come easier to me and my code will be more coherent.

<br>

## Future Developments

Even though this project is a deliverable to graduate from the bootcamp, I do have plans to improve on it further after submission. These are the improvements I would make:

- add an animation to show the reels spinning.
- add a multi row mode where player can earn rewards if the same icons fill diagonally or vertically.
- aesthetics of the game is customisable to each player's taste

<br>

## Summary

This was my first Software Engineering bootcamp project and I am very pleased with myself for being able to develop a game all by myself within a week. It was a great experience with lots of pitfalls and successes and I look forward to creating more projects with the skills I have acquired and developed.

<br>

## References

As I have never gambled in my life, I had to do researh on how slot machines in casinos and web browsers are played:
- [How to Play Single Line Slot Machines](https://www.bookmaker.eu/how-to-play/single-line-slot-machine)
- [How To Play Slots for Beginners](https://www.gaming.net/how-to-play-slots-for-beginners/)

<br>

## Game Assets

The game assets used in this project does not belong to me. All rights belong to the original artists and owners. Below are the links to the game assets used in this project:

- [Picsart](https://picsart.com/)
- [Canva](https://www.canva.com/)
- [Pixabay Sound Effects](https://pixabay.com/sound-effects/)