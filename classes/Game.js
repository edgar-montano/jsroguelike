/*
 * Our main Game class, this is where GameScreen will extend from.
 */

import { Display } from "../lib/index.js";
import { KEYDOWN, KEYUP, KEYPRESS, HEIGHT, WIDTH } from "../assets/types.js";
class Game {
  /*
   * Create a game class.
   * @param options - an optional object with width and height values for display size.
   */
  constructor(options = { width: WIDTH, height: HEIGHT }) {
    this._display = new Display(options);
    this._currentScreen = null;

    //add an event listener to listen for keypresses.
    const bindEventToScreen = event => {
      window.addEventListener(event, e => {
        if (this._currentScreen !== null)
          this._currentScreen.handleInput(event, e);
      });
    };

    //this is what keys we desire to bind to the event listener
    bindEventToScreen(KEYDOWN);
    bindEventToScreen(KEYUP);
    bindEventToScreen(KEYPRESS);
  }
  /*
   * Helper function that simply returns the current display.
   */
  getDisplay = () => this._display;
}

// We need to export the Game class in order to extend it from GameScreen
export default Game;
