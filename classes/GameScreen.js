import { Color, KEYS } from "../lib/index.js";
import Game from "./Game.js";
import { KEYDOWN, HEIGHT, WIDTH } from "../assets/types.js";

/* GameScreen handles all Screen management for the Game object */
class GameScreen extends Game {
  /*
   * Inherit _display and _currentScreen properties from Game.
   */
  constructor(options = { width: WIDTH, height: HEIGHT }) {
    super(options);
  }

  /*
   * When we switch screens we need to notify old screens of change.
   * @param screen - The screen you wish to change to
   */
  switchScreen = screen => {
    //before switching screen call exit to indicate a change
    if (this._currentScreen !== null) {
      this._currentScreen.exit();
    }
    //clear screen and change current screen to new
    this.getDisplay().clear();
    this._currentScreen = screen;
    if (!this._currentScreen !== null) {
      this._currentScreen.enter();
      this._currentScreen.render(this._display);
    }
  };

  /*
   * Start Screen will be a placeholder for our game's main menu.
   */
  startScreen = {
    enter: () => {
      console.log("Entered start screen");
    },
    exit: () => {
      console.log("Exited start screen");
    },
    render: display => {
      display.drawText(1, 1, "%c{yellow}JSRogue2!");
      display.drawText(1, 2, "Press [Enter] to start!");
    },
    handleInput: (inputType, inputData) => {
      if (inputType === KEYDOWN) {
        if (inputData.keyCode === KEYS.VK_RETURN) {
          this.switchScreen(this.playScreen);
        }
      }
    }
  };
  /*
  * Play screen currently takes either Enter or Escape keyboard inputs,
  and switches screen accordingly. 
  */
  playScreen = {
    enter: () => {
      console.log("Entered play screen");
    },
    exit: () => {
      console.log("Exited play screen");
    },
    render: display => {
      display.drawText(3, 5, "%c{red}%b{white}\t\t\tThe rules are simple");
      display.drawText(4, 6, "1. Press [Enter] to win\n 2. [Esc] to lose!");
    },
    handleInput: (inputType, inputData) => {
      if (inputType === KEYDOWN) {
        if (inputData.keyCode === KEYS.VK_RETURN) {
          this.switchScreen(this.winScreen);
        } else if (inputData.keyCode === KEYS.VK_ESCAPE) {
          this.switchScreen(this.loseScreen);
        }
      }
    }
  };
  /*
   * Win screen is our win condition screen, later we can implement highscore values.
   */
  winScreen = {
    enter: () => {
      console.log("Entered win screen");
    },
    exit: () => {
      console.log("Exited win screen");
    },
    render: display => {
      let r, g, b, background;
      for (let i = 0; i < 22; i++) {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        background = Color.toRGB([r, g, b]);
        display.drawText(2, i + 1, "%b{" + background + "}You win!");
      }
    },
    handleInput: (inputType, inputData) => {}
  };

  /*
   * Identical to win screen, however requires different conditions.
   */
  loseScreen = {
    enter: () => {
      console.log("Entered lose screen");
    },
    exit: () => {
      console.log("Exited lose screen");
    },
    render: display => {
      for (let i = 0; i < 22; i++)
        display.drawText(2, i + 1, "%b{red}You lose! :(");
    },
    handleInput: (inputType, inputData) => {}
  };
}

export default GameScreen;
