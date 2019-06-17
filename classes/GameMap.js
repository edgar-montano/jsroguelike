import Tile from "./Tile.js";
import Glyph from "./Glyph.js";
import { NULL_TILE } from "../assets/types.js";

class GameMap {
  constructor(tiles) {
    this._tiles = tiles;
    this._width = tiles.length;
    this._height = tiles[0].length;
  }

  getWidth = () => this._width;
  getHeight = () => this._height;

  getTile = (x, y) => {
    if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
      return NULL_TILE;
    } else {
      return this._tiles[x][y] || NULL_TILE;
    }
  };
}

export default GameMap;
