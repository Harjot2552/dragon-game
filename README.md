# iDragon - 🐉 JavaScript Game

Dodge obstacles while controlling a cute dino character. Jump, move, and survive as long as possible while the game gets harder over time. Built with HTML, CSS, and JavaScript, iDragon features smooth animations, background music, and dynamic difficul

## 📐 Table of Contents
- [How to Play 🎮](#how-to-play-)
- [Features ✨](#features-)
- [Code Explanation 🔧](#code-explanation-)
- [Setup Instructions 🛠️](#setup-instructions-)
- [Future Improvements 💡](#future-improvements-)

---

## How to Play 🎮
1. **Start the Game:** The background music will play after a short delay.
2. **Controls:**
   - Press **↑ (Up Arrow)** to jump.
   - Press **→ (Right Arrow)** to move forward.
   - Press **← (Left Arrow)** to move backward.
3. **Objective:** Dodge the obstacles and increase your score.
4. **Game Over:** If the dino collides with an obstacle, the game ends.

---

## Features ✨
- 🔊 **Background Music:** Enjoy a lively background tune during gameplay.
- ❌ **Game Over Audio:** A sound plays when you lose.
- 🎯 **Dynamic Scoring:** Earn points each time you successfully dodge obstacles.
- ⚒️ **Difficulty Increase:** The speed of obstacles increases as your score rises.

---

## Code Explanation 🔧
The game logic is built using **HTML**, **CSS**, and **JavaScript**.

### HTML Structure
- The game container includes:
  - `div.gameContainer`: Main game area.
  - `div.dino`: The player's character.
  - `div.obstacle`: An animated obstacle.
  - `div#scoreCont`: Displays the current score.

### CSS Styling
- Handles positioning of game elements, obstacle animation, and responsive layout.

### JavaScript Logic
1. **Event Handling:**
   ```javascript
   document.onkeydown = function (e) {
       if (e.keyCode == 38) { // Jump
           dino.classList.add('animateDino');
           setTimeout(() => dino.classList.remove('animateDino'), 700);
       }
   };
   ```
   This code listens for key presses to control the dino's movements.

2. **Collision Detection:**
   ```javascript
   if (offsetX < 73 && offsetY < 52) {
       gameOver.innerHTML = 'Game Over - Reload to Start Again';
       obstacle.classList.remove('obstacleAni');
   }
   ```
   Detects whether the dino has collided with the obstacle.

3. **Score Updates:**
   ```javascript
   function updateScore(score) {
       scoreCont.innerHTML = "Your score is " + score;
   }
   ```
   Updates and displays the player's score.

4. **Dynamic Speed Increase:**
   ```javascript
   setTimeout(() => {
       aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
       newDur = aniDur - 0.1;
       obstacle.style.animationDuration = newDur + 's';
   }, 500);
   ```
   Gradually increases the speed of obstacles.

---

## Setup Instructions 🛠️
1. Clone this repository:
   ```bash
   git clone https://github.com/Harjot2552/iDragon-Game.git
   ```
2. Open `index.html` in your preferred web browser.
3. Enjoy the game!

---

## Future Improvements 💡
- 🔧 Add mobile compatibility.
- 🌐 Implement leaderboard functionality.
- 🎮 Enhance animations for smoother gameplay.

---

Enjoy the challenge and aim for the highest score! 🎯🚀

