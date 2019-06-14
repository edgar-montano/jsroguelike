import GameScreen from "../classes/GameScreen.js";
import { HEIGHT, WIDTH } from "./types.js";
//  Options passed when we initialize our display object
let options = {
  width: WIDTH,
  height: HEIGHT
};
// Wait for window to load before rendering
window.onload = () => {
  //initialize a gamescreen and append it to the DOM.
  let game = new GameScreen(options);
  document.body.appendChild(game.getDisplay().getContainer());
  game.switchScreen(game.startScreen);
};
