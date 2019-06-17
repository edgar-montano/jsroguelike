// Tile options
import Tile from "../classes/Tile.js";
import Glyph from "../classes/Glyph.js";
export const NULL_TILE = new Tile(new Glyph());
export const FLOOR_TILE = new Tile(new Glyph("."));
export const WALL_TILE = new Tile(new Glyph("#", "goldenrod"));

//Key Data
export const KEYDOWN = "keydown";
export const KEYUP = "keyup";
export const KEYPRESS = "keypress";

//Game options
export const HEIGHT = 24;
export const WIDTH = 80;
